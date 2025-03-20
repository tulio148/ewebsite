"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextInfusedImageProps {
  image: string;
  className?: string;
}

const imageAnimation: Variants = {
  visible: {
    scale: [1, 1.3, 1],
    transition: {
      scale: {
        repeat: Infinity,
        duration: 12,
        ease: "easeIn",
        times: [0, 0.7, 1],
      },
    },
  },
};

export const ImageAnimation: React.FC<TextInfusedImageProps> = ({
  image,
  className,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)} ref={ref}>
      <motion.div
        className="rounded-lg shadow-lg w-full will-change-transform"
        initial="hidden"
        animate={controls}
        variants={imageAnimation}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={image}
          width={1200}
          height={800}
          className="w-full h-[500px] sm:h-auto object-cover"
          priority
        />
      </motion.div>
    </div>
  );
};
