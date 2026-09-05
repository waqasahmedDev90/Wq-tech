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

    if (reducedMotion) {
      return undefined;
    }

    const magneticCleanups = [];

    const context = gsap.context(() => {
      gsap.from(
        ["[data-services-eyebrow]", "[data-services-heading]"],
        {
          y: 34,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );

      gsap.from("[data-service-card]", {
        y: 54,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-services-grid]",
          start: "top 84%",
          once: true,
        },
      });

      gsap.utils
        .toArray("[data-service-parallax]")
        .forEach((layer) => {
          gsap.fromTo(
            layer,
            { yPercent: -3 },
            {
              yPercent: 3,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.7,
              },
            },
          );
        });

      if (window.matchMedia("(pointer: fine)").matches) {
        gsap.utils
          .toArray("[data-service-magnetic]")
          .forEach((element) => {
            const moveX = gsap.quickTo(element, "x", {
              duration: 0.35,
              ease: "power3.out",
            });

            const moveY = gsap.quickTo(element, "y", {
              duration: 0.35,
              ease: "power3.out",
            });

            const handleMove = (event) => {
              const bounds = element.getBoundingClientRect();

              const x =
                event.clientX -
                (bounds.left + bounds.width / 2);

              const y =
                event.clientY -
                (bounds.top + bounds.height / 2);

              moveX(x * 0.22);
              moveY(y * 0.22);
            };

            const handleLeave = () => {
              moveX(0);
              moveY(0);
            };

            element.addEventListener(
              "pointermove",
              handleMove,
            );

            element.addEventListener(
              "pointerleave",
              handleLeave,
            );

            magneticCleanups.push(() => {
              element.removeEventListener(
                "pointermove",
                handleMove,
              );

              element.removeEventListener(
                "pointerleave",
                handleLeave,
              );
            });
          });
      }
    }, sectionRef);

    return () => {
      magneticCleanups.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, [sectionRef]);
}