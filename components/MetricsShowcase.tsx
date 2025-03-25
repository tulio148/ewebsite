"use client";
import { motion } from "framer-motion";

interface MetricProps {
  label: string;
  value: string;
  description?: string;
}

interface MetricsShowcaseProps {
  title: string;
  description: string;
  metrics: MetricProps[];
  comparisonPoints: string[];
}

export default function MetricsShowcase({
  title,
  description,
  metrics,
  comparisonPoints,
}: MetricsShowcaseProps) {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          {title}
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

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
              className={`text-center p-8 rounded-lg ${
                index === metrics.length - 1
                  ? "bg-accent text-white"
                  : "bg-white"
              }`}
            >
              <div className="text-5xl font-bold mb-2">{metric.value}</div>
              <div className="text-xl font-medium mb-2">{metric.label}</div>
              {metric.description && (
                <div
                  className={`text-sm ${
                    index === metrics.length - 1
                      ? "text-white/80"
                      : "text-gray-500"
                  }`}
                >
                  {metric.description}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Why Speed Is Critical
          </h3>
          <div className="space-y-4">
            {comparisonPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center bg-white p-4 rounded-md shadow-sm"
              >
                <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                  <span>{index + 1}</span>
                </div>
                <p>{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
