import { Link } from "react-router-dom";
import LegalLayout from "@/pages/legal/components/LegalLayout";
import { useConsent } from "@/components/feature/ConsentProvider";

const linkClass =
  "text-foreground-950 underline underline-offset-2 hover:text-primary-600 transition-colors duration-300 cursor-pointer";

const th = "text-[10px] tracking-[0.18em] uppercase text-foreground-500 font-medium pb-3 border-b border-foreground-950/15";
const td = "text-[13px] leading-relaxed text-foreground-700 font-light py-3.5 border-b border-foreground-950/8 align-top";

export default function Cookies() {
  const { openPreferences } = useConsent();

  return (
    <LegalLayout>
      <article className="mx-auto w-full max-w-[860px] px-4 md:px-8 py-16 md:py-24">
        <span className="inline-flex items-center gap-2 mb-6 text-[11px] tracking-[0.3em] uppercase text-foreground-500">
          <span className="w-8 h-px gold-line" />
          Informations légales
        </span>

        <h1 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-5xl text-foreground-950 mb-4">
          Cookies et traceurs
        </h1>

        <p className="text-[13px] text-foreground-500 font-light mb-10">Dernière mise à jour : novembre 2026</p>

        <p className="text-[15px] leading-relaxed text-foreground-700 font-light">
          Cette page décrit les traceurs et les requêtes vers des services externes du site FLESH, tels qu&apos;ils
          résultent de son code et des réglages accessibles. Elle ne recopie aucune liste type et ne mentionne aucun
          élément qui n&apos;aurait pas été constaté.
        </p>

        <div className="mt-8">
          <button
            type="button"
            onClick={openPreferences}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-foreground-950/20 text-foreground-950 text-sm font-medium whitespace-nowrap hover:border-foreground-950/45 hover:bg-background-50 transition-all duration-300 cursor-pointer"
          >
            <i className="ri-equalizer-line w-4 h-4 flex items-center justify-center" />
            Gérer mes cookies
          </button>
        </div>

        <section className="mt-14 mb-12">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            1. Trois notions différentes
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground-700 font-light">
            <p>
              <span className="text-foreground-950">Un cookie</span> est un fichier déposé par un site dans votre navigateur, qui peut ensuite être relu.
            </p>
            <p>
              <span className="text-foreground-950">Un stockage local</span> (localStorage) fonctionne de manière proche : une valeur écrite par le site et conservée dans votre navigateur. Les règles applicables aux cookies s&apos;appliquent également à ces traceurs.
            </p>
            <p>
              <span className="text-foreground-950">Une requête HTTP</span> vers un service tiers n&apos;est ni un cookie ni un stockage : c&apos;est un appel réseau. Il transmet nécessairement votre adresse IP au service appelé, ce qui constitue un traitement de données, mais il n&apos;implique pas de dépôt de traceur par le site lui-même.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            2. Ce que le site dépose réellement
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full min-w-[680px] text-left border-collapse">
              <thead>
                <tr>
                  <th className={th}>Élément</th>
                  <th className={th}>Fournisseur</th>
                  <th className={th}>Nature</th>
                  <th className={th}>Finalité</th>
                  <th className={th}>Durée</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>
                    <span className="text-foreground-950">flesh_consent</span>
                  </td>
                  <td className={td}>FLESH (le site)</td>
                  <td className={td}>Stockage local — pas un cookie</td>
                  <td className={td}>
                    Mémoriser le fait que vous avez pris acte de l&apos;information sur les cookies et conserver la trace
                    de votre choix
                  </td>
                  <td className={td}>6 mois à compter de la date du choix</td>
                </tr>
                <tr>
                  <td className={td} colSpan={5}>
                    <span className="text-foreground-950">Aucun autre traceur n&apos;est déposé par le site.</span> Aucun
                    cookie publicitaire, aucun cookie de réseau social et aucun cookie de mesure d&apos;audience
                    n&apos;est créé. Aucun traceur soumis à votre consentement n&apos;est donc utilisé à ce jour.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-foreground-600 font-light">
            Ce stockage est strictement nécessaire : sans lui, votre choix ne pourrait pas être respecté d&apos;une page
            à l&apos;autre. Il est conservé six mois, puis le choix est de nouveau demandé si nécessaire.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            3. Requêtes vers des services tiers
          </h2>
          <p className="text-[15px] leading-relaxed text-foreground-700 font-light mb-5">
            Le site charge des ressources auprès de services externes. Ces requêtes ne sont pas des traceurs déposés par FLESH, mais elles transmettent votre adresse IP au service appelé.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full min-w-[680px] text-left border-collapse">
              <thead>
                <tr>
                  <th className={th}>Service</th>
                  <th className={th}>Domaine appelé</th>
                  <th className={th}>Ressource</th>
                  <th className={th}>Quand</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>Google Fonts</td>
                  <td className={td}>fonts.googleapis.com — fonts.gstatic.com</td>
                  <td className={td}>Feuille de style et fichiers de polices (Space Grotesk, Inter, Pacifico)</td>
                  <td className={td}>À chaque affichage d&apos;une page</td>
                </tr>
                <tr>
                  <td className={td}>Cloudflare (cdnjs)</td>
                  <td className={td}>cdnjs.cloudflare.com</td>
                  <td className={td}>Feuilles de style des bibliothèques d&apos;icônes (Font Awesome, Remix Icon)</td>
                  <td className={td}>À chaque affichage d&apos;une page</td>
                </tr>
                <tr>
                  <td className={td}>Readdy</td>
                  <td className={td}>static.readdy.ai — public.readdy.ai</td>
                  <td className={td}>Images du site (logo, visuels)</td>
                  <td className={td}>À chaque affichage d&apos;une page</td>
                </tr>
                <tr>
                  <td className={td}>Readdy</td>
                  <td className={td}>readdy.ai/api/form</td>
                  <td className={td}>Envoi du formulaire de contact</td>
                  <td className={td}>Uniquement lorsque vous validez le formulaire</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-foreground-600 font-light">
            Un prestataire peut, de son côté, déposer un cookie technique lors de ces appels, par exemple un cookie de
            protection contre les robots. Ce comportement n&apos;apparaît pas dans le code du site et peut être constaté,
            le cas échéant, dans les outils de développement de votre navigateur.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            4. Paiement en ligne (Stripe)
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-foreground-700 font-light">
            <p>
              Le paiement par carte est assuré par Stripe. L&apos;intégration retenue est une page de paiement
              <span className="text-foreground-950"> hébergée par Stripe</span>, vers laquelle le site redirige : aucun
              formulaire de carte bancaire n&apos;est intégré aux pages de FLESH. Les données de carte sont donc saisies
              sur le domaine de Stripe ; FLESH n&apos;y a pas accès et n&apos;en conserve aucune.
            </p>
            <p>
              <span className="text-foreground-950">Ce qui est constaté dans le code du site :</span> aucune bibliothèque
              de paiement Stripe, aucun script de formulaire de carte et aucun élément de paiement embarqué n&apos;y sont
              présents. La redirection vers la page hébergée n&apos;est pas encore active dans le code à la date de mise à
              jour de cette page.
            </p>
            <p>
              <span className="text-foreground-950">Traceurs liés au paiement :</span> sur les pages de FLESH, aucun
              traceur Stripe n&apos;est déposé, puisque aucun script Stripe n&apos;y est chargé. En revanche, la page de
              paiement ouverte après redirection est servie par Stripe : elle peut déposer ou lire ses propres cookies et
              stockages sur son domaine, pour son fonctionnement, la lutte contre la fraude et la sécurité du paiement.
              Ces éléments relèvent de la politique de Stripe et ne sont pas déposés par le site FLESH.
            </p>
            <p>
              Les noms exacts des cookies utilisés par cette page, leur durée et le moment de leur dépôt ne sont pas
              décrits ici : ils n&apos;ont pas été observés depuis le projet et ne peuvent être constatés qu&apos;en
              ouvrant une page de paiement réelle. Ce relevé sera effectué lors du test de paiement, avant publication, et
              la présente section sera alors complétée si nécessaire.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            5. Ce que le site ne charge pas
          </h2>
          <div className="space-y-3 text-[15px] leading-relaxed text-foreground-700 font-light">
            <p>Aucun outil de mesure d&apos;audience (ni Google Analytics, ni équivalent) n&apos;est présent dans le code.</p>
            <p>Aucun pixel publicitaire ni script de réseau social n&apos;est présent.</p>
            <p>Aucun autre script tiers que ceux mentionnés à la section 3 n&apos;est chargé par le site.</p>
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-foreground-600 font-light">
            La plateforme qui publie le site peut, au niveau de son infrastructure, mettre en œuvre ses propres
            dispositifs techniques, indépendamment du code du site. Ces dispositifs échappent à l&apos;inspection du code
            et ne peuvent pas être exclus par la bannière ; les prestataires concernés sont décrits dans la{" "}
            <Link to="/confidentialite" className={linkClass}>
              politique de confidentialité
            </Link>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            6. Vos choix et comment les modifier
          </h2>
          <div className="space-y-3 text-[15px] leading-relaxed text-foreground-700 font-light">
            <p>
              Aucun traceur soumis à votre consentement n&apos;est utilisé sur le site aujourd&apos;hui. Il n&apos;existe
              donc, en l&apos;état, aucune finalité optionnelle — mesure d&apos;audience, publicité ou réseau social — à
              accepter ou à refuser.
            </p>
            <p>
              La bannière affichée lors de votre première visite vous en informe et vous renvoie vers cette page. Elle ne
              propose aucun choix facultatif, afin de ne pas laisser croire qu&apos;il existerait des cookies optionnels à
              accepter.
            </p>
            <p>
              Seul le stockage strictement nécessaire décrit à la section 2 est utilisé. Il conserve la trace de votre
              choix pendant <span className="text-foreground-950">six mois</span> à compter de son enregistrement. À
              l&apos;expiration de cette durée, votre choix est de nouveau demandé lors de votre prochaine visite.
            </p>
            <p>
              Vous pouvez réinitialiser ce choix à tout moment avec le lien <span className="text-foreground-950">Gérer mes cookies</span> présent dans le pied de page de chaque page, ou en supprimant les données du site dans les réglages de votre navigateur. La bannière réapparaîtra alors à votre prochaine visite.
            </p>
            <p>
              Si un traceur soumis à consentement était ajouté, la bannière et cette page seraient mises à jour avant son
              activation, avec des choix permettant de l&apos;accepter ou de le refuser aussi simplement.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            7. Preuve du choix
          </h2>
          <p className="text-[15px] leading-relaxed text-foreground-700 font-light">
            Chaque enregistrement contient la date et l&apos;heure ainsi que la version du texte affiché. Cette trace est
            conservée dans votre navigateur pour une durée de six mois et n&apos;est pas centralisée par l&apos;éditeur.
            Elle disparaît si vous supprimez les données du site ou au terme de ces six mois.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            8. Limites à connaître
          </h2>
          <div className="space-y-3 text-[15px] leading-relaxed text-foreground-700 font-light">
            <p>
              La bannière mise en place est un dispositif développé pour ce site. Elle n&apos;est pas certifiée par un organisme tiers et ne constitue pas, à elle seule, une preuve de conformité.
            </p>
            <p>
              Elle ne peut agir que sur ce que le code du site déclenche. Un traceur ajouté au niveau de l&apos;infrastructure de publication, ou déposé par un prestataire lors d&apos;un appel réseau, échappe à ce dispositif.
            </p>
            <p>
              Aucun outil de mesure d&apos;audience ou de publicité n&apos;est activé sur le site. Si l&apos;un d&apos;eux était ajouté, il ne serait chargé qu&apos;après votre consentement, et la présente page serait mise à jour.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
            9. Contact
          </h2>
          <p className="text-[15px] leading-relaxed text-foreground-700 font-light">
            Pour toute question sur les traceurs ou pour exercer vos droits :{" "}
            <a href="mailto:contact.fleshagency@gmail.com" className={linkClass}>
              contact.fleshagency@gmail.com
            </a>
            . Voir aussi la{" "}
            <Link to="/confidentialite" className={linkClass}>
              politique de confidentialité
            </Link>{" "}
            et les{" "}
            <Link to="/mentions-legales" className={linkClass}>
              mentions légales
            </Link>
            .
          </p>
        </section>
      </article>
    </LegalLayout>
  );
}