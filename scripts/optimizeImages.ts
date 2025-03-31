import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

interface ImageSize {
  width: number;
  height?: number; // Optional to maintain aspect ratio
  suffix: string;
}

const IMAGE_SIZES: ImageSize[] = [
  { width: 640, suffix: "sm" }, // Small screens
  { width: 1024, suffix: "md" }, // Medium screens
  { width: 1920, suffix: "lg" }, // Large screens/Full HD
  { width: 2560, suffix: "xl" }, // 2K/QHD
];

async function optimizeImage(inputPath: string) {
  const inputFileName = path.basename(inputPath, path.extname(inputPath));
  const outputDir = path.join(process.cwd(), "public", "images", "optimized");

  // Create output directory if it doesn't exist
  await fs.mkdir(outputDir, { recursive: true });

  // Get image metadata
  const metadata = await sharp(inputPath).metadata();
  const originalWidth = metadata.width || 0;

  // Process image for each size configuration
  for (const size of IMAGE_SIZES) {
    // Skip if target size is larger than original
    if (size.width > originalWidth) continue;

    const resizedImage = sharp(inputPath).resize(size.width, size.height, {
      fit: "inside", // Maintain aspect ratio
      withoutEnlargement: true, // Don't upscale
    });

    // Save as AVIF with different quality settings based on size
    await resizedImage
      .avif({
        quality: size.width <= 1024 ? 80 : 65, // Lower quality for larger images
        effort: 9, // Maximum compression effort
      })
      .toFile(path.join(outputDir, `${inputFileName}-${size.suffix}.avif`));
  }

  // Create a thumbnail version
  await sharp(inputPath)
    .resize(200, 200, {
      fit: "cover",
      position: "centre",
    })
    .avif({
      quality: 60,
      effort: 9,
    })
    .toFile(path.join(outputDir, `${inputFileName}-thumb.avif`));

  console.log(`Image optimization complete for: ${inputFileName}`);
  console.log(`Output directory: ${outputDir}`);
}

async function processDirectory(inputDir: string) {
  try {
    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    if (imageFiles.length === 0) {
      console.log("No image files found in the directory");
      return;
    }

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      await optimizeImage(inputPath);
    }

    console.log("All images have been processed!");
  } catch (error) {
    console.error("Error processing directory:", error);
  }
}

// Check if input path is provided
const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Please provide an input file or directory path");
  process.exit(1);
}

// Check if the input is a directory or a single file
fs.stat(inputPath)
  .then((stats) => {
    if (stats.isDirectory()) {
      return processDirectory(inputPath);
    } else {
      return optimizeImage(inputPath);
    }
  })
  .catch(console.error);
