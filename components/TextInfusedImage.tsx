"use client";

import type React from "react";

import { useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, type Variants, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextInfusedImageProps {
  image: string;
  text: string;
  textPosition: "top" | "bottom" | "left" | "right" | "center";
  className?: string;
  animationVariant?: "fade" | "slide" | "zoom" | "rotate";
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const imageVariants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  },
  slide: {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  },
  zoom: {
    hidden: { scale: 1.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  },
  rotate: {
    hidden: { rotate: -180, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  },
};

export const TextInfusedImage: React.FC<TextInfusedImageProps> = ({
  image,
  text,
  textPosition,
  className,
  animationVariant = "fade",
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  if (isInView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden rounded-lg shadow-lg", className)}
      initial="hidden"
      animate={controls}
      variants={imageVariants[animationVariant]}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={text}
        width={800}
        height={600}
        className="object-cover w-full h-full transition-transform duration-300 ease-in-out"
      />
      <motion.div
        className={cn(
          "absolute inset-0 flex items-center justify-center p-4",
          textPosition === "top" && "items-start",
          textPosition === "bottom" && "items-end",
          textPosition === "left" && "justify-start",
          textPosition === "right" && "justify-end"
        )}
        variants={textVariants}
      >
        <p
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-extrabold tracking-wider text-primary bg-clip-text  "
          style={{
            WebkitTextStroke: "1px white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          {text}
        </p>
      </motion.div>
    </motion.div>
  );
};
