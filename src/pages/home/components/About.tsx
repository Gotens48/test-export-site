const STATS = [
  { value: "100 %", label: "sur-mesure", note: "" },
  {
    value: "2 semaines",
    label: "Livré en 14 jours max",
    note: "à réception de vos contenus",
  },
];

export default function About() {
  return (
    <section id="a-propos" className="relative py-24 md:py-32 bg-background-100 border-b border-foreground-950/[0.06]">
      <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
        <span className="inline-flex items-center gap-3 mb-6 text-[10.5px] tracking-[0.3em] uppercase text-foreground-500" data-reveal>
          <span className="w-8 h-px gold-line" />
          À propos
          <span className="w-8 h-px gold-line" />
        </span>
        <h2 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-[56px] text-foreground-950 mb-8" data-reveal data-reveal-delay="100">
          Chaque entreprise mérite un site <span className="copper-text">d'exception.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-foreground-500 text-base md:text-[17px] leading-relaxed font-light" data-reveal data-reveal-delay="200">
          Nous créons des sites internet haut de gamme, pensés pour durer et transformer vos visiteurs en clients.
          Chaque projet bénéficie d'une attention totale, de la création jusqu'à la mise en ligne.
        </p>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-0 md:divide-x md:divide-foreground-950/10 pt-12 border-t border-foreground-950/10" data-reveal data-reveal-delay="280">
          {STATS.map((s) => (
            <div key={s.label} className="text-center px-4">
              <div className="font-heading text-4xl md:text-[52px] font-bold tracking-tightest copper-text mb-3">
                {s.value}
              </div>
              <div className="text-[10.5px] tracking-[0.25em] uppercase text-foreground-400">{s.label}</div>
              {s.note && (
                <div className="mt-2 text-[11px] md:text-xs text-foreground-500 font-light italic">
                  {s.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}