"use client";

import type React from "react";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface ServiceItemProps {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  learnMoreLink?: string;
}

interface ServicesCarouselProps {
  services: ServiceItemProps[];
  heading: React.ReactNode;
  subheading?: string;
  className?: string;
  cardClassName?: string;
  autoRotateInterval?: number; // New prop for customizing rotation interval
  showGradientEffects?: boolean; // New prop to toggle gradient effects
}

export function ServicesCarousel({
  services,
  heading,
  subheading,
  className = "",
  cardClassName = "",
  autoRotateInterval = 5000,
  showGradientEffects = true,
}: ServicesCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const [isPaused, setIsPaused] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.9, 1, 1, 0.9]
  );
  const yOffset = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [50, 0, 0, 50]
  );

  const visibleServices = isMobile
    ? 1
    : services.length <= 3
    ? services.length
    : 3;
  const totalPages = Math.ceil(services.length / visibleServices);

  // Memoize navigation handlers to prevent unnecessary re-renders
  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setIsPaused(true);
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 10000);
  }, [totalPages]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setIsPaused(true);
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 10000);
  }, [totalPages]);

  // Handle keyboard navigation

  // Auto-rotation effect with improved pause handling
  useEffect(() => {
    if (isPaused || isUserInteracting) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [totalPages, isPaused, isUserInteracting, autoRotateInterval]);

  // Pause auto-rotation when user hovers over carousel
  const handleMouseEnter = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isUserInteracting) {
      setIsPaused(false);
    }
  }, [isUserInteracting]);

  const getVisibleServices = useCallback(() => {
    const start = activeIndex * visibleServices;
    return services.slice(start, start + visibleServices);
  }, [activeIndex, services, visibleServices]);

  return (
    <div
      ref={carouselRef}
      className={`relative px-4 sm:px-6 md:px-8 py-24 overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Services carousel"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        style={{
          opacity,
          scale,
          y: yOffset,
        }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            {heading}
          </h2>
          {subheading && (
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-4 mb-6">
              {subheading}
            </p>
          )}
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="relative" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              className="overflow-hidden px-4 md:px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {getVisibleServices().map((service, index) => {
                  const isHovered = hoveredIndex === index;
                  const globalIndex = activeIndex * visibleServices + index;

                  return (
                    <motion.div
                      key={`${globalIndex}-${service.title}`}
                      className={`relative ${cardClassName}`}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: isHovered ? 1.03 : 1,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.3,
                        },
                      }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      tabIndex={0}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Service: ${service.title}`}
                    >
                      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 h-full shadow-lg border border-white/10 hover:border-primary/50 transition-all duration-300 group">
                        <div className="flex items-center justify-center mb-6 relative z-10">
                          <div className="relative h-16 w-16 overflow-hidden">
                            <Image
                              src={service.icon || "/placeholder.svg"}
                              alt={service.iconAlt}
                              fill
                              sizes="(max-width: 768px) 64px, 64px"
                              className="object-contain transition-transform duration-500 group-hover:scale-110"
                              priority={globalIndex < 3}
                            />
                          </div>
                          {showGradientEffects && (
                            <motion.div
                              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-md z-[-1]"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.2, 0.4, 0.2],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                              }}
                            />
                          )}
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-3 text-center group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-center mb-6">
                          {service.description}
                        </p>

                        {service.learnMoreLink && (
                          <div className="flex justify-center">
                            <a
                              href={service.learnMoreLink}
                              className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 group-hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background rounded-md px-2 py-1"
                              aria-label={`Learn more about ${service.title}`}
                            >
                              Learn more{" "}
                              <ArrowRight size={16} className="ml-1" />
                            </a>
                          </div>
                        )}

                        {showGradientEffects && (
                          <>
                            <motion.div
                              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                              }}
                            />
                            <motion.div
                              className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/30 rounded-full blur-xl"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.5, 0.2],
                              }}
                              transition={{
                                duration: 5,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                delay: 0.5,
                              }}
                            />
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {services.length > visibleServices && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-primary/30 transition-colors duration-300 backdrop-blur-sm z-10 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Previous services"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-primary/30 transition-colors duration-300 backdrop-blur-sm z-10 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label="Next services"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {services.length > visibleServices && (
          <div
            className="flex justify-center items-center mt-12 gap-3"
            role="tablist"
            aria-label="Carousel pagination"
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setIsUserInteracting(true);
                  setTimeout(() => setIsUserInteracting(false), 10000);
                }}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-primary to-secondary scale-125"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
                aria-selected={activeIndex === index}
                role="tab"
                tabIndex={0}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
