import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from 'react-icons/fi';
import { useI18n } from '../../i18n';
import { useTheme } from '../../hooks/useTheme';
import type { Lang } from '../../types';

const sections: { key: keyof ReturnType<typeof useI18n>['t']['nav']; id: string }[] = [
  { key: 'about', id: 'about' },
  { key: 'skills', id: 'skills' },
  { key: 'certifications', id: 'certifications' },
  { key: 'journey', id: 'journey' },
  { key: 'projects', id: 'projects' },
  { key: 'learning', id: 'learning' },
  { key: 'contact', id: 'contact' },
];

const langs: Lang[] = ['en', 'it', 'fr'];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const goToSection = (id: string) => {
    setOpen(false);
    if (!isHome) {
      navigate('/#' + id);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-[color:var(--bp-line)] bg-[color:var(--bp-bg)]/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-mono text-[10px] text-[color:var(--bp-cyan)]">{'</>'}</span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-[color:var(--bp-ink)]">
            Yessin Rezgui
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => goToSection(s.id)}
              className={`rounded px-3 py-1.5 font-mono text-[12px] uppercase tracking-wide transition-colors ${
                active === s.id
                  ? 'text-[color:var(--bp-cyan-bright)]'
                  : 'text-[color:var(--bp-ink-dim)] hover:text-[color:var(--bp-ink)]'
              }`}
            >
              {t.nav[s.key]}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center rounded border border-[color:var(--bp-line)] font-mono text-[11px]">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-2 py-1 uppercase transition-colors ${
                  lang === l
                    ? 'bg-[color:var(--bp-cyan)]/15 text-[color:var(--bp-cyan-bright)]'
                    : 'text-[color:var(--bp-ink-faint)] hover:text-[color:var(--bp-ink)]'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.theme.light : t.theme.dark}
            className="rounded border border-[color:var(--bp-line)] p-1.5 text-[color:var(--bp-ink-dim)] transition-colors hover:text-[color:var(--bp-ink)]"
          >
            {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
          </button>
          <a
            href={`/cv/yessin-rezgui-cv-${lang}.pdf`}
            download={`yessin-rezgui-cv-${lang}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded border border-[color:var(--bp-line-strong)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-[color:var(--bp-ink)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
          >
            <FiDownload size={12} />
            {t.nav.resume}
          </a>
        </div>

        <button
          className="p-2 text-[color:var(--bp-ink)] md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[color:var(--bp-line)] bg-[color:var(--bp-bg)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goToSection(s.id)}
                  className="rounded px-2 py-2 text-left font-mono text-sm uppercase tracking-wide text-[color:var(--bp-ink-dim)]"
                >
                  {t.nav[s.key]}
                </button>
              ))}
              <a
                href={`/cv/yessin-rezgui-cv-${lang}.pdf`}
                download={`yessin-rezgui-cv-${lang}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded border border-[color:var(--bp-cyan)] py-2 font-mono text-xs uppercase tracking-wide text-[color:var(--bp-cyan-bright)]"
              >
                <FiDownload size={14} />
                {t.nav.resume}
              </a>
              <div className="mt-2 flex items-center justify-between border-t border-[color:var(--bp-line)] pt-3">
                <div className="flex items-center rounded border border-[color:var(--bp-line)] font-mono text-[11px]">
                  {langs.map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-2.5 py-1 uppercase ${
                        lang === l ? 'text-[color:var(--bp-cyan-bright)]' : 'text-[color:var(--bp-ink-faint)]'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <button
                  onClick={toggleTheme}
                  className="rounded border border-[color:var(--bp-line)] p-2 text-[color:var(--bp-ink-dim)]"
                >
                  {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
