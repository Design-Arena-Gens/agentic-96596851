import type { ReactNode } from "react";
import { Sidebar } from "./sidebar";

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="mx-auto flex max-w-[1440px] gap-6 px-6 py-6">
      <Sidebar />
      <div className="flex-1 space-y-6 pb-10">{children}</div>
    </div>
  );
}
