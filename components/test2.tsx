"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import LineWithAnimation from "./LineWithAnimation";

// Define TypeScript types for props
interface SectionProps {
  id: string;
  title: string;
  color: string;
  index: number;
  content: string[];
}

const Section: React.FC<SectionProps> = ({ id, title, content }) => {
  const sectionRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Adjust offset for smoother transitions
    offset: ["start start", "end center"],
  });

  // Adjust the range for smoother progress with an offset
  const yRange = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 300, damping: 100 });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  useEffect(() => {
    return yRange.on("change", (v) => {
      // Check if the progress is at least 0.9 (90%) before marking as complete
      if (v >= 0.9) {
        setIsComplete(true);
      } else {
        setIsComplete(false);
      }
    });
  }, [yRange]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={`relative w-full h-[180vh] max-w-7xl bg-primary text-white`}
    >
      <div className="sticky top-0 left-0 w-full flex flex-col sm:flex-row min-h-screen pt-16 sm:pt-24">
        {/* Progress Bar - centralized */}
        <div className="flex items-center justify-center absolute left-0 top-0 h-screen w-16 sm:w-24 p-4 sm:p-6 z-10">
          <svg
            className="w-full h-3/4" // Keep height at 75% of container
            viewBox="0 0 60 800" // Increased viewBox height to 800 for 2x size
            role="img"
            aria-label="Step progress indicator"
          >
            <motion.circle
              cx="30"
              cy="40" // Adjusted to match new height
              r="20" // Increased circle size to 32 for 2x size
              fill={isComplete ? "hsl(var(--accent))" : "hsl(var(--accent))"} // Use Tailwind accent color
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.5 }}
            />
            <motion.path
              fill="none"
              strokeWidth="16" // Increased stroke width for better visibility
              stroke="hsl(var(--accent))" // Use Tailwind accent color
              d="M30,55 L30,650" // Adjusted path coordinates for longer line
              strokeDasharray="0 1"
              style={{ pathLength }}
            />
            <motion.circle
              cx="30"
              cy="660" // Adjusted to match new height
              r="20" // Increased circle size to 32 for 2x size
              fill="hsl(var(--accent))" // Use Tailwind accent color
              initial={{ opacity: 0.3 }}
              animate={{ opacity: isComplete ? 1 : 0.3 }}
            />
          </svg>
        </div>

        {/* Content Area - added responsive left padding for space */}
        <motion.div
          className="flex-1 p-6 sm:p-10 sm:pl-20 md:p-12 pl-24 md:pl-32 lg:pl-44 xl:pl-48 flex flex-col justify-center"
          style={{ opacity }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 relative">
            {title}
            <span className="absolute bottom-0 left-0 w-16 h-1 bg-accent rounded-full hidden sm:block"></span>
          </h2>
          <div className="flex flex-col justify-between w-full max-w-4xl">
            {content.map((line, idx) => (
              <LineWithAnimation
                key={idx}
                line={line}
                scrollYProgress={scrollYProgress}
                index={idx}
                className="text-white"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const EnhancedScrollProgress = () => {
  const sections = [
    {
      id: "section1",
      title: "Discovery – Learning About Your Business",
      color: "bg-primary",
      content: [
        "We ask about your business, goals, and customers.",
        "We check out your competition and what makes you unique.",
        "We find out what features and design you want.",
      ],
    },
    {
      id: "section2",
      title: "Planning – Getting Everything Ready",
      color: "bg-primary",
      content: [
        "We plan how your website will be organized.",
        "We decide what features and tools it needs.",
        "We set a timeline so you know what to expect.",
      ],
    },
    {
      id: "section3",
      title: "Design & Build – Making Your Website",
      color: "bg-primary",
      content: [
        "We create a design that matches your brand.",
        "We build the site and make sure it works well.",
        "You review it and share your feedback.",
      ],
    },
    {
      id: "section4",
      title: "Testing – Checking for Perfection",
      color: "bg-primary",
      content: [
        "We test the site on different devices.",
        "We make sure it loads fast and is easy to use.",
        "We fix any issues before launch.",
      ],
    },
    {
      id: "section5",
      title: "Launch & Growth – Going Live",
      color: "bg-primary",
      content: [
        "Your website goes live for everyone to see.",
        "We set up SEO and tracking tools.",
        "We offer support to help your site grow.",
      ],
    },
  ];

  return (
    <div className="relative flex flex-col justify-center items-center bg-primary">
      {sections.map((section, index) => (
        <Section key={section.id} {...section} index={index} />
      ))}
    </div>
  );
};

export default EnhancedScrollProgress;
