import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt: string;
}

interface ShowcaseProps {
  slides: Slide[];
  siteUrl?: string;
}

export default function BeforeAfter({ slides, siteUrl = "flesh-agency.fr" }: ShowcaseProps) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (slides.length < 2) return undefined;
    const id = window.setInterval(() => {
      setVisible(false);
      const timeout = window.setTimeout(() => {
        setIdx((i) => (i + 1) % slides.length);
        setVisible(true);
      }, 450);
      return () => window.clearTimeout(timeout);
    }, 4200);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <div className="w-full">
      <div
        className="relative rounded-xl border border-foreground-950/10 bg-background-50 overflow-hidden"
        style={{
          boxShadow:
            "0 60px 130px -50px rgba(0,0,0,0.95), 0 0 90px -40px rgba(160,175,245,0.22)",
        }}
      >
        {/* Barre de navigateur */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-foreground-950/8 bg-background-100">
          <span className="w-2.5 h-2.5 rounded-full bg-foreground-950/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground-950/12" />
          <span className="w-2.5 h-2.5 rounded-full bg-foreground-950/8" />
          <div className="ml-4 flex-1 max-w-md h-6 rounded-md bg-background-50 border border-foreground-950/8 flex items-center px-3 gap-2">
            <i className="ri-lock-line w-3 h-3 flex items-center justify-center text-[10px] text-primary-400" />
            <span className="text-[10px] text-foreground-500 tracking-wide">{siteUrl}</span>
          </div>
        </div>

        {/* Zone image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-background-50">
          {slides.map((slide, i) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${
                i === idx && visible ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-background-50/60 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}