"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { courseCatalog } from "@/data/mock-data";

const coordinators = ["Kavita Rao", "Rahul Jain", "Ashwin Mehta", "Priya Nair"];

export default function CoursesPage() {
  const [includeWaitlist, setIncludeWaitlist] = useState(false);

  return (
    <div className="space-y-6">
      <TopBar
        title="Courses & Batches"
        subtitle="Orchestrate curriculum offerings, cohorts, and facilitator assignments."
        actions={<Button>Create new course</Button>}
      />

      <Card title="Catalog" subtitle="Overview of active courses and batch allocation.">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <Input className="max-w-xs" placeholder="Search by course or coordinator" />
          <div className="flex gap-2">
            <Button variant="secondary">Download catalog</Button>
            <Button>Sync from SIS</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-muted">
                <th scope="col" className="px-3 py-2">
                  Course
                </th>
                <th scope="col" className="px-3 py-2">
                  Coordinator
                </th>
                <th scope="col" className="px-3 py-2">
                  Batches
                </th>
                <th scope="col" className="px-3 py-2">
                  Learners
                </th>
                <th scope="col" className="px-3 py-2">
                  Compliance
                </th>
                <th scope="col" className="px-3 py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(148,163,184,0.2)]">
              {courseCatalog.map((course) => (
                <tr key={course.id}>
                  <td className="px-3 py-3">
                    <div className="font-semibold text-[var(--color-foreground)]">
                      {course.name}
                    </div>
                    <p className="text-xs text-muted">{course.id}</p>
                  </td>
                  <td className="px-3 py-3 text-sm text-muted">{course.coordinator}</td>
                  <td className="px-3 py-3 text-sm text-muted">{course.batches}</td>
                  <td className="px-3 py-3 text-sm text-muted">{course.learners}</td>
                  <td className="px-3 py-3">
                    <Badge tone="info">{course.compliance}</Badge>
                  </td>
                  <td className="px-3 py-3">
                    <Button variant="ghost" className="text-[var(--color-brand)]">
                      Manage
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <section className="grid gap-4 xl:grid-cols-[1.05fr,0.95fr]">
        <Card title="Create batch" subtitle="Build a new cohort in under 30 seconds.">
          <form className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2">
              <label htmlFor="batch-course" className="text-sm font-medium">
                Course
              </label>
              <Select id="batch-course" className="mt-2">
                <option value="">Choose course</option>
                {courseCatalog.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <label htmlFor="batch-name" className="text-sm font-medium">
                Batch name
              </label>
              <Input id="batch-name" placeholder="Grade 10 · Batch B" className="mt-2" />
            </div>
            <div>
              <label htmlFor="batch-capacity" className="text-sm font-medium">
                Capacity
              </label>
              <Input id="batch-capacity" type="number" min={1} className="mt-2" defaultValue={32} />
            </div>
            <div>
              <label htmlFor="batch-coordinator" className="text-sm font-medium">
                Lead facilitator
              </label>
              <Select id="batch-coordinator" className="mt-2">
                <option value="">Select coordinator</option>
                {coordinators.map((coordinator) => (
                  <option key={coordinator} value={coordinator}>
                    {coordinator}
                  </option>
                ))}
              </Select>
            </div>
            <div className="flex items-end">
              <Checkbox
                label="Enable waitlist"
                checked={includeWaitlist}
                onChange={(event) => setIncludeWaitlist(event.target.checked)}
              />
            </div>
            <div className="md:col-span-2 flex gap-3">
              <Button type="submit">Create batch</Button>
              <Button type="button" variant="secondary">
                Save draft
              </Button>
            </div>
          </form>
        </Card>
        <Card title="Automation rules" subtitle="Keep cohorts aligned automatically.">
          <ul className="space-y-4 text-sm text-muted">
            <li className="rounded-[var(--radius-md)] bg-[rgba(37,99,235,0.08)] p-4">
              Auto-assign students based on placement data and availability.
            </li>
            <li className="rounded-[var(--radius-md)] bg-[rgba(22,163,74,0.12)] p-4">
              Notify guardians upon batch changes or schedule adjustments.
            </li>
            <li className="rounded-[var(--radius-md)] bg-[rgba(245,158,11,0.12)] p-4">
              Alert coordinators when capacity exceeds 90%.
            </li>
          </ul>
        </Card>
      </section>
    </div>
  );
}
