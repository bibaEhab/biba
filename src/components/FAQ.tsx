import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Badge } from "./ui/badge";
import think from "../pics/thinking elion.png";
import bgq from "../pics/BGQuestions.png";

const FAQ = (): JSX.Element => {
  const faqItems = [
    {
      question: "What Progrmas do you design in?",
      answer: "Most requests are designed using Figma, Framer, Adobe Illustrator, and Adobe Photoshop",
    },
    {
      question: "What is your design and development process like?",
      answer: "I follow a thorough process, starting with understanding project goals, conducting research, creating concepts, and refining designs through iterations. Client feedback is crucial, and I keep them informed at every stage.",
    },
    {
      question: "What is the typical timeline for a project?",
      answer: "Timelines vary based on project complexity. I provide clear schedules during the initial consultation. Factors like project size and revisions can affect timelines, but I aim for timely delivery.",
    },
    {
      question: "Is there a limit to how many requests I can have?",
      answer: "Nope! When we say unlimited, we mean unlimited. Once you've susbcribed, you can add as many design requests to your queue as you'd like and they'll be delivered one by one. ",
    },
    {
      question: "What if I don't like the design?",
      answer: "No worries! We'll continue to revise the design until you're 100% satisfied.",
    },
    {
      question: "Are there any refunds if I don't like the service?",
      answer: "Due to the high-quality nature of the work, there will be no refunds issued. ",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-20 relative bg-habibauiuxframerwebsiteblack">
      <div className="flex flex-col max-w-[1200px] w-full items-center justify-center gap-16 relative">
        <div className="flex flex-col w-full items-center justify-center gap-4 relative">
          <Badge
            className="bg-habibauiuxframerwebsitecod-gray-40 text-white rounded-[50px] shadow-[0px_0px_0px_1px_#ffffff1a] backdrop-blur-[5px]"
            variant="outline"
          >
            Frequently Asked Questions
          </Badge>

          <div className="inline-flex items-center gap-3.5 relative">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[52.6px] tracking-[-2.20px] leading-[60.5px] whitespace-nowrap">
              Your Top
            </h2>

            <span className="[font-family:'Instrument_Serif',Helvetica] font-normal italic text-white text-[55px] tracking-[0] leading-[60.5px] whitespace-nowrap">
              Questions
            </span>

            <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[51.6px] tracking-[-2.20px] leading-[60.5px] whitespace-nowrap">
              answered
            </h2>
          </div>

          <p className="[font-family:'Inter',Helvetica] font-medium text-habibauiuxframerwebsitewhite-70 text-[16.9px] text-center tracking-[-0.36px] leading-[27px]">
            Got questions before kicking things off? I've got you covered.
          </p>
        </div>

        <div className="flex flex-col w-full items-start relative">
          <div className="flex flex-col items-center justify-center relative w-full">
            <img
              className="absolute w-full h-[458px] top-0 left-0"
              alt="bgq"
              src={bgq}
            />

            <div className="flex flex-col w-full items-center justify-center gap-4 relative z-10">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={`faq-${index}`}
                    value={`item-${index}`}
                    className="bg-habibauiuxframerwebsitewhite-4 rounded-3xl overflow-hidden backdrop-blur-[10px] border border-[#ffffff1a] mb-4 last:mb-0"
                  >
                    <AccordionTrigger className="px-5 py-[18px] text-white hover:no-underline">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[16.9px] tracking-[-0.36px] leading-[27px] text-left">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-5 pb-4 text-habibauiuxframerwebsitewhite-70">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <img
            className="absolute w-28 h-28 top-[-105px] right-0 object-cover"
            alt="think"
            src={think}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;