import HeroSection from "@/components/HeroSection";
import ScrollSection from "@/components/ScrollSection";

export default function Home() {
  const firstSectionText = [
    "The web is changing <span class='text-primary font-extrabold'>quick</span>,",
    "and your website needs to keep up.",
    "Everyone is online now.",
    "People want sites that are <span class='text-primary font-bold'>fast, easy, and beautiful.</span>",
    "A slow, old site drives customers away.",
    "Your website is your face on the internet.",
    "It shows who you are and what you <span class='text-primary font-bold'>sell.</span>",
    "<span class='text-primary font-bold'>Is it working for you?</span>",
  ];

  return (
    <>
      <HeroSection />
      <ScrollSection paragraphs={firstSectionText} />
      <div className="mb-[4000px]"></div>
    </>
  );
}
