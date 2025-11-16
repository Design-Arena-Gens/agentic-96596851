import { cn } from "@/lib/utils";

interface BarItem {
  label: string;
  value: number;
  suffix?: string;
}

interface BarListProps {
  items: BarItem[];
  className?: string;
}

export function BarList({ items, className }: BarListProps) {
  const max = Math.max(...items.map((item) => item.value));

  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item.label}>
          <div className="flex items-center justify-between text-sm font-medium">
            <span>{item.label}</span>
            <span>
              {item.value}
              {item.suffix ?? "%"}
            </span>
          </div>
          <div className="mt-1 h-2 rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-[var(--color-brand)]"
              style={{ width: `${(item.value / (max || 1)) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
