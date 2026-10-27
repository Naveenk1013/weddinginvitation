"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from "react";
import { hi } from "./hi";
import { en } from "./en";
import type { TranslationDictionary } from "./types";
import type { Locale } from "@/content/wedding";

interface LocaleContextValue {
  locale: Locale;
  t: TranslationDictionary;
  setLocale: (newLocale: Locale) => void;
  toggleLocale: () => void;
  announcement: string;
}

const dictionaries: Record<Locale, TranslationDictionary> = {
  hi,
  en,
};

const STORAGE_KEY = "rachna_udit_preferred_locale";

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Default on first visit is strictly Hindi ("hi")
  const [locale, setLocaleState] = useState<Locale>("hi");
  const [announcement, setAnnouncement] = useState("");
  const [, startTransition] = useTransition();

  // On mount, check if the user previously explicitly chose a locale
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "hi" || saved === "en") {
        setLocaleState(saved);
        document.documentElement.lang = saved === "hi" ? "hi-IN" : "en-IN";
      } else {
        document.documentElement.lang = "hi-IN";
      }
    } catch {
      document.documentElement.lang = "hi-IN";
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;

    startTransition(() => {
      setLocaleState(newLocale);
      const dict = dictionaries[newLocale];
      setAnnouncement(dict.ui.languageChangedAnnouncement);

      // Update HTML lang attribute immediately without reload or scroll reset
      try {
        document.documentElement.lang = newLocale === "hi" ? "hi-IN" : "en-IN";
        localStorage.setItem(STORAGE_KEY, newLocale);
      } catch {
        // Storage might fail in private browsing mode, gracefully ignore
      }
    });
  };

  const toggleLocale = () => {
    changeLocale(locale === "hi" ? "en" : "hi");
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        t: dictionaries[locale],
        setLocale: changeLocale,
        toggleLocale,
        announcement,
      }}
    >
      {/* Polite live region for announcing language changes to screen readers */}
      <div
        role="status"
        aria-live="polite"
        className="sr-only"
        id="locale-announcer"
      >
        {announcement}
      </div>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
