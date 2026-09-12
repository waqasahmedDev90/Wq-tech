"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project, index }) {
  const [failed, setFailed] = useState(false);

  const content = (
    <>
      <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#21182e] p-2.5">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-[#18131f]">
          {failed ? (
            <div className="absolute inset-0 grid place-content-center px-5 text-center text-sm text-white/65">
              Preview temporarily unavailable
            </div>
          ) : (
            <div data-project-media className="absolute -inset-[6%]">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                unoptimized
                loading="lazy"
                sizes="(max-width: 767px) 94vw, (max-width: 1023px) 46vw, 30vw"
                onError={() => setFailed(true)}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transform-none motion-reduce:transition-none"
              />
            </div>
          )}

          <span className="absolute bottom-3 left-3 rounded-full bg-[#0d0914]/90 px-3 py-1.5 text-xs text-white/90">
            Concept {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="px-1 pb-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[22px] font-medium leading-[1.3] tracking-[-0.025em] text-white">
            {project.title}
          </h3>

          {project.href && (
            <ArrowUpRight
              className="mt-1 size-5 shrink-0 text-[#ad91fb]"
              aria-hidden="true"
            />
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {project.summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#b9a8d7]">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <article data-project-card className="group min-w-0">
      {project.href ? (
        <a
          href={project.href}
          className="block rounded-[20px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#b39aff]"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}