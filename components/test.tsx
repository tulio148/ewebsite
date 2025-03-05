"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const paragraphs = [
  "The internet is changing fast.",
  "Your website needs to keep up.",
  "Think about it—everything is online now.",
  "Customers expect fast, easy, and great-looking websites.",
  "If your site is slow, clunky, or outdated, they won’t stick around.",
  "Your website isn’t just a page on the internet.",
  "It’s your first impression, your best salesperson, and your business card—all in one.",
  "Is it doing its job?",
];
const ParagraphWithAnimation = ({ text, scrollYProgress, index }) => {
  const opacity = useTransform(
    scrollYProgress,
    [0.1 * index, 0.1 * (index + 1)],
    [0, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [0.1 * index, 0.1 * (index + 1)],
    [50, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.1 * index, 0.1 * (index + 1)],
    [0.8, 1]
  );
  const x = useTransform(
    scrollYProgress,
    [0.1 * index, 0.1 * (index + 1)],
    [-100, 0]
  );

  return (
    <motion.p
      className="text-2xl md:text-4xl  lg:text-5xl text-secondary/90 font-extralight mb-2 max-w-3xl"
      style={{ opacity, y, scale, x }}
    >
      {text}
    </motion.p>
  );
};

const Component = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Dynamic gradient animation based on scroll progress
  const gradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to right, rgba(37, 150, 190, 0.7), rgba(26, 26, 26, 1))", // Normal
      "linear-gradient(to right, rgba(37, 150, 190, 1), rgba(10, 10, 10, 0.6))", // Slight opacity shift
      "linear-gradient(to right, rgba(37, 150, 190, 0.7), rgba(26, 26, 26, 1))", // Back to normal
    ]
  );

  return (
    <div
      ref={ref}
      className="relative bg-accent h-[800vh] flex flex-col items-center "
    >
      <motion.div className="p-8  flex flex-col justify-center  sticky top-0 pt-24">
        {/* Title with Fade-In & Dynamic Gradient */}
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-left bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          style={{ backgroundImage: gradient, backgroundSize: "200%" }} // Smooth gradient effect
        >
          The Future is Here – Is Your Website Ready?
        </motion.h2>

        {/* Animated Paragraphs */}
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

export default Component;
