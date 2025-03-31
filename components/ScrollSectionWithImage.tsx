"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";
import LineWithAnimation from "./LineWithAnimation";
import { useIsMobile } from "@/hooks/useIsMobile";
import ScrollProgressBar from "./ScrollProgressBar";
import AnimatedSubtitle from "./AnimatedSubtitle";
import { ResponsiveImage } from "@/lib/images";

interface AnimatedHeroSectionProps {
  lines: ReactNode[];
  image: ResponsiveImage;
  className?: string;
  heading: ReactNode;
  subtitle?: ReactNode;
  imagePosition?: "left" | "right";
}

export function ScrollSectionWithImage({
  lines,
  image,
  className,
  heading,
  subtitle,
  imagePosition = "right",
}: AnimatedHeroSectionProps) {
  const sectionRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const imageScale = useTransform(progress, [0, 0.9], [0.3, 1]);
  const imageOpacity = useTransform(progress, [0, 0.3], [0, 1]);
  const imageRotate = useTransform(
    progress,
    [0, 0.5],
    imagePosition === "left" ? [-5, 0] : [5, 0]
  );
  const bgScale = useTransform(progress, [0, 1], [0.5, 1.5]);
  const bgOpacity = useTransform(progress, [0, 0.5, 1], [0, 1, 0.5]);
  const bgScale2 = useTransform(progress, [0, 1], [1.5, 0.8]);
  const bgOpacity2 = useTransform(progress, [0, 0.5, 1], [0.5, 1, 0.3]);

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

  const textContent = (
    <div className="px-4 md:px-4 ">
      <AnimatedHeading
        scrollYProgress={progress}
        heading={heading}
        className=" sm:pb-8 text-4xl "
      />

      {!isMobile && (
        <ScrollProgressBar scrollYProgress={progress} className="mt-[-41px]" />
      )}
      {subtitle && (
        <AnimatedSubtitle
          scrollYProgress={progress}
          subtitle={subtitle}
          className="mt-4 mb-8  text-balance text-justify "
        />
      )}
      <div className="mt-10"></div>

      <div className="mb-3 md:mb-4">
        {lines.map((line, index) => (
          <LineWithAnimation
            key={index}
            line={line}
            totalLines={lines.length}
            scrollYProgress={progress}
            index={index}
            delay={0.1}
            isMobile={isMobile}
            className="mb-1 text-slate-600"
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
        src={isMobile ? image.md : image.md}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
        loading="lazy"
        blurDataURL={image.thumb}
        placeholder="blur"
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
      className={`relative px-4 bg-white sm:px-6 md:px-8 md:min-h-[150vh] flex flex-col items-center ${className} mb-72 lg:mb-96`}
    >
      <motion.div
        className={`flex flex-col h-[calc(100vh-80px)] justify-center w-full max-w-7xl ${
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
