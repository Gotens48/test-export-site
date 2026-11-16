import { useEffect, useRef, useState } from "react";

const STEPS = [
  { n: "01", title: "Stratégie", body: "Architecture, message et positionnement pensés pour convertir vos visiteurs." },
  { n: "02", title: "Design", body: "Maquettes sur-mesure, typographie soignée, ambiance qui reflète votre marque." },
  { n: "03", title: "Développement", body: "Code propre, chargement instantané, animations fluides, mobile impeccable." },
  { n: "04", title: "Livraison", body: "Mise en ligne, on reste disponible après l'ouverture." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75;
      const end = -rect.height + vh * 0.25;
      const scrolled = start - rect.top;
      const total = start - end;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-24 md:py-32 bg-background-50 border-y border-foreground-950/[0.06] overflow-hidden"
    >
      {/* Halo froid */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary-500/[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="max-w-3xl mb-14 md:mb-20" data-reveal>
          <span className="inline-flex items-center gap-3 mb-6 text-[10.5px] tracking-[0.3em] uppercase text-foreground-500">
            <span className="w-8 h-px gold-line" />
            Process
          </span>
          <h2 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-[56px] text-foreground-950">
            Quatre étapes, <span className="copper-text">zéro mauvaise surprise.</span>
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-foreground-950/10" />
          <div
            className="absolute top-6 left-0 h-px bg-primary-500/70 transition-all duration-300 ease-flesh"
            style={{ width: `${progress * 100}%` }}
          />
          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => {
              const stepProgress = (i + 0.5) / STEPS.length;
              const active = progress >= stepProgress - 0.06;
              return (
                <div key={step.n} className="relative pt-16" data-reveal data-reveal-delay={i * 90}>
                  <span
                    className={`absolute top-3 left-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 ease-flesh ${
                      active
                        ? "bg-primary-500 border-primary-500 shadow-[0_0_24px_rgba(160,175,245,0.55)]"
                        : "bg-background-200 border-foreground-950/10"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-background-50" : "bg-foreground-400"}`} />
                  </span>
                  <div className={`font-heading text-[44px] font-bold tracking-tightest transition-colors duration-500 ${active ? "copper-text" : "text-foreground-300"}`}>
                    {step.n}
                  </div>
                  <div className="mt-3 font-heading text-lg font-bold text-foreground-950">{step.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-500 font-light">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute top-0 bottom-0 left-3 w-px bg-foreground-950/10" />
          <div
            className="absolute top-0 left-3 w-px bg-primary-500/70 transition-all duration-300"
            style={{ height: `${progress * 100}%` }}
          />
          <div className="flex flex-col gap-11">
            {STEPS.map((step, i) => {
              const stepProgress = (i + 0.5) / STEPS.length;
              const active = progress >= stepProgress - 0.06;
              return (
                <div key={step.n} className="relative" data-reveal>
                  <span
                    className={`absolute -left-8 top-1 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      active
                        ? "bg-primary-500 border-primary-500 shadow-[0_0_20px_rgba(160,175,245,0.5)]"
                        : "bg-background-200 border-foreground-950/10"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${active ? "bg-background-50" : "bg-foreground-400"}`} />
                  </span>
                  <div className={`font-heading text-4xl font-bold tracking-tightest ${active ? "copper-text" : "text-foreground-300"}`}>{step.n}</div>
                  <div className="mt-2 font-heading text-lg font-bold text-foreground-950">{step.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground-500 font-light">{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}