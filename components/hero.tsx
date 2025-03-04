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
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
        <FloatingPaths position={0} />
      </div>

      <div className="relative px-7 z-10 container mx-auto">
        <LogoAnimation />
        <motion.h1
          className="text-3xl md:text-4xl font-normal w-1/2 tracking-wider mb-4 text-secondary dark:text-white text-stroke-2 text-stroke-white sm:text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          {[
            "Smart",
            "Digital",
            "Marketing",
            "and",
            "Web",
            "Solutions",
            "for",
            "Business",
            "Growth",
          ].map((word, i) => (
            <span key={i} className="inline-block mr-[0.4em] last:mr-0">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2 + i * 0.1,
                  duration: 0.5,
                  type: "tween",
                  stiffness: 100,
                  damping: 40,
                }}
                className="inline-block tracking-wider"
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
