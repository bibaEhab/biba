import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import linkedinSvg from '../pics/linkedin.svg';
import behanceSvg from '../pics/behance.svg';


const Footer = (): JSX.Element => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const socialIcons = [
    {
      alt: "linkedin",
      src: linkedinSvg,
      className: "relative w-24 h-24",
      url: "https://www.linkedin.com/in/habiba-ehab-ux-designer/",
    },
    {
      alt: "behance",
      src: behanceSvg,
      className: "relative w-24 h-24",
      url: "https://www.behance.net/he45",
    },
  ];

  return (
    <Card className="border-0 relative flex items-center justify-between px-10 py-3 w-full max-w-[1200px] h-16 rounded-[50px] backdrop-blur-[9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9px)_brightness(100%)] rounded-[50px] h-16">
      <CardContent className="p-0 flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <p className="font-habibauiux-framer-website-inter-medium font-[number:var(--habibauiux-framer-website-inter-medium-font-weight)] text-[#CCCCCC] text-[length:var(--habibauiux-framer-website-inter-medium-font-size)] tracking-[var(--habibauiux-framer-website-inter-medium-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-medium-line-height)] whitespace-nowrap [font-style:var(--habibauiux-framer-website-inter-medium-font-style)]">
            Habiba© 2025.All Rights Reserved
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex flex-col items-start">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-habibauiuxframerwebsiteblack text-base tracking-[0] leading-4 whitespace-nowrap">
              <span className="font-[number:var(--habibauiux-framer-website-inter-medium-font-weight)] text-[#CCCCCC] font-habibauiux-framer-website-inter-medium [font-style:var(--habibauiux-framer-website-inter-medium-font-style)] tracking-[var(--habibauiux-framer-website-inter-medium-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-medium-line-height)] text-[length:var(--habibauiux-framer-website-inter-medium-font-size)]">
                Designed by{" "}
              </span>
              <span className="font-bold text-[#CCCCCC]">Habiba Ehab</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialIcons.slice(0, 2).map((icon, index) => (
              <div key={`social-icon-${index}`} className="relative w-6 h-6">
                <a href={icon.url} target="_blank" rel="noopener noreferrer">
                  <div
                    className={
                      (index === 0
                        ? "flex flex-col  items-start relative top-px"
                        : "flex flex-col  items-start relative top-px")
                    }
                  >
                    <div
                      className={
                        (index === 0
                          ? "w-6 h-[19px] pt-0 px-0 flex flex-col items-start relative"
                          : "w-6 h-[15px] pl-0 py-0 flex flex-col items-start relative")
                      }
                    >
                      <img
                        className={
                          icon.className +
                          " transition duration-200" +
                          (hoveredIcon === index
                            ? " filter brightness-0 invert sepia hue-rotate-180"
                            : "")
                        }
                        alt={icon.alt}
                        src={icon.src}
                        onMouseEnter={() => setHoveredIcon(index)}
                        onMouseLeave={() => setHoveredIcon(null)}
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;