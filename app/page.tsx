import HeroSection from "@/components/HeroSection";
import { ImageAnimation } from "@/components/ImageAnimation";
import { ScrollSectionWithImage } from "@/components/ScrollSectionWithImage";
import RevealImage from "@/components/RevealImage";
import { homeHeadings } from "@/lib/headings";
import { homeLines } from "@/lib/lines";
import { homeSubtitles } from "@/lib/subtitles";
import { WebsitesSection } from "@/components/services/WebsitesSection";
import { WebAppsSection } from "@/components/services/WebAppsSection";
import { AIAssistantsSection } from "@/components/services/AIAssistantsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImageAnimation image="heroImag.jpeg" className="mb-16" />
      <ScrollSectionWithImage
        heading={homeHeadings.businessGrowth}
        subtitle={homeSubtitles.businessGrowth}
        lines={homeLines.businessGrowth}
        imageSrc="/about.jpeg"
        imageAlt="Our team at work"
        imagePosition="left"
        className="py-16"
      />
      <div className="py-64 bg-gradient-to-b from-white to-accent">
        <WebsitesSection />
      </div>
      <RevealImage
        featuredMobileBanner="/handshake.jpg"
        bigBanner="/handshake.jpg"
        direction="top-left"
      />
      <div className="py-64 bg-accent">
        <WebAppsSection />
      </div>
      <RevealImage
        featuredMobileBanner="/handshake.jpg"
        bigBanner="/handshake.jpg"
        direction="top-right"
      />
      <div className="py-64 bg-accent">
        <AIAssistantsSection />
      </div>
      <RevealImage
        featuredMobileBanner="/handshake.jpg"
        bigBanner="/handshake.jpg"
        direction="bottom-left"
      />
      <div className="h-[4000px] bg-accent"></div>
    </>
  );
}
