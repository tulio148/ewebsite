"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  children: ReactNode[];
}

const AnimatedH1 = ({ children }: AnimatedTextProps) => {
  const processedChildren = children
    .map((child) => {
      if (typeof child === "string") {
        return child.split(" ");
      }
      return [child];
    })
    .flat();

  return (
    <h1 className="relative text-5xl sm:text-6xl mb-4 pb-8 sm:pl-12 sm:w-3/4 text-justify overflow-hidden">
      <span className="sr-only">
        {children.map((child) => (typeof child === "string" ? child : ""))}
      </span>
      <span aria-hidden="true" className="flex flex-wrap">
        {processedChildren.map((word, index) => (
          <motion.span
            key={`word-${index}`}
            initial={{
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease: "easeInOut",
              type: "spring",
              bounce: 0,
            }}
            className="inline-block mx-1 tracking-wider leading-none text-secondary/70 font-thin"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
};

export default AnimatedH1;
