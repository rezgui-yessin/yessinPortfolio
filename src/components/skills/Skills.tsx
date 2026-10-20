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
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl">
          {t.skills.title}
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
          {t.skills.subtitle}
        </p>

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
            {filtered.map((skill) => {
              const Icon = getIcon(skill.icon);
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex flex-col items-start gap-3 rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-4 transition-colors hover:border-[color:var(--bp-line-strong)]"
                >
                  <Icon size={22} className="text-[color:var(--bp-ink-dim)] transition-colors group-hover:text-[color:var(--bp-cyan-bright)]" />
                  <div>
                    <div className="font-display text-[13px] font-medium text-[color:var(--bp-ink)]">
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
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors ${
        active
          ? 'border-[color:var(--bp-cyan)] bg-[color:var(--bp-cyan)]/15 text-[color:var(--bp-cyan-bright)]'
          : 'border-[color:var(--bp-line)] text-[color:var(--bp-ink-faint)] hover:text-[color:var(--bp-ink)]'
      }`}
    >
      {label}
    </button>
  );
}
