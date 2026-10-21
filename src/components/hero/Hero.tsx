import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { useI18n } from '../../i18n';
import { SystemDiagram } from './SystemDiagram';
import { HeroParticleCanvas } from './HeroParticleCanvas';

export function Hero() {
  const { lang, t } = useI18n();

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="bp-grid relative overflow-hidden border-b border-[color:var(--bp-line)] px-5 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      {/* 3D Blueprint Interactive Particle Network */}
      <HeroParticleCanvas />

      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(circle at 15% 10%, color-mix(in srgb, var(--bp-cyan) 10%, transparent), transparent 55%)',
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--bp-line-strong)] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-dim)] backdrop-blur-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--bp-good)] animate-pulse" />
            {t.hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-[13vw] leading-[1.03] font-semibold tracking-tight text-[color:var(--bp-ink)] sm:text-5xl md:text-[3.2rem]"
          >
            {t.hero.title1}
            <br />
            <span className="text-[color:var(--bp-cyan-bright)]">{t.hero.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-lg text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 rounded bg-[color:var(--bp-cyan)] px-4 py-2.5 font-mono text-[12px] uppercase tracking-wide text-[#06131F] shadow-sm transition-shadow hover:shadow-[0_0_15px_rgba(90,185,232,0.4)]"
            >
              {t.hero.cta1}
              <FiArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </motion.button>
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo('contact')}
              className="rounded border border-[color:var(--bp-line-strong)] px-4 py-2.5 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
            >
              {t.hero.cta2}
            </motion.button>
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`/cv/yessin-rezgui-cv-${lang}.pdf`}
              download={`yessin-rezgui-cv-${lang}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2 py-2.5 font-mono text-[12px] uppercase tracking-wide text-[color:var(--bp-ink-faint)] transition-colors hover:text-[color:var(--bp-ink)]"
            >
              <FiDownload size={13} />
              {t.hero.cta3}
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <SystemDiagram />
        </motion.div>
      </div>
    </section>
  );
}
