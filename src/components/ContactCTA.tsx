import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import dream from "../pics/dreaming elion.png";

const ContactCTA = (): JSX.Element => {
  const stars = [
    {
      top: "top-[528px]",
      left: "left-[930px]",
      opacity: "opacity-80",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[512px]",
      left: "left-[603px]",
      opacity: "opacity-70",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[196px]",
      left: "left-[294px]",
      opacity: "opacity-[0.79]",
      size: "w-[3px] h-[3px]",
    },
    {
      top: "top-[263px]",
      left: "left-[190px]",
      opacity: "opacity-[0.54]",
      size: "w-px h-0.5",
    },
    {
      top: "top-[374px]",
      left: "left-[1039px]",
      opacity: "opacity-[0.54]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[522px]",
      left: "left-[572px]",
      opacity: "opacity-90",
      size: "w-px h-0.5",
    },
    {
      top: "top-[183px]",
      left: "left-[795px]",
      opacity: "opacity-[0.69]",
      size: "w-px h-0.5",
    },
    {
      top: "top-[304px]",
      left: "left-[1145px]",
      opacity: "opacity-[0.68]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[364px]",
      left: "left-[535px]",
      opacity: "opacity-85",
      size: "w-px h-0.5",
    },
    {
      top: "top-[512px]",
      left: "left-[628px]",
      opacity: "opacity-[0.86]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[77px]",
      left: "left-[1005px]",
      opacity: "opacity-[0.56]",
      size: "w-[3px] h-[3px]",
    },
    {
      top: "top-[346px]",
      left: "left-[574px]",
      opacity: "opacity-[0.82]",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[259px]",
      left: "left-[346px]",
      opacity: "opacity-[0.69]",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[493px]",
      left: "left-[612px]",
      opacity: "opacity-[0.59]",
      size: "w-px h-0.5",
    },
    {
      top: "top-[159px]",
      left: "left-[258px]",
      opacity: "opacity-[0.89]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[191px]",
      left: "left-[866px]",
      opacity: "opacity-[0.84]",
      size: "w-px h-0.5",
    },
    {
      top: "top-[461px]",
      left: "left-[917px]",
      opacity: "opacity-[0.67]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[83px]",
      left: "left-[153px]",
      opacity: "opacity-[0.51]",
      size: "w-[3px] h-[3px]",
    },
    {
      top: "top-[37px]",
      left: "left-[755px]",
      opacity: "opacity-[0.53]",
      size: "w-px h-0.5",
    },
    {
      top: "top-[175px]",
      left: "left-[879px]",
      opacity: "opacity-[0.88]",
      size: "w-px h-0.5",
    },
    {
      top: "top-[264px]",
      left: "left-[924px]",
      opacity: "opacity-[0.63]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[340px]",
      left: "left-[547px]",
      opacity: "opacity-80",
      size: "w-px h-0.5",
    },
    {
      top: "top-[167px]",
      left: "left-[989px]",
      opacity: "opacity-[0.43]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[465px]",
      left: "left-[533px]",
      opacity: "opacity-[0.51]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[215px]",
      left: "left-[297px]",
      opacity: "opacity-[0.62]",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[412px]",
      left: "left-[209px]",
      opacity: "opacity-[0.82]",
      size: "w-px h-px",
    },
    {
      top: "top-[532px]",
      left: "left-[877px]",
      opacity: "opacity-65",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[395px]",
      left: "left-2",
      opacity: "opacity-[0.89]",
      size: "w-[3px] h-[3px]",
    },
    {
      top: "top-[501px]",
      left: "left-[810px]",
      opacity: "opacity-[0.64]",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[299px]",
      left: "left-[821px]",
      opacity: "opacity-[0.93]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[346px]",
      left: "left-[1113px]",
      opacity: "opacity-[0.86]",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[530px]",
      left: "left-[58px]",
      opacity: "opacity-[0.64]",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[172px]",
      left: "left-[853px]",
      opacity: "opacity-[0.42]",
      size: "w-[3px] h-[3px]",
    },
    {
      top: "top-[324px]",
      left: "left-[578px]",
      opacity: "opacity-55",
      size: "w-[3px] h-[3px]",
    },
    {
      top: "top-[50px]",
      left: "left-[337px]",
      opacity: "opacity-85",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[304px]",
      left: "left-[297px]",
      opacity: "opacity-80",
      size: "w-0.5 h-[3px]",
    },
    {
      top: "top-[29px]",
      left: "left-[490px]",
      opacity: "opacity-[0.47]",
      size: "w-px h-0.5",
    },
    {
      top: "top-[37px]",
      left: "left-[377px]",
      opacity: "opacity-[0.59]",
      size: "w-0.5 h-0.5",
    },
    {
      top: "top-[341px]",
      left: "left-[153px]",
      opacity: "opacity-[0.49]",
      size: "w-[3px] h-[3px]",
    },
    {
      top: "top-[527px]",
      left: "left-[972px]",
      opacity: "opacity-[0.42]",
      size: "w-0.5 h-0.5",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-[80px] relative bg-habibauiuxframerwebsiteblack">
      <Card className="flex flex-col max-w-[1200px] items-start justify-center gap-[23px] pt-[99px] pb-[80px] px-[80px] relative w-full rounded-3xl overflow-hidden shadow-[inset_0px_0px_28px_2px_#ffffff33,0px_0px_2px_14px_#0d173333] backdrop-blur-[2.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2.5px)_brightness(100%)] border-[#292929]">
        <div className="absolute w-full h-[541px] top-0 left-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.65)_100%),url(..//img---galaxy-background.png)_50%_50%_/_cover]">
          {stars.map((star, index) => (
            <div
              key={`star-${index}`}
              className={`absolute ${star.size} ${star.top} ${star.left} bg-white rounded-[0.93px] shadow-[0px_0px_3.72px_0.93px_#ffffff33] blur-[0.1px] ${star.opacity}`}
            />
          ))}
        </div>

        <CardContent className="flex flex-row items-center justify-between z-10 p-0 w-full gap-x-10">
          {/* Text Column */}
          <div className="flex flex-col items-start">
            <h2 className="max-w-[700px] w-full font-habibauiux-framer-website-inter-bold font-[number:var(--habibauiux-framer-website-inter-bold-font-weight)] text-white text-[length:52px] tracking-[var(--habibauiux-framer-website-inter-bold-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-bold-line-height)] [font-style:var(--habibauiux-framer-website-inter-bold-font-style)]">
              Ready to bring your dream project to life?
            </h2>
            <p className="max-w-[600px] w-full mt-6 font-habibauiux-framer-website-inter-regular font-[number:var(--habibauiux-framer-website-inter-regular-font-weight)] text-white text-[length:var(--habibauiux-framer-website-inter-regular-font-size)] tracking-[var(--habibauiux-framer-website-inter-regular-letter-spacing)] leading-[var(--habibauiux-framer-website-inter-regular-line-height)] [font-style:var(--habibauiux-framer-website-inter-regular-font-style)]">
              Let&apos;s transform your ideas into stunning reality. Contact me
              today, and let&apos;s build something remarkable together
            </p>
            <Button className="bg-habibauiuxframerwebsitepurple-heart w-[280px] h-[68px] px-12 py-[22px] mt-6 rounded-2xl shadow-[0px_0px_0px_1px_#4930eb1f,0px_2px_2px_-1px_#0000001a,0px_4px_10px_-2px_#0000000d] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
              <span className="[font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsiteathens-gray text-[19.4px] tracking-[-0.42px] leading-6 whitespace-nowrap">
                Let&#39;s Talk
              </span>
            </Button>
          </div>
          {/* Image Column */}
          <img
            className="w-[380px] h-[380px] object-cover"
            alt="dream"
            src={dream}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactCTA;