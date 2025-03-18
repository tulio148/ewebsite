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
    scale: [1, 1.3, 1],
    transition: {
      scale: {
        repeat: Infinity,
        duration: 12,
        ease: "easeIn",
        times: [0, 0.7, 1],
      },
    },
  };

  const bgScale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);
  const bgScale2 = useTransform(scrollYProgress, [0, 1], [1.5, 0.8]);
  const bgOpacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.3]);

  const textContent = (
    <div className="px-4 md:px-4">
      <AnimatedHeading
        scrollYProgress={scrollYProgress}
        heading={heading}
        className="pb-10"
      />

      {!isMobile && (
        <ScrollProgressBar
          scrollYProgress={scrollYProgress}
          className="mt-[-50px]"
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
      className="relative h-[50vh] min-h-[320px] max-h-[420px] md:h-[400px] lg:h-[500px] w-full rounded overflow-hidden shadow-2xl"
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
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
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
      className={`relative px-4 sm:px-6 md:px-8 md:min-h-[200vh] flex flex-col items-center ${className} mb-72 lg:mb-96`}
    >
      <motion.div
        className={`flex flex-col h-[calc(100vh-64px)] justify-center w-full max-w-7xl ${
          isMobile ? "py-10" : "sticky top-16"
        }`}
      >
        <div
          className={`grid gap-8 sm:gap-12 md:gap-6 items-center ${
            isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-2 "
          }`}
        >
          {imagePosition === "left" && !isMobile && imageContent}
          {textContent}
          {(imagePosition === "right" || isMobile) && (
            <div
              className={
                isMobile ? "mx-[-1rem] sm:mx-[-2rem] overflow-hidden" : ""
              }
            >
              {imageContent}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
