"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Code2,
  LifeBuoy,
  Palette,
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

const cardSurfaces = [
  "bg-[#29262f]",
  "bg-[#202a34]",
  "bg-[#2b2730]",
  "bg-[#202b31]",
];

export function ServicesSection() {
  const sectionRef = useRef(null);

  useServicesMotion(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-clip bg-[#08070b] py-16 text-white max-md:py-14 max-sm:py-12"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 22%, rgba(124,76,230,0.13), transparent 27%), radial-gradient(circle at 88% 76%, rgba(60,163,248,0.1), transparent 25%)",
        }}
      />

      <Container className="relative">
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
              className="max-w-195 text-[clamp(32px,3.3vw,46px)] font-medium leading-[1.14] tracking-[-0.04em]"
            >
              Connected expertise for{" "}
              <span className="bg-gradient-to-r from-[#a77bf5] to-brand-blue bg-clip-text text-transparent">
                ambitious digital work.
              </span>
            </h2>

            <p className="mt-4 max-w-[650px] text-base leading-[1.75] text-white/55 max-sm:text-[15px]">
              Strategy, experience, engineering, and growth come together as
              one focused delivery team.
            </p>
          </div>
        </div>

        <div className="mt-10 max-sm:mt-8" data-services-stack>
          {homeServices.map((service, index) => {
            const Icon = serviceIcons[service.id];

            return (
              <article
                key={service.id}
                className="sticky top-[112px] mb-[16vh] h-[min(66vh,580px)] min-h-[500px] last:mb-0 max-xl:min-h-[470px] max-lg:static max-lg:mb-5 max-lg:h-auto max-lg:min-h-0"
                data-service-card
                style={{ zIndex: index + 1 }}
                aria-labelledby={"service-title-" + service.id}
              >
                <div
                  className={cn(
                    "relative grid size-full grid-cols-[0.76fr_0.9fr_1.14fr] overflow-hidden rounded-[30px] border border-white/10 p-[clamp(22px,2.3vw,36px)] shadow-[0_30px_90px_rgba(0,0,0,0.42)] will-change-transform max-lg:grid-cols-1 max-lg:rounded-[24px]",
                    cardSurfaces[index],
                  )}
                  data-service-card-inner
                >
                  {/* LEFT COLUMN */}
                  <div
                    className="relative z-10 flex min-w-0 flex-col border-r border-white/10 pr-[clamp(24px,2.5vw,40px)] max-lg:border-r-0 max-lg:pr-0"
                    data-service-copy
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[12px] font-semibold tracking-[0.16em] text-[#b99cff]">
                        {service.number}
                      </span>

                      <span className="h-px w-9 bg-gradient-to-r from-brand-purple to-brand-blue" />
                    </div>

                    <div className="mt-10 max-xl:mt-8 max-lg:mt-7">
                      <div className="mb-5 grid size-11 place-items-center rounded-full border border-white/15 bg-black/10 text-[#48a9ff]">
                        <Icon
                          className="size-5"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>

                      <h3
                        id={"service-title-" + service.id}
                        className="text-[clamp(30px,3vw,43px)] font-semibold leading-[1.05] tracking-[-0.04em]"
                      >
                        {service.title}
                      </h3>

                      <p className="mt-5 max-w-[330px] text-base leading-[1.65] text-white/68 max-xl:text-[15px]">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-auto flex items-center gap-3 pt-8 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/42 max-lg:mt-8 max-lg:pt-0">
                      <span>Full-service capability</span>
                    </div>
                  </div>

                  {/* CENTRE IMAGE */}
                  <div
                    className="relative mx-[clamp(22px,2.4vw,38px)] min-h-0 overflow-hidden rounded-[22px] max-lg:mx-0 max-lg:mt-8 max-lg:h-[340px] max-sm:h-[280px] max-sm:rounded-[18px]"
                    data-service-image
                  >
                    <div
                      className="absolute -inset-y-[8%] inset-x-0 will-change-transform"
                      data-service-image-parallax
                    >
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        quality={76}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="scale-[1.08] object-cover"
                      />
                    </div>

                    <div
                      className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,7,11,0.02)_45%,rgba(8,7,11,0.48)_100%)]"
                      aria-hidden="true"
                    />

                    <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white/80 backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(homeServices.length).padStart(2, "0")}
                    </span>
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="relative z-10 flex min-w-0 flex-col border-l border-white/10 pl-[clamp(26px,2.8vw,44px)] max-lg:mt-8 max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.17em] text-[#b99cff]">
                          What we deliver
                        </span>

                        <p className="mt-2 text-[14px] text-white/45">
                          Focused expertise, delivered as one team.
                        </p>
                      </div>

                      <span className="rounded-full border border-white/12 bg-black/10 px-3 py-1.5 text-[11px] font-medium text-white/55">
                        04 capabilities
                      </span>
                    </div>

                    <ul className="mt-7 border-t border-white/12">
                      {service.services.map((item, itemIndex) => (
                        <li
                          key={item}
                          className="group flex items-center gap-4 border-b border-white/12 py-[clamp(13px,1.7vh,18px)]"
                        >
                          <span className="w-5 shrink-0 text-[11px] font-semibold text-white/35">
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>

                          <span className="min-w-0 flex-1 text-[15px] font-medium text-white/82">
                            {item}
                          </span>

                          <ArrowUpRight
                            className="size-4 shrink-0 text-[#54acff] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* BACKGROUND NUMBER */}
                  <span
                    className="pointer-events-none absolute -right-3 -top-14 text-[170px] font-semibold leading-none tracking-[-0.08em] text-white/[0.025] max-lg:hidden"
                    aria-hidden="true"
                  >
                    {service.number}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}