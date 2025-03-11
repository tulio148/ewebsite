import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import { ScrollSectionWithImage } from "@/components/ScrollSectionWithImage";
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
        imageSrc="workspace.jpeg"
        imageAlt="Futuristic web design concept"
        heading={headings.secondHeading}
      />
      <ScrollSectionWithImage
        lines={lines.thirdSectionLines}
        imageSrc="heroimg.jpeg"
        imageAlt="Futuristic web design concept"
        heading={headings.thirdHeading}
        imagePosition="left"
      />
    </>
  );
}
