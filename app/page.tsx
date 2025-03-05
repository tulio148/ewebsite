import HeroSection from "@/components/hero";
import ParagraphWithAnimation from "@/components/test";
export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-accent ">
        <ParagraphWithAnimation />
      </div>
      <div className="mb-[4000px]"></div>
    </>
  );
}
