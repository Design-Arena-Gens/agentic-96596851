import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  className?: string;
  fallback?: ReactNode;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");
}

export function Avatar({ name, className, fallback }: AvatarProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(37,99,235,0.15)] text-sm font-semibold text-[var(--color-brand)]",
        className,
      )}
    >
      {fallback ?? getInitials(name)}
    </span>
  );
}
