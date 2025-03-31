"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "../AnimatedHeading";
import { Icon, IconProps } from "../Icon";
import {
  faBolt,
  faSearch,
  faPalette,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedSubtitle from "../AnimatedSubtitle";
import { servicesSubtitles } from "@/lib/subtitles";
import { newHeadings } from "@/lib/headings";

interface FeatureItem {
  icon: IconProps;
  title: string;
  description: string;
}

// Extract features outside the component
const features: FeatureItem[] = [
  {
    icon: { icon: faBolt },
    title: "Lightning-Fast",
    description:
      "Pages load in milliseconds for maximum conversions. Our optimized code and server configurations ensure that your website performs at its best, providing a seamless experience for users.",
  },
  {
    icon: { icon: faSearch },
    title: "SEO-Optimized",
    description:
      "Get found on Google effortlessly. We implement best practices for SEO, ensuring your site ranks well and attracts organic traffic.",
  },
  {
    icon: { icon: faPalette },
    title: "Custom and Scalable",
    description:
      "Designed for your brand, built to grow. Our websites are tailored to your specific needs and can scale as your business expands.",
  },
  {
    icon: { icon: faShield },
    title: "Secure and Reliable",
    description:
      "We prioritize security with robust measures to protect your data and ensure your website is always available. Regular updates and monitoring keep your site safe from threats.",
  },
];

export function WebsitesSection() {
  const websiteSectionRef = useRef(null);

  const { scrollYProgress: websiteScrollProgress } = useScroll({
    target: websiteSectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <div className="max-w-7xl mx-auto px-8" ref={websiteSectionRef}>
      <div className="mb-12">
        <AnimatedHeading
          scrollYProgress={websiteScrollProgress}
          heading={newHeadings.fastOptimizedWebsites}
          className="mb-4 "
        />
        <AnimatedSubtitle
          scrollYProgress={websiteScrollProgress}
          subtitle={servicesSubtitles.websites}
          className="mb-8 text-balance"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4 text-primary">
              <Icon icon={feature.icon.icon} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary tracking-wider">
              {feature.title}
            </h3>
            <p className="text-gray-600 tracking-wider">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
