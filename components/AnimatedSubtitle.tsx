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
      "linear-gradient(to right, hsl(199, 79%, 55%), rgba(26, 26, 26, 0.6))",
      "linear-gradient(to right, hsl(199, 79%, 55%), rgba(26, 26, 26, 0.6))",
      "linear-gradient(to right, hsla(199, 79%, 55%, 0.7), rgba(10, 10, 10, 1))",
    ]
  );

  return (
    <motion.h3
      className={`text-2xl leading-tight font-light  tracking-wider bg-clip-text text-transparent drop-shadow-lg  ${className}`}
      initial={{ opacity: 0, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ amount: 0.8, once: true }}
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
