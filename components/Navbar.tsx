"use client";

import { useState, useEffect, useMemo } from "react";
import {
  useScroll,
  motion,
  useTransform,
  AnimatePresence,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import AnimatedHamburger from "./AnimatedHamburger";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 50], [0, 1]);
  const logoOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  // Track if user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const logoY = useSpring(useTransform(scrollY, [0, 50], [5, 0]), {
    stiffness: 800,
    damping: 30,
  });

  const menuVariants = useMemo(
    () => ({
      closed: {
        opacity: 0,
        clipPath: "circle(10% at calc(100% - 40px) 40px)",
        transition: {
          clipPath: { type: "spring", stiffness: 180, damping: 22 },
          opacity: { duration: 0.2, ease: [0.3, 0.6, 0.2, 1] },
          when: "afterChildren",
          staggerChildren: 0.06,
          staggerDirection: -1,
        },
      },
      open: {
        opacity: 1,
        clipPath: "circle(130% at calc(100% - 40px) 40px)",
        transition: {
          clipPath: { type: "spring", stiffness: 160, damping: 20 },
          opacity: { duration: 0.4, ease: [0.3, 0.6, 0.2, 1] },
          when: "beforeChildren",
          staggerChildren: 0.08,
          delayChildren: 0.12,
        },
      },
    }),
    []
  );

  const navbarVariants = useMemo(
    () => ({
      hidden: {
        y: -80,
        opacity: 0,
        scale: 0.97,
      },
      visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          y: { type: "spring", stiffness: 240, damping: 25 },
          opacity: { duration: 0.5, ease: "easeOut" },
          scale: { duration: 0.35, ease: "easeOut" },
        },
      },
    }),
    []
  );

  const glowVariants = useMemo(
    () => ({
      closed: {
        opacity: 0,
        boxShadow: "0px 0px 0px 0px rgba(37,150,190,0)",
      },
      open: {
        opacity: [0, 1, 0],
        boxShadow: [
          "0px 0px 0px 0px rgba(37,150,190,0)",
          "0px 0px 30px 10px rgba(37,150,190,0.6)",
          "0px 0px 0px 0px rgba(37,150,190,0)",
        ],
        transition: {
          opacity: { times: [0, 0.5, 1], duration: 1 },
          boxShadow: { times: [0, 0.5, 1], duration: 1 },
        },
      },
    }),
    []
  );

  const menuLogoVariants = useMemo(
    () => ({
      closed: {
        opacity: 0,
        y: -10,
        transition: { duration: 0.2, ease: "easeIn" },
      },
      open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.2, ease: "easeOut" },
      },
    }),
    []
  );

  const menuItemVariants = useMemo(
    () => ({
      closed: () => ({
        opacity: 0,
        y: -15,
        x: 0, // Removed alternating horizontal offset for consistency
        transition: { duration: 0.01, ease: "easeIn" },
      }),
      open: (i: number) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 0.4,
          delay: 0.15 + i * 0.05, // More subtle, consistent staggering
          ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smoother entrance
        },
      }),
    }),
    []
  );
  const shadowVariants = useMemo(
    () => ({
      closed: {
        textShadow: "0px 0px 0px rgba(37,150,190,0)",
        transition: { duration: 0.2 },
      },
      open: (i: number) => ({
        textShadow: "1px 1px 3px rgba(37,150,190,0.4)",
        transition: { delay: 0.35 + i * 0.07, duration: 0.7 },
      }),
    }),
    []
  );

  const navLinks = ["Websites", "AI", "Edgeify", "Contact", "FAQ"];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 bg-gradient-to-b from-accent/70 to-accent/90 ${
        !isMenuOpen ? "backdrop-blur-lg" : ""
      } z-50`}
      initial="hidden"
      animate={hasScrolled ? "visible" : "hidden"}
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            style={{
              scale: logoScale,
              opacity: logoOpacity,
              y: logoY,
            }}
            className="flex items-center"
          >
            <Link href="/" className="text-xl font-bold text-gray-800">
              <Image
                src="/fullLogo-removebg.webp"
                alt="Edgeify Digital Logo"
                width={30}
                height={20}
                priority={true}
                className="mx-auto h-auto w-[150px] lg:w-[200px]"
              />
            </Link>
          </motion.div>
          <div className=" z-50">
            <AnimatedHamburger isOpen={isMenuOpen} toggle={toggleMenu} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-white flex flex-col items-center justify-center z-40 overflow-hidden"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={glowVariants}
                className="absolute inset-0 pointer-events-none"
              />
              <div className="flex flex-col items-center justify-center h-full w-full">
                <motion.div variants={menuLogoVariants} className="mb-12">
                  <Image
                    src="/logoup.webp"
                    alt="Edgeify Digital Logo"
                    width={150}
                    height={100}
                    priority={true}
                    className="mx-auto"
                  />
                </motion.div>
                {navLinks.map((item, i) => (
                  <div key={item} className="mb-8">
                    <motion.button
                      custom={i}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={menuItemVariants}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      <motion.span
                        custom={i}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={shadowVariants}
                        style={{ display: "inline-block" }}
                      >
                        {item}
                      </motion.span>
                    </motion.button>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
