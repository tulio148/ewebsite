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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoY = useSpring(useTransform(scrollY, [0, 50], [5, 0]), {
    stiffness: 800,
    damping: 30,
  });

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
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
                src="/fullLogo-removebg.png"
                alt="Edgeify Digital Logo"
                width={150}
                height={100}
                className="mx-auto h-auto w-[120px] md:w-[150px] lg:w-[180px]"
              />
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-800"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
          <div className="md:hidden z-50">
            <AnimatedHamburger isOpen={isMenuOpen} toggle={toggleMenu} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-16 right-0 w-64 bg-white  md:hidden"
          >
            <div className="flex flex-col py-4 px-4">
              {["Home", "About", "Services", "Contact"].map((item, i) => (
                <motion.div
                  key={item}
                  variants={menuItemVariants}
                  custom={i}
                  className="mb-4"
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-xl text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
