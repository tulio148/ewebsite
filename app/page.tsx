import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import { ScrollSectionWithImage } from "@/components/ScrollSectionWithImage";
import AnimatedFeatureList from "@/components/AnimatedFeatureList";
import AnimatedScrollProgress from "@/components/AnimatedScrollProgress";
import * as headings from "@/lib/headings";
import * as lines from "@/lib/lines";
import { sections } from "@/lib/scrollSections";

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
      <AnimatedFeatureList
        title="how we build websites that work"
        subtitle="You focus on your business. We handle the tech."
        benefits={[
          "A site that loads fast and keeps people engaged",
          "A design that makes your business look modern and professional",
          "A setup that's easy to manage, with no tech headaches",
        ]}
      />
      <AnimatedScrollProgress
        sections={sections}
        heading="steps to success"
        className="text-white"
      />
      <div className="mb-[4000px]"></div>
    </>
  );
}
