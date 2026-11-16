import { useEffect, useState } from "react";

const HERO_SCREEN =
  "https://static.readdy.ai/image/1f0e5235180676805691159140764033/369d46eea68398870da70885497946ae.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tilt = Math.max(12 - scrollY * 0.018, 1);
  const mockupY = Math.max(0 - scrollY * 0.05, -50);

  return (
    <section id="top" className="relative isolate min-h-[100svh] w-full overflow-hidden bg-background-50">
      {/* Lignes verticales de composition */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
        <div className="mx-auto h-full max-w-[1400px] px-8">
          <div className="relative h-full border-x border-foreground-950/[0.07]">
            <span className="absolute inset-y-0 left-1/4 w-px bg-foreground-950/[0.05]" />
            <span className="absolute inset-y-0 left-2/4 w-px bg-foreground-950/[0.05]" />
            <span className="absolute inset-y-0 left-3/4 w-px bg-foreground-950/[0.05]" />
          </div>
        </div>
      </div>

      {/* Halo froid derrière le mockup */}
      <div className="pointer-events-none absolute -right-40 top-10 z-0 h-[520px] w-[520px] rounded-full bg-primary-500/[0.10] blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 z-0 h-[420px] w-[420px] rounded-full bg-accent-500/[0.07] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8 pt-28 md:pt-32 pb-16 md:pb-20">
        {/* Logo F */}
        <div className="flex justify-center mb-8 md:mb-10">
          <img
            src="https://static.readdy.ai/image/1f0e5235180676805691159140764033/13ff5f5251d8b487818be846af4f8c27.png"
            alt="Flesh"
            className="h-16 md:h-20 w-auto object-contain animate-floaty opacity-95"
            style={{ filter: "brightness(0) invert(1)" }}
            draggable={false}
          />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* ========= LEFT COLUMN: Texte ========= */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-foreground-950/12 bg-foreground-950/[0.04]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              <span className="text-[10.5px] tracking-[0.28em] text-foreground-500 uppercase font-medium">
                Agence digitale française
              </span>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold tracking-tightest leading-[1.03] text-[38px] md:text-[56px] lg:text-[64px] text-foreground-950 max-w-xl">
              <span className="block">Nous créons les sites</span>
              <span className="block copper-text">que votre entreprise mérite.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-lg text-foreground-500 text-base md:text-[17px] leading-relaxed font-light">
              Sites web sur-mesure pour convertir vos visiteurs en clients. Design exigeant, performance, résultats.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-center lg:items-start gap-3">
              <a
                href="#contact"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-6 py-3.5 rounded-full copper-btn text-sm font-medium whitespace-nowrap transition-all duration-500 ease-flesh hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="relative z-10">Démarrer un projet</span>
                <i className="ri-arrow-right-line relative z-10 w-4 h-4 flex items-center justify-center transition-transform duration-500 ease-flesh group-hover:translate-x-1" />
              </a>
              <a
                href="#realisations"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full ghost-btn text-sm font-medium whitespace-nowrap transition-all duration-500 ease-flesh hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Voir les réalisations</span>
                <i className="ri-arrow-right-up-line w-4 h-4 flex items-center justify-center transition-transform duration-500 ease-flesh group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Petit repère sous les CTA */}
            <div className="mt-10 flex items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-foreground-400">
              <span className="w-8 h-px bg-foreground-950/15" />
              Sites livrés en 2 semaines
            </div>
          </div>

          {/* ========= RIGHT COLUMN: Cadre navigateur ========= */}
          <div
            className="flex-1 w-full max-w-[600px] lg:max-w-none lg:-mt-4"
            style={{ perspective: "1600px" }}
          >
            <div
              className="relative rounded-xl border border-foreground-950/10 bg-background-100 overflow-hidden transition-transform duration-300 ease-flesh"
              style={{
                transform: `rotateX(${tilt}deg) translateY(${mockupY}px)`,
                transformStyle: "preserve-3d",
                boxShadow:
                  "0 60px 140px -40px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.03), 0 0 90px -30px rgba(160,175,245,0.25)",
              }}
            >
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground-950/8 bg-background-100">
                <span className="w-2.5 h-2.5 rounded-full bg-foreground-950/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground-950/12" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground-950/8" />
                <div className="ml-4 flex-1 max-w-md h-6 rounded-md bg-background-50 border border-foreground-950/8 flex items-center px-3 gap-2">
                  <i className="ri-lock-line w-3 h-3 flex items-center justify-center text-[10px] text-primary-400" />
                  <span className="text-[10px] text-foreground-500 tracking-wide">flesh-agency.fr</span>
                </div>
              </div>

              {/* Screens — capture unique */}
              <div className="relative aspect-[16/10] overflow-hidden bg-background-50">
                <img
                  src={HERO_SCREEN}
                  alt="Aperçu d'un site vitrine haut de gamme créé par FLESH — maquette parfum VÉLOR"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Reflet au sol */}
            <div className="mx-auto mt-6 h-16 w-[80%] rounded-[50%] bg-primary-500/[0.07] blur-2xl" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 md:mt-14 flex flex-col items-center gap-3 text-foreground-400">
          <span className="text-[10px] tracking-[0.35em] uppercase font-medium">Découvrir</span>
          <span className="relative block w-px h-14 bg-foreground-950/10 overflow-hidden">
            <span className="absolute top-0 left-0 w-px h-6 bg-primary-500 animate-scrollLine" style={{ animationIterationCount: "infinite" }} />
          </span>
        </div>
      </div>
    </section>
  );
}