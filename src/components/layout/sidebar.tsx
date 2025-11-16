"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    title: "Dashboards",
    items: [
      { label: "Admin", href: "/admin", icon: "📊" },
      { label: "Teacher", href: "/teacher", icon: "🧑‍🏫" },
      { label: "Student", href: "/student", icon: "🎓" },
      { label: "Parent", href: "/parent", icon: "👪" },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Courses & Batches", href: "/courses", icon: "📚" },
      { label: "Marks Upload", href: "/marks/upload", icon: "📝" },
      { label: "Attendance", href: "/attendance", icon: "🗓️" },
      { label: "Knowledge Space", href: "/knowledge", icon: "🗄️" },
    ],
  },
  {
    title: "Engagement",
    items: [
      { label: "Notifications", href: "/notifications", icon: "🔔" },
      { label: "Inbox", href: "/notifications#inbox", icon: "✉️" },
      { label: "Acknowledgments", href: "/notifications#acknowledgments", icon: "✅" },
      { label: "Relationships", href: "/relationships", icon: "🤝" },
    ],
  },
  {
    title: "Controls",
    items: [{ label: "Settings & RBA", href: "/settings", icon: "⚙️" }],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="sticky top-6 flex h-[calc(100vh-3rem)] w-72 flex-col gap-6 rounded-[var(--radius-lg)] border border-[rgba(148,163,184,0.2)] bg-white p-6 shadow-[var(--shadow-card)]"
    >
      <div>
        <Link href="/admin" className="flex items-center gap-3 text-lg font-semibold">
          <span aria-hidden className="text-2xl">
            ✨
          </span>
          NimbusLearn Hub
        </Link>
        <p className="mt-1 text-xs text-muted leading-snug">
          Role-aware academic operations workspace
        </p>
      </div>
      <div className="flex-1 space-y-6 overflow-y-auto pr-1">
        {navSections.map((section) => (
          <div key={section.title}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                        active
                          ? "bg-[rgba(37,99,235,0.12)] text-[var(--color-brand)] shadow-sm"
                          : "text-[var(--color-muted)] hover:bg-[rgba(37,99,235,0.08)] hover:text-[var(--color-brand)]",
                      )}
                    >
                      {item.icon && (
                        <span aria-hidden className="text-base leading-none">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
