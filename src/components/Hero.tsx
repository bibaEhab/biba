"use client";
import React from "react";
import { Button } from "./ui/button";
import originalPic from "../pics/original.png";

const Hero = (): JSX.Element => {
  const decorativeElements = {
    mainImage: originalPic,
    arrowImage: "/https---lottiefiles-com-animations-arrow-down-ijfxfpnf8u.png",
  };

  return (
    <section className="flex items-center justify-center gap-12 py-[120px] bg-habibauiuxframerwebsitebunting overflow-hidden relative w-full">
      <div className="flex items-center gap-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 max-w-[690px]">
          <div className="flex flex-col items-start w-full">
            <h1 className="font-habibauiux-framer-website-inter-bold font-[number:var(--habibauiux-framer-website-inter-bold-font-weight)] text-white text-[length:var(--habibauiux-framer-website-inter-bold-font-size)] tracking-[var(--habibauiux-framer-website-inter-bold-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-bold-line-height)]">
              Design that&#39;s simply out of this world.
            </h1>
          </div>

          <div className="flex flex-col items-start w-full">
            <p className="font-['Inter',Helvetica] font-normal text-white text-[32px] leading-[38.4px]">
              Bold, memorable websites and apps for startups ready to
              shine.&#34;
            </p>
          </div>

          <Button
            variant="default"
            className="bg-white text-habibauiuxframerwebsiteblack hover:bg-white/90 px-12 py-[22px] h-auto rounded-2xl w-[280px] shadow-[0px_0px_0px_1px_#4930eb1f,0px_2px_2px_-1px_#0000001a,0px_4px_10px_-2px_#0000000d] backdrop-blur-[5px]"
          >
            <span className="font-['Inter',Helvetica] font-medium text-xl leading-6">
              Explore
            </span>
          </Button>
        </div>

        <div className="relative w-[718px] h-[676px]">
          <div className="relative w-[640px] h-[679px] top-[38px] left-[46px]">
            <img
              className="absolute w-[640px] h-[640px] top-[39px] left-0 object-cover"
              alt="Spaceship illustration"
              src={decorativeElements.mainImage}
            />
          </div>
        </div>
      </div>

      <div className="absolute w-[84px] h-[236px] top-[697px] left-[1120px] overflow-hidden rotate-[30deg]">
        <img
          className="absolute w-[138px] h-[178px] top-[29px] left-[-27px] rotate-[-30deg] object-cover"
          alt="Arrow pointing down"
          src={decorativeElements.arrowImage}
        />
      </div>
    </section>
  );
};

export default Hero;