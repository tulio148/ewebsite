"use client";
import { motion } from "framer-motion";
import { Icon } from "@/components/Icon";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
interface ServiceProps {
  title: string;
  description: string;
  icon: IconDefinition;
}

interface ServiceGridProps {
  heading: string;
  description: string;
  services: ServiceProps[];
}

export default function ServiceGrid({
  heading,
  description,
  services,
}: ServiceGridProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center capitalize mb-4"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-accent text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Icon icon={service.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
