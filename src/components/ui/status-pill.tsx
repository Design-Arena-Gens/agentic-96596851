import { cn } from "@/lib/utils";

type Tone = "success" | "warning" | "danger" | "info" | "neutral";

const toneClasses: Record<Tone, string> = {
  success: "bg-[rgba(22,163,74,0.14)] text-[var(--color-success)]",
  warning: "bg-[rgba(245,158,11,0.14)] text-[var(--color-warning)]",
  danger: "bg-[rgba(220,38,38,0.14)] text-[var(--color-danger)]",
  info: "bg-[rgba(37,99,235,0.14)] text-[var(--color-brand)]",
  neutral: "bg-[rgba(71,85,105,0.14)] text-[var(--color-muted)]",
};

interface StatusPillProps {
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
}

export function StatusPill({ tone = "neutral", children, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
