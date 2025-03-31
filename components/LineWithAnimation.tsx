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
  delay = 0,
  className = "",
  isMobile,
}) => {
  const start = 0.1 * index + delay;
  const end = 0.1 * (index + 1) + delay;

  // const scale = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const y = useTransform(scrollYProgress, [start, end], [10, 0]);
  const x = useTransform(scrollYProgress, [start, end], [10, 0]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.9, 1]);

  if (isMobile) {
    return (
      <p
        className={`text-xl 
                    text-justify text-secondary/90 font-light 
                    mb-2 tracking-wide ${className}`}
      >
        {line}
      </p>
    );
  }

  return (
    <motion.p
      // initial={initialStyle}
      className={`text-xl lg:text-2xl   
                  text-justify text-secondary/90 font-light 
                  mb-2 tracking-wider ${className}`}
      style={{ y, opacity, x }}
    >
      {line}
    </motion.p>
  );
};

export default LineWithAnimation;
