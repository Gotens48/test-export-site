import { useEffect, useState } from "react";
import Logo from "@/pages/home/components/Logo";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Process", href: "#process" },
  { label: "À propos", href: "#a-propos" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeAndScroll = (href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    window.setTimeout(() => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 220);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ease-flesh ${
          open
            ? "bg-background-50 py-3 border-b border-foreground-950/10"
            : scrolled
              ? "backdrop-blur-xl bg-background-50/80 border-b border-foreground-950/8 py-3"
              : "bg-transparent border-b border-foreground-950/[0.06] py-5"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group cursor-pointer">
            <Logo size="sm" withWordmark={true} light />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm transition-colors duration-300 cursor-pointer relative group whitespace-nowrap text-foreground-500 hover:text-foreground-950"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary-400 transition-all duration-500 ease-flesh group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full copper-btn text-sm font-medium whitespace-nowrap transition-all duration-500 ease-flesh hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Démarrer un projet</span>
              <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center transition-transform duration-500 ease-flesh group-hover:translate-x-1" />
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md border border-foreground-950/15 text-foreground-950 hover:bg-foreground-950/5 transition-colors duration-300 cursor-pointer"
          >
            <i className={`${open ? "ri-close-line" : "ri-menu-3-line"} text-xl w-6 h-6 flex items-center justify-center`} />
          </button>
        </div>
      </header>

      {/* Mobile menu — full screen panel below the top bar */}
      <div
        aria-hidden={!open}
        className={`lg:hidden fixed inset-0 z-[75] bg-background-50 backdrop-blur-xl transition-opacity duration-200 ease-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full w-full flex flex-col pt-[80px] px-6 pb-6">
          <nav className="flex-1 min-h-0 overflow-y-auto overscroll-contain flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  closeAndScroll(item.href);
                }}
                className="shrink-0 py-2.5 text-3xl font-heading font-bold tracking-tightest text-foreground-950 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="shrink-0 pt-4 mt-2 border-t border-foreground-950/10">
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                closeAndScroll("#contact");
              }}
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-full copper-btn text-base font-medium whitespace-nowrap cursor-pointer"
            >
              Démarrer un projet
              <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}