import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import LegalLayout from "@/pages/legal/components/LegalLayout";

const linkClass =
  "text-foreground-950 underline underline-offset-2 hover:text-primary-600 transition-colors duration-300 cursor-pointer";

const a = (href: string, label: string) => (
  <a href={href} className={linkClass}>
    {label}
  </a>
);

function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tightest text-foreground-950 mb-5">
      {children}
    </h2>
  );
}

function P({ children }: { children: ReactNode }) {
  return <p className="text-[15px] leading-relaxed text-foreground-700 font-light">{children}</p>;
}

function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-heading text-[16px] md:text-[17px] font-semibold text-foreground-950 mb-2 mt-7">
      {children}
    </h3>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-1 sm:gap-4 py-3 border-t border-foreground-950/10 first:border-t-0 first:pt-0">
      <div className="text-[11px] tracking-[0.18em] uppercase text-foreground-500 pt-0.5">{label}</div>
      <div className="text-[15px] leading-relaxed text-foreground-700 font-light">{children}</div>
    </div>
  );
}

export default function Confidentialite() {
  return (
    <LegalLayout>
      <article className="mx-auto w-full max-w-[820px] px-4 md:px-8 py-16 md:py-24">
        <span className="inline-flex items-center gap-2 mb-6 text-[11px] tracking-[0.3em] uppercase text-foreground-500">
          <span className="w-8 h-px gold-line" />
          Informations légales
        </span>

        <h1 className="font-heading font-bold tracking-tightest leading-[1.05] text-4xl md:text-5xl text-foreground-950 mb-4">
          Politique de confidentialité
        </h1>

        <p className="text-[13px] text-foreground-500 font-light mb-10">Dernière mise à jour : novembre 2026</p>

        <P>
          Cette politique décrit la manière dont FLESH traite les données personnelles dans le cadre de son activité de
          création de sites internet, de développement web, de design digital et de maintenance. Elle est rédigée
          conformément au règlement (UE) 2016/679 (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée (Informatique et
          Libertés). Les prestations de FLESH sont réservées aux clients professionnels : cette politique couvre les
          traitements mis en œuvre dans ce cadre, ainsi que ceux liés à la consultation du site.
        </P>

        {/* 1 */}
        <section className="mb-12 mt-14">
          <H2>1. Responsable du traitement et coordonnées</H2>
          <div className="space-y-2">
            <P>
              Le responsable du traitement est <span className="text-foreground-950">Bryan LEFEVRE</span>, entrepreneur
              individuel exerçant sous le nom commercial <span className="text-foreground-950">FLESH</span>.
            </P>
            <P>Adresse : 7 bis avenue des Espaliers, 34670 Baillargues, France.</P>
            <P>
              E-mail : {a("mailto:contact.fleshagency@gmail.com", "contact.fleshagency@gmail.com")} — Téléphone :{" "}
              {a("tel:+33784285671", "07 84 28 56 71")}
            </P>
            <P>
              Les demandes relatives à la protection des données sont adressées aux coordonnées indiquées ci-dessus.
            </P>
            <P>
              <span className="text-foreground-950">Aucun délégué à la protection des données (DPO) n'a été
              désigné.</span> Les demandes sont traitées par l'éditeur du site, aux coordonnées ci-dessus. Aucun titre
              de DPO n'est attribué à une personne de FLESH, y compris au responsable du traitement.
            </P>
          </div>
        </section>

        {/* 2 */}
        <section className="mb-12">
          <H2>2. Catégories de données collectées</H2>
          <div className="space-y-4">
            <P>
              <span className="text-foreground-950">Identification et contact :</span> nom, adresse e-mail, numéro de
              téléphone, nom de l'entreprise, lorsque vous nous les communiquez.
            </P>
            <P>
              <span className="text-foreground-950">Contenu de la demande :</span> message, budget envisagé, nature et
              description du projet.
            </P>
            <P>
              <span className="text-foreground-950">Données relatives au projet :</span> échanges, documents et contenus
              que vous nous transmettez (textes, images, logos, accès techniques nécessaires à la prestation).
            </P>
            <P>
              <span className="text-foreground-950">Facturation :</span> coordonnées de facturation, raison sociale,
              numéro d'identification, montant et date des prestations.
            </P>
            <P>
              <span className="text-foreground-950">Paiement en ligne :</span> les règlements en ligne sont traités par
              Stripe, prestataire de paiement du site. L'intégration retenue repose sur une page de paiement hébergée par
              Stripe, vers laquelle le site redirige : aucun formulaire de carte bancaire n'est intégré aux pages de
              FLESH. Lors d'une commande en ligne, la page de paiement Stripe recueille, pour le compte de FLESH, les
              données nécessaires à la commande et à la facturation : nom, adresse e-mail, nom de l'entreprise, adresse
              de facturation, numéro de téléphone et numéro SIRET, l'acceptation des Conditions générales de vente, ainsi
              que les données de la transaction (montant, date, statut et référence du paiement). Pour l'offre « Site
              hébergé + suivi », la carte bancaire est enregistrée par Stripe afin de prélever le forfait mensuel ; FLESH
              n'a jamais accès aux numéros de carte. Les données de carte bancaire sont saisies directement sur
              la page sécurisée de Stripe : elles ne sont ni reçues ni conservées par FLESH, qui n'y a pas accès.
            </P>
            <P>
              <span className="text-foreground-950">Navigation :</span> les serveurs qui délivrent les pages, les polices
              et les icônes du site reçoivent automatiquement les informations techniques nécessaires à l'affichage,
              dont votre adresse IP et le type de navigateur. Le site ne dépose aucun cookie de mesure d'audience, de
              publicité ou de réseau social. Un seul stockage local conserve votre choix en matière de cookies, pendant
              six mois ; le détail figure sur la page{" "}
              <Link to="/cookies" className={linkClass}>
                Cookies et traceurs
              </Link>
              . Lors d'un paiement, la page hébergée par Stripe peut déposer ses propres traceurs sur son domaine, pour
              le fonctionnement et la sécurité du paiement.
            </P>
            <P>
              Nous ne collectons pas de données dites sensibles (santé, opinions, origine, etc.) et vous demandons de ne
              pas nous en communiquer.
            </P>
          </div>
        </section>

        {/* 3 */}
        <section className="mb-12">
          <H2>3. Finalités et bases légales</H2>
          <P>
            Chaque traitement repose sur une base légale précise au sens de l'article 6 du RGPD. Les traitements sont
            distingués ci-dessous.
          </P>

          <H3>3.1 Demande de devis et premier contact</H3>
          <div className="mt-1">
            <Row label="Finalité">
              Répondre à votre demande, comprendre votre besoin et établir une proposition commerciale.
            </Row>
            <Row label="Base légale">Mesures précontractuelles prises à votre demande (art. 6.1.b).</Row>
          </div>

          <H3>3.2 Exécution d'une prestation</H3>
          <div className="mt-1">
            <Row label="Finalité">
              Réaliser, suivre et livrer la prestation commandée (création, développement, design, maintenance).
            </Row>
            <Row label="Base légale">Exécution du contrat (art. 6.1.b).</Row>
          </div>

          <H3>3.3 Facturation et comptabilité</H3>
          <div className="mt-1">
            <Row label="Finalité">
              Établir les factures, tenir la comptabilité et répondre aux obligations fiscales et sociales.
            </Row>
            <Row label="Base légale">Obligation légale (art. 6.1.c).</Row>
          </div>

          <H3>3.4 Paiement en ligne</H3>
          <div className="mt-1">
            <Row label="Finalité">
              Traiter le règlement d'une prestation par carte bancaire, au moyen du prestataire de paiement Stripe, sur
              sa page de paiement hébergée.
            </Row>
            <Row label="Base légale">Exécution du contrat (art. 6.1.b).</Row>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground-700 font-light">
            Ce traitement s'applique aux règlements effectués en ligne. Le site redirige vers une page de paiement
            hébergée par Stripe : la saisie des données de carte bancaire a lieu sur cette page, dans l'environnement de
            Stripe. FLESH n'a pas accès à ces données et n'en conserve aucune ; il conserve uniquement les informations de
            commande et la trace des transactions nécessaires au suivi de la prestation, à la facturation et à la
            gestion du forfait mensuel.
          </p>

          <H3>3.5 Prospection auprès de professionnels (B2B)</H3>
          <div className="mt-1">
            <Row label="Finalité">
              Présenter les services de FLESH à des entreprises, à partir de coordonnées professionnelles publiques,
              lorsque cette pratique est mise en œuvre.
            </Row>
            <Row label="Base légale">
              Intérêt légitime à faire connaître l'activité (art. 6.1.f). Ce traitement ne viserait que des adresses
              professionnelles et non des particuliers. Chaque message identifierait clairement l'émetteur et
              permettrait de s'opposer à toute nouvelle sollicitation, sans condition ni justification. Une opposition
              serait enregistrée et respectée pour l'avenir.
            </Row>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground-700 font-light">
            Aucune campagne de prospection n'est menée à ce jour. La présente section décrit le cadre applicable si
            FLESH décide d'en engager une.
          </p>

          <H3>3.6 Formulaire de contact du site</H3>
          <div className="mt-1">
            <Row label="Finalité">
              Recevoir votre message, répondre à votre demande, échanger sur votre projet et préparer un éventuel devis.
            </Row>
            <Row label="Base légale">Mesures précontractuelles prises à votre demande (art. 6.1.b).</Row>
            <Row label="Lutte contre les envois automatisés">
              Intérêt légitime à protéger le formulaire contre les soumissions abusives (art. 6.1.f). Le dispositif
              repose sur un champ invisible qui ne doit pas être rempli et sur un contrôle du délai de saisie : aucune
              donnée supplémentaire n'est collectée à cette fin et aucune décision automatisée produisant des effets
              juridiques n'est prise à votre égard, un envoi jugé suspect pouvant être écarté par le filtre du service
              de formulaire.
            </Row>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-foreground-700 font-light">
            Le formulaire ne comporte aucune case d&apos;acceptation de la présente politique : la demande de devis
            reposant sur les mesures précontractuelles, une telle case ne serait pas requise. Il ne sert pas non plus à
            vous inscrire à une newsletter, et une demande de devis n&apos;est jamais réutilisée à des fins de
            prospection commerciale. Si une telle inscription était proposée un jour, elle ferait l&apos;objet d&apos;une
            case distincte, facultative, non précochée, et reposerait sur votre consentement (art. 6.1.a).
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground-700 font-light">
            Les réponses ne sont pas affichées publiquement sur le site. Les données saisies sont transmises par une
            requête chiffrée (HTTPS) au service de formulaire utilisé par le site. Les demandes reçues sont conservées
            dans la rubrique « Forms » de Readdy, qui centralise les soumissions du formulaire, et consultables par
            FLESH depuis le compte Readdy utilisé pour le site. Aucune notification automatique des nouvelles demandes
            vers la messagerie de FLESH n'est configurée à la date de mise à jour de cette politique : la consultation
            s'effectue dans Readdy Forms. La suppression de ces soumissions n'est pas automatisée : elle est réalisée
            manuellement par FLESH dans les conditions prévues à la section 7. Le détail des prestataires figure à la
            section 5.
          </p>

          <H3>3.7 Navigation et mesure d'audience</H3>
          <div className="mt-1">
            <Row label="Finalité">
              Assurer le fonctionnement du site et, le cas échéant, mesurer sa fréquentation de manière agrégée.
            </Row>
            <Row label="Base légale">
              Intérêt légitime à assurer la disponibilité et l'amélioration du site (art. 6.1.f) pour les éléments
              strictement nécessaires. Tout traceur non essentiel nécessiterait votre consentement (art. 6.1.a).
            </Row>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground-700 font-light">
            Aucun outil de mesure d'audience n'est chargé par le site à ce jour. Si un tel outil était activé, il ne le
            serait qu'après votre accord, recueilli au moyen de la bannière de consentement, et la page{" "}
            <Link to="/cookies" className={linkClass}>
              Cookies et traceurs
            </Link>{" "}
            serait mise à jour en conséquence.
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-foreground-700 font-light">
            Le site ne comporte ni décision entièrement automatisée produisant des effets juridiques à votre égard, ni
            profilage publicitaire.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-12">
          <H2>4. Caractère obligatoire ou facultatif des champs</H2>
          <div className="space-y-3">
            <P>
              Dans le formulaire de contact, seuls trois champs sont obligatoires, et signalés comme tels :{" "}
              <span className="text-foreground-950">Nom</span>,{" "}
              <span className="text-foreground-950">E-mail</span> et{" "}
              <span className="text-foreground-950">Message</span>. Sans eux, nous ne sommes pas en mesure de traiter
              votre demande.
            </P>
            <P>
              Les champs <span className="text-foreground-950">Entreprise</span>,{" "}
              <span className="text-foreground-950">Téléphone</span> et{" "}
              <span className="text-foreground-950">Budget</span> sont facultatifs et portent la mention «
              (facultatif) ». Ils nous aident à orienter notre réponse mais ne conditionnent jamais l&apos;envoi de
              votre demande : le formulaire fonctionne sans eux.
            </P>
            <P>
              Vous pouvez également nous communiquer d&apos;autres informations, ou nous écrire directement par e-mail ou
              par téléphone, sans passer par le formulaire.
            </P>
          </div>
        </section>

        {/* 5 */}
        <section className="mb-12">
          <H2>5. Destinataires et prestataires</H2>
          <P>
            Vos données sont traitées par l'éditeur du site. Elles ne sont ni vendues, ni louées, ni cédées à des fins
            commerciales. Les prestataires suivants interviennent pour les seuls besoins décrits :
          </P>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-foreground-700 font-light">
            <li>
              <span className="text-foreground-950">Readdy</span> — plateforme utilisée pour concevoir et publier le
              site, diffuser les images affichées et recevoir les envois du formulaire de contact. Les soumissions sont
              accessibles depuis le compte Readdy utilisé par FLESH ; aucun autre accès n'est organisé par le site.
            </li>
            <li>
              <span className="text-foreground-950">Google</span> — messagerie Gmail associée à l&apos;adresse
              contact.fleshagency@gmail.com, utilisée par FLESH pour lire et répondre aux messages reçus et pour les
              échanges relatifs à un projet ; service Google Fonts pour l&apos;affichage des polices du site.
              Aucune notification automatique des soumissions du formulaire vers cette messagerie n'est configurée à la
              date de mise à jour de cette politique : les demandes sont consultées dans la rubrique « Forms » de
              Readdy.
            </li>
            <li>
              <span className="text-foreground-950">Cloudflare</span> — réseau de diffusion de contenu (cdnjs) utilisé
              pour charger les bibliothèques d&apos;icônes du site.
            </li>
            <li>
              <span className="text-foreground-950">Stripe</span> — prestataire de paiement en ligne du site pour
              traiter les règlements par carte. Le paiement s'effectue sur une page hébergée par Stripe, vers laquelle le
              site redirige. Stripe reçoit les données nécessaires à la transaction et traite les données de carte
              bancaire dans son propre environnement ; FLESH n'y a pas accès et n'en conserve aucune.
            </li>
            <li>
              <span className="text-foreground-950">Expert-comptable et administrations</span> — lorsque la loi
              l&apos;impose, pour la facturation et les obligations déclaratives.
            </li>
          </ul>
          <P>
            Les prestataires ci-dessus n&apos;interviennent que pour les besoins décrits. Les informations relatives à
            leur rôle exact et aux garanties applicables peuvent être obtenues en écrivant à l&apos;adresse indiquée à la
            section 1.
          </P>
        </section>

        {/* 6 */}
        <section className="mb-12">
          <H2>6. Transferts hors de l'Espace économique européen</H2>
          <div className="space-y-3">
            <P>
              Les prestataires mentionnés à la section 5 peuvent être établis ou opérer depuis un pays situé hors de
              l'Espace économique européen. Lorsqu'un transfert de données a lieu, il doit reposer sur un mécanisme prévu
              par le chapitre V du RGPD : décision d'adéquation de la Commission européenne, clauses contractuelles
              types ou toute autre garantie équivalente.
            </P>
            <P>
              <span className="text-foreground-950">État des vérifications :</span> les pays de traitement et les
              garanties de transfert applicables à Readdy, Google, Cloudflare et Stripe n'ont pas pu être vérifiés à
              partir du projet ni des documents accessibles lors de la rédaction de cette politique. Aucun pays de
              traitement et aucune garantie de transfert ne sont donc affirmés ici. Ces éléments sont en cours de
              vérification et la présente politique sera actualisée lorsqu'ils auront été établis.
            </P>
            <P>
              Vous pouvez obtenir les informations disponibles en écrivant à l'adresse indiquée à la section 1.
            </P>
          </div>
        </section>

        {/* 7 */}
        <section className="mb-12">
          <H2>7. Durées de conservation</H2>
          <P>
            Les durées ci-dessous sont appliquées par finalité. Elles ne sont pas interchangeables, et les données sont
            supprimées ou anonymisées à leur terme.
          </P>
          <div className="mt-4">
            <Row label="Demandes de contact sans contrat">
              Demandes de devis et contacts sans suite, y compris les soumissions du formulaire de contact : 12 mois à
              compter du dernier échange, puis suppression. Une conservation plus longue n'est possible que si elle est
              documentée et nécessaire pour traiter une réclamation ou défendre un droit.
            </Row>
            <Row label="Clients — prospection">
              Données utilisées pour proposer de nouveaux services : 3 ans après la fin de la relation commerciale, sauf
              opposition de votre part.
            </Row>
            <Row label="Clients — exécution">
              Dossier nécessaire à la réalisation et au suivi de la prestation : pendant toute la durée du contrat, puis
              pendant la durée nécessaire à la preuve des obligations contractuelles (5 ans à compter de la fin du
              contrat).
            </Row>
            <Row label="Facturation">
              Factures et pièces comptables : 10 ans à compter de la clôture de l'exercice.
            </Row>
            <Row label="Paiement en ligne">
              Trace du paiement (montant, date, statut, référence) conservée avec la facture ; FLESH ne conserve aucune
              donnée de carte bancaire, celles-ci étant saisies sur la page de paiement hébergée par Stripe, selon les
              durées et obligations qui incombent à ce prestataire.
            </Row>
            <Row label="Formulaire de contact">
              Message reçu : conservé le temps du traitement de la demande, puis 12 mois à compter du dernier échange en
              l&apos;absence de contrat, avant suppression manuelle par FLESH. Les documents nécessaires à un contrat ou
              à la comptabilité sont conservés séparément selon les durées ci-dessus ; le message complet transmis par
              le formulaire n&apos;est pas conservé pour autant. La suppression effectuée dans Readdy Forms ne garantit
              pas l&apos;effacement d&apos;éventuelles copies de sauvegarde conservées par Readdy, dont les modalités
              doivent être vérifiées auprès du prestataire.
            </Row>
            <Row label="Choix de consentement">
              Préférence enregistrée dans votre navigateur (stockage local « flesh_consent ») : 6 mois à compter de la
              date du choix. À l&apos;expiration de cette durée, votre choix est de nouveau demandé lors de votre
              prochaine visite.
            </Row>
            <Row label="Navigation et mesure d'audience">
              Aucune donnée de mesure d&apos;audience n&apos;est conservée par le site à ce jour, aucun outil de ce type
              n&apos;étant chargé.
            </Row>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-foreground-700 font-light">
            La suppression n&apos;est pas automatisée : ni le site, ni Readdy Forms ne suppriment les demandes à
            échéance. FLESH vérifie périodiquement les demandes conservées dans la rubrique « Forms » de Readdy et
            procède lui-même aux suppressions arrivées à échéance, sous réserve de ce qui précède.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-12">
          <H2>8. Vos droits et modalités d'exercice</H2>
          <div className="space-y-3">
            <P>
              Vous disposez à tout moment des droits suivants : accès à vos données, rectification, effacement,
              limitation du traitement, opposition, portabilité des données que vous nous avez fournies, retrait d'un
              consentement lorsque le traitement repose sur celui-ci, et définition de directives relatives au sort de
              vos données après votre décès.
            </P>
            <P>
              Pour exercer ces droits, écrivez à{" "}
              {a("mailto:contact.fleshagency@gmail.com", "contact.fleshagency@gmail.com")} ou à l'adresse postale
              indiquée à la section 1, en précisant votre demande. Nous répondons dans un délai d'un mois à compter de la
              réception. Ce délai peut être prolongé de deux mois si la demande est complexe ou si nous recevons
              plusieurs demandes, auquel cas nous vous en informons.
            </P>
            <P>
              En cas de doute raisonnable sur votre identité, nous pouvons vous demander un justificatif. Les demandes
              sont gratuites, sauf caractère manifestement infondé ou excessif.
            </P>
            <P>
              Vous pouvez vous opposer à tout moment, sans frais, à recevoir des messages de prospection : il suffit
              d'en faire la demande par e-mail ou d'utiliser le lien de désinscription présent dans nos messages
              lorsqu'il existe.
            </P>
          </div>
        </section>

        {/* 9 */}
        <section className="mb-12">
          <H2>9. Réclamation auprès de la CNIL</H2>
          <P>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une
            réclamation à la Commission nationale de l'informatique et des libertés (CNIL), 3 place de Fontenoy, TSA
            80715, 75334 Paris Cedex 07, ou en ligne sur {a("https://www.cnil.fr", "www.cnil.fr")}.
          </P>
        </section>

        {/* 10 */}
        <section className="mb-12">
          <H2>10. Sécurité</H2>
          <div className="space-y-3">
            <P>
              Les échanges entre votre navigateur et le site s'effectuent via une connexion chiffrée (HTTPS). L'accès aux
              données transmises est réservé aux personnes qui en ont besoin pour traiter votre demande.
            </P>
            <P>
              Aucune mesure ne permet d'offrir une sécurité absolue : FLESH ne garantit pas une protection totale contre
              tous les risques.
            </P>
            <P>
              Si vous constatez une faille ou un accès non autorisé, écrivez à{" "}
              {a("mailto:contact.fleshagency@gmail.com", "contact.fleshagency@gmail.com")}. La situation sera examinée
              et, le cas échéant, les personnes concernées et les autorités compétentes seront informées dans les
              conditions prévues par le RGPD.
            </P>
          </div>
        </section>

        {/* 11 */}
        <section className="mb-12">
          <H2>11. Mineurs</H2>
          <P>
            Le site s'adresse à des clients professionnels et à des porteurs de projet majeurs. Il n'est pas destiné aux
            mineurs et nous ne collectons pas sciemment de données concernant des mineurs de moins de 15 ans. Si vous constatez qu'un tel traitement a eu lieu, écrivez-nous : nous procéderons à la suppression des
            données concernées.
          </P>
        </section>

        {/* 12 */}
        <section>
          <H2>12. Mise à jour de cette politique</H2>
          <P>
            Cette politique peut être modifiée, notamment si de nouveaux services ou prestataires sont ajoutés. La date
            de dernière mise à jour figure en haut de la page. En cas de changement significatif, l'information est
            portée sur le site.
          </P>
        </section>
      </article>
    </LegalLayout>
  );
}