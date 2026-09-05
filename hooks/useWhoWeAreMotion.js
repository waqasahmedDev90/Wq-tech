"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useWhoWeAreMotion(sectionRef) {
  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return undefined;
    }

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          once: true,
        },

        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from("[data-about-label]", {
          y: 16,
          duration: 0.55,
        })

        .from(
          "[data-about-line]",
          {
            y: 40,
            duration: 0.85,
            stagger: 0.09,
          },
          "-=0.3",
        )

        .from(
          "[data-about-copy]",
          {
            y: 22,
            duration: 0.65,
          },
          "-=0.4",
        )

        .from(
          "[data-about-point]",
          {
            y: 18,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.3",
        );
    }, sectionRef);

    return () => context.revert();
  }, [sectionRef]);
}