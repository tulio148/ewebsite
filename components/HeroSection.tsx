"use client";

import LogoAnimation from "./LogoAnimation";
import FloatingPaths from "./FloatingPaths";
import AnimatedH1 from "./AnimatedH1";
import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["italic"],
});

export default function HeroSection() {
  return (
    <>
      <div className="absolute inset-0 sm:h-[170vh] h-[220vh] ">
        <FloatingPaths position={0} />
      </div>
      <section className="relative min-h-screen w-full flex flex-col mt-24  mb-96">
        <div className="relative flex flex-col  justify-around px-7 z-10 mx-auto h-screen">
          <AnimatedH1>{heroText}</AnimatedH1>
          <LogoAnimation />
        </div>
      </section>
    </>
  );
}

const heroText = [
  <span key="1">fast,&nbsp;</span>,
  <em key="2">smart&nbsp;</em>,
  <em className="font-normal text-secondary/80 " key="3">
    websites&nbsp;
  </em>,
  <span key="4">&&nbsp;</span>,
  <span key="5" className=" font-normal text-secondary/80 ">
    AI&nbsp;
  </span>,
  <em className="font-normal text-secondary/80 " key="6">
    solutions&nbsp;
  </em>,
  <span key="7">to&nbsp;</span>,
  <span key="8">drive&nbsp;</span>,
  <span key="9">your&nbsp;</span>,
  <em key="10" className={`${bodoniModa.className} font-bold text-primary   `}>
    success.
  </em>,
];
