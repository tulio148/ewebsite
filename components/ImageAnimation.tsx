"use client";

import type React from "react";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextInfusedImageProps {
  image: string;
  className?: string;
}

const imageAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const ImageAnimation: React.FC<TextInfusedImageProps> = ({
  image,
  className,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div
      className={cn("flex flex-col items-center relative w-full", className)}
      ref={ref}
    >
      {/* Image with animation */}
      <motion.div
        className="overflow-hidden rounded-lg shadow-lg w-full"
        initial="hidden"
        animate={controls}
        variants={imageAnimation}
      >
        <div className="w-full h-screen sm:h-auto flex items-center justify-center overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={image}
            width={1200}
            height={800}
            className="w-full object-cover h-[500px] sm:h-full transition-transform duration-300 ease-in-out"
            // style={{ maxHeight: "100vh" }}
            priority
          />
        </div>
      </motion.div>

      {/* Text with separate animation */}
    </div>
  );
};
