"use client";
import Image from "next/image";
import webdev from "@/public/webdev.svg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IsometricDesigners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    // <div className="flex justify-center items-center w-full">
    <motion.div
      ref={ref}
      initial={{ scale: 0.3 }}
      animate={isInView ? { scale: 1 } : { scale: 0.3 }}
      transition={{
        duration: 3,
        // repeat: Infinity,
        ease: "easeIn",
        type: "spring",
        stiffness: 700,
        damping: 150,
      }}
      className="w-full h-auto  flex justify-center items-center "
    >
      <Image
        src={webdev}
        alt="Web Development"
        width={1200}
        height={800}
        loading="lazy"
      />
    </motion.div>
    // </div>
  );
};

export default IsometricDesigners;
