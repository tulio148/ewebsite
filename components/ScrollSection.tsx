"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import LineWithAnimation from "./LineWithAnimation";
import ScrollProgressBar from "./ScrollProgressBar";

interface ScrollSectionProps {
  lines: React.ReactNode[];
  className?: string;
  heading: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  lines,
  className = "",
  heading,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={ref}
      className={`p-8 relative h-[300vh] flex flex-col items-center ${className} mb-96`}
    >
      <motion.div className="flex flex-col sticky top-0 py-20 sm:py-32 max-w-7xl">
        <AnimatedHeading scrollYProgress={scrollYProgress} heading={heading} />
        <ScrollProgressBar scrollYProgress={scrollYProgress} />
        {lines.map((line, index) => (
          <LineWithAnimation
            key={index}
            line={line}
            scrollYProgress={scrollYProgress}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollSection;
