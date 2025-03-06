"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import ParagraphWithAnimation from "./ParagraphWithAnimation";
import ScrollProgressBar from "./ScrollProgressBar";

interface ScrollSectionProps {
  paragraphs: string[];
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  paragraphs,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={ref}
      className={`p-8 relative bg-accent h-[400vh] flex flex-col items-center ${className}`}
    >
      <motion.div className="flex flex-col sticky top-0 py-20 sm:py-44">
        <AnimatedHeading scrollYProgress={scrollYProgress} className="" />
        <ScrollProgressBar scrollYProgress={scrollYProgress} />
        {paragraphs.map((text, index) => (
          <ParagraphWithAnimation
            key={index}
            text={text}
            scrollYProgress={scrollYProgress}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollSection;
