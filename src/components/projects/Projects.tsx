import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../../i18n';
import { projects } from '../../data/projects';
import { SectionEyebrow } from '../about/About';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../../types';

const kinds: Project['kind'][] = ['technical', 'internship'];

export function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<'all' | Project['kind']>('all');

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.kind === filter || p.origins?.includes(filter)),
    [filter]
  );

  return (
    <section id="projects" className="border-b border-[color:var(--bp-line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="05" label={t.projects.eyebrow} />
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-4 font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl"
        >
          {t.projects.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-3 max-w-xl text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]"
        >
          {t.projects.subtitle}
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-2">
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
              {t.projects.filters[k]}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
