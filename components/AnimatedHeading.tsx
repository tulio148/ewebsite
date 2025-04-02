"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedHeadingProps {
  scrollYProgress: MotionValue<number>;
  className?: string;
  heading: ReactNode;
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
      "linear-gradient(to right, hsl(199, 79%, 55%), rgba(26, 26, 26, 0.6))",
      "linear-gradient(to right, hsl(199, 79%, 55%, 0.8), rgba(26, 26, 26, 0.5))",
      "linear-gradient(to right, hsla(199, 79%, 55%, ), rgba(26, 26, 26, 0.45))",
    ]
  );

  return (
    <motion.h2
      className={`text-6xl font-semibold text-left bg-clip-text text-transparent drop-shadow-2xl ${className}`}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ amount: 0.8, once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ backgroundImage: gradient }}
    >
      {heading}
    </motion.h2>
  );
};

export default AnimatedHeading;
