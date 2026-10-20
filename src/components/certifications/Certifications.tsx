import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiFileText, FiMaximize2, FiX } from 'react-icons/fi';
import { TbCheck } from 'react-icons/tb';
import { useI18n } from '../../i18n';
import { certifications } from '../../data/certifications';
import { getIcon } from '../../data/iconMap';
import { SectionEyebrow } from '../about/About';
import type { CertificationItem } from '../../types';

export function Certifications() {
  const { t, tx } = useI18n();
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="border-b border-[color:var(--bp-line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="03" label={t.certifications.eyebrow} />
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl">
          {t.certifications.title}
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
          {t.certifications.subtitle}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const Icon = getIcon(cert.icon);
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.06 }}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] transition-all hover:border-[color:var(--bp-line-strong)] hover:shadow-lg"
              >
                <div>
                  {/* Certificate Image Preview */}
                  {cert.image && (
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="group/img relative aspect-[16/10] w-full overflow-hidden border-b border-[color:var(--bp-line)] bg-[color:var(--bp-bg-raised)] cursor-pointer"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-200 group-hover/img:opacity-100">
                        <span className="flex items-center gap-1.5 rounded-full border border-white/30 bg-black/75 px-3 py-1 font-mono text-xs text-white shadow-xl backdrop-blur-sm">
                          <FiMaximize2 size={12} />
                          <span>{t.certifications.preview}</span>
                        </span>
                      </div>
                      <span className="absolute top-2.5 right-2.5 rounded border border-[color:var(--bp-line-strong)] bg-[color:var(--bp-bg)]/85 px-2 py-0.5 font-mono text-[10px] text-[color:var(--bp-ink-dim)] backdrop-blur-sm">
                        {cert.date}
                      </span>
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-raised)] text-[color:var(--bp-cyan-bright)]">
                          <Icon size={15} />
                        </span>
                        <span className="rounded-full border border-[color:var(--bp-cyan)]/40 bg-[color:var(--bp-cyan)]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[color:var(--bp-cyan-bright)]">
                          {cert.issuer}
                        </span>
                      </div>
                      {!cert.image && (
                        <span className="font-mono text-[11px] text-[color:var(--bp-ink-faint)]">
                          {cert.date}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-display text-[16px] font-semibold leading-snug text-[color:var(--bp-ink)] transition-colors group-hover:text-[color:var(--bp-cyan-bright)]">
                      {cert.title}
                    </h3>

                    {cert.instructor && (
                      <p className="mt-1 font-mono text-[11px] text-[color:var(--bp-amber)]">
                        {t.certifications.instructor}: {cert.instructor}
                      </p>
                    )}

                    <p className="mt-2.5 text-[13px] leading-relaxed text-[color:var(--bp-ink-dim)] line-clamp-3">
                      {tx(cert.detail)}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-[color:var(--bp-line)] bg-[color:var(--bp-bg)] px-2 py-0.5 font-mono text-[10px] text-[color:var(--bp-ink-faint)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[color:var(--bp-line)]/60 pt-3">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-[color:var(--bp-good)]">
                      <TbCheck size={13} />
                      <span>{t.certifications.verified}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)] transition-colors"
                          title="Verify Credential"
                        >
                          <span>{t.certifications.verify}</span>
                          <FiExternalLink size={10} />
                        </a>
                      )}
                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded border border-[color:var(--bp-line-strong)] bg-[color:var(--bp-bg)] px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-[color:var(--bp-ink)] hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)] transition-colors"
                          title="View Certificate PDF"
                        >
                          <FiFileText size={11} />
                          <span>{t.certifications.viewPdf}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificate Image Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[92vh] max-w-4xl overflow-hidden rounded-2xl border border-[color:var(--bp-line-strong)] bg-[color:var(--bp-bg)] p-4 sm:p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between gap-4 border-b border-[color:var(--bp-line)] pb-3">
                  <div>
                    <span className="font-mono text-[11px] text-[color:var(--bp-cyan-bright)] uppercase tracking-wider">
                      {selectedCert.issuer} · {selectedCert.date}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[color:var(--bp-ink)]">
                      {selectedCert.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    aria-label={t.certifications.close}
                    className="rounded-full border border-[color:var(--bp-line)] p-2 text-[color:var(--bp-ink-dim)] hover:border-[color:var(--bp-line-strong)] hover:text-[color:var(--bp-ink)] transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                </div>

                <div className="mt-4 max-h-[65vh] overflow-auto rounded-lg border border-[color:var(--bp-line)] bg-black/20">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[color:var(--bp-good)]">
                    <TbCheck size={14} />
                    <span>{t.certifications.verified}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {selectedCert.credentialUrl && (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-[color:var(--bp-cyan)] bg-[color:var(--bp-cyan)]/10 px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-[color:var(--bp-cyan-bright)] transition-colors hover:bg-[color:var(--bp-cyan)]/20"
                      >
                        <span>{t.certifications.verify}</span>
                        <FiExternalLink size={12} />
                      </a>
                    )}
                    {selectedCert.pdfUrl && (
                      <a
                        href={selectedCert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded border border-[color:var(--bp-line-strong)] bg-[color:var(--bp-bg-raised)] px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-[color:var(--bp-ink)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
                      >
                        <FiFileText size={12} />
                        <span>{t.certifications.viewPdf}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
