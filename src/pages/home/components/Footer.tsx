import type { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/pages/home/components/Logo";
import { useConsent } from "@/components/feature/ConsentProvider";

const NAV_LINKS = [
  { label: "Services", hash: "#services" },
  { label: "Réalisations", hash: "#realisations" },
  { label: "Process", hash: "#process" },
  { label: "Contact", hash: "#contact" },
];

const LEGAL_LINKS = [
  { label: "Mentions légales", to: "/mentions-legales" },
  { label: "Politique de confidentialité", to: "/confidentialite" },
  { label: "Cookies et traceurs", to: "/cookies" },
  { label: "Conditions générales de vente", to: "/conditions-generales-de-vente" },
];

const linkClass =
  "inline-block text-foreground-500 hover:text-foreground-950 transition-colors duration-300 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50";

const headingClass = "text-[10.5px] tracking-[0.25em] uppercase text-foreground-400 mb-4";

export default function Footer() {
  const navigate = useNavigate();
  const { openPreferences } = useConsent();

  const goToSection = (hash: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(hash.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    navigate({ pathname: "/", hash });
  };

  return (
    <footer className="relative bg-background-50 border-t border-foreground-950/[0.07]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.1fr] gap-10 lg:gap-12">
          <div className="max-w-sm">
            <Logo size="sm" withWordmark={true} light />
            <p className="mt-5 text-sm text-foreground-500 leading-relaxed font-light">
              Agence de création et de refonte de sites internet premium.
            </p>
            <p className="mt-4 text-[12px] text-foreground-400 leading-relaxed font-light">
              Bryan LEFEVRE — entrepreneur individuel (EI). SIREN 132 274 663.
            </p>
          </div>

          <nav aria-labelledby="footer-nav-title">
            <h2 id="footer-nav-title" className={headingClass}>
              Navigation
            </h2>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.hash}>
                  <a href={`/${l.hash}`} onClick={goToSection(l.hash)} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal-title">
            <h2 id="footer-legal-title" className={headingClass}>
              Légal
            </h2>
            <ul className="space-y-3 text-sm">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1 border-t border-foreground-950/10">
                <button
                  type="button"
                  onClick={openPreferences}
                  className={`${linkClass} inline-flex items-center gap-2 mt-3 text-left whitespace-nowrap`}
                >
                  <i className="ri-shield-keyhole-line w-4 h-4 flex items-center justify-center shrink-0" />
                  Gérer mes cookies
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Contact</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:contact.fleshagency@gmail.com" className={`${linkClass} break-all`}>
                  contact.fleshagency@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+33784285671" className={linkClass}>
                  07 84 28 56 71
                </a>
              </li>
            </ul>
            <address className="mt-4 not-italic text-[13px] leading-relaxed text-foreground-400 font-light">
              FLESH
              <br />
              7 bis avenue des Espaliers
              <br />
              34670 Baillargues, France
            </address>
            <a
              href="#contact"
              onClick={goToSection("#contact")}
              className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-foreground-500 hover:text-primary-400 transition-colors duration-300 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50"
            >
              Demander un devis
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-foreground-950/[0.07] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <p className="text-xs text-foreground-400">© 2026 Bryan LEFEVRE — FLESH. Tous droits réservés.</p>
            <span className="hidden sm:block w-px h-3 bg-foreground-950/15" aria-hidden="true" />
            <p className="text-xs text-foreground-400">Entreprise individuelle établie en France</p>
          </div>
          <button
            type="button"
            onClick={openPreferences}
            className="inline-flex items-center gap-2 text-xs text-foreground-500 hover:text-foreground-950 transition-colors duration-300 cursor-pointer whitespace-nowrap self-start lg:self-auto rounded-full border border-foreground-950/15 px-4 py-2 hover:border-foreground-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50"
          >
            <i className="ri-shield-keyhole-line w-4 h-4 flex items-center justify-center" />
            Gérer mes cookies
          </button>
        </div>
      </div>
    </footer>
  );
}