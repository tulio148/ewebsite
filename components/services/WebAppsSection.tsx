"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "../AnimatedHeading";
import { Icon, IconProps } from "../Icon";
import {
  faBriefcase,
  faStar,
  faChartPie,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedSubtitle from "../AnimatedSubtitle";
import { servicesSubtitles } from "@/lib/subtitles";
import { newHeadings } from "@/lib/headings";
interface WebAppBenefit {
  title: string;
  description: string;
  icon: IconProps;
}
const webAppBenefits: WebAppBenefit[] = [
  {
    title: "Efficient and Productive",
    description:
      "Custom web applications automate workflows, reduce manual tasks, and centralize your business processes for increased efficiency and productivity.",
    icon: { icon: faBriefcase },
  },
  {
    title: "Better Customer Experience",
    description:
      "Provide personalized, self-service interfaces that delight customers and give them 24/7 access to your services with intuitive dashboards and portals.",
    icon: { icon: faStar },
  },
  {
    title: "Data-Driven Insights",
    description:
      "Harness your business data with powerful analytics tools, real-time reporting, and visualizations that help you make informed decisions faster.",
    icon: { icon: faChartPie },
  },
  {
    title: "Scalable Architecture",
    description:
      "Built on modern technologies that grow with your business, from handling increased users to expanding functionality without rebuilding from scratch.",
    icon: { icon: faArrowUp },
  },
];

export function WebAppsSection() {
  const webAppsSectionRef = useRef(null);

  const { scrollYProgress: webAppsScrollProgress } = useScroll({
    target: webAppsSectionRef,
  });

  return (
    <div className="max-w-7xl mx-auto mb-24 px-8" ref={webAppsSectionRef}>
      <div className="mb-12">
        <AnimatedHeading
          scrollYProgress={webAppsScrollProgress}
          heading={newHeadings.powerfulWebApps}
          className="mb-4"
        />
        <AnimatedSubtitle
          scrollYProgress={webAppsScrollProgress}
          subtitle={servicesSubtitles.webApps}
          className="mb-8"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {webAppBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-accent/60 border border-accent p-8 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4 text-primary">
              <Icon icon={benefit.icon.icon} />
            </div>
            <h3 className="text-2xl mb-3 text-primary tracking-wider">
              {benefit.title}
            </h3>
            <p className="text-slate-600 text-balance text-lg tracking-wider">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center p-8 bg-primary rounded-lg text-white tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-xl font-semibold mb-2 tracking-wider">
          Need something unique? We build it.
        </p>
        <p className="text-balance text-lg tracking-wider">
          From client portals and dashboards to complex business systems, we
          deliver custom solutions tailored to your specific needs.
        </p>
      </motion.div>
    </div>
  );
}
