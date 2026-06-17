interface EmptyStateProps {
  title: string;
  message: string;
}

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b1527] p-10 text-center text-white/80">
      <p className="text-sm uppercase tracking-[0.32em] text-muted">{title}</p>
      <p className="mt-4 text-sm text-muted">{message}</p>
    </div>
  );
}
