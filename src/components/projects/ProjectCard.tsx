import { useState } from 'react';
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -6, scale: 1.015 }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.id}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative flex h-full flex-col overflow-hidden rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-5 transition-all duration-300 hover:border-[color:var(--bp-line-strong)] hover:shadow-xl"
      >
        {/* Subtle radial spotlight glow following pointer */}
        {hovered && (
          <div
            className="pointer-events-none absolute -inset-px rounded-md opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, rgba(90, 185, 232, 0.1), transparent 75%)`,
            }}
          />
        )}

        <div className="relative z-10 flex items-center justify-between">
          <span
            className="rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide transition-colors"
            style={{ borderColor: style.color, color: style.color }}
          >
            {project.company ? `${project.company} · ${t.common[style.labelKey]}` : t.common[style.labelKey]}
          </span>
          <motion.div
            className="text-[color:var(--bp-ink-faint)] transition-colors group-hover:text-[color:var(--bp-cyan-bright)]"
            whileHover={{ x: 2, y: -2 }}
          >
            <FiArrowUpRight size={16} />
          </motion.div>
        </div>

        <h3 className="relative z-10 mt-4 font-display text-lg font-semibold text-[color:var(--bp-ink)] transition-colors group-hover:text-[color:var(--bp-cyan-bright)]">
          {project.title}
        </h3>
        <p className="relative z-10 mt-2 flex-1 text-[13px] leading-relaxed text-[color:var(--bp-ink-dim)]">
          {tx(project.tagline)}
        </p>

        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => {
            const Icon = getIcon(techIconKey[tech] ?? '');
            return (
              <span
                key={tech}
                className="flex items-center gap-1 rounded border border-[color:var(--bp-line)] bg-[color:var(--bp-bg)] px-2 py-1 font-mono text-[10px] text-[color:var(--bp-ink-faint)] transition-colors group-hover:border-[color:var(--bp-line-strong)]"
              >
                <Icon size={11} />
                {tech}
              </span>
            );
          })}
        </div>

        <div className="relative z-10 mt-4 border-t border-[color:var(--bp-line)] pt-3 font-mono text-[11px] text-[color:var(--bp-ink-faint)]">
          {tx(project.status)}
        </div>
      </Link>
    </motion.div>
  );
}
