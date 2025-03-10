import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import { AnimatedHeroSection } from "@/components/AnimatedSectionWithImage";
import { firstHeading, secondHeading } from "@/lib/headings";
import { firstSectionLines, secondSectionLines } from "@/lib/lines";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollSection
        lines={firstSectionLines}
        heading={firstHeading}
        className="bg-gradient-to-b from-accent from-90%"
      />
      <AnimatedHeroSection
        lines={secondSectionLines}
        imageSrc="workspace.jpeg"
        imageAlt="Futuristic web design concept"
        heading={secondHeading}
      />
      <AnimatedHeroSection
        lines={secondSectionLines}
        imageSrc="workspace.jpeg"
        imageAlt="Futuristic web design concept"
        heading={secondHeading}
        imagePosition="left"
      />
    </>
  );
}
