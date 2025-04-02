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
      className="relative text-[6vh] md:text-[6.5vh] lg:text-[7.5vh] xl:text-[8.5vh] leading-tight drop-shadow-2xl   
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
              WebkitTextStroke: "1.2px #6a5ef0",
            }}
            className=" hero-title font-bold bg-clip-text text-transparent"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
};

export default AnimatedH1;
