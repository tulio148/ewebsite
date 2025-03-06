"use client";
import { motion, MotionValue } from "framer-motion";
import React from "react";

interface ScrollProgressBarProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  scrollYProgress,
  className = "",
}) => (
  <motion.div
    className={`top-0 left-0 w-full h-2 bg-gradient-to-b from-primary mt-4 mb-8 sm:mb-12  origin-left sticky ${className}`}
    style={{ scaleX: scrollYProgress }}
  />
);

export default ScrollProgressBar;
