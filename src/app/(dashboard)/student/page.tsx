"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkline } from "@/components/visualizations/sparkline";
import { RadialGauge } from "@/components/visualizations/radial-gauge";
import { AttendanceCalendar } from "@/components/attendance/calendar";
import { attendanceCalendar, performanceLine, studentTimeline } from "@/data/mock-data";

const resourceTabs = [
  { id: "upcoming", label: "Upcoming" },
  { id: "submitted", label: "Submitted" },
  { id: "feedback", label: "Feedback" },
];

const upcomingItems = [
  {
    title: "Physics lab reflection",
    due: "Due Friday, 5 PM",
    type: "Assignment",
    status: "In progress",
  },
  {
    title: "Robotics sprint demo",
    due: "Due Monday, 9 AM",
    type: "Project",
    status: "On track",
  },
];

export default function StudentDashboardPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <div className="space-y-6">
      <TopBar
        title="Student Dashboard"
        subtitle="Track attendance, academics, and upcoming work with clarity."
        actions={<Button>Download progress report</Button>}
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr,0.9fr]">
        <Card title="Mastery progress" subtitle="Performance across the current term">
          <div className="grid gap-6 md:grid-cols-[1.2fr,0.8fr]">
            <Sparkline data={performanceLine.slice(-6)} label="Mastery progress last 6 months" />
            <div className="grid gap-4 sm:grid-cols-2">
              <RadialGauge value={88} label="Subject mastery" />
              <RadialGauge value={94} label="Assessment completion" />
            </div>
          </div>
        </Card>
        <Card title="Attendance snapshot" subtitle="Stay aware of patterns and streaks">
          <AttendanceCalendar month="2025-03" data={attendanceCalendar} />
        </Card>
      </section>

      <section className="grid gap-4 xl:grid-cols-[0.9fr,1.1fr]">
        <Card
          title="Learning timeline"
          subtitle="Recent activities and achievements"
          actions={
            <Button variant="secondary" className="text-[var(--color-brand)]">
              View full history
            </Button>
          }
        >
          <ol className="space-y-4 border-l border-[rgba(148,163,184,0.3)] pl-5">
            {studentTimeline.map((item) => (
              <li key={item.event} className="relative">
                <span className="absolute -left-2.5 mt-0.5 h-2.5 w-2.5 rounded-full bg-[var(--color-brand)]" />
                <p className="text-xs uppercase tracking-wide text-muted">{item.time}</p>
                <p className="text-sm font-medium text-[var(--color-foreground)]">
                  {item.event}
                </p>
              </li>
            ))}
          </ol>
        </Card>
        <Card
          title="Coursework"
          subtitle="Keep pace with assignments and feedback"
          actions={<Badge tone="info">Synced with LMS</Badge>}
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              {resourceTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "bg-[var(--color-brand)] text-white"
                      : "bg-[rgba(37,99,235,0.08)] text-[var(--color-brand)]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <Button variant="secondary">Submit evidence</Button>
          </div>
          <ul className="mt-5 space-y-4">
            {upcomingItems.map((item) => (
              <li
                key={item.title}
                className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-white px-4 py-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted">{item.type} · {item.due}</p>
                  </div>
                  <Badge tone="success">{item.status}</Badge>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  );
}
