import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useConsent } from "@/components/feature/ConsentProvider";

export default function CookiePreferences() {
  const { preferencesOpen, closePreferences, rejectAll } = useConsent();

  useEffect(() => {
    if (!preferencesOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [preferencesOpen, closePreferences]);

  if (!preferencesOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <button
        type="button"
        aria-label="Fermer"
        onClick={closePreferences}
        className="absolute inset-0 bg-foreground-950/45 backdrop-blur-sm cursor-pointer"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="relative w-full sm:max-w-[620px] max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-foreground-950/10 bg-background-100 card-shadow"
      >
        <div className="flex items-start justify-between gap-4 px-5 md:px-8 pt-6 md:pt-8">
          <div>
            <div className="text-[10px] tracking-[0.28em] uppercase text-foreground-500 mb-2">Traceurs du site</div>
            <h2 id="cookie-prefs-title" className="font-heading text-2xl font-bold tracking-tightest text-foreground-950">
              Cookies et traceurs
            </h2>
          </div>
          <button
            type="button"
            onClick={closePreferences}
            aria-label="Fermer le panneau"
            className="w-9 h-9 rounded-full border border-foreground-950/15 flex items-center justify-center text-foreground-700 hover:text-foreground-950 hover:border-foreground-950/35 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-close-line w-4 h-4 flex items-center justify-center" />
          </button>
        </div>

        <div className="px-5 md:px-8 py-6 space-y-5">
          <div className="rounded-xl border border-foreground-950/10 bg-background-50 p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="text-[14px] font-medium text-foreground-950 mb-1">Strictement nécessaires</div>
                <p className="text-[13px] leading-relaxed text-foreground-600 font-light">
                  Mémorisation du fait que vous avez pris connaissance de cette information. Conservé six mois dans votre
                  navigateur, puis de nouveau demandé. Ces éléments ne permettent pas de vous suivre et ne peuvent pas
                  être désactivés.
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-100 text-primary-900 text-[10px] tracking-[0.12em] uppercase">
                  <i className="ri-check-line w-3 h-3 flex items-center justify-center" />
                  Actif
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-foreground-950/10 bg-background-50 p-4">
            <div className="text-[14px] font-medium text-foreground-950 mb-1">Aucune finalité optionnelle</div>
            <p className="text-[13px] leading-relaxed text-foreground-600 font-light">
              Le site ne dépose aujourd&apos;hui aucun cookie de mesure d&apos;audience, de publicité ou de réseau social.
              Il n&apos;existe donc aucune catégorie facultative à accepter ou à refuser. Si un tel traceur était ajouté,
              cette page et ce panneau seraient mis à jour avant son activation.
            </p>
          </div>

          <p className="text-[12px] leading-relaxed text-foreground-500 font-light">
            Vous pouvez supprimer ce stockage à tout moment depuis les réglages de votre navigateur. Détail des éléments
            et des services appelés :{" "}
            <Link
              to="/cookies"
              onClick={closePreferences}
              className="text-foreground-950 underline underline-offset-2 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
            >
              page Cookies et traceurs
            </Link>
            .
          </p>
        </div>

        <div className="sticky bottom-0 bg-background-100 border-t border-foreground-950/10 px-5 md:px-8 py-4">
          <button
            type="button"
            onClick={rejectAll}
            className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-foreground-950 text-background-50 text-sm font-medium whitespace-nowrap hover:bg-foreground-800 transition-all duration-300 cursor-pointer"
          >
            J&apos;ai compris
          </button>
        </div>
      </div>
    </div>
  );
}