import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { en, type Dictionary } from './en';
import { it } from './it';
import { fr } from './fr';
import type { Lang, LocalizedText } from '../types';

const dictionaries: Record<Lang, Dictionary> = { en, it, fr };

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
  tx: (text: LocalizedText) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'yr-portfolio-lang';

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && dictionaries[stored]) return stored;
  const nav = window.navigator.language?.slice(0, 2);
  if (nav === 'it' || nav === 'fr') return nav;
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      t: dictionaries[lang],
      tx: (text: LocalizedText) => text[lang],
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
