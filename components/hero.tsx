"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(37, 150, 190,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-primary"
        viewBox="0 0 696 316"
        fill="none"
        aria-hidden="true"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.025}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 1,
              opacity: [0.25, 0.5, 0.25],
              pathOffset: [0, 1, 0],
              stroke: ["#2596be", "#1e40af", "#2596be"],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function HeroSection({
  brandName = "edgeify digital",
}: {
  brandName?: string;
}) {
  const words = brandName.split(" ");
  const { scrollY } = useScroll();

  const logoOpacity = useTransform(scrollY, [20, 100], [1, 0]);
  const brandNameOpacity = useTransform(scrollY, [100, 300], [1, 0]);

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

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            style={{
              opacity: logoOpacity,
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              type: "spring",
              stiffness: 260,
              damping: 40,
            }}
          >
            <Image
              src="/logoup.png"
              alt="Edgeify Digital Logo"
              width={500}
              height={150}
              className="mx-auto responsive-logo mb-[-40px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>

          <motion.p className="text-6xl lg:text-7xl font-bold mb-6 w-64 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    style={{
                      opacity: brandNameOpacity,
                    }}
                    className={`inline-block py-3 px-[1px] text-transparent font-medium bg-clip-text ${
                      wordIndex === 0 && letterIndex < 4
                        ? "bg-secondary"
                        : "bg-primary"
                    }`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.p>
        </div>
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-secondary dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          {[
            "Premium",
            "Digital",
            "Marketing",
            "&",
            "Web",
            "Development",
            "Solutions",
            "for",
            "Business",
            "Growth",
          ].map((word, i) => (
            <span key={i} className="inline-block mr-[0.3em] last:mr-0">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2 + i * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-secondary/90 dark:text-white/90 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 3.5,
            duration: 0.7,
            type: "spring",
            stiffness: 100,
          }}
        >
          Transforming brands with strategic digital solutions, custom web
          development, and data-driven marketing campaigns.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <p className="text-lg md:text-xl text-secondary/90 dark:text-accent/90 max-w-2xl mx-auto mb-8">
            Transforming brands with strategic digital solutions, custom web
            development, and data-driven marketing campaigns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="inline-block group relative bg-gradient-to-b from-secondary/10 to-accent/10 
              p-px rounded-2xl backdrop-blur-lg 
              overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
                bg-accent hover:bg-white dark:bg-secondary dark:hover:bg-black 
                text-secondary dark:text-accent transition-all duration-300 
                group-hover:-translate-y-0.5 border border-secondary/10 dark:border-accent/10
                hover:shadow-md dark:hover:shadow-secondary/50"
                aria-label="Explore Our Services"
              >
                <motion.span
                  className="opacity-90 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.01, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  Explore Our Services
                </motion.span>
                <motion.span
                  className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                  transition-all duration-300"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>

            <Button
              variant="outline"
              className="rounded-xl px-8 py-6 text-lg font-medium border-secondary/20 dark:border-accent/20
              text-secondary dark:text-accent hover:bg-secondary/5 dark:hover:bg-accent/5"
            >
              View Portfolio
            </Button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
