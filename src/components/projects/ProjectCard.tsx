import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { useI18n } from '../../i18n';
import type { Project } from '../../types';
import { getIcon, techIconKey } from '../../data/iconMap';

const kindStyle: Record<Project['kind'], { color: string; labelKey: 'technicalProject' | 'internshipProject' }> = {
  technical: { color: 'var(--bp-cyan)', labelKey: 'technicalProject' },
  internship: { color: 'var(--bp-amber)', labelKey: 'internshipProject' },
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, tx } = useI18n();
  const style = kindStyle[project.kind];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group flex h-full flex-col rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-5 transition-colors hover:border-[color:var(--bp-line-strong)]"
      >
        <div className="flex items-center justify-between">
          <span
            className="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide"
            style={{ borderColor: style.color, color: style.color }}
          >
            {project.company ? `${project.company} · ${t.common[style.labelKey]}` : t.common[style.labelKey]}
          </span>
          <FiArrowUpRight
            size={16}
            className="text-[color:var(--bp-ink-faint)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--bp-cyan-bright)]"
          />
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold text-[color:var(--bp-ink)]">{project.title}</h3>
        <p className="mt-2 flex-1 text-[13px] leading-relaxed text-[color:var(--bp-ink-dim)]">
          {tx(project.tagline)}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => {
            const Icon = getIcon(techIconKey[tech] ?? '');
            return (
              <span
                key={tech}
                className="flex items-center gap-1 rounded border border-[color:var(--bp-line)] px-2 py-1 font-mono text-[10px] text-[color:var(--bp-ink-faint)]"
              >
                <Icon size={11} />
                {tech}
              </span>
            );
          })}
        </div>

        <div className="mt-4 border-t border-[color:var(--bp-line)] pt-3 font-mono text-[11px] text-[color:var(--bp-ink-faint)]">
          {tx(project.status)}
        </div>
      </Link>
    </motion.div>
  );
}
