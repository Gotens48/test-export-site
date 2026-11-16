import { Link } from "react-router-dom";
import { OFFERS } from "@/config/offers";
import { STRIPE_PAYMENT_LINKS, isStripeLinkReady } from "@/config/stripeLinks";

/** Offres dont le bouton ouvre directement une page de paiement Stripe. */
const STRIPE_LINK_BY_OFFER: Record<string, string> = {
  "site-livre": STRIPE_PAYMENT_LINKS.siteOnly,
  "site-suivi": STRIPE_PAYMENT_LINKS.siteCare,
};

const CTA_CLASS =
  "group/btn relative overflow-hidden inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-500 ease-flesh hover:-translate-y-0.5 cursor-pointer copper-btn";

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-24 md:py-32 bg-background-50">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-20" data-reveal>
          <span className="inline-flex items-center gap-3 mb-6 text-[10.5px] tracking-[0.3em] uppercase text-foreground-500">
            <span className="w-8 h-px gold-line" />
            Tarifs
          </span>
          <h2 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-[56px] text-foreground-950">
            Deux façons de{" "}
            <span className="copper-text">travailler ensemble.</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-base leading-relaxed text-foreground-500 font-light max-w-2xl">
            Le prix de création du site et le forfait mensuel sont deux montants
            distincts. Vous choisissez si vous gardez la main sur
            l&apos;hébergement ou si FLESH s&apos;en occupe pour vous.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto items-stretch">
          {OFFERS.map((offer, i) => (
            <div
              key={offer.id}
              data-reveal
              data-reveal-delay={i * 120}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 md:p-8 transition-all duration-500 ease-flesh hover:-translate-y-1.5 bg-background-100 ${
                offer.highlight
                  ? "border border-primary-400/40 ring-1 ring-primary-500/10 shadow-[0_50px_120px_-60px_rgba(160,175,245,0.6)]"
                  : "border border-foreground-950/[0.08] card-shadow hover:border-foreground-950/20"
              }`}
            >
              {/* Halo de la carte mise en avant */}
              {offer.highlight && (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary-500/[0.14] to-transparent" />
              )}

              {/* Recommended badge */}
              {offer.highlight && (
                <div className="absolute top-0 right-0">
                  <div className="copper-btn text-[10px] tracking-[0.2em] uppercase font-medium px-4 py-1.5 rounded-bl-xl">
                    Recommandé
                  </div>
                </div>
              )}

              <div className="relative z-10 flex h-full flex-col">
                {/* Name & subtitle */}
                <h3 className="font-heading text-lg md:text-xl font-semibold tracking-tightest text-foreground-950 mb-2 pr-16">
                  {offer.name}
                </h3>
                <p className="text-[13.5px] text-foreground-500 font-light mb-8 min-h-[40px]">
                  {offer.subtitle}
                </p>

                {/* Price — creation */}
                <div className="mb-1">
                  <span className="block text-[10px] tracking-[0.25em] uppercase text-foreground-400 mb-2">
                    Création
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-5xl md:text-[56px] font-bold tracking-tightest pricing-glow leading-none">
                      {offer.setupPrice}
                    </span>
                    <span className="text-xs text-foreground-500 font-light">
                      une fois
                    </span>
                  </div>
                </div>

                {/* Price — monthly */}
                <div
                  className={`mt-5 rounded-lg px-4 py-3 border ${
                    offer.highlight
                      ? "bg-primary-500/[0.08] border-primary-500/20"
                      : "bg-background-50 border-foreground-950/[0.08]"
                  }`}
                >
                  <div className="text-sm text-foreground-950 font-medium tracking-tight">
                    {offer.monthlyPrice}
                  </div>
                  <div className="mt-1 text-[11px] text-foreground-500 font-light leading-relaxed">
                    {offer.monthlyNote}
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-foreground-950/[0.08] my-7" />

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {offer.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <span className="mt-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 bg-primary-500/10 border border-primary-500/25">
                        <i className="ri-check-line text-[10px] gold-accent w-3.5 h-3.5 flex items-center justify-center" />
                      </span>
                      <span className="text-[13.5px] text-foreground-700 leading-relaxed font-light">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Note de l'offre */}
                {offer.note && (
                  <p className="mb-7 rounded-lg bg-background-50 border border-foreground-950/[0.08] px-4 py-3 text-[11.5px] leading-relaxed text-foreground-500 font-light">
                    {offer.note}
                  </p>
                )}

                {/* CTA → paiement Stripe pour l'offre « Site livré », formulaire sinon */}
                {(() => {
                  const stripeLink = STRIPE_LINK_BY_OFFER[offer.id] ?? "";
                  const ctaContent = (
                    <>
                      <span className="relative z-10">Choisir cette offre</span>
                      <i className="ri-arrow-right-line relative z-10 w-4 h-4 flex items-center justify-center transition-transform duration-500 group-hover/btn:translate-x-1" />
                    </>
                  );

                  if (isStripeLinkReady(stripeLink)) {
                    return (
                      <a
                        href={stripeLink.trim()}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Choisir l'offre ${offer.name} et procéder au paiement sécurisé`}
                        className={CTA_CLASS}
                      >
                        {ctaContent}
                      </a>
                    );
                  }

                  return (
                    <Link
                      to={`/?offre=${offer.id}#contact`}
                      aria-label={`Choisir l'offre ${offer.name} et indiquer cette offre dans le formulaire de contact`}
                      className={CTA_CLASS}
                    >
                      {ctaContent}
                    </Link>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div
          className="mt-14 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-foreground-500 text-sm"
          data-reveal
        >
          <div className="flex items-center gap-2">
            <i className="ri-file-list-3-line w-4 h-4 flex items-center justify-center gold-accent" />
            <span>Projets sur mesure : devis avant démarrage</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-foreground-950/15" />
          <div className="flex items-center gap-2">
            <i className="ri-mail-line w-4 h-4 flex items-center justify-center gold-accent" />
            <span>Échanges par e-mail</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-foreground-950/15" />
          <div className="flex items-center gap-2">
            <i className="ri-add-circle-line w-4 h-4 flex items-center justify-center gold-accent" />
            <span>Options chiffrées séparément</span>
          </div>
        </div>

        <p
          className="mt-8 md:mt-10 text-center text-xs md:text-sm text-foreground-500 font-light max-w-2xl mx-auto"
          data-reveal
        >
          Ces deux offres se commandent et se paient directement en ligne. Pour
          plus de 5 pages ou des fonctionnalités spécifiques, un devis précis
          est établi avant le démarrage. Offres réservées aux professionnels.
        </p>

        <p
          className="mt-3 text-center text-[11px] md:text-xs text-foreground-400 font-light max-w-2xl mx-auto leading-relaxed"
          data-reveal
        >
          Paiement sécurisé par carte via Stripe — aucune donnée bancaire
          n&apos;est stockée par FLESH. Facture envoyée par e-mail après
          paiement.
        </p>
      </div>
    </section>
  );
}