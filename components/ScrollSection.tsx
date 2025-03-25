"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll } from "framer-motion";
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
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={ref}
      className={`p-8 relative h-[200vh] flex flex-col items-center ${className} mb-96`}
    >
      <motion.div className="flex flex-col justify-center sticky h-screen top-0 py-20 sm:py-32 max-w-8xl">
        <AnimatedHeading scrollYProgress={scrollYProgress} heading={heading} />
        <ScrollProgressBar
          scrollYProgress={scrollYProgress}
          className="origin-center mt-[-8px]"
        />
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
