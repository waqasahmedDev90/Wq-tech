"use client";

import { useRef } from "react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { selectedProjects } from "@/data/selectedProjects";
import { useSelectedWorkMotion } from "@/hooks/useSelectedWorkMotion";

export function SelectedWorkSection() {
  const sectionRef = useRef(null);

  const featuredProject = selectedProjects[0];
  const supportingProjects = selectedProjects.slice(1);

  useSelectedWorkMotion(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden bg-[#f5f5f7] py-20 text-[#15131a] max-md:py-16 max-sm:py-14"
      aria-labelledby="selected-work-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 12%, rgba(60,163,248,0.12), transparent 24%), radial-gradient(circle at 8% 82%, rgba(124,76,230,0.1), transparent 26%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-[0.42fr_1.58fr] gap-10 max-md:grid-cols-1 max-md:gap-5">
          <p
            className="flex items-center gap-3 self-start text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7048dc]"
            data-work-eyebrow
          >
            <span className="h-px w-8 bg-gradient-to-r from-brand-purple to-brand-blue" />
            Selected work
          </p>

          <div data-work-heading>
            <h2
              id="selected-work-heading"
              className="max-w-[820px] text-[clamp(34px,4.2vw,60px)] font-medium leading-[1.08] tracking-[-0.05em]"
            >
              Digital work designed to create{" "}
              <span className="bg-gradient-to-r from-[#7c4ce6] to-[#3ca3f8] bg-clip-text text-transparent">
                real business impact.
              </span>
            </h2>

            <p className="mt-5 max-w-[640px] text-base leading-[1.75] text-[#15131a]/60">
              A selection of digital experiences shaped around
              clarity, performance, and measurable growth.
            </p>
          </div>
        </div>

        <div className="mt-12 max-sm:mt-9">
          {/* Featured project */}

          <article
            className="group grid min-h-[520px] grid-cols-[1.45fr_0.75fr] overflow-hidden rounded-[30px] bg-[#111015] p-3 text-white shadow-[0_30px_80px_rgba(25,20,35,0.16)] max-lg:grid-cols-1 max-lg:min-h-0 max-sm:rounded-[24px]"
            data-work-card
          >
            <div className="relative min-h-[496px] overflow-hidden rounded-[22px] max-lg:min-h-[390px] max-sm:min-h-[300px] max-sm:rounded-[18px]">
              <div
                className="absolute -inset-y-[8%] inset-x-0 will-change-transform"
                data-work-media
              >
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.imageAlt}
                  fill
                  loading="lazy"
                  quality={76}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="scale-[1.06] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
                />
              </div>

              <div
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
                aria-hidden="true"
              />

              <span className="absolute left-6 top-6 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white/85 backdrop-blur-sm">
                FEATURED / {featuredProject.number}
              </span>
            </div>

            <div className="flex flex-col justify-between p-[clamp(28px,4vw,54px)] max-lg:min-h-[360px] max-sm:min-h-[330px]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a98df4]">
                Concept showcase
              </span>

              <div>
                <h3 className="text-[clamp(32px,3.6vw,50px)] font-medium leading-[1.05] tracking-[-0.045em]">
                  {featuredProject.title}
                </h3>

                <p className="mt-5 max-w-[440px] text-base leading-[1.7] text-white/62">
                  {featuredProject.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredProject.categories.map(
                    (category) => (
                      <span
                        key={category}
                        className="rounded-full border border-white/16 px-3 py-1.5 text-[12px] text-white/68"
                      >
                        {category}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </article>

          {/* Supporting projects */}

          <div className="mt-5 grid grid-cols-2 gap-5 max-md:grid-cols-1">
            {supportingProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-3 shadow-[0_22px_60px_rgba(25,20,35,0.08)] max-sm:rounded-[22px]"
                data-work-card
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] max-sm:rounded-[17px]">
                  <div
                    className="absolute -inset-y-[8%] inset-x-0 will-change-transform"
                    data-work-media
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      loading="lazy"
                      quality={74}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="scale-[1.06] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
                    />
                  </div>

                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[11px] font-semibold tracking-[0.12em] text-white backdrop-blur-sm">
                    {project.number}
                  </span>
                </div>

                <div className="p-5 pb-6 pt-6 max-sm:px-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#7048dc]">
                    Concept showcase
                  </span>

                  <h3 className="mt-3 text-[clamp(25px,2.5vw,34px)] font-medium leading-[1.1] tracking-[-0.04em]">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-[540px] text-[15px] leading-[1.7] text-[#15131a]/60">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-black/10 bg-black/[0.025] px-3 py-1.5 text-[12px] text-[#15131a]/65"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}