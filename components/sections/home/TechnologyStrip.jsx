"use client";

import { useRef } from "react";

import { technologies } from "@/data/technologies";
import { BrandSvg } from "@/components/ui/BrandSvg";

function MagneticTechnology({
  technology,
  duplicate = false,
}) {
  const itemRef = useRef(null);
  const iconRef = useRef(null);

  const handlePointerMove = (event) => {
    const item = itemRef.current;
    const icon = iconRef.current;

    if (!item || !icon) return;

    const bounds = item.getBoundingClientRect();

    const pointerX =
      event.clientX - bounds.left;

    const pointerY =
      event.clientY - bounds.top;

    const offsetX =
      pointerX / bounds.width - 0.5;

    const offsetY =
      pointerY / bounds.height - 0.5;

    item.style.transform = `
      translate3d(
        ${offsetX * 12}px,
        ${offsetY * 9}px,
        0
      )
      rotateX(${offsetY * -4}deg)
      rotateY(${offsetX * 5}deg)
    `;

    item.style.background = `
      radial-gradient(
        circle at ${pointerX}px ${pointerY}px,
        rgba(124, 76, 230, 0.15),
        #ffffff 64%
      )
    `;

    icon.style.transform = `
      translate3d(
        ${offsetX * 7}px,
        ${offsetY * 5}px,
        0
      )
    `;
  };

  const resetPosition = () => {
    const item = itemRef.current;
    const icon = iconRef.current;

    if (!item || !icon) return;

    item.style.transform =
      "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)";

    item.style.background = "#ffffff";

    icon.style.transform =
      "translate3d(0, 0, 0)";
  };

  const logoColor =
    technology.name === "Next.js" ||
    technology.name === "Vercel"
      ? "#17131d"
      : `#${technology.icon.hex}`;

  return (
    <div
      ref={itemRef}
      className="
        relative
        flex
        h-[94px]
        w-[150px]
        shrink-0
        flex-col
        items-center
        justify-center
        gap-2.5
        rounded-[20px]
        border
        border-[#e3dfe8]
        bg-white
        px-3
        text-center
        shadow-[0_8px_24px_rgba(27,19,36,0.05)]
        transition-[transform,background,border-color,box-shadow]
        duration-300
        ease-out
        will-change-transform
        hover:z-10
        hover:border-brand-purple/55
        hover:shadow-[0_14px_30px_rgba(73,51,99,0.14)]
        max-sm:h-[88px]
        max-sm:w-[140px]
      "
      aria-hidden={duplicate || undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
    >
      <span
        ref={iconRef}
        className="
          grid
          size-10
          shrink-0
          place-items-center
          rounded-xl
          border
          border-[#ebe8ef]
          bg-[#f7f6f9]
          transition-transform
          duration-300
          ease-out
        "
        style={{
          color: logoColor,
        }}
      >
        <BrandSvg
          className="size-6"
          icon={technology.icon}
          title={`${technology.name} logo`}
        />
      </span>

      <span
        className="
          flex
          min-h-[32px]
          max-w-[128px]
          items-center
          justify-center
          text-center
          text-[13px]
          font-medium
          leading-[1.25]
          tracking-[-0.02em]
          text-[#292331]
        "
      >
        {technology.name}
      </span>
    </div>
  );
}

export function TechnologyStrip() {
  return (
    <section
      id="technology"
      className="
        w-full
        overflow-hidden
        border-y
        border-[#e5e1e9]
        bg-[#f7f7fa]
        py-5
        text-[#17131d]
      "
      aria-label="Technology used by WQ Tech Solutions"
    >
      <div
        className="
          mb-3
          flex
          items-center
          justify-center
          gap-3
          px-4
        "
      >
        <span
          className="
            h-px
            w-8
            bg-gradient-to-r
            from-brand-purple
            to-brand-blue
          "
        />

        <p
          className="
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.17em]
            text-[#61596a]
          "
        >
          Technology we use
        </p>

        <span
          className="
            h-px
            w-8
            bg-gradient-to-r
            from-brand-blue
            to-brand-purple
          "
        />
      </div>

      <div
        className="
          technology-marquee
          relative
          w-full
          overflow-hidden
          py-3
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",

          maskImage:
            "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
        }}
      >
        <div
          className="
            technology-marquee-track
            flex
            w-max
          "
        >
          {[0, 1].map((groupIndex) => (
            <div
              className="
                flex
                shrink-0
                gap-3
                pr-3
              "
              key={groupIndex}
            >
              {technologies.map(
                (technology) => (
                  <MagneticTechnology
                    duplicate={
                      groupIndex === 1
                    }
                    key={`${groupIndex}-${technology.name}`}
                    technology={technology}
                  />
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}