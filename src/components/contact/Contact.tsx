import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi';
import { useI18n } from '../../i18n';
import { social } from '../../data/social';
import { SectionEyebrow } from '../about/About';

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="bp-grid px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="06" label={t.contact.eyebrow} />
        <div className="mt-4 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
              {t.contact.subtitle}
            </p>
            <div className="mt-6 flex items-center gap-2 font-mono text-[12px] text-[color:var(--bp-ink-faint)]">
              <FiMapPin size={13} />
              {t.contact.location}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3"
          >
            <ContactLink
              icon={<FiMail size={16} />}
              label={t.contact.email}
              value={social.email}
              href={`mailto:${social.email}`}
            />
            <ContactLink
              icon={<FiLinkedin size={16} />}
              label={t.contact.linkedin}
              value="yessin-rezgui"
              href={social.linkedin}
            />
            <ContactLink
              icon={<FiGithub size={16} />}
              label={t.contact.github}
              value="rezgui-yessin"
              href={social.github}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] px-4 py-3.5 transition-colors hover:border-[color:var(--bp-cyan)]"
    >
      <span className="flex items-center gap-3">
        <span className="text-[color:var(--bp-cyan)]">{icon}</span>
        <span>
          <span className="block font-mono text-[10px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
            {label}
          </span>
          <span className="font-display text-[14px] text-[color:var(--bp-ink)] group-hover:text-[color:var(--bp-cyan-bright)]">
            {value}
          </span>
        </span>
      </span>
    </a>
  );
}
