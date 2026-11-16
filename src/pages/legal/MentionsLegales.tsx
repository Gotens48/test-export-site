import { Link } from "react-router-dom";
import LegalLayout from "@/pages/legal/components/LegalLayout";

const linkClass =
  "text-foreground-950 underline underline-offset-2 hover:text-primary-600 transition-colors duration-300 cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50";

const h2Class =
  "font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5";

const bodyClass = "space-y-3 text-[15px] leading-relaxed text-foreground-700 font-light";

const OTHER_DOCS = [
  { label: "Politique de confidentialité", to: "/confidentialite" },
  { label: "Cookies et traceurs", to: "/cookies" },
  { label: "Conditions générales de vente", to: "/conditions-generales-de-vente" },
];

export default function MentionsLegales() {
  return (
    <LegalLayout>
      <article className="mx-auto w-full max-w-[820px] px-4 md:px-8 py-16 md:py-24">
        <span className="inline-flex items-center gap-2 mb-6 text-[11px] tracking-[0.3em] uppercase text-foreground-500">
          <span className="w-8 h-px gold-line" />
          Informations légales
        </span>

        <h1 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-5xl text-foreground-950 mb-6">
          Mentions légales
        </h1>

        <p className="text-[15px] leading-relaxed text-foreground-600 font-light max-w-[640px] mb-10">
          Informations relatives à l'éditeur du site{" "}
          <span className="text-foreground-950">flesh-agency.fr</span>, à son hébergement et aux conditions
          d'utilisation des contenus publiés.
        </p>

        <div className="mb-16 flex flex-wrap gap-x-6 gap-y-2 text-[13px]">
          {OTHER_DOCS.map((d) => (
            <Link key={d.to} to={d.to} className={linkClass}>
              {d.label}
            </Link>
          ))}
        </div>

        <section className="mb-12">
          <h2 className={h2Class}>Éditeur du site</h2>
          <div className={bodyClass}>
            <p>
              Le site <span className="text-foreground-950">flesh-agency.fr</span> est édité par{" "}
              <span className="text-foreground-950">Bryan LEFEVRE</span>, entrepreneur individuel (EI) exerçant
              sous le nom commercial <span className="text-foreground-950">FLESH</span>.
            </p>
            <p>
              Forme juridique : entreprise individuelle, micro-entrepreneur, immatriculée en France.
            </p>
            <p>
              Activité déclarée : activité libérale non réglementée — prestations de services numériques
              (création de sites internet et maintenance).
            </p>
            <p>Adresse de l'établissement : 7 bis avenue des Espaliers, 34670 Baillargues, France.</p>
            <p>
              FLESH est une agence indépendante de création et de refonte de sites internet.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Directeur de la publication</h2>
          <p className="text-[15px] leading-relaxed text-foreground-700 font-light">
            Le directeur de la publication est <span className="text-foreground-950">Bryan LEFEVRE</span>, en
            qualité d'exploitant de l'entreprise individuelle FLESH. Il peut être contacté à l'adresse{" "}
            <a href="mailto:contact.fleshagency@gmail.com" className={linkClass}>
              contact.fleshagency@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Coordonnées</h2>
          <div className={bodyClass}>
            <p>
              E-mail :{" "}
              <a href="mailto:contact.fleshagency@gmail.com" className={linkClass}>
                contact.fleshagency@gmail.com
              </a>
            </p>
            <p>
              Téléphone :{" "}
              <a href="tel:+33784285671" className={linkClass}>
                07 84 28 56 71
              </a>
            </p>
            <p>Adresse postale : 7 bis avenue des Espaliers, 34670 Baillargues, France.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Immatriculation</h2>
          <div className={bodyClass}>
            <p>
              L'entreprise est immatriculée au Registre national des entreprises (RNE) depuis le{" "}
              <span className="text-foreground-950">2 novembre 2026</span>.
            </p>
            <p>SIREN : 132 274 663</p>
            <p>SIRET : 132 274 663 00013</p>
            <p>Code APE : 6201Z</p>
            <p>Activité déclarée : activité libérale non réglementée, prestations de services numériques.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>TVA</h2>
          <div className={bodyClass}>
            <p>
              L'entreprise relève actuellement de la <span className="text-foreground-950">franchise en base
              de TVA</span>. Ses prestations ne sont pas soumises à la TVA et ses factures portent la mention
              « TVA non applicable, art. L. 223 et suivants du CIBS ».
            </p>
            <p>
              Aucun numéro de TVA intracommunautaire n'est délivré dans ce régime : aucun numéro n'est affiché
              sur cette page. Cette situation peut évoluer si le régime fiscal de l'entreprise change ; les
              prix, les documents commerciaux et la présente page seront alors mis à jour en conséquence.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Hébergement</h2>
          <div className={bodyClass}>
            <p>
              Le site <span className="text-foreground-950">flesh-agency.fr</span> est conçu et publié au moyen
              de la plateforme <span className="text-foreground-950">Readdy</span>, accessible à l'adresse{" "}
              <a
                href="https://readdy.ai"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                readdy.ai
              </a>
              .
            </p>
            <p>
              Hébergeur des pages publiées, au sens de l'article 6 de la loi n° 2004-575 du 21 juin 2004 (LCEN),
              tel qu'indiqué dans les conditions officielles de Readdy :
            </p>
            <p>
              <span className="text-foreground-950">Innovate Link Inc.</span>
              <br />
              10 Anson Road, #26-08A, International Plaza, Singapore 079903
            </p>
            <p>
              Contact :{" "}
              <a href="mailto:hi@readdy.ai" className={linkClass}>
                hi@readdy.ai
              </a>
            </p>
            <p>
              Les conditions officielles de Readdy consultées ne comportent pas de numéro de téléphone public
              permettant de joindre l'hébergeur. Aucun numéro n'est donc publié dans cette rubrique ;
              l'hébergeur peut être contacté à l'adresse électronique indiquée ci-dessus.
            </p>
            <p>
              Le nom de domaine <span className="text-foreground-950">flesh-agency.fr</span> est enregistré auprès
              d'<span className="text-foreground-950">OVH</span>.
            </p>
          </div>
          <p className="mt-5 text-[14px] leading-relaxed text-foreground-600 font-light">
            Les autres prestataires techniques qui fournissent les polices, les bibliothèques d'icônes et les
            images affichées sur le site ne sont pas l'hébergeur du site au sens de l'article 6 de la loi n°
            2004-575 du 21 juin 2004 (LCEN). Leur rôle est décrit dans la{" "}
            <Link to="/confidentialite" className={linkClass}>
              Politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Propriété intellectuelle</h2>
          <div className={bodyClass}>
            <p>
              Les créations originales de FLESH publiées sur ce site — textes, identité visuelle, mises en page et
              éléments graphiques réalisés par l'agence — sont protégées par le droit de la propriété
              intellectuelle et demeurent la propriété de Bryan LEFEVRE.
            </p>
            <p>
              Les ressources appartenant à des tiers et utilisées sur le site — polices de caractères,
              bibliothèques d'icônes, composants techniques, images ou illustrations sous licence — restent
              soumises aux droits et aux licences de leurs titulaires respectifs.
            </p>
            <p>
              Toute reproduction ou représentation, totale ou partielle, de ces éléments sans autorisation écrite
              préalable est interdite, sous réserve des exceptions prévues par la loi.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Responsabilité</h2>
          <div className={bodyClass}>
            <p>
              L'éditeur s'efforce de tenir à jour les informations diffusées sur ce site, sans pouvoir garantir
              qu'elles soient exhaustives, exactes ou actualisées à tout moment. Les informations présentées ont
              un caractère général et ne constituent pas, à elles seules, un engagement contractuel, à l'exception
              de la description des offres de la section Tarifs, qui fait partie du contrat en cas de commande en
              ligne (article 5.6 des Conditions générales de vente).
            </p>
            <p>
              Les prestations font l'objet soit d'une commande en ligne d'une offre de la section Tarifs, soit
              d'un devis, et sont régies par les Conditions générales de vente. Seuls ces documents engagent les
              parties.
            </p>
            <p>
              La responsabilité de FLESH est appréciée conformément aux dispositions légales applicables. Aucune
              clause de cette page n'a pour objet d'exclure ou de limiter cette responsabilité au-delà de ce que
              la loi autorise, ni de priver un cocontractant des garanties auxquelles il peut prétendre.
            </p>
            <p>
              FLESH ne peut être tenue responsable des conséquences d'une indisponibilité temporaire du site
              imputable à un prestataire technique ou à un cas de force majeure.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Clientèle professionnelle</h2>
          <div className={bodyClass}>
            <p>
              FLESH réserve ses prestations aux clients professionnels, c'est-à-dire aux personnes physiques ou
              morales qui commandent un site pour les besoins de leur activité professionnelle : entreprises,
              indépendants, associations et porteurs de projet agissant dans ce cadre.
            </p>
            <p>
              Le statut du client dépend de l'usage de la prestation et non de sa forme juridique. Une personne
              physique qui commande un site pour son activité professionnelle est cliente professionnelle. Les
              commandes destinées à un usage personnel ne sont pas acceptées.
            </p>
            <p>
              Cette règle s'applique à toute demande, quel que soit son canal d'arrivée, y compris lorsqu'elle est
              adressée à FLESH par l'intermédiaire d'une plateforme de mise en relation entre professionnels. Le
              recours à une plateforme de mise en relation ou à un moyen de paiement en ligne ne modifie pas le
              statut du client.
            </p>
            <p>
              Les prestations sont régies par les{" "}
              <Link to="/conditions-generales-de-vente" className={linkClass}>
                Conditions générales de vente
              </Link>
              , qui réservent elles aussi leur application aux clients professionnels (article 1.2).
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Liens externes</h2>
          <p className="text-[15px] leading-relaxed text-foreground-700 font-light">
            Le site peut contenir des liens vers des sites tiers. L'éditeur n'exerce aucun contrôle sur leur
            contenu et ne saurait en être tenu responsable. La présence d'un lien ne constitue ni une
            recommandation ni une validation des informations qui y figurent. Les conditions d'utilisation et les
            politiques de confidentialité de ces sites s'appliquent dès que vous les consultez.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2Class}>Données personnelles</h2>
          <p className="text-[15px] leading-relaxed text-foreground-700 font-light">
            Les données transmises via le formulaire de contact sont utilisées pour répondre à votre demande,
            échanger avec vous et préparer un éventuel devis. Le détail des finalités, des bases légales, des
            durées de conservation et des moyens d'exercer vos droits figure dans la{" "}
            <Link to="/confidentialite" className={linkClass}>
              Politique de confidentialité
            </Link>
            . Les traceurs éventuellement utilisés sont décrits dans la page{" "}
            <Link to="/cookies" className={linkClass}>
              Cookies et traceurs
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className={h2Class}>Contact</h2>
          <div className={bodyClass}>
            <p>Pour toute question relative au site ou aux présentes mentions légales :</p>
            <p>
              E-mail :{" "}
              <a href="mailto:contact.fleshagency@gmail.com" className={linkClass}>
                contact.fleshagency@gmail.com
              </a>
            </p>
            <p>
              Téléphone :{" "}
              <a href="tel:+33784285671" className={linkClass}>
                07 84 28 56 71
              </a>
            </p>
            <p>Adresse postale : Bryan LEFEVRE (FLESH), 7 bis avenue des Espaliers, 34670 Baillargues, France.</p>
          </div>
        </section>
      </article>
    </LegalLayout>
  );
}