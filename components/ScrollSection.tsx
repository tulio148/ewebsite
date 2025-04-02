"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import LineWithAnimation from "./LineWithAnimation";
import ScrollProgressBar from "./ScrollProgressBar";

interface ScrollSectionProps {
  lines: ReactNode[];
  className?: string;
  heading: ReactNode;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  lines,
  className = "",
  heading,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  return (
    <div
      ref={ref}
      className={`p-8 relative h-[150vh] flex flex-col items-center ${className} mb-96`}
    >
      <motion.div className="flex flex-col justify-center sticky h-screen top-0 py-20 sm:py-32 max-w-8xl">
        <AnimatedHeading scrollYProgress={scrollYProgress} heading={heading} />
        <ScrollProgressBar
          scrollYProgress={progress}
          className="origin-center mt-[-8px]"
        />
        <div className="mt-6">
          {lines.map((line, index) => (
            <LineWithAnimation
              key={index}
              line={line}
              scrollYProgress={progress}
              index={index}
              totalLines={lines.length * 2}
              className="text-slate-600"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollSection;
