import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

const LOGO_SIZES = [
  16, // favicon
  32, // favicon
  48, // favicon
  64, // small logo
  128, // medium logo
  256, // large logo
  512, // extra large logo
];

async function optimizeLogo(inputPath: string) {
  const inputFileName = path.basename(inputPath, path.extname(inputPath));
  const outputDir = path.join(process.cwd(), "public", "logos");

  // Create output directory if it doesn't exist
  await fs.mkdir(outputDir, { recursive: true });

  // Process for each size
  for (const size of LOGO_SIZES) {
    const resizedBuffer = await sharp(inputPath)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .toBuffer();

    // Save as AVIF
    await sharp(resizedBuffer)
      .avif({ quality: 80 })
      .toFile(path.join(outputDir, `${inputFileName}-${size}.avif`));

    // For favicon sizes, also save as ICO
    if (size <= 48) {
      await sharp(resizedBuffer)
        .png()
        .toFile(path.join(outputDir, `${inputFileName}-${size}.png`));
    }
  }

  // Create favicon.ico with multiple sizes
  const faviconSizes = LOGO_SIZES.filter((size) => size <= 48);
  const pngBuffers = await Promise.all(
    faviconSizes.map((size) =>
      sharp(inputPath)
        .resize(size, size, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer()
    )
  );

  // Use the first PNG as favicon
  await fs.writeFile(
    path.join(outputDir, `${inputFileName}-favicon.ico`),
    pngBuffers[0]
  );

  console.log(`Logo optimization complete for: ${inputFileName}`);
  console.log(`Output directory: ${outputDir}`);
}

async function processDirectory(inputDir: string) {
  try {
    const files = await fs.readdir(inputDir);
    const logoFiles = files.filter((file) =>
      /\.(png|svg|jpg|jpeg|webp)$/i.test(file)
    );

    if (logoFiles.length === 0) {
      console.log("No logo files found in the directory");
      return;
    }

    for (const file of logoFiles) {
      const inputPath = path.join(inputDir, file);
      await optimizeLogo(inputPath);
    }

    console.log("All logos have been processed!");
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
      return optimizeLogo(inputPath);
    }
  })
  .catch(console.error);
