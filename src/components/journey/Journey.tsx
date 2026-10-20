import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiFlag } from 'react-icons/fi';
import { useI18n } from '../../i18n';
import { journey } from '../../data/journey';
import { SectionEyebrow } from '../about/About';

const kindIcon = {
  education: FiBookOpen,
  work: FiBriefcase,
  milestone: FiFlag,
};

export function Journey() {
  const { t, tx } = useI18n();

  return (
    <section id="journey" className="border-b border-[color:var(--bp-line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="03" label={t.journey.eyebrow} />
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl">
          {t.journey.title}
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
          {t.journey.subtitle}
        </p>

        <div className="relative mt-12 pl-6">
          <div className="absolute top-1 bottom-1 left-[7px] w-px bg-[color:var(--bp-line-strong)]" />
          <div className="flex flex-col gap-10">
            {journey.map((entry, i) => {
              const Icon = kindIcon[entry.kind];
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                  className="relative"
                >
                  <span
                    className="absolute top-1 -left-6 flex h-4 w-4 items-center justify-center rounded-full border-2"
                    style={{
                      borderColor:
                        entry.kind === 'milestone' ? 'var(--bp-amber)' : 'var(--bp-cyan)',
                      background: 'var(--bp-bg)',
                    }}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[12px] text-[color:var(--bp-amber)]">{entry.year}</span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-[color:var(--bp-ink-faint)]">
                      <Icon size={11} />
                      {entry.org}
                    </span>
                  </div>
                  <h3 className="mt-1.5 font-display text-[16px] font-semibold text-[color:var(--bp-ink)]">
                    {tx(entry.title)}
                  </h3>
                  <p className="mt-1.5 max-w-2xl text-[14px] leading-relaxed text-[color:var(--bp-ink-dim)]">
                    {tx(entry.detail)}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-[color:var(--bp-line)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--bp-ink-faint)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
