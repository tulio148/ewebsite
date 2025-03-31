"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
    <footer className="bg-primary sticky bottom-0 w-full text-white pt-12 pb-6 -z-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <Image
                src="/fullLogo-removebg.webp"
                alt="Edgeify Digital Logo"
                width={150}
                height={100}
                priority={true}
                className="mx-auto md:mx-0"
              />
            </Link>
            <p className="text-gray-600 text-center md:text-left">
              Elevating your digital presence with cutting-edge solutions.
            </p>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2" role="menu">
              {footerLinks.map((link) => (
                <li key={link.id} role="none">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
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
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <ul className="space-y-2" role="list">
              {socialLinks.map((link) => (
                <li key={link.name} role="listitem">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-800 transition-colors"
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
            >
              <p className="text-white">
                <a
                  href="mailto:info@edgeify.com"
                  aria-label="Email us at info@edgeify.com"
                >
                  info@edgeify.com
                </a>
              </p>
              <p className="text-white">
                <a
                  href="tel:+11234567890"
                  aria-label="Call us at +1 (123) 456-7890"
                >
                  +1 (123) 456-7890
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-t border-gray-200 pt-6 text-center"
        >
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Edgeify Digital. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
