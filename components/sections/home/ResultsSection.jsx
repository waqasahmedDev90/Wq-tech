"use client";

import { useRef } from "react";

import {
  Layers3,
  Network,
  Route,
  RefreshCw,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

import {
  companyStats,
  trustSignals,
} from "@/data/companyStats";

import { useResultsMotion } from "@/hooks/useResultsMotion";

const resultIcons = {
  disciplines: Layers3,
  team: Network,
  stages: Route,
  improvement: RefreshCw,
};

export function ResultsSection() {
  const sectionRef = useRef(null);

  useResultsMotion(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="results"
      aria-labelledby="results-heading"
      className="relative z-30 overflow-hidden border-t border-white/10 bg-[#07070c] py-16 text-white md:py-20"
    >
      <div
        data-results-glow
        aria-hidden="true"
        className="pointer-events-none absolute -right-[12%] top-[5%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(69,151,246,0.17)_0%,rgba(117,66,220,0.09)_38%,transparent_70%)] blur-2xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(126,71,225,0.14)_0%,transparent_68%)]"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p
              data-results-reveal
              className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#a982f0]"
            >
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-[#8650ea] to-[#43a7f4]"
              />

              Results &amp; trust
            </p>

            <h2
              data-results-reveal
              id="results-heading"
              className="max-w-[640px] text-[clamp(34px,4vw,54px)] font-medium leading-[1.08] tracking-[-0.045em]"
            >
              Connected delivery.
              <br />

              <span className="inline-block bg-gradient-to-r from-[#8750eb] via-[#7068f1] to-[#3ca5f5] bg-clip-text text-transparent">
                Progress you can measure.
              </span>
            </h2>

            <p
              data-results-reveal
              className="mt-6 max-w-[520px] text-base leading-[1.8] text-[#aaa4b3]"
            >
              Every engagement is built around clear
              ownership, visible milestones, and improvements
              that continue after launch.
            </p>

            <ul
              data-results-reveal
              aria-label="Delivery principles"
              className="mt-8 flex max-w-[540px] flex-wrap gap-x-5 gap-y-3"
            >
              {trustSignals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-center gap-2 text-sm font-medium text-[#d8d3df]"
                >
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-gradient-to-br from-[#8750eb] to-[#3ca5f5]"
                  />

                  {signal}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative pl-7 sm:pl-10">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-px bg-white/10"
            >
              <span
                data-results-progress
                className="absolute inset-0 origin-top bg-gradient-to-b from-[#8750eb] via-[#696cf2] to-[#3ca5f5]"
              />
            </div>

            {companyStats.map((stat, index) => {
              const Icon = resultIcons[stat.id];

              const counterAttributes =
                stat.value !== undefined
                  ? {
                      "data-result-count": stat.value,
                      "data-result-pad": stat.pad,
                    }
                  : {};

              const displayedValue =
                stat.value !== undefined
                  ? String(stat.value).padStart(
                      stat.pad,
                      "0",
                    )
                  : stat.display;

              return (
                <article
                  key={stat.id}
                  data-result-row
                  className="group relative grid gap-5 border-t border-white/10 py-7 first:border-t-0 first:pt-0 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-start md:py-8"
                >
                  <div className="flex items-start justify-between gap-4 sm:block">
                    <p
                      {...counterAttributes}
                      className="bg-gradient-to-br from-white via-[#d8cdf0] to-[#779ff1] bg-clip-text text-[clamp(48px,6vw,76px)] font-medium leading-none tracking-[-0.06em] text-transparent"
                    >
                      {displayedValue}
                    </p>

                    <span className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.035] text-[#55aaf3] transition-colors duration-300 group-hover:border-[#6f70ef]/60 group-hover:bg-[#6f70ef]/10 sm:mt-5">
                      <Icon
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.6}
                      />
                    </span>
                  </div>

                  <div className="pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#81798b]">
                      Signal{" "}
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </p>

                    <h3 className="mt-2 text-[clamp(22px,2.3vw,30px)] font-medium leading-tight tracking-[-0.03em] text-white">
                      {stat.label}
                    </h3>

                    <p className="mt-3 max-w-[520px] text-base leading-[1.75] text-[#9e98a8]">
                      {stat.description}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#8750eb] via-[#6c6ff1] to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}