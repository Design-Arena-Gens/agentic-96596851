"use client";

import Link from "next/link";
import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs } from "@/components/ui/tabs";
import { adminStatCards, performanceLine, engagementBar, studentRoster } from "@/data/mock-data";
import { Sparkline } from "@/components/visualizations/sparkline";
import { BarList } from "@/components/visualizations/bar-list";
import { StatusPill } from "@/components/ui/status-pill";

const cohortTabs = [
  { id: "overview", label: "Overview" },
  { id: "attendance", label: "Attendance" },
  { id: "academics", label: "Academics" },
];

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-6">
      <TopBar
        title="Admin Control Center"
        subtitle="Monitor institution health, oversee compliance, and coordinate communications."
        actions={<Button>Download monthly report</Button>}
      />

      <section className="grid gap-4 lg:grid-cols-4">
        {adminStatCards.map((card) => (
          <Card key={card.id} className="gradient-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-muted">{card.label}</p>
                <p className="mt-2 text-2xl font-semibold">{card.value}</p>
              </div>
              <Badge tone={card.trendTone ?? "info"}>{card.trend}</Badge>
            </div>
            <p className="sr-only">{card.trendA11y}</p>
            <p className="mt-3 text-xs text-muted">Targets refreshed hourly.</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.2fr,0.8fr]">
        <Card
          title="Academic momentum"
          subtitle="Average mastery score against benchmark goals"
          actions={<Tabs items={cohortTabs} value={activeTab} onChange={setActiveTab} />}
        >
          <div className="grid gap-6 lg:grid-cols-[1.3fr,0.7fr]">
            <Sparkline data={performanceLine} label="Average mastery progression" />
            <div className="space-y-4 rounded-[var(--radius-md)] bg-[rgba(37,99,235,0.08)] p-4">
              <p className="text-sm font-semibold">Program insights</p>
              <ul className="space-y-3 text-sm text-muted">
                <li>STEM cohorts up 12% compared to prior term.</li>
                <li>Support hours reduced average intervention time by 18%.</li>
                <li>Parent engagement in high-touch cohorts up 26%.</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card title="Engagement depth" subtitle="Interactions across the last 14 days">
          <BarList items={engagementBar.map((item) => ({ ...item, suffix: "%" }))} />
          <div className="mt-4 space-y-2 rounded-[var(--radius-md)] bg-[rgba(22,163,74,0.12)] p-3 text-sm text-[var(--color-success)]">
            <p className="font-semibold">Parent acknowledgments</p>
            <p>87% of guardians confirmed receipt within 24 hours.</p>
          </div>
        </Card>
      </section>

      <Card
        title="Student roster health"
        subtitle="Prioritized list with attendance, academics, and guardian status."
        actions={
          <div className="flex gap-2">
            <Button variant="secondary">Export CSV</Button>
            <Button>Sync SIS roster</Button>
          </div>
        }
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-muted">
                <th scope="col" className="px-3 py-2">
                  Student
                </th>
                <th scope="col" className="px-3 py-2">
                  Cohort
                </th>
                <th scope="col" className="px-3 py-2">
                  Attendance
                </th>
                <th scope="col" className="px-3 py-2">
                  Average
                </th>
                <th scope="col" className="px-3 py-2">
                  Guardian
                </th>
                <th scope="col" className="px-3 py-2">
                  Alerts
                </th>
                <th scope="col" className="px-3 py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(148,163,184,0.2)]">
              {studentRoster.map((student) => (
                <tr key={student.id}>
                  <td className="px-3 py-3">
                    <div className="font-semibold text-[var(--color-foreground)]">
                      {student.name}
                    </div>
                    <p className="text-xs text-muted">{student.id}</p>
                  </td>
                  <td className="px-3 py-3 text-sm text-muted">{student.grade}</td>
                  <td className="px-3 py-3">
                    <StatusPill tone="success">{student.attendance}%</StatusPill>
                  </td>
                  <td className="px-3 py-3">
                    <StatusPill tone={student.average >= 85 ? "success" : "warning"}>
                      {student.average}%
                    </StatusPill>
                  </td>
                  <td className="px-3 py-3 text-sm text-muted">{student.guardian}</td>
                  <td className="px-3 py-3 text-sm text-muted">{student.alerts}</td>
                  <td className="px-3 py-3">
                    <Link
                      href={`/students/${student.id}`}
                      className="text-sm font-semibold text-[var(--color-brand)] hover:underline"
                    >
                      Open profile
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
