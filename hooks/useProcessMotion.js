"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useProcessMotion(sectionRef) {
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add(
      {
        desktop: "(min-width: 1024px)",
        reduced: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const items = Array.from(
          section.querySelectorAll("[data-process-step]"),
        );

        const fills = Array.from(
          section.querySelectorAll("[data-process-fill]"),
        );

        const track = section.querySelector("[data-process-track]");
        const { desktop, reduced } = context.conditions;

        if (reduced || !track) return;

        const axis = desktop ? "scaleX" : "scaleY";

        gsap.set(fills, {
          scaleX: 1,
          scaleY: 1,
          [axis]: 0,
        });

        const setters = fills.map((fill) =>
          gsap.quickSetter(fill, axis),
        );

        let lastReached = -1;

        function render({ progress }) {
          const position = progress * (items.length - 1);

          setters.forEach((set, index) => {
            const value = Math.max(
              0,
              Math.min(1, position - index),
            );

            set(value);
          });

          const reached = Math.min(
            items.length - 1,
            Math.floor(position + 0.001),
          );

          if (reached === lastReached) return;

          lastReached = reached;

          items.forEach((item, index) => {
            item.dataset.reached = String(index <= reached);
          });
        }

        const trigger = ScrollTrigger.create({
          trigger: track,
          start: desktop ? "top 78%" : "top 75%",
          end: desktop ? "top 30%" : "bottom 65%",
          invalidateOnRefresh: true,
          onUpdate: render,
          onRefresh: render,
        });

        render(trigger);
      },
      section,
    );

    return () => media.revert();
  }, [sectionRef]);
}