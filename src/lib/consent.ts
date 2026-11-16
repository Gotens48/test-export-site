export type ConsentCategory = "necessary" | "analytics";

export interface ConsentRecord {
  necessary: true;
  analytics: boolean;
  date: string;
  version: number;
}

export const CONSENT_STORAGE_KEY = "flesh_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_MONTHS = 6;

function isExpired(isoDate: string): boolean {
  const start = new Date(isoDate);
  if (Number.isNaN(start.getTime())) return true;
  const end = new Date(start);
  end.setMonth(end.getMonth() + CONSENT_MAX_AGE_MONTHS);
  return Date.now() >= end.getTime();
}

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentRecord>;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (typeof parsed.date !== "string" || isExpired(parsed.date)) return null;
    return {
      necessary: true,
      analytics: parsed.analytics === true,
      date: parsed.date,
      version: CONSENT_VERSION,
    };
  } catch {
    return null;
  }
}

export function writeConsent(analytics: boolean): ConsentRecord {
  const record: ConsentRecord = {
    necessary: true,
    analytics,
    date: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* stockage indisponible : le choix vaut uniquement pour la session */
  }
  window.dispatchEvent(new CustomEvent<ConsentRecord>("flesh:consent", { detail: record }));
  return record;
}

export function clearConsent(): void {
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/**
 * À utiliser avant tout chargement de script de mesure d'audience.
 * Retourne false tant que le visiteur n'a pas donné un accord explicite.
 */
export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics === true;
}