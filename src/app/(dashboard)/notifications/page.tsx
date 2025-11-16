"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notificationsFeed, inboxMessages, acknowledgmentsQueue } from "@/data/mock-data";
import { Modal } from "@/components/ui/modal";
import { StatusPill } from "@/components/ui/status-pill";

export default function NotificationsPage() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const activeAcknowledgment = acknowledgmentsQueue.find((item) => item.id === openModal);

  return (
    <div className="space-y-6">
      <TopBar
        title="Notifications center"
        subtitle="Coordinate announcements, inbox replies, and family acknowledgments from one hub."
        actions={<Button>Compose announcement</Button>}
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr,0.9fr]">
        <section id="inbox">
          <Card
            title="Inbox"
            subtitle="Every message tracked with response status."
            actions={<Button variant="secondary">Mark all read</Button>}
          >
            <ul className="space-y-4">
              {inboxMessages.map((message) => (
                <li key={message.id} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-white px-4 py-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{message.subject}</p>
                      <p className="text-xs text-muted">
                        {message.sender} · {message.role}
                      </p>
                    </div>
                    <Badge tone="info">{message.received}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-muted">{message.summary}</p>
                  <div className="mt-3 flex gap-3">
                    <Button size="sm">Reply</Button>
                    <Button size="sm" variant="secondary">
                      Assign
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </section>
        <section id="acknowledgments">
          <Card title="Acknowledgments" subtitle="Guardian confirmations with audit-ready logs.">
            <ul className="space-y-4">
              {acknowledgmentsQueue.map((item) => (
                <li key={item.id} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-[rgba(37,99,235,0.05)] px-4 py-3">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-foreground)]">
                        {item.item}
                      </p>
                      <p className="text-xs text-muted">
                        {item.parent} for {item.student}
                      </p>
                    </div>
                    <StatusPill tone={item.status.includes("Awaiting") ? "warning" : "success"}>
                      {item.status}
                    </StatusPill>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" onClick={() => setOpenModal(item.id)}>
                      View request
                    </Button>
                    <Button size="sm" variant="secondary">
                      Resend reminder
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </section>

      <Card title="Announcements" subtitle="Broadcast activity with delivery status.">
        <div className="grid gap-4 lg:grid-cols-3">
          {notificationsFeed.map((notification) => (
            <article key={notification.id} className="rounded-[var(--radius-md)] border border-[rgba(148,163,184,0.2)] bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold">{notification.title}</h3>
                <Badge tone="info">{notification.status}</Badge>
              </div>
              <p className="mt-1 text-xs text-muted">{notification.audience}</p>
              <p className="mt-2 text-sm text-muted">{notification.body}</p>
              <p className="mt-3 text-xs text-muted">{notification.time}</p>
              <div className="mt-4 flex gap-2">
                <Button size="sm">View analytics</Button>
                <Button size="sm" variant="secondary">
                  Duplicate
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Card>

      <Modal
        title={activeAcknowledgment?.item ?? "Acknowledgment details"}
        description="Captured guardian responses with timestamped audit trails."
        open={Boolean(openModal)}
        onClose={() => setOpenModal(null)}
        onConfirm={() => setOpenModal(null)}
        confirmLabel="Mark complete"
      >
        {activeAcknowledgment ? (
          <div className="space-y-3 text-sm text-muted">
            <p>
              Guardian <strong>{activeAcknowledgment.parent}</strong> responding for{" "}
              <strong>{activeAcknowledgment.student}</strong>.
            </p>
            <p>Status: {activeAcknowledgment.status}</p>
            <p>Request sent: {activeAcknowledgment.sent}</p>
            <p>
              By marking complete you acknowledge the guardian response has been verified and archived.
            </p>
          </div>
        ) : (
          <p>No acknowledgment selected.</p>
        )}
      </Modal>
    </div>
  );
}
