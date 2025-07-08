import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import price from "../pics/pricing elion.png";
import check from "../pics/pricecheck.svg";
import star from "../pics/star.svg";


const Pricing = (): JSX.Element => {
  const customFeatures = [
    { text: "4 Hours / Day", icon: "/group-11.png" },
    { text: "Includes the unlimited plan", icon: "/group-12.png" },
    { text: "Remote", icon: "/group-13.png" },
  ];

  const projectFeatures = ["4 Hours / Day", "Includes the unlimited plan", "Remote"];

  const partTimeFeatures = [
    { text: "4 Hours / Day", image: "/group-17.png" },
    { text: "Includes the unlimited plan", image: "/group-18.png" },
    { text: "Remote", image: "/group-19.png" },
  ];

  const fullTimeFeatures = [
    "8 Hours / Day",
    "Includes the unlimited plan",
    "Remote"
  ];

  return (
    <section className="flex flex-col w-fit items-center justify-center p-20 relative bg-habibauiuxframerwebsiteblack">
      <div className="flex flex-col max-w-[1200px] w-fit items-center justify-center gap-[72px] relative">
        <section className="flex flex-col items-center justify-center gap-4 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col items-start">
          <Badge className="inline-flex items-center justify-center gap-[5px] pt-[7px] pb-2 px-3 relative bg-habibauiuxframerwebsitecod-gray-80 rounded-md overflow-hidden border border-solid border-[#222222]">
            <div className="flex flex-col w-[15px] h-[15px] items-start justify-center relative">
              <div className="relative self-stretch w-full h-[15px]">
                <img
                  className="absolute w-3.5 h-3.5 top-0 left-px"
                  alt="star"
                  src={star}
                />
              </div>
            </div>
            <span className="[font-family:'Figtree',Helvetica] font-medium text-white text-sm tracking-[-0.28px] leading-[16.8px] whitespace-nowrap">
              PRICING
            </span>
          </Badge>
          </div>

          <div className="flex justify-center items-center gap-3.5 w-full px-5 py-px">
            <h2 className="font-habibauiux-framer-website-semantic-heading-2 font-[number:var(--habibauiux-framer-website-semantic-heading-2-font-weight)] text-white text-[length:var(--habibauiux-framer-website-semantic-heading-2-font-size)] text-center tracking-[var(--habibauiux-framer-website-semantic-heading-2-letter-spacing)] leading-[var(--habibauiux-framer-website-semantic-heading-2-line-height)] whitespace-nowrap [font-style:var(--habibauiux-framer-website-semantic-heading-2-font-style)]">
              Transparent pricing, zero
            </h2>

            <span className="font-['Instrument_Serif',Helvetica] font-normal italic text-white text-[55px] text-center tracking-[0] leading-[60.5px] whitespace-nowrap">
              surprises.
            </span>
          </div>

          <div className="flex flex-col w-full max-w-[760px]">
            <p className="font-medium text-habibauiuxframerwebsitewhite-70 text-[16.7px] text-center tracking-[-0.36px] leading-[27px]">
              Select the perfect plan to stay organized, productive, and in full
              control.
            </p>
          </div>
        </section>

        <img
          className="absolute w-28 h-28 top-[159px] left-[546px] object-cover"
          alt="price"
          src={price}
        />

        <div className="flex flex-row items-center justify-center gap-[24px] relative w-fit">
          <div className="flex flex-wrap items-center justify-end gap-[24px] relative w-fit">
            {/* Custom Plan */}
            <Card className="flex flex-col w-full w-[450px] min-h-[633px] py-12 px-8 relative bg-habibauiuxframerwebsitewhite-4 rounded-[32px] overflow-hidden shadow-[0px_4px_4px_1px_#8a38f533] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] border border-[#ffffff1a]">
              <CardContent className="flex flex-col items-start justify-center gap-10 p-0 w-full">
                <div className="flex-col items-start justify-center gap-4 flex relative self-stretch w-full">
                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsitemelrose text-[20.6px] tracking-[-0.44px] leading-[33px]">
                      Custom
                    </h3>
                  </div>

                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[16.5px] tracking-[-0.36px] leading-[27px]">
                      Free
                    </p>
                  </div>

                  <div className="flex flex-col max-w-[663px] items-start relative w-full">
                    <div className="h-[52.8px] relative self-stretch w-full">
                      <div className="relative w-[134px] h-[53px] -top-0.5">
                        <span className="absolute w-[59px] h-[53px] top-0 left-0 [font-family:'Inter',Helvetica] font-medium text-white text-[46.7px] tracking-[-0.96px] leading-[52.8px] whitespace-nowrap">
                          $0
                        </span>

                        <span className="absolute w-[75px] h-[27px] top-[22px] left-[59px] [font-family:'Inter',Helvetica] font-medium text-white text-[22.5px] tracking-[-0.48px] leading-[26.4px] whitespace-nowrap">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <p className="relative self-stretch mt-[-1.00px] min-h-[54px] [font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsitewhite-70 text-[17px] tracking-[-0.36px] leading-[27px]">
                      Need a tailored offer? Let&#39;s talk.
                    </p>
                  </div>
                </div>

                <Button className="w-full px-12 py-[22px] h-auto relative bg-habibauiuxframerwebsitecod-gray-50 rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_#ffffff1a,0px_2px_2px_-1px_#0000001a,0px_4px_10px_-2px_#0000001a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsiteathens-gray text-[19.4px] tracking-[-0.42px] leading-6 whitespace-nowrap">
                    Get in touch
                  </span>
                </Button>

                <div className="flex flex-col items-start gap-4">
                  <div className="flex flex-col w-[200px] items-start">
                    <h4 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[15.2px] tracking-[-0.32px] leading-[22.4px]">
                      Including:
                    </h4>
                  </div>

                  {customFeatures.map((feature, index) => (
                    <div key={`feature-${index}`} className="flex items-center gap-2">
                      <div className="flex w-[18px] h-[18px] items-start justify-center relative">
                        <div className="h-[18px] relative self-stretch w-full">
                          <img
                            className="w-5 h-5"
                          alt="check"
                          src={check}
                          />
                        </div>
                      </div>
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[15px] tracking-[-0.32px] leading-4 whitespace-nowrap">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Based Plan */}
            <Card className="flex flex-col w-full w-[450px] min-h-[633px] py-12 px-8 relative bg-habibauiuxframerwebsitewhite-4 rounded-[32px] overflow-hidden shadow-[0px_4px_4px_1px_#8a38f533] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] border border-[#ffffff1a]">
              <CardHeader className="flex flex-col items-start gap-4 px-0 pt-0 pb-0">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="[font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsitemelrose text-[20.6px] tracking-[-0.44px] leading-[33px]">
                    Project Based
                  </div>

                  <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[16.6px] tracking-[-0.36px] leading-[27px]">
                    Start from
                  </div>

                  <div className="flex items-end">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[47.6px] tracking-[-0.96px] leading-[52.8px]">
                      $900
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[22.5px] tracking-[-0.48px] leading-[26.4px] ml-1">
                      /month
                    </span>
                  </div>

                  <div className="[font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsitewhite-70 text-[16.9px] tracking-[-0.36px] leading-[27px]">
                    Ideal for individual projects and freelancers launching their
                    journey.
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-0 py-10">
              <Button className="w-full px-12 py-[22px] h-auto relative bg-habibauiuxframerwebsitecod-gray-50 rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_#ffffff1a,0px_2px_2px_-1px_#0000001a,0px_4px_10px_-2px_#0000001a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
                  <span className="font-medium text-habibauiuxframerwebsiteathens-gray text-[19.4px] tracking-[-0.42px] leading-6 whitespace-nowrap">
                    Get Started
                  </span>
                </Button>
              </CardContent>

              <CardFooter className="flex flex-col items-start gap-4 px-0 pb-12">
                <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[15.2px] tracking-[-0.32px] leading-[22.4px]">
                  Including:
                </div>

                <div className="flex flex-col gap-4">
                  {projectFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-[18px] h-[18px] relative flex items-center justify-center">
                        <img
                          className="w-5 h-5"
                          alt="check"
                          src={check}
                        />
                      </div>
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[15px] tracking-[-0.32px] leading-4">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="flex flex-wrap items-center justify-start gap-[24px] relative w-fit">
            {/* Part Time Plan */}
            <Card className="flex flex-col w-full w-[450px] min-h-[633px] py-12 px-8 relative bg-habibauiuxframerwebsitewhite-4 rounded-[32px] overflow-hidden shadow-[0px_4px_4px_1px_#8a38f533] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] border border-[#ffffff1a]">
              <CardContent className="flex flex-col items-start justify-center gap-10 p-0 w-full">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="w-full">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsitemelrose text-[20.5px] tracking-[-0.44px] leading-[33px]">
                      Part Time
                    </p>
                  </div>

                  <div className="w-full">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[16.6px] tracking-[-0.36px] leading-[27px]">
                      Start from
                    </p>
                  </div>

                  <div className="w-full">
                    <div className="relative h-[53px]">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[45.8px] tracking-[-0.96px] leading-[52.8px] whitespace-nowrap">
                        $1200
                      </span>
                      <span className="absolute left-[134px] top-[22px] [font-family:'Inter',Helvetica] font-medium text-white text-[22.5px] tracking-[-0.48px] leading-[26.4px] whitespace-nowrap">
                        /month
                      </span>
                    </div>
                  </div>

                  <div className="w-full">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsitewhite-70 text-[17px] tracking-[-0.36px] leading-[27px]">
                      Perfect for small projects or trial collaborations with maximum
                      flexibility.
                    </p>
                  </div>
                </div>

                <Button className="w-full h-auto px-12 py-[22px] bg-habibauiuxframerwebsitecod-gray-50 rounded-2xl shadow-[0px_0px_0px_1px_#ffffff1a,0px_2px_2px_-1px_#0000001a,0px_4px_10px_-2px_#0000001a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsiteathens-gray text-[19.4px] tracking-[-0.42px] leading-6 whitespace-nowrap">
                    Get Started
                  </span>
                </Button>

                <div className="flex flex-col items-start gap-4">
                  <div className="w-[200px]">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[15.2px] tracking-[-0.32px] leading-[22.4px]">
                      Including:
                    </p>
                  </div>

                  {partTimeFeatures.map((feature, index) => (
                    <div key={`feature-${index}`} className="flex items-center gap-2">
                      <div className="w-[18px] h-[18px] relative flex items-center justify-center">
                        <img
                           className="w-5 h-5"
                           alt="check"
                           src={check}
                        />
                      </div>
                      <p className="[font-family:'Inter',Helvetica] font-medium text-white text-[15px] tracking-[-0.32px] leading-4 whitespace-nowrap">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Full Time Plan */}
            <Card className="flex flex-col w-full w-[450px] min-h-[633px] px-8 py-12 relative bg-habibauiuxframerwebsitewhite-4 rounded-[32px] overflow-hidden shadow-[0px_4px_4px_1px_#8a38f533] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] border-[#ffffff1a] border border-solid">
              <CardContent className="flex flex-col items-start justify-center gap-10 p-0 w-full">
                <div className="flex-col items-start justify-center gap-4 flex relative self-stretch w-full">
                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <span className="relative self-stretch mt-[-1.00px] font-medium text-habibauiuxframerwebsitemelrose text-[20.6px] tracking-[-0.44px] leading-[33px]">
                      Full Time
                    </span>
                  </div>

                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <span className="relative self-stretch mt-[-1.00px] font-medium text-white text-[16.6px] tracking-[-0.36px] leading-[27px]">
                      Start from
                    </span>
                  </div>

                  <div className="flex flex-col max-w-[663px] items-start relative w-full">
                    <div className="h-[52.8px] relative self-stretch w-full">
                      <div className="relative w-[222px] h-[53px] -top-0.5 flex items-end">
                        <span className="w-[147px] text-[length:var(--habibauiux-framer-website-semantic-heading-1-font-size)] font-habibauiux-framer-website-semantic-heading-1 font-[number:var(--habibauiux-framer-website-semantic-heading-1-font-weight)] text-white tracking-[var(--habibauiux-framer-website-semantic-heading-1-letter-spacing)] leading-[var(--habibauiux-framer-website-semantic-heading-1-line-height)] whitespace-nowrap [font-style:var(--habibauiux-framer-website-semantic-heading-1-font-style)]">
                          $2400
                        </span>
                        <span className="font-medium text-white text-[22.5px] tracking-[-0.48px] leading-[26.4px] whitespace-nowrap">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start relative self-stretch w-full">
                    <p className="relative self-stretch mt-[-1.00px] font-medium text-habibauiuxframerwebsitewhite-70 text-[16.9px] tracking-[-0.36px] leading-[27px]">
                    Ideal for businesses or individuals seeking full-time, personalized productivity support.
                    </p>
                  </div>
                </div>

                <Button className="w-full px-12 py-[22px] h-auto relative bg-habibauiuxframerwebsitecod-gray-50 rounded-2xl overflow-hidden shadow-[0px_0px_0px_1px_#ffffff1a,0px_2px_2px_-1px_#0000001a,0px_4px_10px_-2px_#0000001a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
                  <span className="font-medium text-habibauiuxframerwebsiteathens-gray text-[19.4px] tracking-[-0.42px] leading-6 whitespace-nowrap">
                    Get Started
                  </span>
                </Button>

                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="flex flex-col w-full items-start">
                    <span className="relative self-stretch mt-[-1.00px] font-medium text-white text-[15px] tracking-[-0.32px] leading-[22.4px]">
                      Standard plus:
                    </span>
                  </div>

                  {fullTimeFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 w-full">
                      <div className="flex-shrink-0 w-[18px] h-[18px] relative">
                        <img
                           className="w-5 h-5"
                           alt="check"
                           src={check}
                        />
                      </div>
                      <span className="font-medium text-white text-[15px] tracking-[-0.32px] leading-4 whitespace-nowrap">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;