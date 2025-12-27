import { useEffect, useState } from "react";
import logo from "@/assets/image/Hero-Image/Logo.png";
import clock from "@/assets/image/Hero-Image/Clock.png";
import clockDark from "@/assets/image/Hero-Image/ClockDark.png";
import Container from "@/components/atoms/Layout/Container";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerMounted, setIsDrawerMounted] = useState(false);
  const [isDrawerActive, setIsDrawerActive] = useState(false);

  const links = [
    { id: "hero", label: "Головна" },
    { id: "about", label: "Про компанію" },
    { id: "services", label: "Послуги" },
    { id: "masters", label: "Майстри" },
    { id: "certificates", label: "Подарункові сертифікати" },
    { id: "contacts", label: "Контакти" },
    { id: "contacts", label: "Адреса" }, // обидва ведуть в одну секцію
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Prevent background scroll when the mobile drawer is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const handleLinkClick = (id) => {
    scrollToSection(id);
    closeMenu();
  };

  const openMenu = () => {
    setIsMenuOpen(true);
    setIsDrawerMounted(true);
    // Activate animation on next frame so it transitions from off-screen to on-screen
    requestAnimationFrame(() => setIsDrawerActive(true));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDrawerActive(false);
    // Unmount after the close transition finishes
    window.setTimeout(() => setIsDrawerMounted(false), 220);
  };

  return (
    <header
      className="
        relative top-0 left-0 w-full
        h-[80px] lg:h-[100px]
        text-white z-[200]
        bg-[#FFFFFF05] backdrop-blur-[60px]
      "
    >
      <Container className="h-full px-4 xs:px-[30px] lg:px-[40px] 3xl:px-[80px]">
        <div className="h-full">
          <div className="lg:hidden h-full w-full flex items-center">
            <button
              type="button"
              aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
              aria-expanded={isMenuOpen}
              onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
              className="
                shrink-0
                w-[25px] h-[20.3418px]
                flex items-center justify-center
              "
            >
              {!isMenuOpen ? (
                <span className="w-full h-full flex flex-col justify-between">
                  <span className="block h-[2px] w-full bg-white/90 rounded" />
                  <span className="block h-[2px] w-full bg-white/90 rounded" />
                  <span className="block h-[2px] w-full bg-white/90 rounded" />
                </span>
              ) : (
                <span className="relative w-full h-full">
                  <span className="absolute left-1/2 top-1/2 w-full h-[2px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/90 rounded" />
                  <span className="absolute left-1/2 top-1/2 w-full h-[2px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/90 rounded" />
                </span>
              )}
            </button>

            <div className="flex-1 flex justify-center">
              <img
                src={logo}
                alt="Healing Touch Logo"
                width="157"
                height="27"
                className="object-contain whitespace-nowrap"
              />
            </div>

            {/* Right spacer to keep logo truly centered */}
            <div className="shrink-0 w-[25px]" aria-hidden="true" />
          </div>

          {/* DESKTOP ROW */}
          <div className="hidden lg:flex h-full w-full items-center justify-center">
            <div className="flex h-full items-center justify-center">
            {/* Desktop logo */}
            <img
              src={logo}
              alt="Healing Touch Logo"
              width="157"
              height="27"
              className="object-contain whitespace-nowrap shrink-0 mr-6 xl:mr-10 2xl:mr-[62.6px]"
            />

            {/* Desktop menu (responsive so it fits smaller widths) */}
            <nav
              className="
                flex items-center justify-center
                whitespace-nowrap
                font-manrope text-white leading-[130%]
                gap-4 xl:gap-6 2xl:gap-[40px]
                text-[11px] xl:text-[12px] 2xl:text-[14px]
              "
            >
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="transition-all duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right part (ALWAYS the same structure) */}
            <div className="flex h-full items-stretch gap-[14px] xl:gap-[20px] ml-6 xl:ml-10 2xl:ml-[64px] whitespace-nowrap shrink-0">
              <div className="w-px h-full bg-white/20" />
              <div className="flex flex-col justify-center font-manrope whitespace-nowrap">
                <p className="font-[roboto] text-[16px] xl:text-[18px] 2xl:text-[20px] font-extralight text-white leading-[130%] ml-[12px] xl:ml-[20px]">
                  +38 (068) 591 15 04
                </p>
                <div className="flex items-center gap-[6px] whitespace-nowrap">
                  <img src={clock} width="15" height="15" alt="Годинник" />
                  <p className="text-[11px] xl:text-[12px] opacity-80">
                    Працюємо кожний день з 9:00 до 20:00
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Full-viewport bottom divider */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-screen h-px bg-white/20" />

      {/* MOBILE DRAWER */}
      {isDrawerMounted && (
        <>
          {/* overlay (behind the panel) */}
          <div
            className={
              "lg:hidden fixed inset-0 top-[80px] bg-black/30 z-[240] transition-opacity duration-200 " +
              (isDrawerActive ? "opacity-100" : "opacity-0 pointer-events-none")
            }
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* left panel (above overlay) */}
          <aside
            className={
              "lg:hidden fixed top-[80px] left-0 h-[calc(100vh-80px)] w-[330px] max-w-[85vw] " +
              "bg-white opacity-100 shadow-2xl z-[250] transform transition-transform duration-200 ease-out " +
              (isDrawerActive ? "translate-x-0" : "-translate-x-full")
            }
          >
            {/* 40px from top of the drawer */}
            <div className="pt-[40px]">
              <nav className="pl-[29px] pr-[29px] flex flex-col gap-[30px] font-manrope text-[16px] leading-[130%] text-[#703938]">
                {links.map((link) => (
                  <button
                    key={`m-${link.label}`}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              {/* 40px below links -> divider */}
              <div className="mt-[40px] w-full border-t border-[#7039384D]" />

              {/* 40px below divider -> contacts */}
              <div className="mt-[40px] pl-[29px] pr-[29px]">
                <div className="flex flex-col justify-center font-manrope text-[#703938]">
                  <p className="font-[roboto] text-[20px] font-extralight leading-[130%]">
                    +38 (068) 591 15 04
                  </p>
                  <div className="flex items-center gap-[6px]">
                    <img src={clockDark} width="15" height="15" alt="Годинник" />
                    <p className="text-[12px] opacity-80">
                      Працюємо кожний день з 9:00 до 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}