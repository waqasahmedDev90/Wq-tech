"use client";

import { useRef } from "react";
import { capabilities } from "@/data/navigation";
import { useHeroMotion } from "@/hooks/useHeroMotion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  useHeroMotion(sectionRef, backgroundRef);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-ink max-sm:items-end"
      aria-labelledby="hero-heading"
    >
      <div
        ref={backgroundRef}
        className="absolute -inset-y-[7%] inset-x-0 -z-30 bg-cover bg-center opacity-[0.78] will-change-transform max-sm:bg-[position:56%_center] max-sm:opacity-65"
        style={{ backgroundImage: "url('/images/hero-topographic.png')" }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,6,10,0.90)_0%,rgba(7,6,10,0.52)_48%,rgba(7,6,10,0.28)_100%),linear-gradient(180deg,rgba(7,6,10,0.12),rgba(7,6,10,0.58))] max-sm:bg-[linear-gradient(180deg,rgba(7,6,10,0.38),rgba(7,6,10,0.83)),linear-gradient(90deg,rgba(7,6,10,0.84),rgba(7,6,10,0.35))]"
        aria-hidden="true"
      />

      <Container className="py-[88px] pt-40 max-md:py-[60px] max-md:pt-[130px] max-sm:py-11 max-sm:pt-[122px]">
        <p
          className="mb-6 inline-flex items-center gap-[13px] text-[11px] font-semibold uppercase tracking-[0.20em] text-white/80 before:h-px before:w-[34px] before:bg-gradient-to-r before:from-brand-purple before:to-brand-blue max-sm:mb-[17px] max-sm:text-[9px] max-sm:tracking-[0.16em] max-sm:before:w-[22px]"
          data-hero-eyebrow
        >
          Full-Service Digital Technology Agency
        </p>

        <h1
          id="hero-heading"
          className="max-w-[1040px] text-[clamp(54px,6.15vw,88px)] font-medium leading-[1.04] tracking-[-0.055em] text-white max-md:max-w-[700px] max-md:text-[clamp(42px,10vw,68px)] max-sm:text-[clamp(38px,12.5vw,56px)] max-sm:leading-[1.07] max-sm:tracking-[-0.05em]"
        >
          <span className="block overflow-hidden pb-[0.06em] pr-[0.08em]">
            <span className="block" data-hero-line>
              Digital systems built
            </span>
          </span>
          <span className="block overflow-hidden pb-[0.06em] pr-[0.08em]">
            <span className="block" data-hero-line>
              to{" "}
              <strong className="bg-gradient-to-r from-[#8c5cf1] via-[#6e67f0] to-brand-blue bg-clip-text font-semibold text-transparent">
                move your business forward.
              </strong>
            </span>
          </span>
        </h1>

        <p
          className="mt-[30px] max-w-[730px] text-[clamp(15px,1.25vw,18px)] leading-[1.75] text-white/70 max-sm:mt-[22px] max-sm:text-[14px] max-sm:leading-[1.72]"
          data-hero-copy
        >
          WQ Tech Solutions brings strategy, experience design, engineering,
          and digital growth into one connected team - building websites,
          software, and campaigns around real business needs.
        </p>

        <div
          className="mt-[34px] flex items-center gap-4 max-sm:mt-[26px] max-sm:flex-col max-sm:items-stretch max-sm:gap-[11px]"
          data-hero-actions
        >
          <ButtonLink href="#contact" className="max-sm:w-full">
            Book Your Strategy Call
          </ButtonLink>
          <ButtonLink
            href="#services"
            variant="secondary"
            className="max-sm:w-full"
          >
            Explore Our Services
          </ButtonLink>
        </div>

        <div
          className="mt-10 flex flex-wrap items-center gap-[18px] max-sm:mt-7 max-sm:grid max-sm:grid-cols-2 max-sm:gap-3"
          aria-label="Capabilities"
        >
          {capabilities.map((capability, index) => (
            <span
              className="inline-flex items-center gap-[18px] text-[10px] font-semibold uppercase tracking-[0.20em] text-white/60 max-sm:gap-2.5 max-sm:text-[8px] max-sm:tracking-[0.15em]"
              data-capability
              key={capability}
            >
              {capability}
              {index < capabilities.length - 1 && (
                <i
                  className="h-px w-[22px] -rotate-[55deg] bg-gradient-to-r from-brand-purple/90 to-brand-blue/50 max-sm:hidden"
                  aria-hidden="true"
                />
              )}
            </span>
          ))}
        </div>
      </Container>

      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/65 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
