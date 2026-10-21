import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';

const langBadges = [
  { code: 'AR', label: 'Arabic', level: 'Native' },
  { code: 'FR', label: 'Français', level: 'Intermediate' },
  { code: 'EN', label: 'English', level: 'Intermediate' },
  { code: 'IT', label: 'Italiano', level: 'Intermediate' },
];

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="border-b border-[color:var(--bp-line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="01" label={t.about.eyebrow} />
        <div className="mt-4 grid gap-12 md:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl">
              {t.about.title}
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">{t.about.p1}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">{t.about.p2}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {langBadges.map((l, i) => (
                <motion.span
                  key={l.code}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="flex items-center gap-2 rounded border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] px-3 py-1.5 font-mono text-[11px] text-[color:var(--bp-ink-dim)] transition-colors hover:border-[color:var(--bp-cyan)] shadow-xs"
                  title={`${l.label} (${l.level})`}
                >
                  <span className="font-semibold text-[color:var(--bp-cyan)]">{l.code}</span>
                  <span className="text-[color:var(--bp-ink)]">{l.label}</span>
                  <span className="rounded bg-[color:var(--bp-line)]/60 px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-[color:var(--bp-ink-faint)]">
                    {l.level}
                  </span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]"
            >
              {t.about.cardsTitle}
            </motion.p>
            <div className="grid gap-3 sm:grid-cols-2">
              {t.about.cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-4 transition-all hover:border-[color:var(--bp-line-strong)] hover:shadow-lg"
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
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]"
    >
      <span className="text-[color:var(--bp-amber)]">{n}</span>
      <span className="h-px flex-1 max-w-8 bg-[color:var(--bp-line-strong)]" />
      {label}
    </motion.div>
  );
}
