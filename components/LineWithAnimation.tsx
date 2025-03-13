"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface LineWithAnimationProps {
  line: ReactNode;
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
  const y = useTransform(scrollYProgress, [start, end], [10, 0]);
  const initialStyle = {
    opacity: 0.01,
  };

  if (isMobile) {
    return (
      <p
        className={`text-xl 
                    text-justify text-secondary/90 font-light 
                    mb-3 sm:mb-5 tracking-wide ${className}`}
      >
        {line}
      </p>
    );
  }

  return (
    <motion.p
      initial={initialStyle}
      className={`text-xl md:text-2xl  
                  text-justify text-secondary/90 font-extralight 
                  mb-3 sm:mb-4 tracking-wider ${className}`}
      style={{ opacity, y }}
    >
      {line}
    </motion.p>
  );
};

export default LineWithAnimation;
