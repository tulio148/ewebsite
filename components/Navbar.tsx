"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedHamburger from "./AnimatedHamburger";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import logoFull from "@/public/logos/logoFull-256.avif";

const navbarVariants = {
  hidden: { y: -80, opacity: 0, transition: { duration: 0.01 } },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 340, damping: 30 },
  },
};

const menuVariants = {
  closed: {
    opacity: 0,
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      duration: 0.05,
    },
  },
  open: {
    opacity: 1,
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.015,
    },
  },
};
const itemVariants = {
  closed: { opacity: 0, scaleY: 0.1, transition: { duration: 0.2 } },
  open: {
    opacity: 1,
    scaleY: 1,
    originY: 1,
    transition: { duration: 0.1 },
  },
};

// Navigation links with corresponding paths
const NAV_LINKS = [
  { name: "Websites", path: "/webservices" },
  { name: "AI", path: "/ai" },
  { name: "Edgeify", path: "/edgeify" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Handle scroll events`
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setHasScrolled(false);
  };

  return (
    <motion.nav
      className={
        "fixed top-0 left-0 px-6 py-4 right-0 bg-gradient-to-b from-accent/90 to-accent/95 z-50"
      }
      initial="hidden"
      animate={hasScrolled ? "visible" : "hidden"}
      variants={navbarVariants}
    >
      <div className="container mx-auto  sm:px-16  ">
        <div className="flex justify-between items-center h-12">
          <Link href="/" className="text-xl font-bold text-gray-800">
            <Image
              src={logoFull}
              alt="Edgeify Digital Logo"
              priority={true}
              className="mx-auto h-auto w-[120px] lg:w-[150px]"
            />
          </Link>
          <AnimatedHamburger
            isOpen={isMenuOpen}
            toggle={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-40 "
            role="menu"
            aria-label="Main navigation"
          >
            <div className="flex flex-col justify-center h-full w-full px-10 max-w-4xl">
              {NAV_LINKS.map(({ name, path }) => (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  className="mb-6 relative"
                >
                  <Link
                    className="flex items-center w-fit"
                    href={path}
                    onClick={handleLinkClick}
                  >
                    <button
                      className="flex items-center gap-2 text-5xl font-thin tracking-wider text-white hover:text-white/80 transition-colors"
                      aria-label={`Navigate to ${name} page`}
                      role="menuitem"
                    >
                      {name}{" "}
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ChevronRight
                          className="w-5 h-5"
                          strokeWidth={"1px"}
                          size={48}
                        />
                      </motion.div>
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
