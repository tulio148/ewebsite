"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import AnimatedHamburger from "./AnimatedHamburger";
import Image from "next/image";

const navbarVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 240, damping: 25 },
  },
};

const menuVariants = {
  closed: {
    opacity: 0,
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      duration: 0.1,
      when: "afterChildren",
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.02,
      delayChildren: 0.01,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -20, x: 10 },
  open: { opacity: 1, y: 0, x: 0 },
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

  // Handle scroll events
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
  };

  return (
    <motion.nav
      className={
        "fixed top-0 left-0 p-4 right-0 bg-gradient-to-b from-accent/85 to-accent/95 z-50"
      }
      initial="hidden"
      animate={hasScrolled ? "visible" : "hidden"}
      variants={navbarVariants}
    >
      <div className="container mx-auto pr-8 sm:px-16 md:px-24 lg:px-32">
        <div className="flex justify-between items-center h-12">
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
          <div className="z-50">
            <AnimatedHamburger isOpen={isMenuOpen} toggle={toggleMenu} />
          </div>
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
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-40"
          >
            <div className="flex flex-col justify-center h-full w-full px-10 max-w-4xl">
              <motion.div variants={itemVariants} className="mb-12">
                <Link href="/" onClick={handleLinkClick}>
                  <Image
                    src="/logoup.webp"
                    alt="Edgeify Digital Logo"
                    width={150}
                    height={100}
                    priority={true}
                    className=""
                  />
                </Link>
              </motion.div>

              {NAV_LINKS.map(({ name, path }) => (
                <motion.div key={name} variants={itemVariants} className="mb-4">
                  <Link href={path} onClick={handleLinkClick}>
                    <button className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
                      {name}
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
