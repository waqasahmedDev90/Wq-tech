"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useSelectedWorkMotion(sectionRef) {
  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const cleanupListeners = [];

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray("[data-work-card]");

      if (!reducedMotion) {
        gsap.from(
          ["[data-work-eyebrow]", "[data-work-heading]"],
          {
            y: 28,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );

        cards.forEach((card, index) => {
          const media = card.querySelector("[data-work-media]");

          gsap.from(card, {
            y: 56,
            opacity: 0,
            duration: 0.9,
            delay: index === 0 ? 0 : (index - 1) * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });

          gsap.fromTo(
            media,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );

          if (
            !media ||
            !window.matchMedia("(pointer: fine)").matches
          ) {
            return;
          }

          const moveX = gsap.quickTo(media, "x", {
            duration: 0.35,
            ease: "power3.out",
          });

          const moveY = gsap.quickTo(media, "y", {
            duration: 0.35,
            ease: "power3.out",
          });

          const handlePointerMove = (event) => {
            const bounds = card.getBoundingClientRect();

            const x =
              (event.clientX - bounds.left) / bounds.width - 0.5;

            const y =
              (event.clientY - bounds.top) / bounds.height - 0.5;

            moveX(x * 8);
            moveY(y * 8);
          };

          const handlePointerLeave = () => {
            moveX(0);
            moveY(0);
          };

          card.addEventListener(
            "pointermove",
            handlePointerMove,
          );

          card.addEventListener(
            "pointerleave",
            handlePointerLeave,
          );

          cleanupListeners.push(() => {
            card.removeEventListener(
              "pointermove",
              handlePointerMove,
            );

            card.removeEventListener(
              "pointerleave",
              handlePointerLeave,
            );
          });
        });
      }
    }, sectionRef);

    return () => {
      cleanupListeners.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [sectionRef]);
}