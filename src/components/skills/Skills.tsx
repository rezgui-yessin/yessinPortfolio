import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../../i18n';
import { skills } from '../../data/skills';
import { getIcon } from '../../data/iconMap';
import { SectionEyebrow } from '../about/About';
import type { SkillCategory } from '../../types';

const categories: SkillCategory[] = ['languages', 'frontend', 'backend', 'data', 'devops', 'security', 'tools'];

const statusColor: Record<string, string> = {
  core: 'var(--bp-cyan-bright)',
  working: 'var(--bp-amber)',
  learning: 'var(--bp-ink-faint)',
};

export function Skills() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<'all' | SkillCategory>('all');

  const filtered = useMemo(
    () => (filter === 'all' ? skills : skills.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <section id="skills" className="border-b border-[color:var(--bp-line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="02" label={t.skills.eyebrow} />
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-4 font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl"
        >
          {t.skills.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 max-w-xl text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]"
        >
          {t.skills.subtitle}
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip active={filter === 'all'} onClick={() => setFilter('all')} label={t.skills.filters.all} />
          {categories.map((c) => (
            <FilterChip
              key={c}
              active={filter === c}
              onClick={() => setFilter(c)}
              label={t.skills.filters[c]}
            />
          ))}
        </div>

        <motion.div layout className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => {
              const Icon = getIcon(skill.icon);
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.92, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -8 }}
                  transition={{ duration: 0.25, delay: (i % 8) * 0.02 }}
                  whileHover={{ y: -3, scale: 1.025 }}
                  className="group relative flex flex-col items-start gap-3 rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-4 transition-all hover:border-[color:var(--bp-line-strong)] hover:shadow-md cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                    className="text-[color:var(--bp-ink-dim)] transition-colors group-hover:text-[color:var(--bp-cyan-bright)]"
                  >
                    <Icon size={22} />
                  </motion.div>
                  <div>
                    <div className="font-display text-[13px] font-medium text-[color:var(--bp-ink)] transition-colors group-hover:text-[color:var(--bp-cyan-bright)]">
                      {skill.name}
                    </div>
                    <div
                      className="mt-1 font-mono text-[10px] uppercase tracking-wide"
                      style={{ color: statusColor[skill.status] }}
                    >
                      {t.skills.statusLabel[skill.status]}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -1 }}
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors ${
        active
          ? 'border-[color:var(--bp-cyan)] bg-[color:var(--bp-cyan)]/15 text-[color:var(--bp-cyan-bright)] shadow-xs'
          : 'border-[color:var(--bp-line)] text-[color:var(--bp-ink-faint)] hover:text-[color:var(--bp-ink)]'
      }`}
    >
      {label}
    </motion.button>
  );
}
