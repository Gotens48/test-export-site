import { useRef, useState } from "react";

const SERVICES = [
  {
    icon: "ri-quill-pen-line",
    title: "Création de site",
    body: "Un site pensé pour votre métier : structure claire, message juste, design qui vous ressemble.",
  },
  {
    icon: "ri-refresh-line",
    title: "Refonte",
    body: "Votre site a vieilli ? On garde ce qui fonctionne, on reconstruit le reste, en prenant soin de votre référencement.",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Design & développement",
    body: "Interfaces sur-mesure et code propre : chargement instantané, animations fluides, parfait sur mobile.",
  },
  {
    icon: "ri-line-chart-line",
    title: "SEO & maintenance",
    body: "Être trouvé sur Google, puis garder un site à jour grâce à notre suivi mensuel.",
  },
];

function ServiceCard({ item, i }: { item: (typeof SERVICES)[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos(null)}
      data-reveal
      data-reveal-delay={i * 100}
      className="group relative overflow-hidden rounded-xl bg-background-100 border border-foreground-950/[0.07] card-shadow p-8 md:p-9 transition-all duration-500 ease-flesh hover:-translate-y-1.5 hover:border-primary-500/30 cursor-pointer"
    >
      {/* Cursor halo */}
      {pos && (
        <div
          className="pointer-events-none absolute w-64 h-64 rounded-full bg-primary-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ left: pos.x - 128, top: pos.y - 128 }}
        />
      )}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-7 transition-transform duration-500 ease-flesh group-hover:scale-105">
          <i className={`${item.icon} text-xl gold-accent w-6 h-6 flex items-center justify-center`} />
        </div>
        <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-3">
          {item.title}
        </h3>
        <p className="text-[14.5px] leading-relaxed text-foreground-500 font-light">
          {item.body}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary-500/[0.08] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background-50 border-t border-foreground-950/[0.06]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="max-w-3xl mb-14 md:mb-20" data-reveal>
          <span className="inline-flex items-center gap-3 mb-6 text-[10.5px] tracking-[0.3em] uppercase text-foreground-500">
            <span className="w-8 h-px gold-line" />
            Services
          </span>
          <h2 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-[56px] text-foreground-950">
            Tout ce qu'il vous faut pour <br className="hidden md:block" />
            <span className="copper-text">exister en ligne</span>, vraiment.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((item, i) => (
            <ServiceCard key={item.title} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}