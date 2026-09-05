"use client";

import { useEffect, useState } from "react";

export function useHeaderScroll(threshold = 28) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > threshold);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, [threshold]);

  return scrolled;
}
