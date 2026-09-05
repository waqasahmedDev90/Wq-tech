import { cn } from "@/lib/cn";

export function BrandSvg({ icon, title, className }) {
  return (
    <svg
      aria-label={title}
      className={cn("shrink-0", className)}
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  );
}