import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"], // Required if using Next.js Image component
  },
};

export default nextConfig;
