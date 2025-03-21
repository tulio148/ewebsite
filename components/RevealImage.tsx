"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.3,
    },
  },
};

const revealVariants = {
  hidden: {
    width: "100%",
  },
  visible: {
    width: "0%",
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const RevealImage = ({ featuredMobileBanner, bigBanner }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full w-full bg-background z-20"
        variants={revealVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
      />
      <motion.div
        className={`relative ${
          isMobile ? "h-[300px]" : "w-full max-h-[80vh]"
        } overflow-hidden`}
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.25, once: true }}
      >
        {isMobile ? (
          <Image
            src={featuredMobileBanner}
            alt="featured image"
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={bigBanner}
            alt="featured image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover"
          />
        )}
      </motion.div>
    </div>
  );
};

export default RevealImage;
