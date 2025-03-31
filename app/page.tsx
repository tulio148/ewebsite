import HeroSection from "@/components/HeroSection";
import { ScrollSectionWithImage } from "@/components/ScrollSectionWithImage";
import RevealImage from "@/components/RevealImage";
import { homeHeadings } from "@/lib/headings";
import { homeLines } from "@/lib/lines";
import { homeSubtitles } from "@/lib/subtitles";
import { WebsitesSection } from "@/components/services/WebsitesSection";
import { WebAppsSection } from "@/components/services/WebAppsSection";
import { AIAssistantsSection } from "@/components/services/AIAssistantsSection";
import { optimizedImages } from "@/lib/images";
import IsometricDesigners from "@/components/IsometricDesigners";
import Script from "next/script";

// JSON-LD structured data for organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "WebDevelopmentCompany",
  name: "Edgeify Digital",
  url: "https://edgeify.digital",
  logo: "https://edgeify.digital/logos/logoImg-128.avif",
  description:
    "Edgeify Digital builds lightning-fast, SEO-optimized websites, custom web applications, and AI assistants that convert visitors into customers and grow your business.",
  sameAs: [
    "https://twitter.com/edgeifydigital",
    "https://www.linkedin.com/company/edgeify-digital",
    "https://www.facebook.com/edgeifydigital",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-000-000-0000",
    contactType: "customer service",
    email: "contact@edgeify.digital",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <RevealImage image={optimizedImages.heroImage} direction="top-left" />
      <ScrollSectionWithImage
        heading={homeHeadings.businessGrowth}
        subtitle={homeSubtitles.businessGrowth}
        lines={homeLines.businessGrowth}
        image={optimizedImages.firstSection}
        imagePosition="left"
        className="py-16"
      />
      <div className="py-32">
        <IsometricDesigners />
      </div>
      <div className="py-64 ">
        <WebsitesSection />
      </div>
      <RevealImage
        image={optimizedImages.webDevelopment}
        direction="top-left"
      />
      <div className="py-64 bg-accent">
        <WebAppsSection />
      </div>
      <RevealImage image={optimizedImages.teamWork} direction="top-right" />
      <div className="py-64 bg-accent">
        <AIAssistantsSection />
      </div>
      <RevealImage
        image={optimizedImages.aiAssistant}
        direction="bottom-left"
      />
      <div className="h-[4000px] bg-accent"></div>
    </>
  );
}
