"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useServicesWorkTransition(rootRef) {
  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const hold = root.querySelector("[data-services-hold]");
    const section = hold?.querySelector("section");
    const cards = section?.querySelectorAll("[data-service-card]");
    const lastCard = cards?.[cards.length - 1];

    if (!hold || !section || !lastCard) {
      return;
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let frame = 0;
    let previous = "";

    function measure() {
      frame = 0;

      const topGap = 112;
      const viewportHeight = window.innerHeight;
      const cardHeight = lastCard.offsetHeight;

      const enabled =
        desktop.matches &&
        !reduced.matches &&
        cardHeight + topGap + 24 <= viewportHeight;

      let top = 0;
      let tail = 0;

      if (enabled) {
        const bottomPadding =
          parseFloat(getComputedStyle(section).paddingBottom) || 0;

        const lastCardTop =
          section.offsetHeight - bottomPadding - cardHeight;

        /*
         * Jab last service card header ke neeche 112px par aaye,
         * poora Services section isi position par hold ho jata hai.
         */
        top = topGap - lastCardTop;

        /*
         * Last card ko thori der visible rakhne ke baad
         * Work section uske upar naturally cover karta hai.
         */
        tail =
          Math.max(
            0,
            viewportHeight -
              topGap -
              cardHeight -
              bottomPadding,
          ) + Math.round(viewportHeight * 0.12);
      }

      const signature = `${enabled}/${top}/${tail}`;

      if (signature === previous) {
        return;
      }

      previous = signature;

      hold.style.position = enabled ? "sticky" : "relative";
      hold.style.top = enabled ? `${top}px` : "";
      hold.style.paddingBottom = enabled ? `${tail}px` : "";

      ScrollTrigger.refresh();
    }

    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    }

    const observer = new ResizeObserver(schedule);

    observer.observe(section);
    observer.observe(lastCard);

    window.addEventListener("resize", schedule);
    desktop.addEventListener("change", schedule);
    reduced.addEventListener("change", schedule);

    schedule();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();

      window.removeEventListener("resize", schedule);
      desktop.removeEventListener("change", schedule);
      reduced.removeEventListener("change", schedule);

      hold.style.position = "";
      hold.style.top = "";
      hold.style.paddingBottom = "";
    };
  }, [rootRef]);
}