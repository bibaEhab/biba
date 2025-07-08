import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import soon from "../pics/soon elion.png";
import proud from "../pics/proud elion.png";
import star from "../pics/star.svg";
import checkbox from "../pics/checkbox.svg";

const Services = (): JSX.Element => {
  const benefits = [
    {
      title: "UI design",
      description:
        "Visually stunning, intuitive interfaces that captivate users and elevate your brand identity",
      iconSrc: checkbox,
    },
    {
      title: "UX design",
      description:
        "User-focused experiences shaped by thoughtful research and proven methodologies.",
      iconSrc: checkbox,
    },
    {
      title: "UX research",
      description:
        "Deep user insights and validation that drive smarter, user-friendly design decisions.",
      iconSrc: checkbox,
    },
    {
      title: "Discovery workshops",
      description:
        "Interactive sessions designed to clarify project goals and user needs, laying a strong foundation for success.",
      iconSrc: checkbox,
    },
    {
      title: "Website design",
      description:
        "Striking, easy-to-navigate websites designed to communicate clearly and convert effectively.",
      iconSrc: checkbox,
    },
    {
      title: "Framer development",
      description:
        "High-fidelity, animated web experiences brought to life with powerful, interactive Framer prototypes.",
      iconSrc: checkbox,
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-center gap-[60px] p-20 relative">
      <div className="flex flex-col w-full items-center justify-center gap-6 relative overflow-hidden py-8">
        <div className="inline-flex flex-col items-start relative z-[1]">
          <Badge
            variant="outline"
            className="inline-flex items-center justify-center gap-[5px] py-2 px-3 bg-habibauiuxframerwebsitecod-gray-80 text-white border-[#222222] rounded-md"
          >
            <div className="flex items-center justify-center w-[15px] h-[15px] relative">
              <img
                className="w-3.5 h-3.5"
                alt="star"
                src={star}
              />
            </div>
            <span className="font-['Figtree',Helvetica] font-medium text-sm tracking-[-0.28px] leading-[16.8px]">
              Services
            </span>
          </Badge>
        </div>

        <div className="flex flex-col w-full items-center justify-center gap-[15px] relative z-0">
          <div className="flex flex-col max-w-[844px] items-center justify-center relative">
            <h1 className="font-['Figtree',Helvetica] font-semibold text-white text-[50px] text-center tracking-[-2.00px] leading-[55px]">
              &#34;Congrats—you&#39;ve found a design partner ready to supercharge
              your brand.
            </h1>
          </div>

          <div className="flex flex-col max-w-[600px] items-center justify-center relative">
            <p className="font-['Figtree',Helvetica] font-medium text-habibauiuxframerwebsitesilver text-lg text-center tracking-[-0.36px] leading-[27px]">
              Curious how I&apos;ll help your business thrive online? Here&#39;s a
              peek at my creative toolkit. From sleek websites to standout apps,
              I&apos;ve got all your UX/UI needs covered.&#34;
            </p>
          </div>
        </div>
      </div>

      <section className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <Card
              key={`benefit-${index}`}
              className="h-[212px] rounded-lg border border-solid border-[#222222] overflow-hidden bg-transparent"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 100%, rgba(129,74,200,0.3) 0%, rgba(129,74,200,0) 100%)",
              }}
            >
              <CardContent className="flex flex-col items-start justify-center gap-2.5 p-[30px] h-full">
                <div className="flex items-center w-full">
                  <div className="relative w-6 h-6">
                    <img
                      className="absolute w-[24px] h-[24px] top-[3px] left-[0px]"
                      alt="Icon"
                      src={benefit.iconSrc}
                    />
                  </div>
                </div>

                <div className="relative w-full">
                  <h3 className="font-['Figtree',Helvetica] font-medium text-white text-[23px] tracking-[-0.46px] leading-[27.6px] mb-3">
                    {benefit.title}
                  </h3>

                  <p className="font-habibauiux-framer-website-figtree-medium text-habibauiuxframerwebsitesilver text-[16px] tracking-[-0.32px] leading-[22.4px]">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="flex items-center gap-5 p-5 bg-black rounded-lg overflow-hidden border border-[#222222]">
        <img
          className="w-[185px] h-[183px]"
          alt="soon"
          src={soon}
        />

        <CardContent className="flex flex-col items-start gap-5 p-0">
          <div className="flex items-center gap-2.5 w-full">
            <div className="flex flex-col items-start">
              <h3 className="font-['Figtree',Helvetica] font-medium text-[#ffffffcc] text-[23px] tracking-[-0.46px] leading-[27.6px]">
                Framer & Figma Templates
              </h3>
            </div>
          </div>
        </CardContent>
      </Card>

      <img
        className="absolute w-28 h-28 top-[417px] left-[64px] object-cover"
        alt="proud"
        src={proud}
      />
    </section>
  );
};

export default Services;