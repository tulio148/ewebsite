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
    <h1
      className="relative text-5xl sm:text-6xl xl:text-7xl mb-4 pb-8  md:w-3/4 
      "
    >
      <span className="sr-only">
        {children.map((child) => (typeof child === "string" ? child : ""))}
      </span>
      <span aria-hidden="true" className="flex flex-wrap">
        {processedChildren.map((word, index) => (
          <motion.span
            key={`word-${index}`}
            initial={{
              opacity: 0,

              filter: "blur(1px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              ease: "easeIn",
              type: "tween",
            }}
            style={{
              WebkitTextStroke: "0.6px #6a5ef0",
            }}
            className="my-1 hero-title font-bold bg-clip-text text-transparent"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
};

export default AnimatedH1;
