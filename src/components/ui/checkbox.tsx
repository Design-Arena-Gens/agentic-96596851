import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helperText?: string;
}

export function Checkbox({ label, helperText, className, ...props }: CheckboxProps) {
  return (
    <label className={cn("flex items-start gap-3 text-sm", className)}>
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 rounded border-[var(--color-border)] accent-[var(--color-brand)]"
        {...props}
      />
      <span>
        <span className="font-medium text-[var(--color-foreground)]">{label}</span>
        {helperText && <p className="text-xs text-muted">{helperText}</p>}
      </span>
    </label>
  );
}
