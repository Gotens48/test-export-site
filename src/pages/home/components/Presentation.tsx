const PORTRAIT =
  "https://storage.helloreaddy.io/project_files/b3387213-808b-4b2e-9fc1-2e3bf9609406/501f1fcd-b79a-40a2-9608-93626dab9578_compressed_Homme-concentr-sur-son-ordinateur-portable-3.webp";

const PARAGRAPHS = [
  "Je suis Bryan Lefevre. Je crée votre site et je vous accompagne à chaque étape.",
  "Fraîchement lancé dans le digital, je suis installé à Baillargues, aux portes de Montpellier. Je suis votre interlocuteur unique, à distance, pour imaginer, concevoir, modifier ou améliorer votre site internet.",
  "Après plusieurs années d'expérience dans le commerce en ligne et des milliers de produits vendus, je sais exactement ce qui fait fuir un client : un site peu attractif, confus ou daté, des prix introuvables, un détail qui éveille la méfiance. Et surtout, je sais ce qui transforme un simple visiteur en client.",
];

export default function Presentation() {
  return (
    <section
      id="presentation"
      className="relative py-20 md:py-28 bg-background-50 border-t border-foreground-950/[0.06]"
    >
      {/* Halo discret */}
      <div className="pointer-events-none absolute -left-32 top-24 h-[420px] w-[420px] rounded-full bg-primary-500/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Colonne photo */}
          <div className="lg:col-span-5 w-full max-w-[420px] lg:max-w-none" data-reveal>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg border border-foreground-950/10 bg-background-100 card-shadow">
              <img
                src={PORTRAIT}
                alt="Bryan Lefevre, fondateur de FLESH"
                title="Bryan Lefevre, fondateur de FLESH — création de sites internet à Baillargues"
                className="absolute inset-0 w-full h-full object-cover object-top"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground-950/[0.06]" />
            </div>
            <p className="mt-3 text-[11.5px] md:text-xs tracking-wide text-foreground-400 font-light">
              Bryan Lefevre, Baillargues
            </p>
          </div>

          {/* Colonne texte */}
          <div className="lg:col-span-7 w-full lg:pt-2">
            <span
              className="inline-flex items-center gap-3 mb-6 text-[10.5px] tracking-[0.3em] uppercase text-foreground-500"
              data-reveal
            >
              <span className="w-8 h-px gold-line" />
              Le fondateur
            </span>

            <h2
              className="font-heading font-bold tracking-tightest leading-[1.05] text-3xl md:text-[46px] lg:text-[52px] text-foreground-950 mb-7"
              data-reveal
              data-reveal-delay="80"
            >
              Votre <span className="copper-text">interlocuteur</span>
            </h2>

            <div className="space-y-5 max-w-xl">
              {PARAGRAPHS.map((text, i) => (
                <p
                  key={i}
                  className={`text-[15px] md:text-[16.5px] leading-relaxed font-light ${
                    i === 0 ? "text-foreground-800" : "text-foreground-500"
                  }`}
                  data-reveal
                  data-reveal-delay={160 + i * 80}
                >
                  {text}
                </p>
              ))}
            </div>

            <div
              className="mt-9 flex items-center gap-4 text-[10.5px] tracking-[0.22em] uppercase text-foreground-400"
              data-reveal
              data-reveal-delay="420"
            >
              <span className="w-8 h-px bg-foreground-950/15" />
              Baillargues · Montpellier
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}