"use client";

import LogoAnimation from "./LogoAnimation";
// import FloatingPaths from "./FloatingPaths";
import AnimatedH1 from "./AnimatedH1";
import { Raleway } from "next/font/google";
import ScrollIndicator from "./ScrollIndicator";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <>
      {/* <div className="absolute inset-0 h-[170vh]  ">
        <FloatingPaths position={0} />
      </div> */}
      <section className="relative h-[100vh] w-full max-w-7xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex flex-col justify-between py-16 z-10 mx-auto h-full ${raleway.className}`}
        >
          <div className="flex-1 flex items-center">
            <AnimatedH1>{heroText}</AnimatedH1>
          </div>
          <div className="flex-1 flex items-center justify-end">
            <LogoAnimation />
          </div>
          {/* <div className="h-24 sm:h-32 relative"> */}
          <ScrollIndicator />
        </div>
      </section>
    </>
  );
}

const heroText = [
  <span key="1" className="bg-primary/90  bg-clip-text ">
    fast,&nbsp;
  </span>,
  <span key="2" className="bg-primary/90  bg-clip-text ">
    smart&nbsp;
  </span>,
  <span
    style={{ WebkitTextStroke: "1.5px #6a5ef0" }}
    className="bg-clip-text "
    key="3"
  >
    websites&nbsp;
  </span>,
  <span key="4" className="  bg-gradient-to-b from-primary/20 bg-clip-text ">
    and&nbsp;
  </span>,
  <span style={{ WebkitTextStroke: "1.5px #6a5ef0" }} key="5" className="    ">
    AI powered solutions&nbsp;
  </span>,

  <span key="6" className="bg-gradient-to-b from-primary/20 bg-clip-text">
    to&nbsp;
  </span>,
  <span key="7" className="bg-gradient-to-b from-primary/20 bg-clip-text">
    drive&nbsp;
  </span>,
  <span key="8" className="bg-gradient-to-b from-primary/20 bg-clip-text">
    your&nbsp;
  </span>,
  <span
    key="9"
    style={{ WebkitTextStroke: "0.6px #6a5ef0" }}
    className={`font-bold bg-gradient-to-l from-primary px-1 text-white  `}
  >
    success.
  </span>,
];
