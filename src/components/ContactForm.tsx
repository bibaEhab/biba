import { MailIcon  } from "lucide-react";
import { UserPlus } from 'lucide-react';
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import call from "../pics/CALL.png";
import star from "../pics/star.svg";
import React, { useState, useEffect } from "react";

type ContactFormProps = {
  hideCallMeButton?: boolean;
};

const ContactForm = ({ hideCallMeButton }: ContactFormProps): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <MailIcon className="w-6 h-6 text-white" />,
      title: "Email",
      value: (
        <a
          href="mailto:Habibauiux@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold hover:text-habibauiuxframerwebsitepurple-heart transition-colors duration-200"
        >
          Habibauiux@gmail.com
        </a>
      ),
    },
    {
      icon: <UserPlus className="w-6 h-6 text-white" />,
      title: "Social Media",
      value: (
        <span className="flex gap-3">
          <a href="https://www.linkedin.com/in/habiba-ehab-ux-designer/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-habibauiuxframerwebsitepurple-heart transition-colors duration-200 mr-2">LinkedIn</a>
          <a href="https://www.behance.net/he45" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-habibauiuxframerwebsitepurple-heart transition-colors duration-200">Behance</a>
        </span>
      ),
    },
  ];

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    plan: "",
  });

  const [plan, setPlan] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planParam = params.get("plan");
    if (planParam) {
      setPlan(planParam);
    }
  }, []);

  const validate = (values: any) => {
    const newErrors: any = {};
    if (!values.firstName) newErrors.firstName = "First name is required.";
    if (!values.lastName) newErrors.lastName = "Last name is required.";
    if (!values.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    if (!values.email) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) newErrors.email = "Invalid email format.";
    if (!values.plan) newErrors.plan = "Please select a plan.";
    return newErrors;
  };

  const [status, setStatus] = useState(""); // add this in your component

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const values = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      phoneNumber: (form.elements.namedItem("phoneNumber") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      plan: plan,
    };
    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const data = new FormData(form);
    data.set("plan", plan); // ensure correct value is sent

    const response = await fetch("https://formspree.io/f/mdkzrzpo", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
      setPlan("");
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-habibauiuxframerwebsiteblack w-full pb-[24px]">
      <Navbar hideCallMeButton={hideCallMeButton} />
      <section className="flex flex-col items-center justify-center gap-24 pt-[10rem] pb-[4rem] w-full mt-[-36px]">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {/* Badge */}
          <div className="relative z-[2]">
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
              CONTACT US
            </span>
          </Badge>
          </div>

          {/* Heading */}
          <div className="flex flex-col items-center gap-4 max-w-[950px] z-[1]">
            <h2 className="text-white text-center text-[50px] font-semibold tracking-[-2px] leading-[55px] font-habibauiux-framer-website-semantic-heading-2">
              Get in touch with us
            </h2>
            <p className="text-habibauiuxframerwebsitesilver text-center text-lg font-medium tracking-[-0.36px] leading-[27px] max-w-[598px] font-['Figtree',Helvetica]">
              Have questions or need AI solutions? Let us know by filling out the
              form, and we&apos;ll be in touch!
            </p>
          </div>

          {/* Contact Cards and Form */}
          <div className="flex flex-col w-full max-w-[653.68px] items-start gap-12 z-0">
            {/* Contact Cards */}
            <div className="flex w-full gap-12 items-center justify-between">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="w-[303.34px] bg-transparent border border-[#222222] rounded-lg overflow-hidden [background:radial-gradient(50%_50%_at_99%_100%,rgba(129,74,200,0.3)_0%,rgba(13,13,13,0.8)_100%)]"
                >
                  <CardContent className="flex flex-col items-start justify-center gap-2.5 p-5">
                    <div className="flex items-center gap-[5px] w-full">
                      <div className="p-[5px] rounded overflow-hidden">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-white text-xl tracking-[-0.46px] leading-[27.6px] font-['Figtree',Helvetica]">
                          {info.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-[5px] w-full">
                      <div className="flex-1">
                        <p className="font-medium text-white text-xl tracking-[-0.46px] leading-[27.6px] font-['Figtree',Helvetica]">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Character Image */}
            <img
              className="absolute w-28 h-[129px] top-[370px] left-[49%] translate-x-[-50%]"
              alt="call"
              src={call}
            />

            {/* Contact Form */}
            <Card className="w-full bg-neutral-950 border border-solid border-[#222222] rounded-lg overflow-hidden">
              <CardContent className="flex flex-col items-start justify-center gap-6 p-[30px]">
                <form
                  action="https://formspree.io/f/mdkzrzpo"
                  method="POST"
                  className="flex flex-col items-start justify-center gap-6 w-full"
                  onSubmit={handleSubmit}
                >
                  {/* First row of form fields */}
                  <div className="flex items-start gap-6 w-full">
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Label htmlFor="firstName" className="flex items-end gap-0.5 text-white text-sm font-text-sm-semibold">
                        First Name <span className="text-[#b42318]">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="first name"
                        required
                        className="h-12 bg-[#0c0c0c] text-[#b9b9b9] border-neutral-700 font-normal text-sm"
                      />
                      {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName}</span>}
                    </div>
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Label htmlFor="lastName" className="flex items-end gap-0.5 text-white text-sm font-text-sm-semibold">
                        Last Name <span className="text-[#b42318]">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="last name"
                        required
                        className="h-12 bg-[#0c0c0c] text-[#b9b9b9] border-neutral-700 font-normal text-sm"
                      />
                      {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName}</span>}
                    </div>
                  </div>

                  {/* Second row of form fields */}
                  <div className="flex items-start gap-6 w-full">
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Label htmlFor="phoneNumber" className="flex items-end gap-0.5 text-white text-sm font-text-sm-semibold">
                        Phone Number <span className="text-[#b42318]">*</span>
                      </Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="002123456789"
                        required
                        pattern="[0-9]{9,15}"
                        className="h-12 bg-[#0c0c0c] text-[#b9b9b9] border-neutral-700 font-normal text-sm"
                      />
                      {errors.phoneNumber && <span className="text-red-500 text-xs">{errors.phoneNumber}</span>}
                    </div>
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <Label htmlFor="email" className="flex items-end gap-0.5 text-white text-sm font-text-sm-semibold">
                        Email <span className="text-[#b42318]">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Habiba@gmail.com"
                        required
                        className="h-12 bg-[#0c0c0c] text-[#b9b9b9] border-neutral-700 font-normal text-sm"
                      />
                      {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Plan dropdown */}
                  <div className="flex flex-col items-start gap-2 w-full relative">
                    <label htmlFor="plan" className="flex items-end gap-0.5 text-white text-sm font-text-sm-semibold">
                      Choose a plan <span className="text-[#b42318]">*</span>
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      required
                      className="h-12 bg-[#0c0c0c] text-[#b9b9b9] border border-solid border-neutral-700 p-2 font-normal text-sm rounded w-full appearance-none pr-10"
                      value={plan}
                      onChange={e => setPlan(e.target.value)}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg fill='none' stroke='%23b9b9b9' stroke-width='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 0.75rem center",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option value="" disabled>
                        -- Select a plan --
                      </option>
                      <option value="custom">Custom</option>
                      <option value="part-time">Part-time</option>
                      <option value="project-based">Project-based</option>
                      <option value="full-time">Full-time</option>
                    </select>
                    {errors.plan && <span className="text-red-500 text-xs">{errors.plan}</span>}
                  </div>

                  {/* Message textarea */}
                  <div className="flex flex-col items-start gap-2 w-full">
                    <Label htmlFor="message" className="flex items-end gap-0.5 text-white text-sm font-text-sm-semibold">
                      How can we help?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="You can write what you want to help you here .."
                      className="min-h-24 bg-[#0c0c0c] text-[#b9b9b9] border-neutral-700 font-normal text-sm resize-y"
                    />
                  </div>

                  {/* Submit button */}
                  <Button type="submit" className="w-full py-6 px-12 bg-habibauiuxframerwebsitepurple-heart text-habibauiuxframerwebsiteathens-gray font-habibauiux-framer-website-semantic-link text-[19.36px] tracking-[-0.42px] leading-6 rounded-lg shadow-[0px_0px_0px_1px_#4930eb1f,0px_2px_2px_-1px_#0000001a,0px_4px_10px_-2px_#0000000d] backdrop-blur-[5px]">
                    Let&#39;s Talk
                  </Button>
                </form>
                {status === "SUCCESS" && <p className="text-green-500 text-center mt-4">Thank you! Your message has been sent.</p>}
                {status === "ERROR" && <p className="text-red-500 text-center mt-4">Oops! There was an error. Please try again.</p>}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactForm; 