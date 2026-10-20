import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone, FiCopy, FiCheck } from 'react-icons/fi';
import { useI18n } from '../../i18n';
import { social } from '../../data/social';
import { SectionEyebrow } from '../about/About';

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="bp-grid px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="07" label={t.contact.eyebrow} />
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
              copyable
              copyText={social.email}
              copiedLabel={t.contact.copied}
            />
            {social.academicEmail && (
              <ContactLink
                icon={<FiMail size={16} />}
                label={t.contact.academicEmail}
                value={social.academicEmail}
                href={`mailto:${social.academicEmail}`}
                copyable
                copyText={social.academicEmail}
                copiedLabel={t.contact.copied}
              />
            )}
            {social.phone && (
              <ContactLink
                icon={<FiPhone size={16} />}
                label={t.contact.phone}
                value={social.phoneDisplay}
                href={`tel:${social.phone}`}
                copyable
                copyText={social.phone}
                copiedLabel={t.contact.copied}
              />
            )}
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
  copyable,
  copyText,
  copiedLabel,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  copyable?: boolean;
  copyText?: string;
  copiedLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (copyText) {
      navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group relative flex items-center justify-between rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] px-4 py-3.5 transition-colors hover:border-[color:var(--bp-cyan)]">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center gap-3 overflow-hidden"
      >
        <span className="shrink-0 text-[color:var(--bp-cyan)]">{icon}</span>
        <span className="min-w-0">
          <span className="block font-mono text-[10px] uppercase tracking-widest text-[color:var(--bp-ink-faint)]">
            {label}
          </span>
          <span className="truncate font-display text-[14px] text-[color:var(--bp-ink)] group-hover:text-[color:var(--bp-cyan-bright)]">
            {value}
          </span>
        </span>
      </a>

      {copyable && (
        <button
          type="button"
          onClick={handleCopy}
          title="Copy"
          className="ml-2 flex items-center gap-1 rounded border border-[color:var(--bp-line)] px-2 py-1 font-mono text-[10px] text-[color:var(--bp-ink-faint)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
        >
          {copied ? (
            <>
              <FiCheck size={11} className="text-[color:var(--bp-good)]" />
              <span className="text-[color:var(--bp-good)]">{copiedLabel ?? 'Copied!'}</span>
            </>
          ) : (
            <>
              <FiCopy size={11} />
            </>
          )}
        </button>
      )}
    </div>
  );
}
