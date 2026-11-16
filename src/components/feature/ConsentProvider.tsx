import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { readConsent, writeConsent } from "@/lib/consent";
import type { ConsentRecord } from "@/lib/consent";

interface ConsentContextValue {
  record: ConsentRecord | null;
  hasDecided: boolean;
  preferencesOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (analytics: boolean) => void;
  openPreferences: () => void;
  closePreferences: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [record, setRecord] = useState<ConsentRecord | null>(() => readConsent());
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  const commit = useCallback((analytics: boolean) => {
    const next = writeConsent(analytics);
    setRecord(next);
    setPreferencesOpen(false);
  }, []);

  const acceptAll = useCallback(() => commit(true), [commit]);
  const rejectAll = useCallback(() => commit(false), [commit]);
  const savePreferences = useCallback((analytics: boolean) => commit(analytics), [commit]);
  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      record,
      hasDecided: record !== null,
      preferencesOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [record, preferencesOpen, acceptAll, rejectAll, savePreferences, openPreferences, closePreferences],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent doit être utilisé à l'intérieur de ConsentProvider");
  }
  return ctx;
}