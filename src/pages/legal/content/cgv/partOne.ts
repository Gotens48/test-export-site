import type { CgvSection } from "@/pages/legal/content/cgv/types";

export const cgvSectionsPartOne: CgvSection[] = [
  {
    id: "objet",
    number: 1,
    title: "Objet et champ d'application",
    blocks: [
      {
        type: "sub",
        text: "1.1 Champ d'application",
      },
      {
        type: "p",
        text: "Les présentes conditions générales de vente (ci-après « les CGV ») définissent les conditions dans lesquelles FLESH fournit ses prestations de création de sites internet, de conception et de réalisation de sites web sur mesure et, le cas échéant, ses prestations de maintenance facultative.",
      },
      {
        type: "p",
        text: "Elles s'appliquent à toute prestation commandée à FLESH par un client professionnel, c'est-à-dire par une personne physique ou morale agissant pour les besoins de son activité professionnelle, à l'exclusion de toute autre condition, notamment les conditions d'achat du client, sauf accord écrit contraire. Le statut de client professionnel dépend de l'usage de la prestation : il ne dépend ni de la forme juridique du client, ni du canal par lequel la demande est adressée à FLESH.",
      },
      {
        type: "sub",
        text: "1.2 Clients professionnels et commandes exclues",
      },
      {
        type: "p",
        text: "FLESH réserve ses prestations aux clients professionnels et n'accepte pas les commandes destinées à un usage personnel. Une personne physique qui commande un site pour son activité professionnelle agit en qualité de professionnel et relève des présentes CGV ; une commande portant sur un site destiné à un usage personnel n'est pas acceptée.",
      },
      {
        type: "p",
        text: "Cette règle s'applique à toute demande, quel que soit son canal d'arrivée, y compris lorsque la demande est adressée à FLESH par l'intermédiaire d'une plateforme de mise en relation entre professionnels, telle que Malt. Les présentes CGV ne sont pas destinées à être acceptées par une personne physique agissant à des fins qui n'entrent pas dans le cadre de son activité professionnelle. Le recours à une plateforme de mise en relation ou à un moyen de paiement en ligne ne modifie pas le statut du client.",
      },
      {
        type: "sub",
        text: "1.3 Formation et hiérarchie des documents",
      },
      {
        type: "p",
        text: "Le contrat est formé par les présentes CGV, le devis accepté et, le cas échéant, le contrat particulier ou l'annexe signés. En cas de contradiction, l'ordre de priorité suivant s'applique : le contrat particulier, puis le devis, puis les présentes CGV.",
      },
      {
        type: "p",
        text: "Toute commande implique l'acceptation sans réserve des CGV applicables à la date de la commande, dans les conditions de forme prévues à l'article 5.2. Le client reconnaît en avoir pris connaissance avant la conclusion du contrat.",
      },
      {
        type: "p",
        text: "La version applicable est celle en vigueur à la date de la commande. La date de dernière mise à jour figure en tête du présent document ; les versions antérieures sont conservées par FLESH.",
      },
    ],
  },
  {
    id: "prestataire",
    number: 2,
    title: "Identité du prestataire",
    blocks: [
      {
        type: "p",
        text: "Les prestations sont fournies par Bryan LEFEVRE, entrepreneur individuel (EI) établi en France, exerçant sous le nom commercial FLESH.",
      },
      {
        type: "list",
        items: [
          "Dénomination commerciale : FLESH",
          "Forme juridique : entreprise individuelle (EI) — micro-entrepreneur",
          "Adresse de l'établissement : 7 bis avenue des Espaliers, 34670 Baillargues, France",
          "SIREN : 132 274 663 — SIRET : 132 274 663 00013",
          "Immatriculation au registre national des entreprises : 2 novembre 2026",
          "Code APE : 6201Z",
          "Activité déclarée : activité libérale non réglementée — prestations de services numériques",
          "E-mail : contact.fleshagency@gmail.com — Téléphone : 07 84 28 56 71",
        ],
      },
      {
        type: "sub",
        text: "2.1 Régime de TVA",
      },
      {
        type: "p",
        text: "FLESH relève de la franchise en base de taxe sur la valeur ajoutée. Tant que ce régime s'applique, aucun montant de TVA n'est ajouté aux prix facturés et les factures portent la mention « TVA non applicable, art. L. 223 et suivants du CIBS ». FLESH ne dispose pas, dans ce cadre, de numéro de TVA intracommunautaire.",
      },
      {
        type: "p",
        text: "Cette situation est susceptible d'évoluer si le régime fiscal de l'entreprise change. Les conséquences d'un changement de régime sur les devis en cours sont alors portées à la connaissance du client par écrit, dans les conditions prévues à l'article 6.1.",
      },
      {
        type: "sub",
        text: "2.2 Assurance",
      },
      {
        type: "p",
        text: "Les garanties d'assurance éventuellement souscrites par FLESH, notamment en responsabilité civile professionnelle, sont communiquées au client qui en fait la demande, avec l'indication de la couverture et de l'étendue des garanties.",
      },
    ],
  },
  {
    id: "definitions",
    number: 3,
    title: "Définitions",
    blocks: [
      {
        type: "p",
        text: "Dans les présentes CGV, les termes suivants ont la signification indiquée ci-dessous.",
      },
      {
        type: "list",
        items: [
          "Prestation : ensemble des travaux réalisés par FLESH au titre d'un devis accepté.",
          "Prestation de création : conception et réalisation d'un site internet sur mesure, dans le périmètre décrit au devis.",
          "Maintenance : prestation facultative et distincte, portant sur des interventions correctives, préventives ou évolutives sur un site existant, dans le cadre d'une offre ou d'un contrat séparé.",
          "Livrable : élément produit par FLESH et remis au client (maquette, développement, fichier source, documentation, etc.).",
          "Devis : document décrivant le périmètre, les livrables, le prix, la modalité de paiement, la formule d'hébergement retenue, le délai de recette et le calendrier d'une prestation.",
          "Offre en ligne : offre standard décrite dans la section Tarifs du site FLESH à la date de la commande (« Site livré » ou « Site hébergé + suivi »), commandée et réglée en ligne via Stripe. Pour une commande en ligne, toute référence au « devis » ou au « devis accepté » dans les présentes CGV désigne la description de l'Offre en ligne à la date de la commande, complétée par l'e-mail de confirmation adressé par FLESH.",
          "Formule d'hébergement : l'une des deux formules prévues à l'article 12.1 — hébergement géré par FLESH via Readdy (formule 1) ou remise du site au client pour qu'il choisisse son hébergement (formule 2) —, choisie au devis avant la commande.",
          "Client : personne physique ou morale ayant commandé une prestation à FLESH.",
          "Professionnel : client agissant dans le cadre de son activité professionnelle.",
          "Contenus : textes, images, vidéos, logos, polices, bases de données et tout élément fourni par le client ou publié sur son site.",
          "Élément tiers : composant, licence, service ou ressource fourni par un prestataire autre que FLESH.",
          "Fin de réalisation : achèvement des travaux prévus au devis, avant livraison.",
          "Livraison : mise à disposition du site ou des livrables, par mise en ligne lorsque celle-ci est prévue ou par remise des fichiers et accès prévus contractuellement. La livraison est notifiée par écrit au client.",
          "Mise en ligne : publication du site sur l'hébergement retenu, rendant le site accessible au public.",
          "Remise des accès : communication au client des identifiants, fichiers et éléments prévus contractuellement.",
          "Période de recette : période de sept jours ouvrés à compter de la notification écrite de la livraison, sauf délai différent expressément prévu au devis accepté, pendant laquelle le client vérifie la conformité du livrable au devis accepté et signale par écrit, en une seule fois, les écarts constatés.",
          "Recette : vérification, par le client, de la conformité du site livré aux éléments convenus dans le devis accepté, pendant la période de recette. Elle aboutit à la réception définie ci-après.",
          "Réception : acceptation du livrable final par le client, exprimée par écrit ou résultant de l'absence d'observation écrite à l'expiration de la période de recette. La réception ne vaut pas renonciation aux garanties légales.",
          "Retouche incluse : modification mineure relevant du périmètre initial, dans les limites et les délais prévus à l'article 10.",
          "Défaut de conformité : écart entre le livrable et les engagements contractuels, traité selon l'article 11.2.",
          "Licence (ou droit d'utilisation) : autorisation d'exploitation concédée au client sur les créations originales de FLESH, dans les conditions de l'article 9.3. Les présentes CGV n'emportent aucune cession de droits d'auteur.",
        ],
      },
    ],
  },
  {
    id: "clients-professionnels",
    number: 4,
    title: "Clients professionnels et prestations proposées",
    blocks: [
      {
        type: "p",
        text: "Les présentes CGV régissent exclusivement les relations entre FLESH et ses clients professionnels, c'est-à-dire les personnes physiques ou morales, publiques ou privées, agissant dans le cadre de leur activité professionnelle.",
      },
      {
        type: "sub",
        text: "4.1 Qualité de professionnel",
      },
      {
        type: "p",
        text: "Le client déclare contracter dans le cadre de son activité professionnelle, disposer du pouvoir de représenter l'entité pour laquelle il commande et assumer les obligations qui en découlent. Il lui appartient de vérifier que les livrables correspondent à son usage professionnel et, le cas échéant, de les faire contrôler par ses propres conseils.",
      },
      {
        type: "sub",
        text: "4.2 Conséquences de la qualité de professionnel",
      },
      {
        type: "p",
        text: "Le client professionnel est réputé connaître les caractéristiques techniques des prestations commandées et disposer des compétences nécessaires à l'appréciation de leur adéquation à ses besoins. L'obligation d'information précontractuelle est appréciée dans ce cadre, conformément à l'article 1112-1 du Code civil.",
      },
      {
        type: "p",
        text: "Les clauses relatives aux pénalités de retard, à l'indemnité forfaitaire de recouvrement, à la suspension de service, à la répartition des risques et à la limitation de responsabilité s'appliquent de plein droit entre les parties.",
      },
      {
        type: "sub",
        text: "4.3 Absence de qualité de consommateur",
      },
      {
        type: "p",
        text: "FLESH n'accepte pas les commandes destinées à un usage personnel (article 1.2). Si un contrat était néanmoins formé avec une personne n'agissant pas pour les besoins de son activité professionnelle, les dispositions impératives du Code de la consommation auxquelles il ne peut être dérogé s'appliqueraient de plein droit, sans que cette hypothèse constitue une offre de FLESH à destination des particuliers.",
      },
      {
        type: "sub",
        text: "4.4 Création de sites internet",
      },
      {
        type: "p",
        text: "FLESH conçoit et réalise des sites internet professionnels sur mesure, selon les besoins définis avec chaque client. La prestation de création peut notamment porter sur :",
      },
      {
        type: "list",
        items: [
          "la création d'un site vitrine, d'un site de présentation d'activité ou d'une page d'atterrissage ;",
          "la conception et la réalisation d'un site web selon les besoins définis avec le client, y compris une boutique en ligne lorsque le devis le prévoit ;",
          "la refonte, la restructuration ou l'amélioration d'un site existant ;",
          "le design d'interface, la direction artistique et la déclinaison graphique ;",
          "le développement web sur mesure et l'intégration de maquettes ;",
          "l'intégration de services tiers : paiement, formulaires, réservation, messagerie, cartographie, interfaces de programmation.",
        ],
      },
      {
        type: "p",
        text: "La prestation de création comprend les seuls éléments décrits au devis accepté, ainsi que la mise en ligne et la remise des accès lorsqu'elles y sont prévues.",
      },
      {
        type: "sub",
        text: "4.5 Maintenance facultative",
      },
      {
        type: "p",
        text: "La maintenance est une prestation facultative. Elle peut être souscrite au moment de la commande, avec l'offre « Site hébergé + suivi », ou ultérieurement par une offre distincte. Elle n'est jamais incluse automatiquement dans une prestation de création, ne présente aucun caractère obligatoire et ne conditionne pas la livraison du site. Son régime complet figure à l'article 12.2.",
      },
      {
        type: "sub",
        text: "4.6 Périmètre et exclusions",
      },
      {
        type: "p",
        text: "Le périmètre exact de chaque prestation est celui décrit au devis accepté. Tout élément non mentionné au devis est réputé exclu.",
      },
      {
        type: "p",
        text: "Le devis précise la formule d'hébergement retenue entre les deux formules prévues à l'article 12.1. Lorsque la formule 1 est choisie, l'hébergement géré par FLESH constitue une prestation récurrente distincte de la création, dont le prix, la périodicité, le contenu et les exclusions figurent au devis.",
      },
      {
        type: "p",
        text: "Ne sont notamment pas compris, sauf mention contraire au devis : la rédaction des contenus, la fourniture d'images ou de licences, l'hébergement et le nom de domaine — sous réserve de la formule d'hébergement retenue au devis dans les conditions de l'article 12.1 —, la maintenance, la mise en conformité réglementaire du site du client et la référence à un moteur de recherche.",
      },
      {
        type: "p",
        text: "Ces exclusions ne couvrent pas les erreurs d'intégration, de configuration ou de mise en œuvre imputables à FLESH dans l'exécution du périmètre accepté, qui relèvent des défauts de conformité traités à l'article 11.2.",
      },
      {
        type: "sub",
        text: "4.7 Recours à des prestataires tiers",
      },
      {
        type: "p",
        text: "FLESH peut recourir à des prestataires tiers pour l'exécution de certaines parties de la prestation. Elle demeure responsable de la sélection et du suivi de ces prestataires lorsque cette mission lui est confiée, sans répondre des engagements propres que ces tiers prennent envers leurs propres clients.",
      },
    ],
  },
  {
    id: "devis",
    number: 5,
    title: "Devis, commande et formation du contrat",
    blocks: [
      {
        type: "sub",
        text: "5.1 Devis et information précontractuelle",
      },
      {
        type: "p",
        text: "Toute prestation fait l'objet d'un devis écrit adressé au client. Le devis précise le périmètre, les livrables, le prix, la modalité de paiement choisie, les moyens de règlement retenus, la formule d'hébergement retenue et, le cas échéant, son prix récurrent et sa périodicité, le calendrier prévisionnel, le délai de recette et les éléments à fournir par le client.",
      },
      {
        type: "p",
        text: "Le délai de recette figurant au devis est, par défaut, de sept jours ouvrés à compter de la notification écrite de la livraison. Il peut être adapté par accord écrit entre les parties avant la commande lorsque le projet le justifie. À défaut de mention au devis, ce délai standard de sept jours ouvrés s'applique.",
      },
      {
        type: "p",
        text: "Le devis, accompagné des présentes CGV, constitue l'information précontractuelle communiquée au client professionnel avant la formation du contrat. Il précise les caractéristiques essentielles de la prestation, son prix, ses modalités de facturation, le calendrier prévisionnel et la modalité de règlement retenue. L'obligation d'information prévue à l'article 1112-1 du Code civil est appréciée dans ce cadre entre professionnels (article 4.2).",
      },
      {
        type: "sub",
        text: "5.2 Formation du contrat et acceptation",
      },
      {
        type: "p",
        text: "Le présent article s'applique aux commandes sur devis. Les commandes en ligne relèvent de l'article 5.6.",
      },
      {
        type: "p",
        text: "Le contrat est formé par l'acceptation écrite et traçable, par le client, du devis et des présentes CGV. Cette acceptation prend la forme d'une signature, y compris électronique, ou d'un accord écrit par courriel identifiant expressément le devis et les CGV acceptés.",
      },
      {
        type: "p",
        text: "L'acceptation du devis et des CGV intervient avant le démarrage des travaux et avant toute demande de paiement. FLESH ne demande le règlement, qu'il s'agisse de l'acompte ou du prix intégral, qu'après réception de cette acceptation.",
      },
      {
        type: "p",
        text: "Le seul versement d'une somme ne vaut pas acceptation des CGV et ne constitue pas une preuve suffisante de leur acceptation. Si un paiement est reçu avant l'acceptation écrite, il ne dispense pas de la formaliser ; à défaut d'acceptation, aucune prestation n'est engagée et le client en est informé par écrit.",
      },
      {
        type: "sub",
        text: "5.3 Durée de validité du devis",
      },
      {
        type: "p",
        text: "Le devis n'engage FLESH que pour la durée de validité qu'il indique. Passé ce délai, FLESH peut en modifier les termes, notamment en cas d'évolution des tarifs des prestataires tiers.",
      },
      {
        type: "sub",
        text: "5.4 Choix de la modalité de paiement",
      },
      {
        type: "p",
        text: "Le choix de la modalité de paiement prévue à l'article 7 est formalisé dans le devis accepté ou, à défaut, par écrit au moment de la commande, avant tout règlement. En l'absence de choix exprès, la modalité indiquée au devis s'applique.",
      },
      {
        type: "sub",
        text: "5.5 Absence de droit de rétractation entre professionnels",
      },
      {
        type: "p",
        text: "Le contrat est conclu entre professionnels dans le cadre de leur activité. En conséquence, le client ne bénéficie pas du droit de rétractation de quatorze jours prévu par le Code de la consommation pour les contrats conclus à distance ou hors établissement.",
      },
      {
        type: "p",
        text: "Toute demande d'annulation après acceptation du devis relève des stipulations de l'article 7.4 relatives aux travaux engagés et aux engagements pris, et non d'un droit de rétractation.",
      },
      {
        type: "p",
        text: "Par exception, l'article L. 221-3 du Code de la consommation reconnaît ce droit au professionnel qui emploie cinq salariés ou moins, lorsque le contrat est conclu hors établissement et que son objet n'entre pas dans le champ de son activité principale. FLESH en informe le client, le cas échéant, dans le devis.",
      },
      {
        type: "sub",
        text: "5.6 Commande en ligne",
      },
      {
        type: "p",
        text: "Le client peut commander en ligne l'une des offres standard présentées dans la section Tarifs du site, en cliquant sur « Choisir cette offre » puis en réglant sur la page de paiement sécurisée Stripe.",
      },
      {
        type: "p",
        text: "Avant de payer, le client prend connaissance des présentes CGV et les accepte en cochant la case prévue à cet effet sur la page de paiement. Le contrat est formé à la validation du paiement. FLESH adresse ensuite au client un e-mail de confirmation récapitulant l'offre commandée, le prix réglé, la formule d'hébergement et, le cas échéant, la date du premier prélèvement du forfait mensuel.",
      },
      {
        type: "p",
        text: "Le paiement de la création est intégral à la commande, dans les conditions de l'option B de l'article 7.2. Le délai de livraison court dans les conditions de l'article 8.1.",
      },
      {
        type: "p",
        text: "Les offres en ligne portent sur un site vitrine de cinq pages au plus, dans le périmètre décrit sur le site à la date de la commande. Toute demande dépassant ce périmètre, notamment des pages ou des fonctionnalités supplémentaires, fait l'objet d'un devis complémentaire accepté avant exécution.",
      },
      {
        type: "p",
        text: "Si FLESH constate que la commande dépasse le périmètre de l'offre ou n'émane pas d'un client professionnel, elle en informe le client par écrit dans un délai de deux jours ouvrés. Si la commande n'est pas maintenue, les sommes versées sont intégralement remboursées.",
      },
      {
        type: "p",
        text: "Conformément à l'article 1127-3 du Code civil, les parties, agissant en qualité de professionnels, conviennent de déroger aux dispositions des 1° à 5° de l'article 1127-1 et de l'article 1127-2 du même code.",
      },
    ],
  },
  {
    id: "prix-facturation",
    number: 6,
    title: "Prix, TVA et facturation",
    blocks: [
      {
        type: "sub",
        text: "6.1 Prix et régime de TVA",
      },
      {
        type: "p",
        text: "Les prix sont exprimés en euros. Le régime de TVA applicable est celui décrit à l'article 2.1 : tant que la franchise en base s'applique, aucun montant de TVA n'est ajouté aux prix facturés et les factures portent la mention « TVA non applicable, art. L. 223 et suivants du CIBS ».",
      },
      {
        type: "p",
        text: "Les prix facturés et une éventuelle évolution du régime de TVA sont distingués : si le régime de FLESH change, la TVA au taux applicable est mentionnée sur les factures émises à compter de la date d'effet du changement, conformément aux règles fiscales applicables. FLESH en informe le client par écrit et lui indique les conséquences sur les devis en cours.",
      },
      {
        type: "p",
        text: "Le prix du devis est ferme pour le périmètre décrit. Toute demande complémentaire, toute modification du périmètre ou toute reprise d'un élément déjà validé fait l'objet d'un devis complémentaire accepté avant exécution.",
      },
      {
        type: "p",
        text: "Les frais exposés pour le compte du client — nom de domaine, licences, banque d'images, polices sous licence, prestataires techniques — sont refacturés au réel sur justificatif, ou facturés séparément par leurs fournisseurs, selon ce qui est indiqué au devis.",
      },
      {
        type: "p",
        text: "L'hébergement suit la formule retenue au devis (article 12.1) : en formule 1, il donne lieu au prix récurrent indiqué au devis ; en formule 2, il est souscrit et financé par le client en son nom après la remise du site.",
      },
      {
        type: "sub",
        text: "6.2 Mentions portées sur les factures",
      },
      {
        type: "p",
        text: "Chaque facture comporte les mentions obligatoires prévues par la réglementation, notamment l'identité et les coordonnées des parties, le numéro et la date de la facture, la désignation précise des prestations, le prix dû, ainsi que, pour les relations entre professionnels, les mentions relatives au délai de paiement, aux pénalités de retard et à l'indemnité forfaitaire de recouvrement prévues à l'article L. 441-9 du Code de commerce.",
      },
      {
        type: "p",
        text: "La mention « TVA non applicable, art. L. 223 et suivants du CIBS » est portée sur les factures lorsque les conditions légales de la franchise en base sont réunies.",
      },
      {
        type: "sub",
        text: "6.3 Rythme de facturation et moyens de règlement",
      },
      {
        type: "p",
        text: "La facturation suit la modalité de paiement choisie : en cas de paiement en deux fois, une facture d'acompte à la commande puis une facture de solde à la livraison complète ; en cas de paiement intégral, une facture unique à la commande.",
      },
      {
        type: "p",
        text: "Les factures sont payables à réception, sauf délai différent indiqué au devis ou sur la facture, dans les limites prévues par l'article L. 441-10 du Code de commerce.",
      },
      {
        type: "p",
        text: "Lorsque la formule 1 d'hébergement géré est retenue, le prix récurrent correspondant est facturé selon la périodicité indiquée au devis, indépendamment du prix de la prestation de création, dont la facturation suit la modalité de paiement choisie à l'article 7.",
      },
      {
        type: "p",
        text: "Les moyens de règlement ouverts au client sont les mêmes quelle que soit la modalité de paiement retenue, sous réserve de ce qui est indiqué au devis et sur la facture. Le règlement s'effectue par virement bancaire ou par carte bancaire au moyen du système de paiement Stripe proposé sur le site de FLESH. Les coordonnées bancaires sont communiquées sur la facture. Le moyen de règlement effectivement retenu pour chaque échéance est celui indiqué au devis et rappelé sur la facture.",
      },
      {
        type: "p",
        text: "Le forfait mensuel de l'offre « Site hébergé + suivi » est réglé par prélèvement automatique sur la carte bancaire enregistrée via Stripe lors de la commande. Une facture est émise pour chaque échéance.",
      },
    ],
  },
  {
    id: "paiement",
    number: 7,
    title: "Modalités de paiement et annulation",
    blocks: [
      {
        type: "p",
        text: "Pour une commande en ligne, le paiement de la création est intégral à la commande (option B). Les deux options ci-dessous s'appliquent aux commandes sur devis.",
      },
      {
        type: "p",
        text: "Le client choisit, dans les conditions de l'article 5.4, l'une des deux modalités de règlement suivantes. Ce choix est formalisé dans le devis accepté ou, à défaut, par écrit au moment de la commande. En l'absence de choix exprès, la modalité indiquée au devis s'applique.",
      },
      {
        type: "sub",
        text: "7.1 Option A — Paiement en deux fois",
      },
      {
        type: "p",
        text: "Un acompte de 40 % du montant total est exigible à la commande, avant le démarrage du projet. Le solde de 60 % est exigible à la livraison complète du site.",
      },
      {
        type: "p",
        text: "La livraison complète correspond à la réalisation du site conformément au devis accepté, à sa mise en ligne lorsque celle-ci est prévue, et à la remise des éléments et accès prévus contractuellement. Pour chaque projet, son contenu exact est celui que le devis précise, au regard des étapes décrites à l'article 11.1.",
      },
      {
        type: "p",
        text: "Le solde devient exigible à la livraison complète ainsi définie. Il n'est pas conditionné à l'absence de demandes de retouches mineures postérieures à la livraison, ni à l'écoulement de la période de recette. Les retouches incluses au sens de l'article 10 ne suspendent pas son exigibilité ; les garanties et la procédure de signalement des non-conformités restent applicables dans les conditions de l'article 11.2.",
      },
      {
        type: "p",
        text: "Le règlement de l'acompte et du solde s'effectue par les moyens prévus à l'article 6.3, selon ce qui est indiqué au devis et sur la facture.",
      },
      {
        type: "p",
        text: "Dans cette option, le délai maximal de livraison est de quatorze jours calendaires à compter du paiement effectif de l'acompte de 40 %, sous réserve que le client ait remis l'ensemble des contenus, informations, documents et accès indispensables et validé le périmètre prévu au devis.",
      },
      {
        type: "p",
        text: "Lorsque ces éléments sont transmis après le paiement de l'acompte, ou lorsque le client tarde à répondre à une demande indispensable, le délai commence ou reprend à compter de la réception de l'ensemble des éléments nécessaires, dans les conditions de l'article 8.2. Tout blocage ou report est signalé au client par écrit, avec indication des éléments attendus et de l'incidence estimée sur la livraison ; la suspension reste limitée à la durée nécessaire pour lever le blocage.",
      },
      {
        type: "p",
        text: "La période de recette prévue à l'article 11.2 et la période de retouches prévue à l'article 10.3 commencent à la livraison. Elles ne reportent pas l'exigibilité du solde, qui reste dû à la livraison complète.",
      },
      {
        type: "sub",
        text: "7.2 Option B — Paiement intégral à la commande",
      },
      {
        type: "p",
        text: "Le client peut choisir de régler 100 % du prix à la commande. Le règlement s'effectue par les moyens prévus à l'article 6.3, selon ce qui est indiqué au devis et sur la facture.",
      },
      {
        type: "p",
        text: "Dans cette option, le délai maximal de livraison est de quatorze jours calendaires à compter de la réception effective et de la confirmation du paiement, sous réserve que le client ait également transmis l'ensemble des contenus, informations, documents et accès indispensables et validé le périmètre du projet.",
      },
      {
        type: "p",
        text: "Si des éléments indispensables sont manquants ou si le client tarde à répondre, ce délai est suspendu ou reporté dans les conditions de l'article 8.2, après information écrite du client. FLESH informe le client de tout obstacle susceptible d'affecter le délai de livraison, ainsi que de la date à laquelle le délai reprend.",
      },
      {
        type: "sub",
        text: "7.3 Qualification de l'acompte",
      },
      {
        type: "p",
        text: "L'acompte de 40 % prévu à l'option A constitue un acompte affecté au financement des travaux engagés. Il ne constitue pas des arrhes et n'ouvre pas de droit de dédit.",
      },
      {
        type: "p",
        text: "Le défaut de versement de l'acompte aux date et montant prévus autorise FLESH à ne pas commencer les travaux, sans que ce report soit imputable à FLESH. Les délais sont décalés d'autant.",
      },
      {
        type: "sub",
        text: "7.4 Annulation ou interruption du projet",
      },
      {
        type: "p",
        text: "En cas d'annulation ou d'interruption à l'initiative du client, les sommes correspondant au travail déjà réalisé et aux engagements fermes déjà pris auprès de prestataires tiers restent dues. Un état des travaux engagés est établi contradictoirement entre les parties.",
      },
      {
        type: "p",
        text: "Lorsque le client a réglé un montant supérieur à celui des travaux réalisés et des engagements pris, le solde lui est restitué après établissement de cet état.",
      },
      {
        type: "p",
        text: "Aucune pénalité de résiliation n'est due en dehors de ces montants, sauf clause contraire du devis accepté.",
      },
    ],
  },
];