export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface text-muted">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#101b2f] px-5 py-3 shadow-surface">
        <div className="h-3 w-3 animate-pulse rounded-full bg-accent" />
        <p>Chargement du dashboard...</p>
      </div>
    </div>
  );
}
