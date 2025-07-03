import React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const Navbar = (): JSX.Element => {
  const navItems = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Services", active: false },
    { label: "QAs", active: false },
    { label: "Pricing", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <nav className="fixed top-[21px] left-1/2 -translate-x-1/2 z-10 max-w-[1200px] w-full">
      <div className="flex items-center justify-between px-10 py-3 bg-[#ffffff1a] backdrop-blur-[9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9px)_brightness(100%)] rounded-[50px] h-16">
        <div className="flex items-center">
          <h1 className="[font-family:'Chewy',Helvetica] font-normal text-white text-[28px] leading-7">
            HUIUX
          </h1>
        </div>

        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center gap-5">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="[font-family:'Inter',Helvetica] text-[15px] text-white text-center leading-[30px] tracking-[-0.20px] font-medium hover:text-white/80 transition-colors"
                  href="#"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="bg-black text-white rounded-[50px] h-10 px-5 shadow-[inset_0px_0px_4px_1px_#adc3ff] border border-[#3d71ff] [font-family:'Inter',Helvetica] font-medium text-[16px] leading-[19.2px]">
          Call Me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;