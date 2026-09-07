"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useServicesMotion(sectionRef) {
  useEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray(
        "[data-service-card]",
      );

      const cardInners = cards.map((card) =>
        card.querySelector(
          "[data-service-card-inner]",
        ),
      );

      const setStackState = (
        activeIndex,
        immediate = false,
      ) => {
        cardInners.forEach((inner, index) => {
          const depth = activeIndex - index;
          const isBehind = depth > 0;

          const scale = isBehind
            ? Math.max(
                0.88,
                1 - depth * 0.035,
              )
            : 1;

          const y = isBehind
            ? depth * -18
            : 0;

          gsap.to(inner, {
            scale,
            y,
            opacity: 1,
            filter: "none",
            transformOrigin: "top center",
            duration:
              immediate || reducedMotion
                ? 0
                : 0.55,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      setStackState(0, true);

      if (!reducedMotion) {
        gsap.from(
          [
            "[data-services-eyebrow]",
            "[data-services-heading]",
          ],
          {
            y: 30,
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
          const copy = card.querySelector(
            "[data-service-copy]",
          );

          const image = card.querySelector(
            "[data-service-image]",
          );

          const parallaxLayer =
            card.querySelector(
              "[data-service-image-parallax]",
            );

          gsap.from([copy, image], {
            y: 28,
            opacity: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });

          gsap.fromTo(
            parallaxLayer,
            {
              yPercent: -5,
            },
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
            window.matchMedia(
              "(min-width: 1025px)",
            ).matches
          ) {
            ScrollTrigger.create({
              trigger: card,
              start: "top 58%",
              end: "bottom 42%",

              onEnter: () =>
                setStackState(index),

              onEnterBack: () =>
                setStackState(index),
            });
          }
        });
      }
    }, sectionRef);

    return () => context.revert();
  }, [sectionRef]);
}