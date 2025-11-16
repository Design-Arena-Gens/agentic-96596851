import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";

const quickLinks = [
  { label: "Help Center", href: "#" },
  { label: "Accessibility", href: "#" },
  { label: "Support", href: "#" },
];

interface TopBarProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
}

export function TopBar({ title, subtitle, actions, className }: TopBarProps) {
  return (
    <header
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-lg)] border border-[rgba(148,163,184,0.2)] bg-white/90 px-6 py-4 backdrop-blur shadow-[var(--shadow-card)]",
        className,
      )}
    >
      <div>
        <div className="flex items-center gap-3">
          <Avatar name="Avery Singh" className="h-11 w-11 text-base" />
          <div>
            <h1 className="text-xl font-semibold">{title}</h1>
            {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
          </div>
        </div>
        <nav aria-label="Assistance" className="mt-3 flex gap-4 text-xs text-muted">
          {quickLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[var(--color-brand)]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        {actions}
        <Button variant="ghost" type="button">
          Switch Role
        </Button>
        <Button variant="ghost" type="button">
          Sign out
        </Button>
      </div>
    </header>
  );
}
