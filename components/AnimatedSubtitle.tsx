"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import React, { ReactNode } from "react";

interface AnimatedSubtitleProps {
  scrollYProgress: MotionValue<number>;
  subtitle: ReactNode;
  className?: string;
}

const AnimatedSubtitle: React.FC<AnimatedSubtitleProps> = ({
  scrollYProgress,
  subtitle,
  className = "",
}) => {
  const subtitleGradient = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [
      "linear-gradient(to right, rgba(37, 150, 190, 1), rgba(26, 26, 26, 0.6))",
      "linear-gradient(to right, rgba(37, 150, 190, 1), rgba(26, 26, 26, 0.6))",
      "linear-gradient(to right, rgba(37, 150, 190, 0.7), rgba(10, 10, 10, 1))",
    ]
  );

  return (
    <motion.h3
      className={`text-2xl leading-tight font-light tracking-wider bg-clip-text text-transparent drop-shadow-lg  ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      style={{
        backgroundImage: subtitleGradient,
        backgroundSize: "200%",
      }}
    >
      {subtitle}
    </motion.h3>
  );
};

export default AnimatedSubtitle;
