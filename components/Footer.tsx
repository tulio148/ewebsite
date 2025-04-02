"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logoLetters from "@/public/logos/logoLetters-128.avif";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { title: "Websites", id: "websites" },
    { title: "AI", id: "ai" },
    { title: "Edgeify", id: "edgeify" },
    { title: "Contact", id: "contact" },
    { title: "FAQ", id: "faq" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <footer className="bg-primary bottom-0 fixed h-[66.67vh] w-full text-white pt-16 pb-8 -z-50 border-t-4 border-x-4 border-primary/80">
      <div className="container mx-auto px-4 h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-6 ">
              <Image
                src={logoLetters}
                alt="Edgeify Digital Logo"
                className="w-full h-auto bg-gradient-to-b from-primary via-white  to-primary py-1  px-3  "
              />
            </Link>
            <p className="text-white/90 tracking-wide text-xl text-center md:text-left">
              Elevating your digital presence with cutting-edge solutions.
            </p>
            <p className="text-white/90 tracking-wide text-lg mt-6">
              <a
                href="mailto:info@edgeify.com"
                aria-label="Email us at info@edgeify.com"
                className="text-white/90 tracking-wide text-lg hover:text-white transition-colors"
              >
                info@edgeify.com
              </a>
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-6">Navigation</h3>
            <ul className="space-y-4" role="menu">
              {footerLinks.map((link) => (
                <li key={link.id} role="none">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/90 tracking-wide text-lg hover:text-white transition-colors"
                    aria-label={`Scroll to ${link.title} section`}
                    role="menuitem"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
            <ul className="space-y-4" role="list">
              {socialLinks.map((link) => (
                <li key={link.name} role="listitem">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 tracking-wide text-lg hover:text-white transition-colors"
                    aria-label={`Visit our ${link.name} page`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="mt-6"
              role="contentinfo"
              aria-label="Contact information"
            ></div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-white/20 pt-8 text-center"
        >
          <p className="text-white/90 tracking-wide text-lg">
            &copy; {new Date().getFullYear()} Edgeify Digital. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
