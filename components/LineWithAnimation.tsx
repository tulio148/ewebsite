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
  totalLines?: number;
}

const LineWithAnimation: React.FC<LineWithAnimationProps> = ({
  line,
  scrollYProgress,
  index,
  delay = 0,
  className = "",
  isMobile,
  totalLines = 1,
}) => {
  const start = index / totalLines;
  const end = (index + 1) / totalLines;

  // Motion transformations
  const y = useTransform(scrollYProgress, [start, end], [30, 0]);
  const x = useTransform(scrollYProgress, [start, end], [-15, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
  const rotate = useTransform(scrollYProgress, [start, end], [-3, 0]);
  const filter = useTransform(
    scrollYProgress,
    [start, end],
    ["blur(8px)", "blur(0px)"]
  );

  if (isMobile) {
    return (
      <motion.p
        initial={{ filter: "blur(15px)", y: 10, opacity: 1 }}
        animate={{ filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay }}
        className={`text-xl text-justify text-secondary/90 font-light mb-2 tracking-wide ${className}`}
      >
        {line}
      </motion.p>
    );
  }

  return (
    <motion.p
      className={`text-xl text-justify  font-light mb-2 tracking-wider ${className}`}
      style={{ y, x, scale, rotate, filter }}
      // transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
    >
      {line}
    </motion.p>
  );
};

export default LineWithAnimation;
