"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  Code2,
  LifeBuoy,
  Palette,
  Plus,
  TrendingUp,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { homeServices } from "@/data/homeServices";
import { useServicesMotion } from "@/hooks/useServicesMotion";
import { cn } from "@/lib/cn";

const serviceIcons = {
  development: Code2,
  experience: Palette,
  growth: TrendingUp,
  support: LifeBuoy,
};

export function ServicesSection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useServicesMotion(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="overflow-clip bg-[#08070b] py-16 text-white max-md:py-14 max-sm:py-12"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="grid grid-cols-[0.42fr_1.58fr] gap-10 max-md:grid-cols-1 max-md:gap-5">
          <p
            className="flex items-center gap-3 self-start text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a98df4]"
            data-services-eyebrow
          >
            <span className="h-px w-8 bg-gradient-to-r from-brand-purple to-brand-blue" />
            Our services
          </p>

          <div data-services-heading>
            <h2
              id="services-heading"
              className="max-w-[780px] text-[clamp(32px,3.3vw,48px)] font-medium leading-[1.14] tracking-[-0.04em]"
            >
              Everything your digital business needs,{" "}
              <span className="bg-gradient-to-r from-[#a77bf5] to-brand-blue bg-clip-text text-transparent">
                connected in one team.
              </span>
            </h2>

            <p className="mt-4 max-w-[650px] text-base leading-[1.75] text-white/55 max-sm:text-[15px]">
              From the first idea to long-term growth, our specialists work
              together instead of passing your project between disconnected
              teams.
            </p>
          </div>
        </div>

        <div
          className="mt-11 flex h-[530px] gap-3 max-lg:h-auto max-lg:flex-col max-sm:mt-9"
          data-services-grid
        >
          {homeServices.map((service, index) => {
            const isActive = activeIndex === index;
            const Icon = serviceIcons[service.id];

            return (
              <article
                key={service.id}
                data-service-card
                className={cn(
                  "relative min-w-0 basis-0 overflow-hidden rounded-[26px] border bg-[#100d15] transition-[flex-grow,height,border-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:basis-auto max-sm:rounded-[22px]",
                  isActive
                    ? "border-white/30 max-lg:h-[390px] max-sm:h-[365px]"
                    : "border-white/10 max-lg:h-[116px]",
                )}
                style={{ flexGrow: isActive ? 1.85 : 0.75 }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <button
                  type="button"
                  className="group absolute inset-0 z-20 block size-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-blue"
                  aria-expanded={isActive}
                  aria-label={"Show " + service.title + " services"}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className="absolute inset-x-0 top-0 z-10 flex items-center justify-between p-6 max-sm:p-5">
                    <span className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold tracking-[0.16em] text-white/55">
                        {service.number}
                      </span>

                      <span
                        className={cn(
                          "grid size-9 place-items-center rounded-full border transition-colors duration-500",
                          isActive
                            ? "border-brand-blue/55 bg-brand-blue/15 text-brand-blue"
                            : "border-white/15 bg-black/15 text-white/65",
                        )}
                      >
                        <Icon
                          className="size-[17px]"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </span>
                    </span>

                    <span
                      className={cn(
                        "grid size-10 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-500",
                        isActive
                          ? "border-brand-purple bg-brand-purple text-white"
                          : "border-white/20 bg-black/15 text-white/75 group-hover:border-white/40",
                      )}
                      data-service-magnetic
                    >
                      <Plus
                        className={cn(
                          "size-[18px] transition-transform duration-500",
                          isActive ? "rotate-45" : "rotate-0",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </span>

                  <span className="absolute inset-x-0 bottom-0 z-10 block p-6 max-sm:p-5">
                    <span
                      className={cn(
                        "block font-medium leading-[1.08] tracking-[-0.035em] text-white transition-[font-size,color] duration-500",
                        isActive
                          ? "text-[clamp(28px,2.7vw,40px)]"
                          : "text-[clamp(22px,2vw,29px)] text-white/80",
                      )}
                    >
                      {service.title}
                    </span>

                    <span
                      className={cn(
                        "grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ease-out",
                        isActive
                          ? "mt-4 grid-rows-[1fr] opacity-100 delay-150"
                          : "mt-0 grid-rows-[0fr] opacity-0 delay-0",
                      )}
                    >
                      <span className="min-h-0">
                        <span className="block max-w-[600px] text-[14px] leading-[1.7] text-white/70">
                          {service.description}
                        </span>

                        <span className="mt-4 flex flex-wrap gap-2">
                          {service.services.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[12px] leading-none text-white/75"
                            >
                              {item}
                            </span>
                          ))}
                        </span>
                      </span>
                    </span>
                  </span>
                </button>

                <div
                  className="absolute -inset-y-[7%] inset-x-0 will-change-transform"
                  data-service-parallax
                  aria-hidden="true"
                >
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    loading="eager"
                    quality={78}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className={cn(
                      "object-cover transition-[filter,opacity,transform] duration-700 ease-out",
                      isActive
                        ? "scale-100 opacity-100 grayscale-0"
                        : "scale-[1.07] opacity-60 grayscale-[55%]",
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,11,0.28)_0%,rgba(8,7,11,0.18)_34%,rgba(8,7,11,0.96)_100%)] transition-opacity duration-700",
                    isActive ? "opacity-100" : "opacity-95",
                  )}
                  aria-hidden="true"
                />

                <div
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px] origin-left bg-gradient-to-r from-brand-purple to-brand-blue transition-transform duration-700",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

        <p className="mt-5 text-right text-[12px] text-white/35 max-lg:hidden">
          Hover or select a service to explore
        </p>
      </Container>
    </section>
  );
}