import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  trailingIcon?: ReactNode;
  fullWidth?: boolean;
  size?: Size;
}

const variantMap: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand)] hover:bg-[var(--color-brand-strong)] text-white shadow-sm",
  secondary:
    "bg-white border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-brand)]",
  ghost:
    "bg-transparent text-[var(--color-muted)] hover:text-[var(--color-brand)]",
  danger: "bg-[var(--color-danger)] hover:bg-[#b91c1c] text-white",
};

export function Button({
  variant = "primary",
  icon,
  trailingIcon,
  fullWidth,
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-lg font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[var(--color-brand)] disabled:opacity-50 disabled:cursor-not-allowed",
        variantMap[variant],
        size === "sm" ? "text-xs px-3 py-1.5" : size === "lg" ? "text-base px-5 py-3" : "text-sm px-4 py-2",
        fullWidth && "w-full justify-center",
        className,
      )}
      {...props}
    >
      {icon && <span aria-hidden>{icon}</span>}
      <span>{children}</span>
      {trailingIcon && <span aria-hidden>{trailingIcon}</span>}
    </button>
  );
}
