"use client";

import { useState, useEffect } from "react";
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
  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 50], [0, 1]);
  const logoOpacity = useTransform(scrollY, [0, 50], [0, 1]);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const logoY = useSpring(useTransform(scrollY, [0, 50], [5, 0]), {
    stiffness: 800,
    damping: 30,
  });

  const menuVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const glowVariants = {
    closed: {
      opacity: 0,
      boxShadow: "0px 0px 0px 0px rgba(37,150,190,0)",
    },
    open: {
      opacity: [0, 1, 0],
      boxShadow: [
        "0px 0px 0px 0px rgba(37,150,190,0)",
        "0px 0px 50px 20px rgba(37,150,190,0.8)",
        "0px 0px 0px 0px rgba(37,150,190,0)",
      ],
      transition: {
        opacity: {
          times: [0, 0.5, 1],
          duration: 1.2,
        },
        boxShadow: {
          times: [0, 0.5, 1],
          duration: 1.2,
        },
      },
    },
  };

  const menuLogoVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.4,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
    },
    open: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.4,
      },
    }),
  };

  const shadowVariants = {
    closed: {
      textShadow: "0px 0px 0px rgba(37,150,190,0)",
    },
    open: (i: number) => ({
      textShadow: "1px 1px 2px rgba(37,150,190,0.6)",
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.8,
      },
    }),
  };

  const navLinks = ["Websites", "AI", "Edgeify", "Contact", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-accent z-50">
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
                className="mx-auto h-auto w-[120px] md:w-[150px] lg:w-[180px]"
              />
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link.toLowerCase())}
                className="text-gray-600 hover:text-gray-800 cursor-pointer text-xl"
              >
                {link}
              </button>
            ))}
          </div>
          <div className="md:hidden z-50">
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
    </nav>
  );
};

export default Navbar;
