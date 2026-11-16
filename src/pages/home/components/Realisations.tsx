import BeforeAfter from "./BeforeAfter";

const CASES = [
  {
    tag: "Exemple",
    title: "Commerces",
    body: "Avec Flesh, des sites vieillots et peu visibles sont transformés en vitrine haut de gamme. Design épuré et élégant qui met en valeur votre entreprise et incite les clients à vous contacter",
    stats: [
      { value: "Sur-mesure", label: "aucun thème recyclé" },
      { value: "Mobile", label: "pensé d'abord pour le téléphone" },
    ],
    isBeforeAfter: true,
    slides: [
      {
        src: "https://static.readdy.ai/image/1f0e5235180676805691159140764033/edff38e43d13ca84bb154218f2eec4f2.png",
        alt: "Domaine Aurel — maison d'hôtes en Provence, site vitrine réalisé par FLESH",
      },
      {
        src: "https://static.readdy.ai/image/1f0e5235180676805691159140764033/5813f4ebd9cfa4a692d1b183ff82332a.png",
        alt: "L'Aube — site de restaurant gastronomique réalisé par FLESH",
      },
      {
        src: "https://static.readdy.ai/image/1f0e5235180676805691159140764033/2671821bea7080f7fd52a7e3602eede4.png",
        alt: "Le Palais — site d'un restaurant gastronomique à Montpellier réalisé par FLESH",
      },
    ],
  },
];

export default function Realisations() {
  return (
    <section id="realisations" className="relative py-24 md:py-32 bg-background-100 border-y border-foreground-950/[0.06]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="max-w-3xl mb-14 md:mb-20" data-reveal>
          <span className="inline-flex items-center gap-3 mb-6 text-[10.5px] tracking-[0.3em] uppercase text-foreground-500">
            <span className="w-8 h-px gold-line" />
            Réalisations
          </span>
          <h2 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-[56px] text-foreground-950">
            Des projets <span className="copper-text">qui vous parlent</span>&nbsp;
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          {CASES.map((c, i) => (
            <div
              key={c.title}
              data-reveal
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Mockups or BeforeAfter */}
              <div className="lg:col-span-8 relative">
                {c.isBeforeAfter ? (
                  <BeforeAfter slides={c.slides!} />
                ) : (
                  <>
                    <div className="relative rounded-xl overflow-hidden border border-foreground-950/10 bg-background-50 card-shadow">
                      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-foreground-950/8 bg-background-100">
                        <span className="w-2 h-2 rounded-full bg-foreground-950/20" />
                        <span className="w-2 h-2 rounded-full bg-foreground-950/12" />
                        <span className="w-2 h-2 rounded-full bg-foreground-950/8" />
                      </div>
                      <img src={c.desktop} alt={c.title} className="w-full aspect-[16/10] object-cover object-top" />
                    </div>
                    {/* Mobile mockup overlay */}
                    <div className="absolute -bottom-8 -right-4 md:right-8 w-32 md:w-44 aspect-[9/19] rounded-[26px] overflow-hidden border-4 border-background-100 bg-background-50 shadow-xl">
                      <img src={c.mobile} alt={`${c.title} mobile`} className="w-full h-full object-cover object-top" />
                    </div>
                  </>
                )}
                {/* Glow */}
                <div className="absolute -inset-8 -z-10 bg-primary-500/[0.05] blur-3xl rounded-full" />
              </div>

              {/* Content */}
              <div className="lg:col-span-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10.5px] tracking-[0.2em] uppercase text-foreground-500 border border-foreground-950/12 bg-background-50 mb-5">
                  {c.tag}
                </span>
                <h3 className="font-heading text-3xl md:text-[44px] font-bold tracking-tightest text-foreground-950 leading-[1.05] mb-5">
                  {c.title}
                </h3>
                <p className="text-[15px] md:text-base leading-relaxed text-foreground-500 font-light mb-9">
                  {c.body}
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-8 border-t border-foreground-950/10">
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className="font-heading text-2xl md:text-3xl font-bold text-foreground-950 tracking-tight mb-1">
                        {s.value}
                      </div>
                      <div className="text-[11px] tracking-[0.16em] uppercase text-foreground-400">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}