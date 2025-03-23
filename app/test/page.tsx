import ProgressiveHero from "@/components/ProgressiveHero";
// Usage example:
export default function HeroSection() {
  return (
    <div className="relative">
      <ProgressiveHero
        lowQualitySrc="/testlow.webp"
        highQualitySrc="/testhigh.webp"
        alt="Beautiful mountain landscape"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Welcome to Our Site</h1>
      </div>
    </div>
  );
}
