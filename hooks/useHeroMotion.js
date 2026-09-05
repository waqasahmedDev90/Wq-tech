"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useHeroMotion(sectionRef, backgroundRef) {
  useEffect(() => {
    if (!sectionRef.current || !backgroundRef.current) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (!reducedMotion) {
        const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });

        entrance
          .from("[data-hero-eyebrow]", {
            y: 18,
            opacity: 0,
            duration: 0.65,
          })
          .from(
            "[data-hero-line]",
            { yPercent: 110, duration: 0.9, stagger: 0.1 },
            "-=0.35",
          )
          .from(
            "[data-hero-copy]",
            { y: 22, opacity: 0, duration: 0.7 },
            "-=0.45",
          )
          .from(
            "[data-hero-actions]",
            { y: 18, duration: 0.6 },
            "-=0.4",
          )
          .from(
            "[data-capability]",
            { opacity: 0, y: 12, duration: 0.5, stagger: 0.06 },
            "-=0.28",
          );

        gsap.to(backgroundRef.current, {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.7,
          },
        });
      }
    }, sectionRef);

    return () => context.revert();
  }, [backgroundRef, sectionRef]);
}
