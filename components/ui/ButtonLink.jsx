import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "border border-white/15 bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-[0_16px_34px_rgba(81,73,214,0.20)] hover:shadow-[0_18px_42px_rgba(81,73,214,0.30)]",
  secondary:
    "border border-white/25 bg-ink/30 text-white hover:border-white/50 hover:bg-white/5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex min-h-14 items-center justify-center gap-3.5 rounded-[9px] px-6 text-[13px] font-medium transition duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue",
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}
