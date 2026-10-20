import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';

const langBadges = [
  { code: 'AR', label: 'Arabic' },
  { code: 'IT', label: 'Italiano' },
  { code: 'FR', label: 'Français' },
  { code: 'EN', label: 'English' },
];

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="border-b border-[color:var(--bp-line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="01" label={t.about.eyebrow} />
        <div className="mt-4 grid gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl">
              {t.about.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">{t.about.p1}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">{t.about.p2}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {langBadges.map((l) => (
                <span
                  key={l.code}
                  className="flex items-center gap-1.5 rounded border border-[color:var(--bp-line)] px-2.5 py-1 font-mono text-[11px] text-[color:var(--bp-ink-dim)]"
                  title={l.label}
                >
                  <span className="text-[color:var(--bp-cyan)]">{l.code}</span>
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
              {t.about.cardsTitle}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.about.cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-4 transition-colors hover:border-[color:var(--bp-line-strong)]"
                >
                  <div className="font-mono text-[10px] text-[color:var(--bp-cyan)]">0{i + 1}</div>
                  <h3 className="mt-2 font-display text-[14px] font-semibold text-[color:var(--bp-ink)]">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[color:var(--bp-ink-dim)]">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
      <span className="text-[color:var(--bp-amber)]">{n}</span>
      <span className="h-px flex-1 max-w-8 bg-[color:var(--bp-line-strong)]" />
      {label}
    </div>
  );
}
