import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone, FiCopy, FiCheck, FiSend, FiLoader, FiRefreshCw } from 'react-icons/fi';
import { useI18n } from '../../i18n';
import { social } from '../../data/social';
import { SectionEyebrow } from '../about/About';

const MAX_MSG = 1000;

type FieldErrors = { name?: boolean; email?: boolean; message?: boolean };

export function Contact() {
  const { t } = useI18n();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validate = (): boolean => {
    const errs: FieldErrors = {};
    if (!formData.name.trim()) errs.name = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = true;
    if (!formData.message.trim()) errs.message = true;
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    try {
      // Send message via Web3Forms (or fallback)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e394334f-22a2-4a0b-9dfc-5c8e03e54b6d', // Safe public submission access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Inquiry)`,
          to_email: social.email,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setFieldErrors({});
      } else {
        // Fallback to mailto
        window.open(
          `mailto:${social.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
            formData.message + '\n\nFrom: ' + formData.email
          )}`
        );
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setFieldErrors({});
      }
    } catch {
      // Offline / network fallback to mailto
      window.open(
        `mailto:${social.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
          formData.message + '\n\nFrom: ' + formData.email
        )}`
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});
    }
  };


  return (
    <section id="contact" className="bp-grid px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionEyebrow n="07" label={t.contact.eyebrow} />
        <div className="mt-4 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[color:var(--bp-ink)] md:text-3xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[color:var(--bp-ink-dim)]">
              {t.contact.subtitle}
            </p>
            <div className="mt-4 flex items-center gap-2 font-mono text-[12px] text-[color:var(--bp-ink-faint)]">
              <FiMapPin size={13} className="text-[color:var(--bp-cyan)]" />
              {t.contact.location}
            </div>

            {/* Interactive Form Card */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 rounded-lg border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-5 shadow-sm space-y-4"
            >
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[color:var(--bp-ink-faint)] mb-1.5">
                  {t.contact.formName} *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setFieldErrors((f) => ({ ...f, name: false })); }}
                  placeholder={t.contact.formNamePlaceholder}
                  className={`w-full rounded border bg-[color:var(--bp-bg)] px-3.5 py-2.5 font-mono text-[13px] text-[color:var(--bp-ink)] placeholder-[color:var(--bp-ink-faint)] transition-colors focus:outline-none ${
                    fieldErrors.name
                      ? 'border-red-500/60 focus:border-red-400'
                      : 'border-[color:var(--bp-line-strong)] focus:border-[color:var(--bp-cyan)]'
                  }`}
                />
                {fieldErrors.name && (
                  <p className="mt-1 font-mono text-[10px] text-red-400">Required</p>
                )}
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-[color:var(--bp-ink-faint)] mb-1.5">
                  {t.contact.formEmail} *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setFieldErrors((f) => ({ ...f, email: false })); }}
                  placeholder={t.contact.formEmailPlaceholder}
                  className={`w-full rounded border bg-[color:var(--bp-bg)] px-3.5 py-2.5 font-mono text-[13px] text-[color:var(--bp-ink)] placeholder-[color:var(--bp-ink-faint)] transition-colors focus:outline-none ${
                    fieldErrors.email
                      ? 'border-red-500/60 focus:border-red-400'
                      : 'border-[color:var(--bp-line-strong)] focus:border-[color:var(--bp-cyan)]'
                  }`}
                />
                {fieldErrors.email && (
                  <p className="mt-1 font-mono text-[10px] text-red-400">Valid email required</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-[color:var(--bp-ink-faint)]">
                    {t.contact.formMessage} *
                  </label>
                  <span className={`font-mono text-[10px] tabular-nums ${
                    formData.message.length > MAX_MSG * 0.9
                      ? 'text-[color:var(--bp-amber)]'
                      : 'text-[color:var(--bp-ink-faint)]'
                  }`}>
                    {formData.message.length} / {MAX_MSG}
                  </span>
                </div>
                <textarea
                  required
                  rows={4}
                  maxLength={MAX_MSG}
                  value={formData.message}
                  onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setFieldErrors((f) => ({ ...f, message: false })); }}
                  placeholder={t.contact.formMessagePlaceholder}
                  className={`w-full resize-none rounded border bg-[color:var(--bp-bg)] px-3.5 py-2.5 font-mono text-[13px] text-[color:var(--bp-ink)] placeholder-[color:var(--bp-ink-faint)] transition-colors focus:outline-none ${
                    fieldErrors.message
                      ? 'border-red-500/60 focus:border-red-400'
                      : 'border-[color:var(--bp-line-strong)] focus:border-[color:var(--bp-cyan)]'
                  }`}
                />
                {fieldErrors.message && (
                  <p className="mt-1 font-mono text-[10px] text-red-400">Required</p>
                )}
              </div>

              <div className="pt-1">
                <motion.button
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex w-full items-center justify-center gap-2 rounded bg-[color:var(--bp-cyan)] py-2.5 font-mono text-[12px] uppercase tracking-wider text-[#06131F] font-semibold transition-shadow hover:shadow-[0_0_15px_rgba(90,185,232,0.4)] disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <>
                      <FiLoader size={14} className="animate-spin" />
                      <span>{t.contact.sending}</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={13} />
                      <span>{t.contact.send}</span>
                    </>
                  )}
                </motion.button>
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 rounded border border-[color:var(--bp-good)]/40 bg-[color:var(--bp-good)]/10 p-3 font-mono text-xs text-[color:var(--bp-good)]">
                    <FiCheck size={14} className="shrink-0" />
                    <span>{t.contact.sentSuccess}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide text-[color:var(--bp-ink-faint)] transition-colors hover:text-[color:var(--bp-cyan-bright)]"
                  >
                    <FiRefreshCw size={11} />
                    Send another message
                  </button>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right: Direct Channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--bp-ink-faint)] mb-1">
              {t.contact.directLinks}
            </h3>

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

            {/* Developer coding animation */}
            <div className="mt-2 flex flex-col items-center justify-center overflow-hidden rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] p-4 text-center">
              <img
                src="/gif/giphy.gif"
                alt="Developer coding"
                className="h-28 w-auto max-w-full rounded object-contain"
                loading="lazy"
              />
              <div className="mt-2.5 flex items-center gap-2 font-mono text-[11px] text-[color:var(--bp-cyan)]">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[color:var(--bp-good)]" />
                <span className="tracking-wide">Building & shipping code daily</span>
              </div>
            </div>
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
    <motion.div
      whileHover={{ x: 4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="group relative flex items-center justify-between rounded-md border border-[color:var(--bp-line)] bg-[color:var(--bp-bg-card)] px-4 py-3.5 transition-colors hover:border-[color:var(--bp-cyan)] hover:shadow-md"
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center gap-3 overflow-hidden"
      >
        <span className="shrink-0 text-[color:var(--bp-cyan)] transition-transform group-hover:scale-110">
          {icon}
        </span>
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
        <motion.button
          type="button"
          whileTap={{ scale: 0.88 }}
          onClick={handleCopy}
          title="Copy"
          className="ml-2 flex items-center gap-1 rounded border border-[color:var(--bp-line)] px-2 py-1 font-mono text-[10px] text-[color:var(--bp-ink-faint)] transition-colors hover:border-[color:var(--bp-cyan)] hover:text-[color:var(--bp-cyan-bright)]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1"
              >
                <FiCheck size={11} className="text-[color:var(--bp-good)]" />
                <span className="text-[color:var(--bp-good)]">{copiedLabel ?? 'Copied!'}</span>
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center"
              >
                <FiCopy size={11} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      )}
    </motion.div>
  );
}
