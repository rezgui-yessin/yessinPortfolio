import { FiArrowUp } from 'react-icons/fi';
import { useI18n } from '../../i18n';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[color:var(--bp-line)] pt-8 text-center md:flex-row md:text-left">
        <div>
          <div className="font-display text-[14px] font-semibold text-[color:var(--bp-ink)]">Yessin Rezgui</div>
          <div className="mt-1 font-mono text-[11px] text-[color:var(--bp-ink-faint)]">{t.footer.tagline}</div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-[color:var(--bp-ink-faint)]">
            &copy; {new Date().getFullYear()} — {t.footer.rights}
          </span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1.5 rounded border border-[color:var(--bp-line)] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-wide text-[color:var(--bp-ink-faint)] transition-colors hover:text-[color:var(--bp-ink)]"
          >
            <FiArrowUp size={11} />
            {t.footer.backToTop}
          </button>
        </div>
      </div>
    </footer>
  );
}
