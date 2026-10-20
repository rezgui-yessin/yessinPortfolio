import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { learningItems } from '../../data/learning';
import { getIcon } from '../../data/iconMap';
import { SectionEyebrow } from '../about/About';

export function Learning() {
  const { t, tx } = useI18n();

  return (
    <section id="learning" className="border-b border-[color:var(--bp-line)] px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="06" label={t.learning.eyebrow} />
        <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl">
          {t.learning.title}
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
          {t.learning.subtitle}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {learningItems.map((item, i) => {
            const Icon = getIcon(item.icon);
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-md border border-dashed border-[color:var(--bp-line-strong)] p-5"
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={18} className="text-[color:var(--bp-amber)]" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--bp-amber)]">
                    {t.skills.statusLabel.learning}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-[15px] font-semibold text-[color:var(--bp-ink)]">
                  {item.name}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--bp-ink-dim)]">{tx(item.detail)}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
