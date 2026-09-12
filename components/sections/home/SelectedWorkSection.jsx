"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import {
  workGroups,
  workCategories,
  projectsByService,
} from "@/data/selectedProjects";
import { useSelectedWorkMotion } from "@/hooks/useSelectedWorkMotion";
import { ProjectCard } from "./work/ProjectCard";

export function SelectedWorkSection() {
  const sectionRef = useRef(null);
  const [activeService, setActiveService] = useState("website");

  const category = workCategories.find(
    (item) => item.id === activeService,
  );

  const services = workCategories.filter(
    (item) => item.group === category.group,
  );

  const projects = projectsByService[activeService];

  useSelectedWorkMotion(sectionRef, activeService);

  function selectGroup(groupId) {
    const firstService = workCategories.find(
      (item) => item.group === groupId,
    );

    setActiveService(firstService.id);
  }

  const groupClass = (active) =>
    "border-b-2 px-1 pb-3 pt-2 text-sm font-medium transition-colors " +
    (active
      ? "border-[#a987ff] text-white"
      : "border-transparent text-white/55 hover:text-white");

  const filterClass = (active) =>
    "rounded-full border px-4 py-2.5 text-sm transition-colors " +
    (active
      ? "border-[#9970ee] bg-[#7c4ce6] text-white"
      : "border-white/15 bg-white/[0.025] text-white/70 hover:border-white/35 hover:text-white");

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-labelledby="work-heading"
      className="relative z-20 scroll-mt-24 overflow-hidden rounded-t-[36px] border-t border-white/15 bg-[#100b19] py-12 text-white shadow-[0_-16px_60px_rgba(0,0,0,0.25)] md:py-14"
    >
      <div
        data-work-glow
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[20%] opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 18% 18%, rgba(124,76,230,0.38), transparent 43%), radial-gradient(ellipse at 86% 48%, rgba(38,135,221,0.20), transparent 40%), radial-gradient(ellipse at 48% 92%, rgba(119,53,173,0.20), transparent 40%)",
        }}
      />

      <Container className="relative">
        <div className="grid gap-5 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-12">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#bfa4ff]">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#a987ff]"
              />
              Our work
            </p>

            <h2
              id="work-heading"
              className="max-w-[630px] text-[clamp(30px,3.2vw,44px)] font-medium leading-[1.15] tracking-[-0.035em]"
            >
              Digital work.
              <br />
              <span className="text-[#bba0fa]">
                A different perspective.
              </span>
            </h2>
          </div>

          <p className="max-w-[470px] text-base leading-[1.75] text-white/65">
            Explore our approach across development, design, growth, and
            support. These concept studies use sample imagery.
          </p>
        </div>

        <div
          className="mt-7 flex flex-wrap gap-x-7 gap-y-1 border-b border-white/15"
          role="group"
          aria-label="Service groups"
        >
          {workGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => selectGroup(group.id)}
              aria-pressed={group.id === category.group}
              aria-controls="work-projects"
              className={groupClass(group.id === category.group)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div
          className="mt-5 flex flex-wrap gap-2"
          role="group"
          aria-label="Choose a service"
        >
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActiveService(service.id)}
              aria-pressed={service.id === activeService}
              aria-controls="work-projects"
              className={filterClass(service.id === activeService)}
            >
              {service.label}
            </button>
          ))}
        </div>

        <div className="mb-5 mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4">
          <h3 className="text-base font-medium">
            {category.label}
          </h3>

          <p role="status" className="text-xs text-white/55">
            {projects.length} concept studies · {category.label}
          </p>
        </div>

        <div
          id="work-projects"
          role="region"
          aria-label={`${category.label} projects`}
          key={activeService}
          className="grid grid-cols-1 gap-x-6 gap-y-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}