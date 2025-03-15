"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import LineWithAnimation from "./LineWithAnimation";

interface SectionProps {
  id: string;
  title: string;
  content: string[];
  accentColor?: string;
  className?: string;
}

const ScrollProgressSection: React.FC<SectionProps> = ({
  id,
  title,
  content,
  accentColor = "hsl(var(--accent))",
  className = "",
}) => {
  const sectionRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const yRange = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 300, damping: 40 });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  useEffect(() => {
    return pathLength.on("change", (v) => {
      setIsComplete(v >= 0.99);
    });
  }, [pathLength]);

  return (
    <div id={id} ref={sectionRef} className={`relative w-full ${className}`}>
      <div className="sticky top-0 left-0 w-full flex flex-col min-h-screen pt-16 sm:pt-24">
        <div className="flex items-center justify-center absolute left-0 top-16 h-screen w-16 sm:w-24 p-4 sm:p-6 z-10">
          <svg className="w-full h-3/4" viewBox="0 0 60 800" role="img">
            <motion.circle
              cx="30"
              cy="40"
              r="20"
              fill={accentColor}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.5 }}
            />
            <motion.path
              fill="none"
              strokeWidth="16"
              stroke={accentColor}
              d="M30,55 L30,650"
              strokeDasharray="0 1"
              style={{ pathLength }}
            />
            <motion.circle
              cx="30"
              cy="660"
              r="20"
              fill={accentColor}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: isComplete ? 1 : 0.3 }}
            />
          </svg>
        </div>

        <motion.div
          className="flex-1 p-6 sm:p-10 sm:pl-20 md:p-12 pl-24 md:pl-32 lg:pl-44 xl:pl-48 flex flex-col justify-center "
          style={{ opacity }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 relative">
            {title}
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-accent rounded-full hidden sm:block"></span>
          </h2>
          <div className="w-full relative">
            {content.map((line, idx) => (
              <LineWithAnimation
                key={idx}
                line={line}
                scrollYProgress={scrollYProgress}
                index={idx}
                className="text-white"
                delay={idx * 0.3}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface ScrollProgressProps {
  sections: SectionProps[];
  heading: string;
  className?: string;
}

export const AnimatedScrollProgress: React.FC<ScrollProgressProps> = ({
  sections,
  heading,
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col justify-center items-center bg-primary ${className}`}
    >
      <h2 className="text-5xl sm:text-6xl md:text-7xl tracking-wider font-bold my-8">
        {heading}
      </h2>
      {sections.map((section) => (
        <ScrollProgressSection
          key={section.id}
          {...section}
          className="h-[250vh] max-w-7xl"
        />
      ))}
    </div>
  );
};

export default AnimatedScrollProgress;
