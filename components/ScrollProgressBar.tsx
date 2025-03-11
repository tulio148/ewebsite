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
}) => {
  const hasOriginClass = /\borigin-(left|center|right|top|bottom)\b/.test(
    className
  );

  return (
    <motion.div
      className={`top-0 left-0 w-full h-2 bg-gradient-to-t from-primary mt-2 mb-8 sm:mb-12 sticky shadow-md 
        ${hasOriginClass ? "" : "origin-left"} ${className}`}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
