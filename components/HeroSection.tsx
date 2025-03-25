"use client";

import LogoAnimation from "./LogoAnimation";
import FloatingPaths from "./FloatingPaths";
import AnimatedH1 from "./AnimatedH1";
import { Bodoni_Moda, Raleway } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic"],
});

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <>
      <div className="absolute inset-0 h-[170vh]  ">
        <FloatingPaths position={0} />
      </div>
      <section className="relative min-h-screen max-w-7xl flex flex-col mx-auto sm:pt-16 mb-96  pb-96">
        <div
          className={`relative flex flex-col justify-around px-7 z-10 mx-auto h-screen ${raleway.className}`}
        >
          <AnimatedH1>{heroText}</AnimatedH1>
          <LogoAnimation />
        </div>
      </section>
    </>
  );
}

const heroText = [
  <span key="1">fast,&nbsp;</span>,
  <span key="2">smart&nbsp;</span>,
  <span className=" text-primary " key="3">
    websites&nbsp;
  </span>,
  <span key="4">and&nbsp;</span>,
  <span key="5" className="  text-primary    ">
    AI powered&nbsp;
  </span>,
  <em className=" text-primary " key="6">
    assistants&nbsp;
  </em>,
  <span key="7">to&nbsp;</span>,
  <span key="8">drive&nbsp;</span>,
  <span key="9">your&nbsp;</span>,
  <em key="10" className={`${bodoniModa.className} text-primary font-bold`}>
    success.
  </em>,
];
