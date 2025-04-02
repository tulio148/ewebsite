"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <motion.div
          key={i}
          className="w-4 border-b-[0.5px] border-primary/90 h-1 bg-primary/60  rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.9, 0.3, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeIn",
            delay: 3 + i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
