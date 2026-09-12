"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useSelectedWorkMotion(
  sectionRef,
  activeService,
) {
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();

    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const cards = Array.from(
          section.querySelectorAll("[data-project-card]"),
        );

        const grid = section.querySelector("#work-projects");
        const glow = section.querySelector("[data-work-glow]");

        gsap.fromTo(
          glow,
          {
            xPercent: -3,
            yPercent: -4,
          },
          {
            xPercent: 3,
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );

        const animation = {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.055,
          ease: "power2.out",
        };

        if (
          grid &&
          grid.getBoundingClientRect().top >= window.innerHeight
        ) {
          animation.scrollTrigger = {
            trigger: grid,
            start: "top 94%",
            once: true,
          };
        }

        gsap.fromTo(
          cards,
          {
            y: 20,
            opacity: 0,
          },
          animation,
        );

        cards.forEach((card) => {
          const image = card.querySelector(
            "[data-project-media]",
          );

          if (!image) {
            return;
          }

          gsap.fromTo(
            image,
            {
              yPercent: -3,
            },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            },
          );
        });
      },
      section,
    );

    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(frame);
      media.revert();
    };
  }, [sectionRef, activeService]);
}