"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { knowledgeSpace } from "@/data/mock-data";
import { Badge } from "@/components/ui/badge";

export default function KnowledgePage() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <TopBar
        title="Knowledge space"
        subtitle="Organize curriculum, resources, and communication artifacts."
        actions={<Button>Launch bulk upload</Button>}
      />

      <section className="grid gap-4 xl:grid-cols-[0.9fr,1.1fr]">
        <Card title="Folders" subtitle="Role-based access controls applied automatically.">
          <ul className="space-y-3">
            {knowledgeSpace.map((folder) => (
              <li key={folder.id}>
                <button
                  type="button"
                  onClick={() => setSelectedFolder(folder.id)}
                  className={`w-full rounded-[var(--radius-md)] border px-4 py-3 text-left transition ${
                    selectedFolder === folder.id
                      ? "border-[var(--color-brand)] bg-[rgba(37,99,235,0.08)]"
                      : "border-[rgba(148,163,184,0.2)] bg-white hover:border-[var(--color-brand)]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">{folder.name}</p>
                      <p className="text-xs text-muted">{folder.owner}</p>
                    </div>
                    <Badge tone="info">{folder.items} items</Badge>
                  </div>
                  <p className="mt-2 text-xs text-muted">Updated {folder.updated}</p>
                </button>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Upload material" subtitle="Drag and drop files or add links.">
          <form className="space-y-4">
            <div>
              <label htmlFor="resource-title" className="text-sm font-medium">
                Title
              </label>
              <Input
                id="resource-title"
                placeholder="Differentiated instruction toolkit"
                className="mt-2"
              />
            </div>
            <div>
              <label htmlFor="resource-description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="resource-description"
                rows={4}
                placeholder="Provide context, usage guidance, and differentiation notes..."
                className="mt-2"
              />
            </div>
            <div>
              <label htmlFor="resource-folder" className="text-sm font-medium">
                Target folder
              </label>
              <div className="mt-2 rounded-lg border border-dashed border-[rgba(148,163,184,0.4)] p-4 text-sm text-muted">
                {selectedFolder
                  ? knowledgeSpace.find((folder) => folder.id === selectedFolder)?.name
                  : "Select a folder from the list to continue."}
              </div>
            </div>
            <div className="rounded-[var(--radius-md)] border border-dashed border-[rgba(148,163,184,0.4)] bg-[rgba(37,99,235,0.04)] p-8 text-center text-sm text-muted">
              Drop files here or <span className="font-semibold text-[var(--color-brand)]">browse</span> to upload.
            </div>
            <div className="flex gap-3">
              <Button type="submit">Upload</Button>
              <Button type="button" variant="secondary">
                Share link
              </Button>
            </div>
          </form>
        </Card>
      </section>
    </div>
  );
}
