import React from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import linkedinSvg from '../pics/linkedin.svg';
import behanceSvg from '../pics/behance.svg';


const Footer = (): JSX.Element => {
  const socialIcons = [
    {
      alt: "linkedin",
      src: linkedinSvg,
      className: "relative w-5 h-[18.89px]",
    },
    {
      alt: "behance",
      src: behanceSvg,
      className: "relative w-[23.73px] h-[15px]",
    },
  ];

  return (
    <Card className="relative flex items-center justify-between px-10 py-3 w-full max-w-[1200px] h-16 rounded-[50px] bg-habibauiuxframerwebsitewhite-40 backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)]">
      <CardContent className="p-0 flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <p className="font-habibauiux-framer-website-inter-medium font-[number:var(--habibauiux-framer-website-inter-medium-font-weight)] text-habibauiuxframerwebsiteblack text-[length:var(--habibauiux-framer-website-inter-medium-font-size)] tracking-[var(--habibauiux-framer-website-inter-medium-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-medium-line-height)] whitespace-nowrap [font-style:var(--habibauiux-framer-website-inter-medium-font-style)]">
            Habiba© 2025.All Rights Reserved
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex flex-col items-start">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-habibauiuxframerwebsiteblack text-base tracking-[0] leading-4 whitespace-nowrap">
              <span className="font-[number:var(--habibauiux-framer-website-inter-medium-font-weight)] text-black font-habibauiux-framer-website-inter-medium [font-style:var(--habibauiux-framer-website-inter-medium-font-style)] tracking-[var(--habibauiux-framer-website-inter-medium-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-medium-line-height)] text-[length:var(--habibauiux-framer-website-inter-medium-font-size)]">
                Designed by{" "}
              </span>
              <span className="font-bold text-black">Habiba Ehab</span>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-0.5">
            {socialIcons.slice(0, 2).map((icon, index) => (
              <div key={`social-icon-${index}`} className="relative w-6 h-6">
                <div
                  className={
                    index === 0
                      ? "flex flex-col w-5 h-[19px] items-start relative top-px left-0.5"
                      : "flex flex-col w-6 h-[15px] items-start relative top-[5px]"
                  }
                >
                  <div
                    className={
                      index === 0
                        ? "w-5 h-[19px] pt-0 pb-[0.11px] px-0 flex flex-col items-start relative"
                        : "w-6 h-[15px] pl-0 pr-[0.27px] py-0 flex flex-col items-start relative"
                    }
                  >
                    <img
                      className={icon.className}
                      alt={icon.alt}
                      src={icon.src}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <Separator className="absolute w-full h-px bottom-0 left-0 bg-habibauiuxframerwebsitewhite-8" />
    </Card>
  );
};

export default Footer;