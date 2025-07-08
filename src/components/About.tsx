import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import shy from "../pics/shy.png";
import star from "../pics/star.svg";


const About = (): JSX.Element => {
  const statCards = [
    {
      icon: "/group-1.png",
      title: "+6 Years",
      iconWidth: "w-5",
      iconHeight: "h-5",
      iconTop: "top-0.5",
      iconLeft: "left-0.5",
    },
    {
      icon: "/group-2.png",
      title: "150+ Projects",
      iconWidth: "w-5",
      iconHeight: "h-[18px]",
      iconTop: "top-[3px]",
      iconLeft: "left-0.5",
    },
    {
      icon: "/group-3.png",
      title: "340+ Templates",
      iconWidth: "w-5",
      iconHeight: "h-[18px]",
      iconTop: "top-[3px]",
      iconLeft: "left-0.5",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[98px] p-20 relative w-full">
      <img
        className="absolute w-28 h-28 top-[388px] left-[490px] object-cover"
        alt="shy"
        src={shy}
      />

      <div className="flex flex-col items-center justify-center gap-[24.99px] relative w-full">
        <div className="inline-flex flex-col items-start relative z-[1]">
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
              About Me
            </span>
          </Badge>
        </div>

        <div className="flex flex-col w-full max-w-[950px] items-center gap-[15px] relative">
          <div className="flex items-center justify-center gap-2 p-2 w-full">
            <h2 className="relative [font-family:'Figtree',Helvetica] font-semibold text-white text-[50px] text-center tracking-[-2.00px] leading-[55px]">
              Hey there! I&apos;m Habiba — Your creative
              <br />
              UI/UX Designer and&nbsp;&nbsp;Framer Developer.
            </h2>
          </div>

          <div className="flex flex-col items-center w-full">
            <p className="[font-family:'Figtree',Helvetica] font-medium text-habibauiuxframerwebsitesilver text-lg text-center tracking-[-0.36px] leading-[27px]">
              Let&#39;s face it, traditional web design is exhausting—pricey,
              confusing, and painfully slow. That&apos;s why I&apos;ve dedicated
              myself to making stunning, professional websites easy and
              accessible for everyone. No jargon, no headaches—just clean,
              impactful designs that help your brand confidently stand out.
            </p>

            <p className="w-full max-w-[940px] [font-family:'Figtree',Helvetica] font-medium text-habibauiuxframerwebsitesilver text-lg text-center tracking-[-0.36px] leading-[27px]">
              I truly believe every business deserves a great online presence,
              and I&apos;m here to help yours win hearts (and clicks).&#34;
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center gap-5 w-full max-w-[950px] z-[1]">
        {statCards.map((card, index) => (
          <Card
            key={`stat-card-${index}`}
            className="w-full max-w-[303px] rounded-lg overflow-hidden border border-solid border-[#222222] [background:radial-gradient(50%_50%_at_99%_100%,rgba(129,74,200,0.3)_0%,rgba(13,13,13,0.8)_100%)]"
          >
            <CardContent className="flex items-center gap-[5px] px-[30px] py-5">
              <div className="inline-flex items-center justify-center p-[5px] rounded overflow-hidden">
                <div className="flex flex-col w-[25px] h-[25px] items-start justify-center relative">
                  <div className="h-[25px] relative self-stretch w-full">
                    <img
                      className={`absolute ${card.iconWidth} ${card.iconHeight} ${card.iconTop} ${card.iconLeft}`}
                      alt="Group"
                      src={card.icon}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="[font-family:'Figtree',Helvetica] font-medium text-white text-[23px] tracking-[-0.46px] leading-[27.6px]">
                  {card.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;