"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ResponsiveImage } from "@/lib/images";

interface ImageAnimationProps {
  image: ResponsiveImage;
  className?: string;
}

export function ImageAnimation({ image, className }: ImageAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full h-[300px] md:h-[400px] lg:h-[500px] ${className}`}
    >
      <Image
        src={image.xl || image.lg}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="100vw"
        blurDataURL={image.thumb}
        placeholder="blur"
      />
    </motion.div>
  );
}
