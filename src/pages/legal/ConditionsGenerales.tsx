import { Link } from "react-router-dom";
import LegalLayout from "@/pages/legal/components/LegalLayout";
import { cgvSectionsPartOne } from "@/pages/legal/content/cgv/partOne";
import { cgvSectionsPartTwo } from "@/pages/legal/content/cgv/partTwo";
import type { CgvBlock, CgvSection } from "@/pages/legal/content/cgv/types";

const linkClass =
  "text-foreground-950 underline underline-offset-2 hover:text-primary-600 transition-colors duration-300 cursor-pointer";

const sections: CgvSection[] = [...cgvSectionsPartOne, ...cgvSectionsPartTwo];

function Block({ block }: { block: CgvBlock }) {
  if (block.type === "sub") {
    return (
      <h3 className="font-heading text-[15px] md:text-base font-semibold text-foreground-950 mt-8 mb-3 tracking-tight">
        {block.text}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="space-y-2.5 my-4">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed text-foreground-700 font-light">
            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-[14.5px] md:text-[15px] leading-relaxed text-foreground-700 font-light mb-4">
      {block.text}
    </p>
  );
}

export default function ConditionsGenerales() {
  return (
    <LegalLayout>
      <article className="mx-auto w-full max-w-[880px] px-4 md:px-8 py-16 md:py-24">
        <span className="inline-flex items-center gap-2 mb-6 text-[11px] tracking-[0.3em] uppercase text-foreground-500">
          <span className="w-8 h-px gold-line" />
          Informations légales
        </span>

        <h1 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-5xl text-foreground-950 mb-4">
          Conditions générales de vente
        </h1>

        <p className="text-[13px] text-foreground-500 font-light mb-10">
          Dernière mise à jour : novembre 2026 · Prestations réservées aux clients professionnels
        </p>

        <div className="mb-10 border-l-2 border-primary-500 bg-background-100 px-5 py-4">
          <p className="text-[14px] leading-relaxed text-foreground-700 font-light">
            Les présentes conditions régissent les prestations de création de sites internet et de maintenance fournies par FLESH à des clients
            professionnels agissant dans le cadre de leur activité. La maintenance est une prestation facultative, distincte de la création du site,
            proposée dans l'offre « Site hébergé + suivi » ou dans une offre distincte.
          </p>
          <p className="text-[14px] leading-relaxed text-foreground-700 font-light mt-3">
            Deux modes de commande sont proposés : la commande en ligne d'une offre standard présentée dans la section Tarifs du site (« Site livré »
            ou « Site hébergé + suivi »), réglée intégralement par carte bancaire via Stripe ; ou la commande sur devis pour les projets sur mesure,
            réglée en deux fois (40 % à la commande, 60 % à la livraison) ou intégralement à la commande.
          </p>
          <p className="text-[14px] leading-relaxed text-foreground-700 font-light mt-3">
            Le délai maximal de livraison est de quatorze jours calendaires, dans les deux modalités, à compter du paiement effectif et de la réception
            de l'ensemble des éléments indispensables fournis par le client.
          </p>
          <p className="text-[14px] leading-relaxed text-foreground-700 font-light mt-3">
            L'offre commandée ou le devis précise également la formule d'hébergement retenue : hébergement géré par FLESH via Readdy, avec un prix récurrent indiqué au devis,
            ou remise du site au client pour qu'il choisisse lui-même son hébergement.
          </p>
        </div>

        <div className="mb-14 border border-foreground-950/10 bg-background-50 px-5 py-6 md:px-7">
          <div className="text-[11px] tracking-[0.25em] uppercase text-foreground-500 mb-5">Sommaire</div>
          <nav aria-label="Sommaire des conditions générales de vente">
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="group flex items-baseline gap-2.5 text-[13.5px] text-foreground-600 hover:text-foreground-950 transition-colors duration-300 cursor-pointer"
                  >
                    <span className="tabular-nums text-[11px] text-foreground-400 group-hover:text-primary-600 transition-colors duration-300 w-5 shrink-0">
                      {String(section.number).padStart(2, "0")}
                    </span>
                    <span className="leading-snug">{section.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="space-y-14">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-heading tabular-nums text-[11px] tracking-[0.2em] text-foreground-400">
                  {String(section.number).padStart(2, "0")}
                </span>
                <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950">
                  {section.title}
                </h2>
              </div>
              <div>
                {section.blocks.map((block, index) => (
                  <Block key={`${section.id}-${index}`} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-foreground-950/10 pt-8">
          <div className="text-[11px] tracking-[0.25em] uppercase text-foreground-500 mb-4">Documents d'information</div>
          <p className="text-[14.5px] leading-relaxed text-foreground-700 font-light">
            Pour l'information du public, le site met également à disposition les{" "}
            <Link to="/mentions-legales" className={linkClass}>
              mentions légales
            </Link>
            , la{" "}
            <Link to="/confidentialite" className={linkClass}>
              politique de confidentialité
            </Link>{" "}
            et la page relative aux{" "}
            <Link to="/cookies" className={linkClass}>
              cookies et traceurs
            </Link>
            . Ces documents sont distincts des présentes conditions et ne les modifient pas.
          </p>
        </div>
      </article>
    </LegalLayout>
  );
}