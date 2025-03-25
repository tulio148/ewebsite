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
      className={` w-full h-[2px] bg-primary/50 sticky shadow-lg   
        ${hasOriginClass ? "" : "origin-left"} ${className}`}
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressBar;
