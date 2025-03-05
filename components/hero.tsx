"use client";

import { motion } from "framer-motion";
import LogoAnimation from "./LogoAnimation";
import FloatingPaths from "./FloatingPaths";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-accent dark:bg-secondary"
    >
      <div className="absolute inset-0">
        <FloatingPaths position={0} />
      </div>

      <div className="relative px-7 z-10 container mx-auto">
        <LogoAnimation />
        <motion.h1
          className="text-2xl md:text-4xl font-light tracking-wider  mb-4 text-secondary dark:text-white text-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          {[
            "Fast,",
            "Smart",
            "Websites",
            "and",
            "AI",
            "Solutions",
            "to",
            "Drive",
            "Your",
            "Success",
          ].map((word, i) => (
            <span key={i} className="inline-block mr-[0.4em] last:mr-0">
              <motion.span
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2 + i * 0.1,
                  duration: 1,
                  type: "spring",
                  stiffness: 300,
                  damping: 40,
                }}
                className="inline-block tracking-wider rounded-full p-1"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}
