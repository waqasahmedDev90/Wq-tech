"use client";

import { useRef } from "react";
import { ServicesSection } from "./ServicesSection";
import { SelectedWorkSection } from "./SelectedWorkSection";
import { useServicesWorkTransition } from "@/hooks/useServicesWorkTransition";

export function ServicesWorkSection() {
  const rootRef = useRef(null);

  useServicesWorkTransition(rootRef);

  return (
    <div ref={rootRef} className="relative isolate bg-[#08070b]">
      <div data-services-hold className="relative z-0">
        <ServicesSection />
      </div>

      <SelectedWorkSection />
    </div>
  );
}