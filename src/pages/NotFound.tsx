import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="bp-grid flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <div className="font-mono text-[13px] uppercase tracking-widest text-[color:var(--bp-amber)]">Error 404</div>
      <h1 className="mt-3 font-display text-4xl font-semibold text-[color:var(--bp-ink)]">Route not found</h1>
      <p className="mt-3 max-w-sm text-[14px] text-[color:var(--bp-ink-dim)]">
        This path doesn&rsquo;t map to anything in the system. Let&rsquo;s route you back.
      </p>
      <Link
        to="/"
        className="mt-6 rounded border border-[color:var(--bp-line-strong)] px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
      >
        Back home
      </Link>
    </div>
  );
}
