import React from "react";
import { Card, CardContent } from "./ui/card";


const Footer = (): JSX.Element => {
  const socialIcons = [
    {
      alt: "linkedin",
      className: "relative w-4 h-4",
      url: "https://www.linkedin.com/in/habiba-ehab-ux-designer/",
    },
    {
      alt: "behance",
      className: "relative w-4 h-4",
      url: "https://www.behance.net/he45",
    },
  ];

  return (
    <Card className="border-0 relative flex items-center justify-between px-10 py-3 w-full max-w-[1200px] h-16 rounded-[50px] backdrop-blur-[9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9px)_brightness(100%)] rounded-[50px] h-16">
      <CardContent className="p-0 flex items-center justify-between w-full">
        <div className="flex flex-col items-start">
          <p className="font-habibauiux-framer-website-inter-medium font-[number:var(--habibauiux-framer-website-inter-medium-font-weight)] text-[#4D4D4D] text-[length:var(--habibauiux-framer-website-inter-medium-font-size)] tracking-[var(--habibauiux-framer-website-inter-medium-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-medium-line-height)] whitespace-nowrap [font-style:var(--habibauiux-framer-website-inter-medium-font-style)]">
            Habiba© 2025.All Rights Reserved
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex flex-col items-start">
          </div>

          <div className="flex items-center gap-4">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span className="text-[#4D4D4D] text-lg font-bold hover:text-habibauiuxframerwebsitepurple-heart transition-colors duration-200">
                  {icon.alt === "linkedin" ? "LinkedIn" : icon.alt === "behance" ? "Behance" : ""}
                </span>
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;