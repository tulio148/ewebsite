import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import { ScrollSectionWithImage } from "@/components/ScrollSectionWithImage";
import AnimatedFeatureList from "@/components/AnimatedFeatureList";
import AnimatedScrollProgress from "@/components/AnimatedScrollProgress";
import { webServicesHeadings } from "@/lib/headings";
import { webServicesLines } from "@/lib/lines";
import { methodOfWorkSections } from "@/lib/scrollSections";
import ContentSection from "@/components/ContentSection";
import { contentSections } from "@/lib/contentSections";
import PerformanceStats from "@/components/PerformanceStats";
import { optimizedImages } from "@/lib/images";
import Script from "next/script";
import { Metadata } from "next";
import {
  faClock,
  faMoneyBillWave,
  faMobile,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

// Add metadata for this specific page
export const metadata: Metadata = {
  title: "Fast & SEO-Optimized Website Development | Edgeify Digital",
  description:
    "Edgeify builds lightning-fast, SEO-optimized websites that load in milliseconds, convert visitors into customers, and grow your business.",
  keywords: [
    "fast websites",
    "SEO-optimized websites",
    "website development",
    "responsive websites",
    "business websites",
  ],
};

// JSON-LD structured data for services
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Development Services",
  provider: {
    "@type": "Organization",
    name: "Edgeify Digital",
    url: "https://edgeify.digital",
  },
  description:
    "Professional website development with focus on speed, SEO, and conversion optimization.",
  serviceType: "Website Development",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lightning-Fast Websites",
          description: "Pages load in milliseconds for maximum conversions.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO-Optimized Websites",
          description: "Get found on Google effortlessly.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom and Scalable",
          description: "Designed for your brand, built to grow.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <HeroSection />
      <ScrollSection
        lines={webServicesLines.first}
        heading={webServicesHeadings.first}
        className="bg-gradient-to-b from-white via-accent to-white"
      />
      <ScrollSectionWithImage
        lines={webServicesLines.second}
        image={optimizedImages.webDesign}
        heading={webServicesHeadings.second}
      />
      <ScrollSectionWithImage
        lines={webServicesLines.third}
        image={optimizedImages.webWorkspace}
        heading={webServicesHeadings.third}
        imagePosition="left"
      />
      {contentSections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          content={section.content}
          // className={
          //   index % 2 === 0
          //       ? "bg-gradient-to-b from-primary/10 to-white"
          //     : "bg-gradient-to-b from-white to-primary/10"
          // }
        />
      ))}

      <PerformanceStats
        title="Website Performance Matters"
        subtitle="Speed is not just a feature. It's a requirement for success in today's digital landscape"
        stats={[
          {
            icon: faClock,
            metric: "83% of users expect fast loading",
            description:
              "Online users expect websites to load in 3 seconds or less. Slow loading times lead to user frustration and abandonment.",
          },
          {
            icon: faMoneyBillWave,
            metric: "3x higher conversion rates",
            description:
              "A one-second page load time can result in conversion rates up to 3 times higher compared to a five-second load time. Speed directly impacts your bottom line.",
          },
          {
            icon: faMobile,
            metric: "1.9s mobile, 1.7s desktop",
            description:
              "The average web page load time is 1.9 seconds on mobile and 1.7 seconds on desktop in 2025. Ensure your site meets or beats these benchmarks.",
          },
          {
            icon: faChartLine,
            metric: "43% of small businesses",
            description:
              "Nearly 43% of small businesses plan to invest in enhancing their website's performance. Stay competitive by prioritizing site speed.",
          },
          {
            icon: faMoneyBillWave,
            metric: "$2.6 billion in lost sales",
            description:
              "Slow-loading websites lead to an annual loss of $2.6 billion in sales for businesses. Don't let poor performance cost you revenue.",
          },
        ]}
      />

      <AnimatedFeatureList
        title="how we build websites that work"
        subtitle="You focus on your business. We handle the tech."
        benefits={[
          "A site that loads fast and keeps people engaged",
          "A design that makes your business look modern and professional",
          "A setup that&apos;s easy to manage, with no tech headaches",
        ]}
      />
      <AnimatedScrollProgress
        sections={methodOfWorkSections}
        heading="steps to success"
        className="text-white"
      />
    </>
  );
}
