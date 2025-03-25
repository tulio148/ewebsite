"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";

const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.3,
    },
  },
};

// Four diagonal reveal variants based on the direction
const diagonalRevealVariants = {
  // Top-left to bottom-right
  "top-left": {
    hidden: {
      width: "150%",
      height: "100%",
      x: "-25%",
      skewX: "45deg",
      top: 0,
      left: 0,
    },
    visible: {
      x: "150%",
      transition: {
        duration: 1.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  },
  // Top-right to bottom-left
  "top-right": {
    hidden: {
      width: "150%",
      height: "100%",
      x: "25%",
      skewX: "-45deg",
      top: 0,
      right: 0,
    },
    visible: {
      x: "-150%",
      transition: {
        duration: 1.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  },
  // Bottom-left to top-right
  "bottom-left": {
    hidden: {
      width: "150%",
      height: "100%",
      x: "-25%",
      skewX: "-45deg",
      bottom: 0,
      left: 0,
    },
    visible: {
      x: "150%",
      transition: {
        duration: 1.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  },
  // Bottom-right to top-left
  "bottom-right": {
    hidden: {
      width: "150%",
      height: "100%",
      x: "25%",
      skewX: "45deg",
      bottom: 0,
      right: 0,
    },
    visible: {
      x: "-150%",
      transition: {
        duration: 1.4,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  },
};

type RevealDirection =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

const RevealImage = ({
  featuredMobileBanner,
  bigBanner,
  direction = "top-left",
}: {
  featuredMobileBanner: string;
  bigBanner: string;
  direction?: RevealDirection;
}) => {
  const isMobile = useIsMobile();

  // Get the appropriate variant based on the direction prop
  const selectedVariant = diagonalRevealVariants[direction];

  // Determine class based on the direction
  const getPositionClass = () => {
    if (direction.includes("top")) return "top-0";
    return "bottom-0";
  };

  const getOriginClass = () => {
    if (direction === "top-left") return "origin-top-left";
    if (direction === "top-right") return "origin-top-right";
    if (direction === "bottom-left") return "origin-bottom-left";
    return "origin-bottom-right";
  };

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <motion.div
        className={`absolute ${getPositionClass()} ${
          direction.includes("left") ? "left-0" : "right-0"
        } h-full bg-background z-20 ${getOriginClass()}`}
        variants={selectedVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      />
      <motion.div
        className={`relative ${
          isMobile ? "h-[350px]" : "w-full max-h-[90vh]"
        } overflow-hidden`}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.1, once: true }}
      >
        {isMobile ? (
          <Image
            src={featuredMobileBanner}
            alt="featured image"
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={bigBanner}
            alt="featured image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover "
          />
        )}
      </motion.div>
    </div>
  );
};

export default RevealImage;
