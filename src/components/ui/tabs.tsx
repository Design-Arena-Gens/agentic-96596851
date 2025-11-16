import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Tabs({ items, value, onChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-white p-1 text-sm",
        className,
      )}
      role="tablist"
    >
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={active}
            className={cn(
              "rounded-full px-4 py-1.5 font-medium transition",
              active
                ? "bg-[var(--color-brand)] text-white"
                : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]",
            )}
            onClick={() => onChange(item.id)}
            type="button"
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
