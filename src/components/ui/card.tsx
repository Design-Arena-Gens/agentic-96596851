import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function Card({
  children,
  className,
  title,
  subtitle,
  actions,
}: CardProps) {
  return (
    <section
      className={cn(
        "rounded-[var(--radius-lg)] border border-transparent bg-[var(--color-surface-alt)] p-6 shadow-[var(--shadow-card)]",
        className,
      )}
    >
      {(title || actions) && (
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            {title && <h2 className="text-lg font-semibold">{title}</h2>}
            {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
          </div>
          {actions}
        </header>
      )}
      <div>{children}</div>
    </section>
  );
}
