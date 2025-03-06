"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";

interface AnimatedHeadingProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
  heading: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  scrollYProgress,
  className = "",
  heading,
}) => {
  const gradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to right, rgba(37, 150, 190, 1), rgba(26, 26, 26, 0.6))",
      "linear-gradient(to right, rgba(37, 150, 190, 0.7), rgba(10, 10, 10, 1))",
      "linear-gradient(to right, rgba(37, 150, 190, 1), rgba(26, 26, 26, 0.6))",
    ]
  );

  return (
    <motion.h2
      className={`text-5xl md:text-6xl lg:text-7xl font-bold text-left bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      style={{ backgroundImage: gradient, backgroundSize: "200%" }}
    >
      {heading}
    </motion.h2>
  );
};

export default AnimatedHeading;
