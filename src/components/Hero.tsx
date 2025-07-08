"use client";
import React from "react";
import { Button } from "./ui/button";
import originalPic from "../pics/original.png";
import badgeImg from '../pics/DESIGN SITES LIKE A PRO WITH ME NOW.svg';
import iconImg from '../pics/buttfrluy.png';

const Hero = (): JSX.Element => {
  const decorativeElements = {
    mainImage: originalPic,
  };

  return (
    <section className="flex items-center justify-center gap-12 py-[120px] bg-habibauiuxframerwebsitebunting overflow-hidden relative w-full">
      <div className="flex items-center gap-12 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 max-w-[690px]">
          <div className="relative flex items-center justify-center w-[100px] h-[60px] mb-4">
            <img
              src={badgeImg}
              alt="Design Site Badge"
              className="badge-bg animate-spin"
              style={{
                position: 'relative',
                width: '100px',
                height: '100px',
                zIndex: 1,
                objectFit: 'contain',
                animation: 'spin 10s linear infinite'
              }}
            />
            <img
              src={iconImg}
              alt="Icon"
              className="hero-icon"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '32px',
                height: '32px',
                zIndex: 2,
                objectFit: 'contain',
                display: 'block',
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
          <h1 className="font-habibauiux-framer-website-inter-bold font-[number:var(--habibauiux-framer-website-inter-bold-font-weight)] text-white text-[length:var(--habibauiux-framer-website-inter-bold-font-size)] tracking-[var(--habibauiux-framer-website-inter-bold-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-bold-line-height)]">
            Design that&#39;s simply out of this world.
          </h1>

          <div className="flex flex-col items-start w-full">
            <p className="font-['Inter',Helvetica] font-normal text-white text-[32px] leading-[38.4px]">
              Bold, memorable websites and apps for startups ready to
              shine.&#34;
            </p>
          </div>

          <Button
            variant="default"
            className="bg-white text-habibauiuxframerwebsiteblack hover:bg-white/90 px-12 py-[22px] h-auto rounded-2xl w-[280px] shadow-[0px_0px_0px_1px_#4930eb1f,0px_2px_2px_-1px_#0000001a,0px_4px_10px_-2px_#0000000d] backdrop-blur-[5px]"
            onClick={() => {
              document.getElementById('Services')?.scrollIntoView({ behavior: 'smooth' });
            }}
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

      <div className="absolute w-[84px] h-[236px] top-[730px] left-[1050px] overflow-visable rotate-[30deg]">
        <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
        <dotlottie-player
          src="https://lottie.host/eff28376-cc28-4813-bc2e-b6b51f61adee/powdaetiF8.lottie"
          background="transparent"
          speed="1"
          style={{ width: '94px', height: '94px' }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </section>
  );
};

export default Hero;