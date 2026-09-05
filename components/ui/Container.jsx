import { cn } from "@/lib/cn";

export function Container({ as: Tag = "div", className, children }) {
  return (
    <Tag
      className={cn(
        "mx-auto w-[calc(100%-4rem)] max-w-[1280px] max-md:w-[calc(100%-2.5rem)] max-sm:w-[calc(100%-2rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
