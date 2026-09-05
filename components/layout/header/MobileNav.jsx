"use client";

import { Fragment, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  headerNavigation,
  industries,
  serviceGroups,
} from "@/data/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/cn";

const primaryItem =
  "flex min-h-[62px] w-full items-center justify-between border-b border-white/10 bg-transparent p-0 text-left text-[17px] font-medium text-white";

export function MobileNav({ open, onClose }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  if (!open) return null;

  const menuItems = {
    industries,
    services: serviceGroups.flatMap((group) => group.links),
  };

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-x-3 bottom-3 top-[84px] z-50 overflow-y-auto rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(124,76,230,0.08),transparent_35%),#09070d] shadow-[0_24px_70px_rgba(0,0,0,0.45)] animate-[megaMenuReveal_220ms_ease_both] min-[821px]:hidden"
    >
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[620px] py-6 pb-11 max-sm:w-[calc(100%-2rem)]">
        {headerNavigation.map((item) => {
          if (!item.menu) {
            return (
              <a
                className={primaryItem}
                href={item.href}
                key={item.label}
                onClick={onClose}
              >
                {item.label}
              </a>
            );
          }

          const isExpanded = expandedMenu === item.menu;

          return (
            <Fragment key={item.label}>
              <button
                className={cn(primaryItem, "cursor-pointer")}
                type="button"
                aria-expanded={isExpanded}
                onClick={() =>
                  setExpandedMenu(isExpanded ? null : item.menu)
                }
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-[18px] transition-transform duration-200",
                    isExpanded && "rotate-180",
                  )}
                />
              </button>

              {isExpanded && (
                <div className="border-b border-white/10 py-3 pl-4 pb-5">
                  {menuItems[item.menu].map((link) => (
                    <a
                      className="flex min-h-[43px] items-center text-[13px] text-white/65 transition-colors hover:text-white"
                      href={`#${item.menu}`}
                      key={link}
                      onClick={onClose}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              )}
            </Fragment>
          );
        })}

        <ButtonLink href="#contact" className="mt-7 w-full" showArrow>
          Contact Us
        </ButtonLink>
      </div>
    </div>
  );
}
