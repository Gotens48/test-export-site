/**
 * Liens de paiement Stripe des forfaits.
 *
 * Comment obtenir un lien : tableau de bord Stripe > "Liens de paiement"
 * (Payment Links) > Créer un lien > choisir le produit et le prix > Copier le lien.
 *
 * Il suffit de coller les URL ci-dessous. Tant qu'une URL est vide,
 * le bouton du forfait renvoie vers le formulaire de contact.
 */
export const STRIPE_PAYMENT_LINKS = {
  /** Forfait "Site livré" — paiement unique de 790 € */
  siteOnly: "https://buy.stripe.com/3cI5kwgi11NE00Ch0K38401",
  /** Forfait "Site hébergé + suivi" — 790 € puis 59 €/mois */
  siteCare: "https://buy.stripe.com/aFadR26HrgIy14GdOy38402",
};

export const isStripeLinkReady = (url: string): boolean =>
  typeof url === "string" && /^https:\/\/[a-z0-9.-]*stripe\.com\//i.test(url.trim());