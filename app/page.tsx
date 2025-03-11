import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import { ScrollSectionWithImage } from "@/components/ScrollSectionWithImage";
import WebsiteValue from "@/components/test";
import EnhancedScrollProgress from "@/components/test2";
import * as headings from "@/lib/headings";
import * as lines from "@/lib/lines";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollSection
        lines={lines.firstSectionLines}
        heading={headings.firstHeading}
        className="bg-gradient-to-b from-accent from-90%"
      />
      <ScrollSectionWithImage
        lines={lines.secondSectionLines}
        imageSrc="workspace.webp"
        imageAlt="Futuristic web design concept"
        heading={headings.secondHeading}
      />
      <ScrollSectionWithImage
        lines={lines.thirdSectionLines}
        imageSrc="heroimg.webp"
        imageAlt="Futuristic web design concept"
        heading={headings.thirdHeading}
        imagePosition="left"
      />
      <WebsiteValue />
      <div className="relative">
        <EnhancedScrollProgress />
      </div>
      <div className="mb-[4000px]"></div>
    </>
  );
}
