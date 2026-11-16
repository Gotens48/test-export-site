import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { OFFERS } from "@/config/offers";

const BUDGETS = [
  "Moins de 1 500 €",
  "1 500 – 3 000 €",
  "3 000 – 6 000 €",
  "Plus de 6 000 €",
  "À définir ensemble",
];

const FORM_ENDPOINT = "https://readdy.ai/api/form/d9ifrf4oq4dpg2lrnbmg";

const inputClass =
  "w-full px-4 py-3 rounded-md bg-background-50 border border-foreground-950/12 text-sm text-foreground-950 placeholder:text-foreground-500/50 focus:outline-none focus:border-primary-500/60 focus:ring-1 focus:ring-primary-500/20 transition-all duration-300";

const labelClass = "block text-[10.5px] tracking-[0.2em] uppercase text-foreground-400 mb-2";

function RequiredMark() {
  return <span className="text-primary-500"> *</span>;
}

function OptionalMark() {
  return <span className="normal-case tracking-normal text-foreground-500/80"> (facultatif)</span>;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [offerId, setOfferId] = useState<string | null>(null);
  const mountedAt = useRef<number>(Date.now());
  const location = useLocation();
  const offerFromUrl = new URLSearchParams(location.search).get("offre");

  /* L'offre choisie dans la section Tarifs est transmise par l'URL (?offre=...). */
  useEffect(() => {
    setOfferId(offerFromUrl);
    if (!offerFromUrl) return;
    const timer = window.setTimeout(() => {
      const el = document.getElementById("flesh-contact-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [offerFromUrl]);

  const selectedOffer = OFFERS.find((o) => o.id === offerId) || null;

  const clearOffer = () => {
    setOfferId(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    /* 1. Champ piège : un humain ne le voit ni ne le remplit. */
    const honeypot = (fd.get("website_alt") || "").toString().trim();
    if (honeypot) {
      setStatus("success");
      form.reset();
      setBudget("");
      setMessage("");
      setOfferId(null);
      return;
    }
    fd.delete("website_alt");

    /* 2. Envoi trop rapide après l'affichage du formulaire : signature d'un robot.
          On affiche le même message qu'un envoi réussi pour ne pas guider l'automate. */
    if (Date.now() - mountedAt.current < 2000) {
      setStatus("success");
      form.reset();
      setBudget("");
      setMessage("");
      setOfferId(null);
      return;
    }

    /* 3. Validation locale avant tout envoi. */
    const name = (fd.get("name") || "").toString().trim();
    const email = (fd.get("email") || "").toString().trim();
    const text = (fd.get("message") || "").toString().trim();

    if (!name || !email || !text) {
      setStatus("error");
      setErrorMsg("Merci de renseigner votre nom, votre e-mail et votre message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setStatus("error");
      setErrorMsg("Cette adresse e-mail ne semble pas valide.");
      return;
    }
    if (text.length > 500) {
      setStatus("error");
      setErrorMsg("Le message ne peut pas dépasser 500 caractères.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      /* Seuls les champs réellement renseignés sont transmis. */
      const body = new URLSearchParams();
      fd.forEach((value, key) => {
        const v = value.toString().trim();
        if (v) body.append(key, v);
      });

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string } } = {};
      try {
        parsed = JSON.parse(responseText) as { code?: string; meta?: { message?: string; detail?: string } };
      } catch {
        /* réponse non JSON : on garde le texte brut */
      }

      const serverMsg = parsed?.meta?.message || parsed?.meta?.detail || responseText || "";
      const looksLikeSpam = /spam/i.test(serverMsg);

      if (response.ok && parsed?.code === "OK" && !looksLikeSpam) {
        setStatus("success");
        form.reset();
        setBudget("");
        setMessage("");
        setOfferId(null);
      } else {
        setStatus("error");
        setErrorMsg(
          looksLikeSpam
            ? "L'envoi a été bloqué par le filtre anti-robot. Merci de nous écrire directement à contact.fleshagency@gmail.com."
            : serverMsg || "Impossible d'envoyer le message. Réessayez.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Erreur réseau. Vérifiez votre connexion et réessayez.");
    }
  };

  return (
    <form
      id="flesh-contact-form"
      data-readdy-form
      onSubmit={handleSubmit}
      className="relative rounded-2xl bg-background-100 border border-foreground-950/[0.08] card-shadow p-8 md:p-10"
      data-reveal
      data-reveal-delay="120"
    >
      {/* Champ piège anti-robot — masqué par la feuille de styles, jamais accessible. */}
      <input
        type="text"
        name="website_alt"
        tabIndex={-1}
        autoComplete="off"
        readOnly
        aria-hidden="true"
        className="hp-guard"
      />

      {/* Offre sélectionnée depuis la section Tarifs */}
      {selectedOffer && (
        <div className="mb-6 flex items-start justify-between gap-3 rounded-lg border border-primary-500/25 bg-primary-500/[0.08] px-4 py-3">
          <div className="min-w-0">
            <div className="text-[10px] tracking-[0.22em] uppercase text-foreground-400 mb-1">
              Offre sélectionnée
            </div>
            <div className="text-sm text-foreground-950 font-medium">
              {selectedOffer.name}
            </div>
            <div className="mt-0.5 text-[11px] text-foreground-500 font-light">
              Création à partir de {selectedOffer.setupPrice} — {selectedOffer.monthlyPrice}
            </div>
          </div>
          <button
            type="button"
            onClick={clearOffer}
            aria-label="Retirer l'offre sélectionnée"
            className="mt-0.5 w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-foreground-500 hover:text-foreground-950 hover:bg-foreground-950/5 transition-colors duration-300 cursor-pointer"
          >
            <i className="ri-close-line w-4 h-4 flex items-center justify-center" />
          </button>
        </div>
      )}
      <input type="hidden" name="offre" value={selectedOffer ? selectedOffer.name : ""} readOnly />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="min-w-0">
          <label htmlFor="contact-name" className={labelClass}>
            Nom <RequiredMark />
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            maxLength={80}
            autoComplete="name"
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="contact-email" className={labelClass}>
            E-mail <RequiredMark />
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            maxLength={120}
            autoComplete="email"
            placeholder="vous@exemple.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="min-w-0">
          <label htmlFor="contact-company" className={labelClass}>
            Entreprise <OptionalMark />
          </label>
          <input
            id="contact-company"
            type="text"
            name="company"
            maxLength={80}
            autoComplete="organization"
            placeholder="Nom de votre entreprise"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="contact-phone" className={labelClass}>
            Téléphone <OptionalMark />
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            maxLength={30}
            autoComplete="tel"
            placeholder="06 00 00 00 00"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-5 relative">
        <label htmlFor="contact-budget-trigger" className={labelClass}>
          Budget <OptionalMark />
        </label>
        <button
          id="contact-budget-trigger"
          type="button"
          onClick={() => setBudgetOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={budgetOpen}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-md bg-background-50 border text-sm cursor-pointer transition-all duration-300 ${
            budgetOpen ? "border-primary-500/50 ring-1 ring-primary-500/20" : "border-foreground-950/12"
          }`}
        >
          <span className={budget ? "text-foreground-950" : "text-foreground-500/70"}>
            {budget || "Sélectionnez une fourchette"}
          </span>
          <i
            className={`ri-arrow-down-s-line w-5 h-5 flex items-center justify-center text-foreground-500 transition-transform duration-300 ${
              budgetOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <input type="hidden" name="budget" value={budget} readOnly />
        {budgetOpen && (
          <div
            role="listbox"
            aria-label="Fourchette de budget"
            className="absolute z-10 mt-2 w-full rounded-md bg-background-100 border border-foreground-950/12 shadow-2xl shadow-black/60 overflow-hidden"
          >
            {BUDGETS.map((b) => (
              <button
                key={b}
                type="button"
                role="option"
                aria-selected={budget === b}
                onClick={() => {
                  setBudget(b);
                  setBudgetOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors duration-200 cursor-pointer ${
                  budget === b
                    ? "bg-primary-500/10 text-primary-400 font-medium"
                    : "text-foreground-700 hover:bg-foreground-950/5 hover:text-foreground-950"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="contact-message" className={labelClass}>
          Message <RequiredMark />
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={500}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Parlez-nous de votre projet…"
          className={`${inputClass} resize-none`}
        />
        <div className="mt-1.5 text-right text-[11px] text-foreground-400">{message.length}/500</div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group relative w-full overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full copper-btn text-sm font-medium whitespace-nowrap transition-all duration-500 ease-flesh hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">{status === "loading" ? "Envoi…" : "Envoyer ma demande"}</span>
        <i className="ri-send-plane-line relative z-10 w-4 h-4 flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1" />
      </button>

      <p className="mt-3 text-[11px] leading-relaxed text-foreground-500">
        Les champs marqués d&apos;un astérisque (*) sont obligatoires. Les autres sont facultatifs et ne conditionnent pas l&apos;envoi de votre demande.
      </p>

      <div className="mt-4 rounded-lg bg-background-50 border border-foreground-950/[0.08] px-4 py-3">
        <p className="text-[11px] leading-relaxed text-foreground-500">
          <span className="text-foreground-950 font-medium">Responsable du traitement :</span> Bryan LEFEVRE — FLESH. Les
          informations transmises servent uniquement à répondre à votre demande, à échanger sur votre projet et à préparer
          un éventuel devis. Ce traitement repose sur les mesures précontractuelles prises à votre demande (article 6.1.b
          du RGPD). Pour exercer vos droits d&apos;accès, de rectification, d&apos;effacement ou d&apos;opposition, écrivez à{" "}
          <a
            href="mailto:contact.fleshagency@gmail.com"
            className="underline underline-offset-2 hover:text-foreground-950 transition-colors duration-300 cursor-pointer"
          >
            contact.fleshagency@gmail.com
          </a>
          .
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-foreground-500">
          Ce formulaire ne sert pas à vous inscrire à une newsletter : votre demande ne sera pas réutilisée à des fins de
          prospection commerciale.
        </p>
        <p className="mt-2 text-[11px] leading-relaxed text-foreground-500">
          Détail des finalités, destinataires et durées de conservation :{" "}
          <Link
            to="/confidentialite"
            className="underline underline-offset-2 text-foreground-950 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
          >
            Politique de confidentialité
          </Link>
          .
        </p>
      </div>

      {status === "success" && (
        <div className="mt-5 flex items-start gap-3 px-4 py-3 rounded-md bg-primary-500/10 border border-primary-500/25 text-sm text-foreground-950">
          <i className="ri-checkbox-circle-line mt-0.5 gold-accent w-5 h-5 flex items-center justify-center" />
          <span>Message reçu — nous revenons vers vous dès que possible.</span>
        </div>
      )}
      {status === "error" && (
        <div className="mt-5 flex items-start gap-3 px-4 py-3 rounded-md bg-background-50 border border-foreground-950/15 text-sm text-foreground-950">
          <i className="ri-error-warning-line mt-0.5 w-5 h-5 flex items-center justify-center text-primary-400" />
          <span>{errorMsg || "Impossible d'envoyer le message. Réessayez."}</span>
        </div>
      )}
    </form>
  );
}