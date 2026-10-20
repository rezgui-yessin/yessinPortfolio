import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { useI18n } from '../i18n';
import { projects } from '../data/projects';
import { getIcon } from '../data/iconMap';
import { techIconKey } from '../components/projects/ProjectCard';

const kindLabelKey = {
  flagship: 'flagshipProject',
  academic: 'academicProject',
  personal: 'personalProject',
} as const;

export function ProjectDetail() {
  const { id } = useParams();
  const { t, tx } = useI18n();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="bp-grid px-5 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/#projects"
          className="mb-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink-faint)] transition-colors hover:text-[color:var(--bp-cyan-bright)]"
        >
          <FiArrowLeft size={13} />
          {t.projects.backToProjects}
        </Link>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="rounded-full border border-[color:var(--bp-cyan)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[color:var(--bp-cyan-bright)]">
            {t.common[kindLabelKey[project.kind]]}
          </span>

          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-3 text-[16px] leading-relaxed text-[color:var(--bp-ink-dim)]">{tx(project.tagline)}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => {
              const Icon = getIcon(techIconKey[tech] ?? '');
              return (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 rounded border border-[color:var(--bp-line)] px-2.5 py-1 font-mono text-[11px] text-[color:var(--bp-ink-dim)]"
                >
                  <Icon size={12} />
                  {tech}
                </span>
              );
            })}
          </div>

          <div className="mt-8 rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-5">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
              {t.projects.status}
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--bp-ink)]">{tx(project.status)}</p>
          </div>

          <div className="mt-8 space-y-8">
            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
                Overview
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
                {tx(project.summary)}
              </p>
            </section>

            {project.problem && (
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
                  {t.projects.problem}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
                  {tx(project.problem)}
                </p>
              </section>
            )}

            {project.approach && (
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
                  {t.projects.approach}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
                  {tx(project.approach)}
                </p>
              </section>
            )}

            {project.architecture && (
              <section>
                <h2 className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
                  Architecture
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[12px] text-[color:var(--bp-ink)]">
                  {project.architecture.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="rounded border border-[color:var(--bp-line-strong)] bg-[color:var(--bp-bg-raised)] px-2.5 py-1">
                        {step}
                      </span>
                      {i < project.architecture!.length - 1 && (
                        <span className="text-[color:var(--bp-ink-faint)]">&rarr;</span>
                      )}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
                {t.projects.features}
              </h2>
              <ul className="mt-3 space-y-2.5">
                {project.features.map((f) => (
                  <li key={tx(f)} className="flex gap-3 text-[14px] leading-relaxed text-[color:var(--bp-ink-dim)]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color:var(--bp-cyan)]" />
                    {tx(f)}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-wrap gap-3 border-t border-[color:var(--bp-line)] pt-6">
              {project.github ? (
                <a
                  href={project.github}
                  className="flex items-center gap-2 rounded border border-[color:var(--bp-line-strong)] px-3.5 py-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
                >
                  <FiGithub size={13} />
                  GitHub
                </a>
              ) : (
                <span className="flex items-center gap-2 rounded border border-dashed border-[color:var(--bp-line)] px-3.5 py-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink-faint)]">
                  <FiGithub size={13} />
                  {t.projects.noRepo}
                </span>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="flex items-center gap-2 rounded border border-[color:var(--bp-line-strong)] px-3.5 py-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
                >
                  <FiExternalLink size={13} />
                  Live demo
                </a>
              )}
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
