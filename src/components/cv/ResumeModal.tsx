import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiExternalLink, FiX, FiFileText } from 'react-icons/fi';
import { useI18n } from '../../i18n';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { lang, t } = useI18n();
  const pdfUrl = `/cv/yessin-rezgui-cv-${lang}.pdf`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-5 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-[color:var(--bp-line-strong)] bg-[color:var(--bp-bg-raised)] shadow-2xl"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[color:var(--bp-line)] px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded border border-[color:var(--bp-line)] bg-[color:var(--bp-bg)] text-[color:var(--bp-cyan-bright)]">
                  <FiFileText size={14} />
                </span>
                <div>
                  <h3 className="font-display text-sm sm:text-base font-semibold text-[color:var(--bp-ink)]">
                    {t.cvModal.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[color:var(--bp-cyan-bright)]">
                    Language: {lang.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={pdfUrl}
                  download={`yessin-rezgui-cv-${lang}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded border border-[color:var(--bp-cyan)] bg-[color:var(--bp-cyan)]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-[color:var(--bp-cyan-bright)] transition-colors hover:bg-[color:var(--bp-cyan)]/20"
                >
                  <FiDownload size={12} />
                  <span className="hidden sm:inline">{t.cvModal.download}</span>
                </a>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open in new tab"
                  className="flex items-center gap-1 rounded border border-[color:var(--bp-line)] p-2 text-[color:var(--bp-ink-dim)] hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-ink)] transition-colors"
                >
                  <FiExternalLink size={13} />
                </a>

                <button
                  onClick={onClose}
                  aria-label={t.cvModal.close}
                  className="rounded-full border border-[color:var(--bp-line)] p-1.5 text-[color:var(--bp-ink-dim)] hover:border-[color:var(--bp-line-strong)] hover:text-[color:var(--bp-ink)] transition-colors"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="relative flex-1 bg-black/40">
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Curriculum Vitae"
                className="h-full w-full border-0"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
