"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { useWhoWeAreMotion } from "@/hooks/useWhoWeAreMotion";

const principles = [
  {
    number: "01",
    title: "Strategy before execution",
  },
  {
    number: "02",
    title: "Design and engineering aligned",
  },
  {
    number: "03",
    title: "Growth built into delivery",
  },
];

export function WhoWeAreSection() {
  const sectionRef = useRef(null);

  useWhoWeAreMotion(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        overflow-hidden
        bg-white
        py-14
        text-[#17131d]
        max-md:py-12
        max-sm:py-10
      "
      aria-labelledby="about-heading"
    >
      <Container>
        <div
          className="
            grid
            grid-cols-[0.42fr_1.58fr]
            gap-12
            max-lg:grid-cols-[0.34fr_1.66fr]
            max-md:grid-cols-1
            max-md:gap-7
          "
        >
          <div data-about-label>
            <p
              className="
                flex
                items-center
                gap-3
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-brand-purple
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

              Who we are
            </p>
          </div>

          <div>
            <h2
              id="about-heading"
              className="
                max-w-[860px]
                text-[clamp(34px,4.1vw,56px)]
                font-medium
                leading-[1.16]
                tracking-[-0.045em]
              "
            >
              <span
                className="block"
                data-about-line
              >
                The full-stack agency for
              </span>

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-brand-purple
                  to-brand-blue
                  bg-clip-text
                  pb-[0.08em]
                  text-transparent
                "
                data-about-line
              >
                your entire brand ecosystem.
              </span>
            </h2>

            <div
              className="
                mt-8
                grid
                grid-cols-[minmax(0,1fr)_auto]
                items-end
                gap-10
                max-sm:mt-6
                max-sm:grid-cols-1
                max-sm:items-start
                max-sm:gap-5
              "
              data-about-copy
            >
              <p
                className="
                  max-w-[720px]
                  text-base
                  leading-[1.85]
                  text-[#625b69]
                  max-sm:text-[15px]
                  max-sm:leading-[1.75]
                "
              >
                WQ Tech Solutions brings strategy,
                design, development, e-commerce,
                software, and digital marketing
                together under one roof. Our
                specialists work as one connected
                team to build practical digital
                systems around your real business
                goals.
              </p>

              <a
                href="#about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[#d6d0dc]
                  pb-2
                  text-sm
                  font-semibold
                  text-[#211a28]
                  transition-colors
                  hover:border-brand-purple
                  hover:text-brand-purple
                "
              >
                Explore About Us

                <ArrowUpRight
                  className="
                    size-[18px]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div
          className="
            mt-12
            grid
            grid-cols-3
            border-t
            border-[#e5e1e9]
            pt-7
            max-md:mt-10
            max-sm:grid-cols-1
            max-sm:gap-5
            max-sm:pt-6
          "
        >
          {principles.map((principle) => (
            <div
              className="
                flex
                items-center
                gap-4
                border-r
                border-[#e5e1e9]
                px-7
                first:pl-0
                last:border-r-0
                last:pr-0
                max-sm:border-r-0
                max-sm:border-b
                max-sm:px-0
                max-sm:pb-5
                max-sm:last:border-b-0
                max-sm:last:pb-0
              "
              data-about-point
              key={principle.number}
            >
              <span
                className="
                  text-[12px]
                  font-semibold
                  text-brand-purple
                "
              >
                {principle.number}
              </span>

              <p
                className="
                  text-[14px]
                  font-medium
                  leading-[1.5]
                  text-[#3b3442]
                "
              >
                {principle.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}