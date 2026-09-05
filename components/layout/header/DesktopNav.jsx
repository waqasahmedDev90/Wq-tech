"use client";

import { ChevronDown } from "lucide-react";
import { headerNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

const navigationItem =
  "relative inline-flex items-center gap-1.5 whitespace-nowrap border-0 bg-transparent py-5 text-[12px] font-medium text-[#242028] transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-[13px] after:h-0.5 after:origin-right after:scale-x-0 after:bg-gradient-to-r after:from-brand-purple after:to-brand-blue after:transition-transform after:duration-200 hover:text-brand-purple hover:after:origin-left hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue max-lg:text-[11px]";

export function DesktopNav({ activeMenu, setActiveMenu }) {
  return (
    <nav
      className="flex items-center justify-center gap-[clamp(18px,2vw,34px)] max-lg:gap-[18px] max-[820px]:hidden"
      aria-label="Main navigation"
    >
      {headerNavigation.map((item) => {
        if (!item.menu) {
          return (
            <a
              key={item.label}
              className={navigationItem}
              href={item.href}
              onFocus={() => setActiveMenu(null)}
            >
              {item.label}
            </a>
          );
        }

        const isActive = activeMenu === item.menu;

        return (
          <button
            key={item.label}
            className={cn(
              navigationItem,
              "cursor-pointer",
              isActive &&
                "text-brand-purple after:origin-left after:scale-x-100",
            )}
            type="button"
            aria-expanded={isActive}
            onMouseEnter={() => setActiveMenu(item.menu)}
            onFocus={() => setActiveMenu(item.menu)}
            onClick={() => setActiveMenu(isActive ? null : item.menu)}
          >
            {item.label}
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "size-3.5 transition-transform duration-200",
                isActive && "rotate-180",
              )}
              strokeWidth={1.7}
            />
          </button>
        );
      })}
    </nav>
  );
}
