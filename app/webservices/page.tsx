import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";
import { ScrollSectionWithImage } from "@/components/ScrollSectionWithImage";
import AnimatedFeatureList from "@/components/AnimatedFeatureList";
import AnimatedScrollProgress from "@/components/AnimatedScrollProgress";
import { webServicesHeadings } from "@/lib/headings";
import { webServicesLines } from "@/lib/lines";
import { sections } from "@/lib/scrollSections";
import ContentSection from "@/components/ContentSection";
import { contentSections } from "@/lib/contentSections";
import PerformanceStats from "@/components/PerformanceStats";
import { optimizedImages } from "@/lib/images";
import {
  faClock,
  faMoneyBillWave,
  faMobile,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
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
        className="bg-gradient-to-t from-primary/10 to-white mb-0 lg:mb-0"
      />
      {contentSections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          content={section.content}
          className={
            index % 2 === 0
              ? "bg-gradient-to-b from-primary/10 to-white"
              : "bg-gradient-to-b from-white to-primary/10"
          }
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
        sections={sections}
        heading="steps to success"
        className="text-white"
      />
      <div className="h-[4000px] bg-accent"></div>
    </>
  );
}
