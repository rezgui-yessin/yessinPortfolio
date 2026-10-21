import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiMaximize2, FiX } from 'react-icons/fi';
import { useI18n } from '../i18n';
import { projects } from '../data/projects';
import { getIcon, techIconKey } from '../data/iconMap';

const kindLabelKey = {
  technical: 'technicalProject',
  internship: 'internshipProject',
} as const;

export function ProjectDetail() {
  const { id } = useParams();
  const { t, tx } = useI18n();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const project = projects.find((p) => p.id === id);

  const openLightbox = (src: string) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc(null);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [id]);

  // Close lightbox with Escape key and lock body scroll
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <div className="bp-grid px-5 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div whileHover={{ x: -3 }}>
          <Link
            to="/#projects"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink-faint)] transition-colors hover:text-[color:var(--bp-cyan-bright)]"
          >
            <FiArrowLeft size={13} />
            {t.projects.backToProjects}
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span className="rounded-full border border-[color:var(--bp-cyan)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[color:var(--bp-cyan-bright)]">
            {project.company ? `${project.company} · ${t.common[kindLabelKey[project.kind]]}` : t.common[kindLabelKey[project.kind]]}
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

          {/* Project Screenshot Showcase */}
          {project.image && (
            <div
              onClick={() => openLightbox(project.image!)}
              className="group relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-lg border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] cursor-pointer shadow-xl transition-all hover:border-[color:var(--bp-line-strong)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-black/80 px-4 py-2 font-mono text-xs text-white shadow-xl backdrop-blur-sm">
                  <FiMaximize2 size={13} />
                  <span>Click to view full screenshot</span>
                </span>
              </div>
            </div>
          )}

          {/* Additional screenshots strip */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  onClick={() => openLightbox(src)}
                  className="group relative aspect-[16/10] overflow-hidden rounded border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] cursor-pointer transition-all hover:border-[color:var(--bp-cyan)]"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <FiMaximize2 size={16} className="text-white" />
                  </div>
                </div>
              ))}
            </div>
          )}

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
                  Architecture &amp; Flow
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
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded border border-[color:var(--bp-line-strong)] px-3.5 py-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
                >
                  <FiGithub size={13} />
                  GitHub Repository
                </motion.a>
              ) : (
                <span className="flex items-center gap-2 rounded border border-dashed border-[color:var(--bp-line)] px-3.5 py-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink-faint)]">
                  <FiGithub size={13} />
                  {t.projects.noRepo}
                </span>
              )}
              {project.demo && (
                <motion.a
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded border border-[color:var(--bp-line-strong)] px-3.5 py-2 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
                >
                  <FiExternalLink size={13} />
                  Live demo
                </motion.a>
              )}
            </section>
          </div>
        </motion.div>

        {/* Screenshot Lightbox Modal */}
        <AnimatePresence>
          {lightboxOpen && lightboxSrc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-xl border border-[color:var(--bp-line-strong)] bg-[color:var(--bp-bg)] p-4 shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-[color:var(--bp-line)] pb-3">
                  <h3 className="font-display text-base font-semibold text-[color:var(--bp-ink)]">
                    {project.title} — System Preview
                  </h3>
                  <button
                    onClick={closeLightbox}
                    className="rounded-full border border-[color:var(--bp-line)] p-1.5 text-[color:var(--bp-ink-dim)] hover:border-[color:var(--bp-line-strong)] hover:text-[color:var(--bp-ink)]"
                  >
                    <FiX size={18} />
                  </button>
                </div>
                <div className="mt-3 max-h-[75vh] overflow-auto rounded border border-[color:var(--bp-line)]">
                  <img src={lightboxSrc} alt={project.title} className="h-auto w-full object-contain" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
