import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';
import { useI18n } from '../../i18n';
import { journey } from '../../data/journey';
import type { JourneyKind } from '../../types';

const kinds: JourneyKind[] = ['study', 'work'];

const kindIcon: Record<JourneyKind, typeof FiBookOpen> = {
  study: FiBookOpen,
  work: FiBriefcase,
};

export function Journey() {
  const { t, tx } = useI18n();
  const [filter, setFilter] = useState<'all' | JourneyKind>('all');

  const filtered = useMemo(
    () => (filter === 'all' ? journey : journey.filter((e) => e.kind === filter)),
    [filter]
  );

  return (
    <section id="journey" className="border-b border-[color:var(--bp-line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]"
          >
            <span className="text-[color:var(--bp-amber)]">04</span>
            <span className="h-px w-8 bg-[color:var(--bp-line-strong)]" />
            {t.journey.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-4 font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl"
          >
            {t.journey.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]"
          >
            {t.journey.subtitle}
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {(['all', ...kinds] as const).map((k) => (
              <motion.button
                key={k}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: -1 }}
                onClick={() => setFilter(k)}
                className={`rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors ${
                  filter === k
                    ? 'border-[color:var(--bp-cyan)] bg-[color:var(--bp-cyan)]/15 text-[color:var(--bp-cyan-bright)] shadow-xs'
                    : 'border-[color:var(--bp-line)] text-[color:var(--bp-ink-faint)] hover:text-[color:var(--bp-ink)]'
                }`}
              >
                {t.journey.filters[k]}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl pl-8 sm:pl-10">
          {/* Animated vertical connecting line */}
          <div className="absolute top-3 bottom-3 left-[9px] w-px bg-gradient-to-b from-[color:var(--bp-cyan)] via-[color:var(--bp-amber)] to-[color:var(--bp-line-strong)]" />

          <motion.div layout className="flex flex-col gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((entry, i) => {
                const Icon = kindIcon[entry.kind];
                return (
                  <motion.div
                    key={entry.id}
                    layout
                    initial={{ opacity: 0, y: 18, x: -6 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="relative rounded-lg border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-5 sm:p-6 transition-all hover:border-[color:var(--bp-line-strong)] hover:shadow-lg"
                  >
                    <span
                      className="absolute top-6 -left-[27px] sm:-left-[35px] flex h-4 w-4 items-center justify-center rounded-full border-2 transition-transform duration-300 group-hover:scale-125"
                      style={{
                        borderColor: entry.kind === 'work' ? 'var(--bp-amber)' : 'var(--bp-cyan)',
                        background: 'var(--bp-bg)',
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full animate-pulse"
                        style={{
                          background: entry.kind === 'work' ? 'var(--bp-amber)' : 'var(--bp-cyan)',
                        }}
                      />
                    </span>

                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[color:var(--bp-line)]/60 pb-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[12px] font-medium text-[color:var(--bp-amber)]">
                          {entry.year}
                        </span>
                        <span
                          className="rounded border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
                          style={{
                            borderColor:
                              entry.kind === 'work'
                                ? 'color-mix(in srgb, var(--bp-amber) 40%, transparent)'
                                : 'color-mix(in srgb, var(--bp-cyan) 40%, transparent)',
                            color:
                              entry.kind === 'work' ? 'var(--bp-amber)' : 'var(--bp-cyan-bright)',
                            background:
                              entry.kind === 'work'
                                ? 'color-mix(in srgb, var(--bp-amber) 10%, transparent)'
                                : 'color-mix(in srgb, var(--bp-cyan) 10%, transparent)',
                          }}
                        >
                          {entry.kind === 'work' ? t.journey.filters.work : t.journey.filters.study}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-[color:var(--bp-ink-dim)]">
                        <Icon size={13} className="text-[color:var(--bp-cyan)]" />
                        {entry.org}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-[16px] font-semibold text-[color:var(--bp-ink)] sm:text-[17px]">
                      {tx(entry.title)}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--bp-ink-dim)]">
                      {tx(entry.detail)}
                    </p>
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-[color:var(--bp-line)] bg-[color:var(--bp-bg)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--bp-ink-faint)] transition-colors hover:border-[color:var(--bp-line-strong)] hover:text-[color:var(--bp-ink)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
