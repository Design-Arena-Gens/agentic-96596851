"use client";

import Link from "next/link";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";

const roles = [
  {
    role: "Administrator",
    description: "Oversee institution health, compliance, and analytics.",
    href: "/admin",
  },
  {
    role: "Teacher",
    description: "Manage schedules, attendance, and learning artifacts.",
    href: "/teacher",
  },
  {
    role: "Student",
    description: "Track progress, attendance, and upcoming work.",
    href: "/student",
  },
  {
    role: "Parent",
    description: "Monitor child progress, attendance, and acknowledgments.",
    href: "/parent",
  },
];

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <TopBar
        title="Role switchboard"
        subtitle="Select a workspace to continue. Permissions adapt instantly."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {roles.map((role) => (
          <Link key={role.role} href={role.href} className="block">
            <Card className="h-full transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]">
              <h2 className="text-xl font-semibold">{role.role}</h2>
              <p className="mt-2 text-sm text-muted">{role.description}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
