"use client";
import { cn } from "@/lib/utils";
import { WebsitesSection } from "./services/WebsitesSection";
import { WebAppsSection } from "./services/WebAppsSection";
import { AIAssistantsSection } from "./services/AIAssistantsSection";

interface ServicesShowcaseProps {
  className?: string;
}

export function ServicesShowcase({ className }: ServicesShowcaseProps) {
  return (
    <section className={cn("py-24 w-full", className)}>
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Fast, Optimized Websites */}
        <WebsitesSection />

        {/* Powerful Web Apps */}
        <WebAppsSection />

        {/* AI Business Assistants */}
        <AIAssistantsSection />
      </div>
    </section>
  );
}
