"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-primary/70"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: [0, 1, 0], y: [0, 5, 10] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeInOut",
            delay: 1.3 + i * 0.15,
          }}
        />
      ))}
    </div>
  );
}
