"use client";

import { ArrowRight } from "lucide-react";
import { industries, serviceGroups } from "@/data/navigation";

const menuShell =
  "absolute inset-x-0 top-[calc(100%+10px)] z-20 overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(100deg,#0b0810_0%,#09070d_55%,#08070c_100%)] text-white shadow-[0_28px_70px_rgba(0,0,0,0.48)] animate-[megaMenuReveal_220ms_ease_both] max-[820px]:hidden";

const menuLink =
  "group grid min-h-[42px] grid-cols-[7px_1fr_16px] items-center gap-2.5 text-[12px] leading-[1.45] text-white/75 transition-colors hover:text-white";

function MenuIntro({ kicker, title, href, linkLabel }) {
  return (
    <div className="border-r border-white/10 pr-[38px]">
      <span className="mb-3.5 inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a78bf0]">
        {kicker}
      </span>
      <h2 className="mb-6 max-w-[340px] text-[clamp(24px,2vw,32px)] font-medium leading-tight tracking-[-0.03em]">
        {title}
      </h2>
      <a
        className="inline-flex items-center gap-2.5 text-[13px] text-white/75 transition-colors hover:text-brand-blue"
        href={href}
      >
        {linkLabel} <ArrowRight aria-hidden="true" className="size-4" />
      </a>
    </div>
  );
}

function MenuItem({ children, href }) {
  return (
    <a className={menuLink} href={href}>
      <span className="size-[5px] rounded-full bg-brand-purple shadow-[0_0_0_4px_rgba(124,76,230,0.10)]" />
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="size-3.5 -translate-x-2 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"
      />
    </a>
  );
}

export function MegaMenus({ activeMenu, setActiveMenu }) {
  if (activeMenu === "services") {
    return (
      <div
        className={menuShell}
        onMouseEnter={() => setActiveMenu("services")}
      >
        <div className="mx-auto grid w-[calc(100%-4rem)] max-w-[1280px] grid-cols-[0.9fr_2fr] gap-[72px] py-[38px] max-lg:gap-10">
          <MenuIntro
            kicker="What we do"
            title="Connected expertise for ambitious digital work."
            href="#services"
            linkLabel="Explore all services"
          />

          <div className="grid grid-cols-4 gap-[30px] max-lg:grid-cols-2">
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 border-b border-white/10 pb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45">
                  {group.title}
                </h3>
                {group.links.map((link) => (
                  <MenuItem href="#services" key={link}>
                    {link}
                  </MenuItem>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (activeMenu === "industries") {
    return (
      <div
        className={menuShell}
        onMouseEnter={() => setActiveMenu("industries")}
      >
        <div className="mx-auto grid w-[calc(100%-4rem)] max-w-[1280px] grid-cols-[0.85fr_1.35fr_0.72fr] gap-14 py-[38px] max-lg:grid-cols-[0.8fr_1.4fr] max-lg:gap-10">
          <MenuIntro
            kicker="Industries"
            title="Digital systems shaped around how your sector works."
            href="#industries"
            linkLabel="Explore all industries"
          />

          <div className="grid grid-cols-2 gap-x-[34px]">
            {industries.map((industry) => (
              <div className="border-b border-white/10" key={industry}>
                <MenuItem href="#industries">{industry}</MenuItem>
              </div>
            ))}
          </div>

          <aside className="border-l border-white/10 py-[22px] pl-7 max-lg:hidden">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#a78bf0]">
              Our approach
            </span>
            <p className="mt-[15px] text-[13px] leading-7 text-white/60">
              We begin with the users, workflows, constraints, and growth
              pressures unique to each sector.
            </p>
          </aside>
        </div>
      </div>
    );
  }

  return null;
}
