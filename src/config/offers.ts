export type Offer = {
  id: string;
  name: string;
  subtitle: string;
  setupPrice: string;
  monthlyPrice: string;
  monthlyNote: string;
  highlight: boolean;
  features: string[];
  /** Précision affichée sous la liste des prestations. */
  note?: string;
};

/**
 * Les offres affichées dans la section Tarifs.
 * L'identifiant sert de lien vers le formulaire de contact (?offre=...).
 */
export const OFFERS: Offer[] = [
  {
    id: "site-livre",
    name: "Site livré",
    subtitle: "Votre site, prêt à être installé chez vous.",
    setupPrice: "790 €",
    monthlyPrice: "Sans abonnement",
    monthlyNote: "Paiement unique — hébergement à votre charge",
    highlight: false,
    features: [
      "Site vitrine jusqu'à 5 pages",
      "Design adapté à l'identité visuelle du client",
      "Affichage adapté aux mobiles et aux ordinateurs",
      "Bases du référencement technique",
      "Hébergement et nom de domaine à la charge du client",
      "Export du code du site depuis Readdy, à installer sur l'hébergement de votre choix",
      "Plus de 5 pages ou fonctionnalités spécifiques : tarif sur devis",
    ],
  },
  {
    id: "site-suivi",
    name: "Site hébergé + suivi",
    subtitle:
      "FLESH gère l'hébergement et la maintenance de votre site avec un suivi en ligne.",
    setupPrice: "790 €",
    monthlyPrice: "+ 59 €/mois",
    monthlyNote:
      "Forfait prélevé 14 jours après le paiement, jamais avant la mise en ligne — sans engagement",
    highlight: true,
    features: [
      "Création du site incluse",
      "Hébergement du site géré par FLESH sur Readdy",
      "FLESH conserve l'accès au projet et réalise les modifications demandées",
      "Vérification mensuelle des pages et des liens principaux",
      "Jusqu'à 3 demandes simples de modification de texte ou de remplacement d'image par mois, dans la limite d'une heure de travail au total",
      "Support par e-mail, avec une réponse sous trois jours ouvrés",
      "Nom de domaine non inclus ; sa souscription et son renouvellement sont à la charge du client",
    ],
    note: "Les demandes non utilisées ne sont pas reportées au mois suivant. Les nouvelles pages, refontes, nouvelles fonctionnalités et demandes dépassant le temps inclus font l'objet d'un devis complémentaire.",
  },
];