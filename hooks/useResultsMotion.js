"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useResultsMotion(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 1024px)",
      },
      (context) => {
        const { motion, desktop } = context.conditions;

        if (!motion) return;

        const intro = section.querySelectorAll(
          "[data-results-reveal]",
        );

        const rows = section.querySelectorAll(
          "[data-result-row]",
        );

        const counters = section.querySelectorAll(
          "[data-result-count]",
        );

        const progress = section.querySelector(
          "[data-results-progress]",
        );

        const glow = section.querySelector(
          "[data-results-glow]",
        );

        gsap.fromTo(
          intro,
          {
            autoAlpha: 0,
            y: 24,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 72%",
              once: true,
            },
          },
        );

        rows.forEach((row, index) => {
          gsap.fromTo(
            row,
            {
              autoAlpha: 0,
              x: desktop ? 44 : 0,
              y: desktop ? 0 : 24,
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              delay: index * 0.03,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 88%",
                once: true,
              },
            },
          );
        });

        counters.forEach((counter) => {
          const target = Number(
            counter.dataset.resultCount,
          );

          const pad = Number(
            counter.dataset.resultPad || 1,
          );

          const state = {
            value: 0,
          };

          gsap.to(state, {
            value: target,
            duration: 1.25,
            ease: "power2.out",
            snap: {
              value: 1,
            },
            onUpdate: () => {
              counter.textContent = String(
                state.value,
              ).padStart(pad, "0");
            },
            scrollTrigger: {
              trigger: counter,
              start: "top 90%",
              once: true,
            },
          });
        });

        if (progress) {
          gsap.fromTo(
            progress,
            {
              scaleY: 0,
            },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 65%",
                end: "bottom 70%",
                scrub: 0.5,
              },
            },
          );
        }

        if (glow) {
          gsap.fromTo(
            glow,
            {
              yPercent: -12,
            },
            {
              yPercent: 18,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        }
      },
      section,
    );

    return () => media.revert();
  }, [sectionRef]);
}