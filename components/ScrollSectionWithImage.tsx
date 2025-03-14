"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import LineWithAnimation from "./LineWithAnimation";
import { useIsMobile } from "@/hooks/useIsMobile";
import ScrollProgressBar from "./ScrollProgressBar";
interface AnimatedHeroSectionProps {
  lines: ReactNode[];
  imageSrc: string;
  imageAlt: string;
  className?: string;
  heading: ReactNode;
  imagePosition?: "left" | "right";
}

export function ScrollSectionWithImage({
  lines,
  imageSrc,
  imageAlt,
  className,
  heading,
  imagePosition = "right",
}: AnimatedHeroSectionProps) {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const imageRotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    imagePosition === "left" ? [-5, 0] : [5, 0]
  );
  const mobileAnimation = {
    rotate: [0, 1, 0, -1, 0],
    scale: [1, 1.02, 1, 1.02, 1],
    transition: {
      rotate: {
        repeat: Infinity,
        duration: 10,
        ease: "easeInOut",
      },
      scale: {
        repeat: Infinity,
        duration: 8,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
  };

  const bgScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);
  const bgScale2 = useTransform(scrollYProgress, [0, 1], [1.5, 0.8]);
  const bgOpacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.3]);

  const textContent = (
    <div className="md:px-8">
      <AnimatedHeading
        scrollYProgress={scrollYProgress}
        heading={heading}
        className="pb-4"
      />

      {!isMobile && (
        <ScrollProgressBar
          scrollYProgress={scrollYProgress}
          className="mt-[-24px]"
        />
      )}
      <div className="mb-3 md:mb-4">
        {lines.map((line, index) => (
          <LineWithAnimation
            key={index}
            line={line}
            scrollYProgress={scrollYProgress}
            index={index}
            delay={0.2}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );

  const imageContent = (
    <motion.div
      className="relative h-[320px] md:h-[400px] lg:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl"
      style={
        isMobile
          ? { opacity: 1 }
          : {
              scale: imageScale,
              opacity: imageOpacity,
              rotateZ: imageRotate,
            }
      }
      animate={isMobile ? mobileAnimation : {}}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={imageAlt}
        fill
        className="object-cover rounded"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
      />

      {!isMobile && (
        <>
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl"
            style={{
              scale: bgScale,
              opacity: bgOpacity,
            }}
          />
          <motion.div
            className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/30 rounded-full blur-xl"
            style={{
              scale: bgScale2,
              opacity: bgOpacity2,
            }}
          />
        </>
      )}
    </motion.div>
  );

  return (
    <div
      ref={sectionRef}
      className={`relative p-8 md:min-h-[300vh] flex flex-col items-center ${className}  mb-96 `}
    >
      <motion.div
        className={`flex flex-col h-screen justify-center w-full max-w-7xl ${
          isMobile ? "py-10" : "sticky top-0 py-20 sm:py-32"
        }`}
      >
        {/* Mobile layout - always image below text */}
        {isMobile ? (
          <div className="grid grid-cols-1 gap-8 items-center">
            {textContent}
            {imageContent}
          </div>
        ) : (
          /* Desktop layout - image position based on imagePosition prop */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {imagePosition === "left" ? (
              <>
                {imageContent}
                {textContent}
              </>
            ) : (
              <>
                {textContent}
                {imageContent}
              </>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
