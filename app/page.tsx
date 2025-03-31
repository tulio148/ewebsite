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

export default function Home() {
  return (
    <>
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
