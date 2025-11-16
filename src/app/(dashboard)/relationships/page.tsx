"use client";

import { useState } from "react";
import Link from "next/link";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { relationshipMap } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";

export default function RelationshipsPage() {
  const [query, setQuery] = useState("");
  const filtered = relationshipMap.filter(
    (record) =>
      record.student.toLowerCase().includes(query.toLowerCase()) ||
      record.guardians.some((guardian) => guardian.toLowerCase().includes(query.toLowerCase())) ||
      record.id.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <TopBar
        title="Relationships & Guardians"
        subtitle="Maintain up-to-date parent-student mappings with full traceability."
        actions={<Button>Export relationship matrix</Button>}
      />

      <Card title="Search connections" subtitle="Filter by student, guardian, or cohort.">
        <div className="grid gap-4 md:grid-cols-[1fr,0.4fr,0.4fr]">
          <div>
            <label htmlFor="relationship-search" className="text-sm font-medium">
              Keyword
            </label>
            <Input
              id="relationship-search"
              placeholder="Search by student or guardian"
              className="mt-2"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium">Quick actions</label>
            <Button variant="secondary" className="mt-2 w-full">
              Bulk notify guardians
            </Button>
          </div>
          <div>
            <label className="text-sm font-medium">Compliance</label>
            <Button variant="secondary" className="mt-2 w-full">
              Download consent log
            </Button>
          </div>
        </div>
      </Card>

      <Card
        title="Active mappings"
        subtitle={`${filtered.length} of ${relationshipMap.length} students match current filters.`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-muted">
                <th scope="col" className="px-3 py-2">
                  Student
                </th>
                <th scope="col" className="px-3 py-2">
                  Guardians
                </th>
                <th scope="col" className="px-3 py-2">
                  Cohorts
                </th>
                <th scope="col" className="px-3 py-2">
                  Counselor
                </th>
                <th scope="col" className="px-3 py-2">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(148,163,184,0.2)]">
              {filtered.map((record) => (
                <tr key={record.id}>
                  <td className="px-3 py-3">
                    <Link
                      href={`/students/${record.id}`}
                      className="font-semibold text-[var(--color-brand)] hover:underline"
                    >
                      {record.student}
                    </Link>
                    <p className="text-xs text-muted">{record.id}</p>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex flex-wrap gap-2">
                      {record.guardians.map((guardian) => (
                        <Badge key={guardian} tone="info">
                          {guardian}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex flex-wrap gap-2">
                      {record.cohorts.map((cohort) => (
                        <Badge key={cohort} tone="neutral">
                          {cohort}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-3 py-3 text-sm text-muted">{record.counselor}</td>
                  <td className="px-3 py-3">
                    <Button variant="ghost" className="text-[var(--color-brand)]">
                      Update mapping
                    </Button>
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
