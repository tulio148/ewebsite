"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ContentSectionProps {
  title: string;
  content: React.ReactNode;
  className?: string;
}

const ContentSection: FC<ContentSectionProps> = ({
  title,
  content,
  className = "",
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 1 });

  return (
    <div className={`h-[200vh] relative ${className}`}>
      <div
        ref={sectionRef}
        className="sticky top-0 left-0 w-full h-screen flex items-center"
      >
        <motion.div
          className="max-w-4xl mx-auto px-8 relative"
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: isInView ? 1 : 0, width: "100%" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          <motion.h2 className="text-4xl md:text-6xl font-semibold mb-8 text-primary">
            {title}
          </motion.h2>
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <motion.p
                key={index}
                className="text-xl lg:text-2xl text-justify text-secondary/90 font-light 
                      mb-4 md:mb-2 lg:mb-3 tracking-wider leading-relaxed"
              >
                {item}
              </motion.p>
            ))
          ) : (
            <motion.p
              className="text-xl lg:text-2xl text-justify text-secondary/90 font-light 
                      mb-3 md:mb-2 lg:mb-3 tracking-wider leading-relaxed"
            >
              {content}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContentSection;
