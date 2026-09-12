"use client";

import { useRef } from "react";
import { Search, Route, PenTool, Rocket } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { processSteps } from "@/data/processSteps";
import { useProcessMotion } from "@/hooks/useProcessMotion";

const processIcons = {
  discover: Search,
  plan: Route,
  create: PenTool,
  launch: Rocket,
};

export function OurProcessSection() {
  const sectionRef = useRef(null);

  useProcessMotion(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="process"
      aria-labelledby="process-heading"
      className="relative z-30 scroll-mt-28 border-t border-[#e8e3ee] bg-[#f7f7fb] py-12 text-[#211a2b] md:py-14"
    >
      <Container>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-14">
          <div>
            <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7040c9]">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-[#814be8] to-[#389be8]"
              />
              Our process
            </p>

            <h2
              id="process-heading"
              className="text-[clamp(30px,3vw,40px)] font-medium leading-[1.2] tracking-[-0.035em]"
            >
              A clear process.
              <br />
              <span className="inline-block bg-gradient-to-r from-[#7C3AED] via-[#6964F1] to-[#3BA7F5] bg-clip-text text-transparent">
                A stronger outcome.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-[15px] leading-[1.75] text-[#6b6376]">
            From the first conversation to the next improvement, we keep the
            work connected and you involved at every step.
          </p>
        </div>

        <ol
          data-process-track
          className="relative mt-8 grid list-none gap-7 lg:grid-cols-4 lg:gap-6"
        >
          {processSteps.map((step, index) => {
            const Icon = processIcons[step.id];
            const isLastStep = index === processSteps.length - 1;

            return (
              <li
                key={step.id}
                data-process-step
                data-reached="true"
                className="group relative grid min-w-0 grid-cols-[56px_minmax(0,1fr)] gap-x-5 lg:block"
              >
                {!isLastStep && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-7 top-7 h-[calc(100%+28px)] w-[2px] bg-[#e0dae9] lg:h-[2px] lg:w-[calc(100%+24px)]"
                  >
                    <span
                      data-process-fill
                      className="absolute inset-0 origin-top bg-gradient-to-b from-[#8b51eb] to-[#43a1ef] lg:origin-left lg:bg-gradient-to-r"
                    />
                  </div>
                )}

                <div className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-[#cbb4f0] bg-[#eee6fc] text-[#7440cc] transition-colors duration-300 group-data-[reached=false]:border-[#e0dae9] group-data-[reached=false]:bg-[#f7f7fb] group-data-[reached=false]:text-[#837a90] motion-reduce:transition-none lg:mb-5">
                  <Icon
                    aria-hidden="true"
                    className="size-[23px]"
                    strokeWidth={1.65}
                  />
                </div>

                <div className="relative min-w-0 pt-1 lg:pt-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7a6b8a]">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-[22px] font-medium leading-[1.3] tracking-[-0.025em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.75] text-[#6b6376]">
                    {step.description}
                  </p>

                  <p className="mt-4 border-t border-[#e4deeb] pt-3 text-xs font-medium leading-relaxed text-[#7142bd]">
                    {step.output}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
