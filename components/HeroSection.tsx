"use client";

import LogoAnimation from "./LogoAnimation";
import FloatingPaths from "./FloatingPaths";
import AnimatedH1 from "./AnimatedH1";
import { Raleway } from "next/font/google";

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
  <span key="1" className="  bg-primary/90  bg-clip-text ">
    fast,&nbsp;
  </span>,
  <span key="2" className="  bg-primary/90  bg-clip-text ">
    smart&nbsp;
  </span>,
  <span
    className=" bg-gradient-to-t underline decoration-primary decoration-0  from-primary/20  bg-clip-text "
    key="3"
  >
    websites&nbsp;
  </span>,
  <span key="4" className="  bg-gradient-to-b from-primary/20 bg-clip-text ">
    and&nbsp;
  </span>,
  <span
    key="5"
    className="underline decoration-primary decoration-0   bg-gradient-to-t from-primary/20 bg-clip-text "
  >
    AI powered&nbsp;
  </span>,
  <em
    className=" bg-gradient-to-t underline decoration-primary decoration-0  from-primary/20 bg-clip-text "
    key="6"
  >
    solutions&nbsp;
  </em>,
  <span key="7" className="   bg-gradient-to-b from-primary/20 bg-clip-text">
    to&nbsp;
  </span>,
  <span key="8" className="  bg-gradient-to-b from-primary/20 bg-clip-text">
    drive&nbsp;
  </span>,
  <span key="9" className="  bg-gradient-to-b from-primary/20 bg-clip-text">
    your&nbsp;
  </span>,
  <span
    key="10"
    style={{ WebkitTextStroke: "1px white" }}
    className={`font-bold bg-gradient-to-r from-primary/90 to-primary/60 rounded-2xl  px-1  text-white  border-b-2 border-accent `}
  >
    success.
  </span>,
];
