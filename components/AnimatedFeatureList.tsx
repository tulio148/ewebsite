"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

interface AnimatedFeatureListProps {
  title: string;
  subtitle: string;
  benefits: string[];
  className?: string;
}

export default function AnimatedFeatureList({
  title,
  subtitle,
  benefits,
  className = "",
}: AnimatedFeatureListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInView && !animationComplete) {
      setTimeout(() => {
        setAnimationComplete(true);
      }, 1000);
    }
  }, [isInView, animationComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const checkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const headingWords = title.split(" ");

  return (
    <section
      className={`relative flex flex-col items-center justify-center h-[200vh] py-16 md:py-24 bg-gradient-to-b from-transparent to-primary from-85% sm:from-70% ${className}`}
    >
      <div className="flex flex-col justify-center items-center px-8 max-w-7xl h-[calc(100vh-64px) sticky top-20">
        <div ref={containerRef} className="flex flex-col items-center mb-12">
          {/* Animated heading */}
          <h2
            ref={headingRef}
            className="relative text-5xl md:text-5xl lg:text-6xl font-bold mb-5 overflow-hidden text-primary max-w-full"
          >
            <span className="sr-only">{title}</span>
            <span aria-hidden="true" className="flex flex-wrap ">
              {headingWords.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={
                    isHeadingInView
                      ? { y: "0%", opacity: 1 }
                      : { y: "100%", opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.15,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="inline-block mx-1"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h2>

          {/* Subheading with gradient underline */}
          <motion.div
            className="relative mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-2xl md:text-2xl font-light mb-2 tracking-wider text-center">
              {subtitle}
            </p>
            <motion.div
              className="h-1 w-0 bg-primary mx-auto rounded-full"
              animate={isInView ? { width: "40%" } : { width: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </div>

        {/* Benefits section */}
        <div className="grid md:grid-cols-2 gap-x-12 sm:gap-x-2 gap-y-8 mb-12">
          <motion.div
            className="flex flex-col space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3
              className="text-xl font-semibold"
              variants={itemVariants}
            >
              Here&apos;s what you get:
            </motion.h3>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                variants={itemVariants}
              >
                <motion.div
                  className="mt-1 flex-shrink-0 rounded-full bg-primary/10 p-1"
                  variants={checkVariants}
                >
                  <Check className="h-5 w-5 text-primary" />
                </motion.div>
                <span className="text-left tracking-wider text-lg">
                  {benefit}
                </span>
              </motion.div>
            ))}

            <motion.p
              className="font-semibold tracking-wider pt-2 text-xl"
              variants={itemVariants}
            >
              And once it&apos;s live, you don&apos;t have to stress about it.
              It just works.
            </motion.p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="relative h-[200px] md:h-full rounded-lg overflow-hidden bg-muted/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full max-w-[250px] max-h-[250px] text-primary/20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M45.1,-76.4C59.2,-69.7,72.2,-59.5,79.6,-45.9C87,-32.3,88.8,-15.2,87.5,1.3C86.2,17.9,81.8,33.8,73.1,47.1C64.4,60.4,51.3,71.1,36.7,76.9C22.1,82.7,6,83.6,-9.4,80.7C-24.8,77.8,-39.5,71.1,-51.9,61.2C-64.3,51.3,-74.4,38.2,-79.9,23.2C-85.4,8.2,-86.3,-8.7,-82.6,-24.5C-78.9,-40.3,-70.6,-55,-58.3,-63.2C-46,-71.4,-29.7,-73.1,-14.4,-74.1C0.9,-75.1,15.3,-75.4,29.7,-76.6C44.1,-77.8,58.5,-80,70.1,-74.5C81.7,-69,90.5,-55.9,93.8,-42.1C97.1,-28.3,94.9,-14.2,92.7,0C90.5,14.2,88.3,28.3,81.9,40.3C75.5,52.3,64.9,62.1,52.4,69.1C39.9,76.1,25.5,80.3,10.8,81.8C-3.9,83.3,-18.9,82.2,-32.9,77.7C-46.9,73.2,-59.9,65.3,-70.2,54.2C-80.5,43.1,-88.1,28.8,-90.9,13.5C-93.7,-1.8,-91.7,-18.1,-85.2,-32.1C-78.7,-46.1,-67.7,-57.8,-54.6,-65.1C-41.5,-72.4,-26.3,-75.3,-11.2,-77.9C3.9,-80.5,19,-82.8,31,-79.5C43,-76.2,52,-67.3,61.1,-58.4C70.2,-49.5,79.4,-40.6,81.9,-30C84.4,-19.4,80.2,-7.2,78.1,5.9C76,19,76,38,68.8,51.8C61.6,65.6,47.3,74.3,32.2,79.3C17.1,84.3,1.4,85.7,-14.2,84.3C-29.8,82.9,-45.4,78.7,-58.3,69.9C-71.2,61.1,-81.5,47.7,-87.3,32.5C-93.1,17.3,-94.5,0.3,-91.1,-15.2C-87.7,-30.7,-79.5,-44.7,-68.2,-55.3C-56.9,-65.9,-42.5,-73.1,-27.9,-76.8C-13.3,-80.5,1.5,-80.7,14.9,-77.8C28.3,-74.9,40.3,-68.9,45.1,-76.4Z"
                  transform="translate(100 100)"
                >
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="100 100; 105 95; 100 100"
                    dur="10s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <motion.div
                  className="w-16 h-16 rounded-lg bg-background shadow-lg flex items-center justify-center mb-4"
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  <div className="w-10 h-1 bg-primary rounded-full" />
                </motion.div>

                <motion.div
                  className="w-full h-2 bg-background rounded-full mb-2"
                  animate={{ width: ["60%", "80%", "60%"] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="w-full h-2 bg-background rounded-full mb-2"
                  animate={{ width: ["70%", "50%", "70%"] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                />

                <motion.div
                  className="w-full h-2 bg-background rounded-full"
                  animate={{ width: ["40%", "60%", "40%"] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
