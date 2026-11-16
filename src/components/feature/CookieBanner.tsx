import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useConsent } from "@/components/feature/ConsentProvider";

export default function CookieBanner() {
  const { hasDecided, preferencesOpen, rejectAll, openPreferences } = useConsent();
  const [visible, setVisible] = useState(false);

  const shouldShow = !hasDecided && !preferencesOpen;

  useEffect(() => {
    if (!shouldShow) {
      setVisible(false);
      return;
    }
    const t = window.setTimeout(() => setVisible(true), 60);
    return () => window.clearTimeout(t);
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] px-3 pb-3 md:px-6 md:pb-6 pointer-events-none"
      role="region"
      aria-label="Information sur les cookies"
    >
      <div
        className={`pointer-events-auto mx-auto w-full max-w-[1120px] rounded-2xl border border-foreground-950/10 bg-background-100 card-shadow backdrop-blur-xl transition-all duration-500 ease-flesh ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="p-5 md:p-7 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10">
          <div className="flex items-start gap-4 min-w-0 flex-1">
            <span className="mt-0.5 hidden sm:flex w-11 h-11 rounded-xl bg-background-50 border border-foreground-950/10 items-center justify-center shrink-0">
              <i className="ri-shield-keyhole-line text-lg gold-accent w-5 h-5 flex items-center justify-center" />
            </span>
            <div className="min-w-0">
              <div className="text-[10px] tracking-[0.28em] uppercase text-foreground-500 mb-2">Cookies et traceurs</div>
              <p className="text-[14px] leading-relaxed text-foreground-700 font-light">
                Le site n&apos;utilise aucun cookie de mesure d&apos;audience, de publicité ou de réseau social. Seul un
                stockage local, strictement nécessaire, conserve pendant six mois le fait que vous avez pris
                connaissance de cette information : aucun choix facultatif ne vous est donc demandé.{" "}
                <Link
                  to="/cookies"
                  className="text-foreground-950 underline underline-offset-2 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={openPreferences}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-foreground-950/20 text-foreground-950 text-sm font-medium whitespace-nowrap hover:border-foreground-950/45 hover:bg-background-50 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-information-line w-4 h-4 flex items-center justify-center" />
              Détail des traceurs
            </button>
            <button
              type="button"
              onClick={rejectAll}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full copper-btn text-sm font-medium whitespace-nowrap hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              J&apos;ai compris
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}