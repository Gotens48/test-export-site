import ContactForm from "@/pages/home/components/contact/ContactForm";

const COORDS = [
  { icon: "ri-mail-line", label: "E-mail", value: "contact.fleshagency@gmail.com", href: "mailto:contact.fleshagency@gmail.com" },
  { icon: "ri-phone-line", label: "Téléphone", value: "07 84 28 56 71", href: "tel:+33784285671" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background-100 border-t border-foreground-950/[0.06]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-3 mb-6 text-[10.5px] tracking-[0.3em] uppercase text-foreground-500" data-reveal>
            <span className="w-8 h-px gold-line" />
            Contact
          </span>
          <h2 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-[56px] text-foreground-950 mb-8" data-reveal>
            Parlons de <span className="copper-text">votre projet.</span>
          </h2>
          <p className="text-foreground-500 text-base leading-relaxed font-light mb-12 max-w-md" data-reveal>
            Un projet, une idée, une question ? Écrivez-nous, nous vous répondons dès que possible.
          </p>

          <div className="space-y-6 mb-12" data-reveal data-reveal-delay="100">
            {COORDS.map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <span className="mt-0.5 w-11 h-11 rounded-lg bg-background-50 border border-foreground-950/[0.08] flex items-center justify-center">
                  <i className={`${c.icon} text-lg gold-accent w-5 h-5 flex items-center justify-center`} />
                </span>
                <div>
                  <div className="text-[10.5px] tracking-[0.2em] uppercase text-foreground-400 mb-1">{c.label}</div>
                  <a href={c.href} className="text-[15px] text-foreground-950 hover:text-primary-400 transition-colors duration-300 cursor-pointer">
                    {c.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-foreground-950/[0.08] bg-background-50 px-5 py-4 max-w-md" data-reveal data-reveal-delay="120">
            <div className="flex items-start gap-3">
              <i className="ri-shield-check-line gold-accent w-5 h-5 flex items-center justify-center mt-0.5" />
              <p className="text-[12px] leading-relaxed text-foreground-500">
                Seuls votre nom, votre e-mail et votre message sont nécessaires pour vous répondre. L&apos;entreprise, le
                téléphone et le budget restent facultatifs.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <ContactForm />
      </div>
    </section>
  );
}