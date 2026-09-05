"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useHeaderScroll } from "@/hooks/useHeaderScroll";
import { cn } from "@/lib/cn";
import { DesktopNav } from "./DesktopNav";
import { MegaMenus } from "./MegaMenus";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useHeaderScroll();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const closeMegaMenuOnScroll = () => setActiveMenu(null);

    window.addEventListener("scroll", closeMegaMenuOnScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", closeMegaMenuOnScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-1/2 z-[60] w-[calc(100%-2rem)] max-w-[1450px] -translate-x-1/2 rounded-full border bg-[#fafafc] text-[#242028] transition-[top,background-color,box-shadow,border-color] duration-200 max-[820px]:w-[calc(100%-1.5rem)]",
        scrolled
          ? "top-2.5 border-brand-purple/35 bg-[#fafafc] shadow-[0_14px_42px_rgba(4,3,8,0.28)]"
          : "top-4 border-brand-purple/30 shadow-[0_10px_34px_rgba(4,3,8,0.18)] max-[820px]:top-3",
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="relative z-[3] grid h-16 w-full grid-cols-[165px_1fr_150px] items-center px-[18px] pl-5 max-lg:grid-cols-[145px_1fr_126px] max-[820px]:flex max-[820px]:h-[62px] max-[820px]:justify-between max-[820px]:px-2.5 max-[820px]:pl-4">
        <a
          className="inline-flex w-fit items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
          href="#top"
          aria-label="WQ Tech Solutions home"
        >
          <Image
            className="h-auto w-[126px] object-contain max-lg:w-[118px]"
            src="/images/wq-logo.png"
            alt="WQ Tech Solutions"
            width={138}
            height={36}
            priority
          />
        </a>

        <DesktopNav activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        <a
          className="justify-self-end rounded-lg bg-gradient-to-r from-brand-purple to-[#8752e9] px-[22px] py-[13px] text-[12px] font-medium text-white shadow-[0_8px_18px_rgba(124,76,230,0.22)] transition duration-200 hover:-translate-y-0.5 hover:from-[#7142da] hover:to-brand-blue hover:shadow-[0_10px_24px_rgba(92,79,220,0.30)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue max-lg:px-[18px] max-[820px]:hidden"
          href="#contact"
        >
          Contact Us
        </a>

        <button
          className="hidden size-[42px] cursor-pointer place-items-center rounded-full border border-[#242028]/15 bg-brand-purple/10 text-[#242028] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue max-[820px]:grid"
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <MegaMenus activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
