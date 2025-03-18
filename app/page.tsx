// import AnimatedHeading from "@/components/AnimatedHeading";
import HeroSection from "@/components/HeroSection";
import { ImageAnimation } from "@/components/ImageAnimation";
// import * as headings from "@/lib/headings";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-[40px] "></div>
      <ImageAnimation image="heroImag.jpeg" className="" />
      {/* <AnimatedHeading heading={headings.firstHeading} /> */}
      <div className="h-[4000px] bg-accent"></div>
    </>
  );
}
