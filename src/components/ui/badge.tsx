import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "info" | "success" | "warning" | "danger" | "neutral";

const toneStyles: Record<Tone, string> = {
  info: "bg-[rgba(37,99,235,0.1)] text-[var(--color-brand)]",
  success: "bg-[rgba(22,163,74,0.12)] text-[var(--color-success)]",
  warning: "bg-[rgba(245,158,11,0.12)] text-[var(--color-warning)]",
  danger: "bg-[rgba(220,38,38,0.12)] text-[var(--color-danger)]",
  neutral: "bg-[rgba(71,85,105,0.12)] text-[var(--color-muted)]",
};

interface BadgeProps {
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "neutral", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
