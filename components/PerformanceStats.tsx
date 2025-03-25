"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type StatItem = {
  icon: IconDefinition;
  metric: string;
  description: string;
  imageSrc?: string;
};

type PerformanceStatsProps = {
  title: string;
  subtitle?: string;
  stats: StatItem[];
  className?: string;
};

export default function PerformanceStats({
  title,
  subtitle,
  stats,
  className = "",
}: PerformanceStatsProps) {
  return (
    <section className={`py-16 px-4 md:px-8 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold mb-8 text-primary"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-light tracking-wider lg:text-2xl text-gray-600 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary text-2xl mr-3">
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <h3 className="text-xl font-bold">{stat.metric}</h3>
              </div>
              <p className="text-gray-600 mb-4">{stat.description}</p>
              {stat.imageSrc && (
                <div className="mt-auto pt-4 relative h-40 w-full overflow-hidden rounded-lg">
                  <Image
                    src={`/${stat.imageSrc}`}
                    alt="Performance visualization"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
