import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  className?: string;
  tone?: "brand" | "success" | "warning" | "danger";
}

const toneMap = {
  brand: "bg-[var(--color-brand)]",
  success: "bg-[var(--color-success)]",
  warning: "bg-[var(--color-warning)]",
  danger: "bg-[var(--color-danger)]",
};

export function Progress({ value, className, tone = "brand" }: ProgressProps) {
  const safeValue = Math.min(100, Math.max(0, value));
  return (
    <div className={cn("h-2 w-full rounded-full bg-slate-200", className)} role="progressbar" aria-valuenow={safeValue} aria-valuemin={0} aria-valuemax={100}>
      <div
        className={cn("h-full rounded-full transition-all", toneMap[tone])}
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
