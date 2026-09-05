"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let animationFrame;

    const updateScrollTrigger = () => ScrollTrigger.update();
    const runLenis = (time) => {
      lenis.raf(time);
      animationFrame = window.requestAnimationFrame(runLenis);
    };

    lenis.on("scroll", updateScrollTrigger);
    animationFrame = window.requestAnimationFrame(runLenis);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
    };
  }, []);
}
