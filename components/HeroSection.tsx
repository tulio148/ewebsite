"use client";

import LogoAnimation from "./LogoAnimation";
import FloatingPaths from "./FloatingPaths";
import AnimatedH1 from "./AnimatedH1";
import { Bodoni_Moda, Raleway } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  weight: ["700"],
  // subsets: ["latin"],
  // style: ["italic"],
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
  <span key="1" className="  bg-primary  bg-clip-text ">
    fast,&nbsp;
  </span>,
  <span key="2" className="  bg-primary  bg-clip-text ">
    smart&nbsp;
  </span>,
  <span className=" bg-gradient-to-t from-primary/90  bg-clip-text " key="3">
    websites&nbsp;
  </span>,
  <span key="4" className="  bg-gradient-to-b from-primary/20 bg-clip-text ">
    and&nbsp;
  </span>,
  <span
    key="5"
    className="  bg-gradient-to-t from-primary/90 to-white bg-clip-text "
  >
    AI powered&nbsp;
  </span>,
  <em className=" bg-gradient-to-t from-primary/90 bg-clip-text " key="6">
    solutions&nbsp;
  </em>,
  <span key="7" className="  bg-gradient-to-b from-primary/20 bg-clip-text">
    to&nbsp;
  </span>,
  <span key="8" className="  bg-gradient-to-b from-primary/20 bg-clip-text">
    drive&nbsp;
  </span>,
  <span key="9" className="  bg-gradient-to-b from-primary/20 bg-clip-text">
    your&nbsp;
  </span>,
  <em
    key="10"
    className={`${bodoniModa.className} bg-primary  bg-clip-text tracking-widest font-extrabold`}
  >
    success.
  </em>,
];
