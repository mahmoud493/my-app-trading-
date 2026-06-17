import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface DashboardShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function DashboardShell({ title, description, children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-surface text-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <main className="flex min-h-screen flex-col px-6 py-6 sm:px-10 lg:px-12">
          <Topbar title={title} description={description} />
          <div className="flex-1">{children}</div>
        </main>
      </div>
    </div>
  );
}
