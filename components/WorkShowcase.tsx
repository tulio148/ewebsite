"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface WorkShowcaseProps {
  heading: React.ReactNode;
  projects: Project[];
  className?: string;
}

export function WorkShowcase({
  heading,
  projects,
  className = "",
}: WorkShowcaseProps) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className={`py-24 px-4 sm:px-6 md:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedHeading
          heading={heading}
          scrollYProgress={scrollYProgress}
          className="mb-16"
        />

        <motion.div
          style={{ y, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
