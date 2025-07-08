import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

type NavbarProps = {
  hideCallMeButton?: boolean;
};

const Navbar = ({ hideCallMeButton }: NavbarProps): JSX.Element => {
  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "Services" },
    { label: "QAs", id: "FAQ" },
    { label: "Pricing", id: "Pricing" },
  ];

  const handleScroll = (id: string) => {
    if (window.location.pathname === '/contact') {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-[21px] left-1/2 -translate-x-1/2 z-20 max-w-[1200px] w-full">
      <div className="flex items-center justify-between px-10 py-3 bg-[#ffffff1a] backdrop-blur-[9px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(9px)_brightness(100%)] rounded-[50px] h-16">
        <div className="flex items-center">
          <button
            onClick={() => handleScroll('hero')}
            className="[font-family:'Chewy',Helvetica] font-normal text-white text-[28px] leading-7 bg-transparent border-none cursor-pointer focus:outline-none"
            style={{ background: 'none', padding: 0, margin: 0 }}
          >
            Habiba
          </button>
        </div>

        <NavigationMenu className="mx-auto">
          <NavigationMenuList className="flex items-center gap-5">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  className="[font-family:'Inter',Helvetica] text-[15px] text-white hover:text-habibauiuxframerwebsitepurple-heart text-center leading-[30px] tracking-[-0.20px] font-medium hover:text-white/80 transition-colors"
                  href={`#${item.id}`}
                  onClick={e => {
                    e.preventDefault();
                    handleScroll(item.id!);
                  }}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {!hideCallMeButton && (
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-black text-white rounded-[50px] h-10 px-5 shadow-[inset_0px_0px_4px_1px_#adc3ff] border border-[#3d71ff] font-medium text-[16px] leading-[19.2px] flex items-center justify-center"
          >
            CONTACT US
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;