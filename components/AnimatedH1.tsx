"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: ReactNode[];
}

const AnimatedH1 = ({ children }: AnimatedTextProps) => {
  return (
    <motion.h1
      layout
      className="text-5xl md:text-6xl font-thin  mb-4 text-secondary/90 pb-8 sm:pl-12 sm:w-2/3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {children.map((node, i) => (
        <span key={i} className="inline-block">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: i * 0.1,
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 40,
            }}
            className="inline-block tracking-wide leading-tight rounded-full"
          >
            {node}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};

export default AnimatedH1;
