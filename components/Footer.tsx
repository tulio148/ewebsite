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
    <footer className="bg-primary/20 bottom-0 w-full text-white pt-12 pb-6 -z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src={logoLetters}
                alt="Edgeify Digital Logo"
                className="w-full h-auto"
              />
            </Link>
            <p className="text-slate-700 tracking-wide text-xl  text-center md:text-left">
              Elevating your digital presence with cutting-edge solutions.
            </p>
            <p className="text-white tracking-wide text-lg mt-4">
              <a
                href="mailto:info@edgeify.com"
                aria-label="Email us at info@edgeify.com"
                className="text-slate-700 tracking-wide text-lg hover:text-slate-500 transition-colors"
              >
                info@edgeify.com
              </a>
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-primary mb-4">Navigation</h3>
            <ul className="space-y-2" role="menu">
              {footerLinks.map((link) => (
                <li key={link.id} role="none">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-700 tracking-wide text-lg hover:text-slate-500 transition-colors"
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
            <h3 className="text-xl font-bold text-primary mb-4">Connect</h3>
            <ul className="space-y-2" role="list">
              {socialLinks.map((link) => (
                <li key={link.name} role="listitem">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 tracking-wide text-lg hover:text-slate-500 transition-colors"
                    aria-label={`Visit our ${link.name} page`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div
              className="mt-4"
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
          className="border-t border-gray-200 pt-6 text-center"
        >
          <p className="text-slate-700 tracking-wide text-lg">
            &copy; {new Date().getFullYear()} Edgeify Digital. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
