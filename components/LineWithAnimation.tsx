"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

interface LineWithAnimationProps {
  line: string;
  scrollYProgress: MotionValue<number>;
  index: number;
  delay?: number;
  className?: string;
  isMobile?: boolean;
}

const LineWithAnimation: React.FC<LineWithAnimationProps> = ({
  line,
  scrollYProgress,
  index,
  delay = 0.1,
  className = "",
  isMobile,
}) => {
  const start = 0.1 * index + delay;
  const end = 0.1 * (index + 1) + delay;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scale = useTransform(scrollYProgress, [start, end], [0.6, 1]);
  console.log(opacity);
  return (
    <>
      {isMobile ? (
        <p
          className={`text-2xl md:text-4xl lg:text-4xl text-justify text-secondary/90 font-extralight mb-3 sm:mb-8 tracking-wider ${className}`}
          dangerouslySetInnerHTML={{ __html: line }}
        />
      ) : (
        <motion.p
          className={`text-2xl md:text-4xl lg:text-4xl text-justify text-secondary/90 font-extralight mb-3 sm:mb-8 tracking-wider ${className}`}
          style={{ opacity, scale }}
          dangerouslySetInnerHTML={{ __html: line }}
        />
      )}
    </>
  );
};

export default LineWithAnimation;
