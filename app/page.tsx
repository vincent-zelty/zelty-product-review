import { Timeline } from "@/components/ui/Timeline";
import { SolutionTitle } from "@/components/ui/SolutionTitle";
import { FeatureTitle } from "@/components/ui/FeatureTitle";
import { FeatureDescription } from "@/components/ui/FeatureDescription";
import { FeatureImage } from "@/components/ui/FeatureImage";
import { MonthContainer } from "@/components/ui/MonthContainer";
import { SolutionList } from "@/components/ui/SolutionList";
import { SolutionListItem } from "@/components/ui/SolutionListItem";

import img_jan_01 from "./images/pause3.png";
import img_jan_02 from "./images/yavin.png";
import img_feb_01 from "./images/oi.png";
import img_mar_01 from "./images/ao2.png";
import img_mar_02 from "./images/oii.png";
import img_mar_03 from "./images/ouiu.png";
import img_mar_04 from "./images/aaa.png";
import img_apr_01 from "./images/ud.png";
import img_may_01 from "./images/ou.png";
import img_jul_01 from "./images/fisc2.png";
import img_jul_02 from "./images/ce3.png";
import img_sep_01 from "./images/image.png";
import img_oct_01 from "./images/menu.png";
import img_oct_02 from "./images/se.png";
import img_nov_01 from "./images/liv.png";
import img_nov_02 from "./images/import.png";
import img_dec_01 from "./images/supp2.png";
import img_dec_02 from "./images/ti2.png";
import img_dec_03 from "./images/co.png";

export default function Home() {
  const data = [
    {
      title: "Janvier",
      content: (
        <MonthContainer>
          <SolutionTitle>Caisse</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                ⏸️ Mise en pause des partenaires de livraison sur Zelty Delivery
                via le mode occupé
              </FeatureTitle>
              <FeatureDescription>
                Un restaurateur peut mettre en pause ses plateformes partenaires
                depuis la caisse. Cela peut être utile lorsqu’un restaurant
                n’arrive plus à suivre la cadence durant un service par exemple.
              </FeatureDescription>
              <FeatureImage src={img_jan_01}>
                Mise en pause des partenaires de livraison sur Zelty
              </FeatureImage>
            </SolutionListItem>
            <SolutionListItem>
              <FeatureTitle>
                💳 Gestion des pourboires avec les TPE Yavin
              </FeatureTitle>
              <FeatureDescription>
                Les TPE Yavin se distinguent en offrant aux clients finaux la
                possibilité de laisser un pourboire sur la note ou sur une
                partie spécifique de la note au moment de payer avec sa carte
                bancaire.
              </FeatureDescription>
              <FeatureImage src={img_jan_02}>
                Gestion des pourboires avec les TPE Yavin
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Février",
      content: (
        <MonthContainer>
          <SolutionTitle>Caisse</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                🖨️ Pouvoir imprimer automatiquement les tickets de caisse en
                fonction des modes de consommation
              </FeatureTitle>
              <FeatureDescription>
                Nous avons une option dans la caisse permettant d’activer ou non
                l’impression automatique du ticket de caisse d’une commande dès
                que celle-ci est clôturée.
              </FeatureDescription>
              <FeatureImage src={img_feb_01}>
                Pouvoir imprimer automatiquement les tickets de caisse en
                fonction des modes de consommation
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Mars",
      content: (
        <MonthContainer>
          <SolutionTitle>Caisse</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                🔔 Affichage d’une alerte permettant de pousser les utilisateurs
                à faire leurs mises à jour
              </FeatureTitle>
              <FeatureDescription>
                Nous avons ajouté une nouvelle fonctionnalité de notification
                destinée à informer le restaurateur de divers aspects liés à sa
                caisse.
              </FeatureDescription>
              <FeatureImage src={img_mar_01}>
                Affichage d’une alerte permettant de pousser les utilisateurs à
                faire leurs mises à jour
              </FeatureImage>
            </SolutionListItem>
            <SolutionListItem>
              <FeatureTitle>
                📷 Identification d’un client par QR code sur la caisse
              </FeatureTitle>
              <FeatureDescription>
                Un QR code contenant un numéro de téléphone peut être scanné par
                un restaurateur pour identifier le client à une fiche client
                existante ou ouvrir une nouvelle fiche client
              </FeatureDescription>
              <FeatureImage src={img_mar_02}>
                Identification d’un client par QR code sur la caisse
              </FeatureImage>
            </SolutionListItem>
            <SolutionListItem>
              <FeatureTitle>💳 Ajout des TPE Belorder</FeatureTitle>
              <FeatureDescription>
                Nous avons ajouté un nouveau type de TPE a connecter à la
                caisse, les TPE Belorder.
              </FeatureDescription>
              <FeatureImage src={img_mar_04}>
                Ajout des TPE Belorder
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
          <SolutionTitle>API Publique</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                🧑🏻‍🍳 Nos partenaires peuvent envoyer en production un produit
                d’une commande
              </FeatureTitle>
              <FeatureDescription>
                Nos partenaires peuvent maintenant envoyer en production en
                cuisine n’importe quel item d’une commande à partir de l’API
                Publique. Auparavant, seul la caisse Zelty pouvait le faire.
              </FeatureDescription>
            </SolutionListItem>
          </SolutionList>
          <SolutionTitle>Back Office</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                ❌ Nouvelle page permettant de faire la résiliation d’un
                restaurant depuis le BO
              </FeatureTitle>
              <FeatureDescription>
                Il est maintenant possible de résilier un restaurant depuis
                l’espace Admin du Back Office. Ainsi le restaurant sera
                automatiquement supprimé (3 mois après la date de la dernière
                licence) et nous ne garderons aucune données.
              </FeatureDescription>
              <FeatureImage src={img_mar_03}>
                Nouvelle page permettant de faire la résiliation d’un restaurant
                depuis le BO
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Avril",
      content: (
        <MonthContainer>
          <SolutionTitle>Caisse</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                🛵 Intégration d’Uber Direct à Zelty Dispatch
              </FeatureTitle>
              <FeatureImage src={img_apr_01}>
                Intégration d’Uber Direct à Zelty Dispatch
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Mai",
      content: (
        <MonthContainer>
          <SolutionTitle>Caisse</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                📞 Possibilité de créer une réservation depuis la liste des
                appels
              </FeatureTitle>
              <FeatureDescription>
                L’objectif de cette fonctionnalité est de permettre à un
                restaurateur de prendre une réservation rapidement depuis un
                appel téléphonique. Le client appelle, le restaurateur répond,
                ouvre la caisse, voit l’appel en cours et clique sur “Créer une
                réservation”. Les informations du clients sont déjà pré-remplies
                et il n’y a plus que la date, l’heure et le nombre de convives à
                renseigner.
              </FeatureDescription>
            </SolutionListItem>
          </SolutionList>
          <SolutionTitle>Back Office</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                🧑🏻‍💻 Nouveaux filtres dans la liste des restaurants dans l’admin
              </FeatureTitle>
              <FeatureDescription>
                Il est maintenant possible de lister les restaurants selon
                l’état de leurs abonnements. Utile lorsque l’on souhaite avoir
                des données sur le nombre de restaurants encore actifs ou en
                période de résiliation par exemple.
              </FeatureDescription>
              <FeatureImage src={img_may_01}>
                Nouveaux filtres dans la liste des restaurants dans l’admin
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Juillet",
      content: (
        <MonthContainer>
          <SolutionTitle>Back Office</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                📝 Les clients sont maintenant autonomes sur leur export fiscal
              </FeatureTitle>
              <FeatureImage src={img_jul_01}>
                Les clients sont maintenant autonomes sur leur export fiscal
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
          <SolutionList>
            <SolutionTitle>Caisse</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  📥 Centre de notification sur la caisse
                </FeatureTitle>
                <FeatureDescription>
                  Dans le cadre de la gestion multi-site des restaurants, nous
                  offrons désormais la possibilité aux sièges de communiquer
                  avec leurs établissements via la caisse. Ainsi, il est
                  possible de diffuser un message sur une ou plusieurs caisses
                  de l'enseigne.
                </FeatureDescription>
                <FeatureImage src={img_jul_02}>
                  Centre de notification sur la caisse
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Septembre",
      content: (
        <MonthContainer>
          <SolutionTitle>Commande en ligne</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                💅🏻 Nouvelle interface de la commande en ligne
              </FeatureTitle>
              <FeatureImage src={img_sep_01}>
                Nouvelle interface de la commande en ligne
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Octobre",
      content: (
        <MonthContainer>
          <SolutionTitle>Caisse</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                🍎 Pouvoir consolider automatiquement un menu
              </FeatureTitle>
              <FeatureDescription>
                Il est maintenant possible d’ajouter un produit à une commande
                et de le faire automatiquement rentrer au sein d’un menu faisant
                parti de cette commande. Cela permet un gain de temps au
                restaurateur qui n’a pas besoin d’éditer un menu pour y ajouter
                un produit.
              </FeatureDescription>
              <FeatureImage src={img_oct_01}>
                Pouvoir consolider automatiquement un menu
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
          <SolutionTitle>Back Office</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                🚛 Rupture produit automatique via un seuil
              </FeatureTitle>
              <FeatureDescription>
                Concrètement, vous pouvez désormais définir un seuil de stock
                pour chaque produit. Une fois ce seuil atteint, le produit sera
                automatiquement mis en rupture, sans aucune action manuelle de
                votre part.
              </FeatureDescription>
              <FeatureImage src={img_oct_02}>
                Rupture produit automatique via un seuil
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Novembre",
      content: (
        <MonthContainer>
          <SolutionTitle>Commande en ligne</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>🛵 Livraison sur la commande en ligne</FeatureTitle>
              <FeatureDescription>
                Un restaurant qui utilise notre commande en ligne peut
                maintenant vendre ses produits en livraison ! Il lui suffit
                juste d’avoir sa propre flotte de livreur ou d’utiliser une
                plateforme de livraison en marque blanche comme Uber Direct.
              </FeatureDescription>
              <FeatureImage src={img_nov_01}>
                Livraison sur la commande en ligne
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
          <SolutionTitle>Back Office</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>
                🙆🏻‍♀️ Refonte du processus d’import de carte
              </FeatureTitle>
              <FeatureDescription>
                Cet item de notre roadmap va accélérer la création de cartes sur
                le BO pendant l'onboarding, tant pour Zelty que pour les
                restaurateurs.
              </FeatureDescription>
              <FeatureImage src={img_nov_02}>
                Refonte du processus d’import de carte
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
    {
      title: "Décembre",
      content: (
        <MonthContainer>
          <SolutionTitle>Back Office</SolutionTitle>
          <SolutionList>
            <SolutionListItem>
              <FeatureTitle>🗑️ Suppression groupée de clients</FeatureTitle>
              <FeatureDescription>
                L'intérêt de cette fonctionnalité est de pouvoir supprimer une
                grande quantité de clients en base en très peu de temps.
              </FeatureDescription>
              <FeatureImage src={img_dec_01}>
                Suppression groupée de clients
              </FeatureImage>
            </SolutionListItem>
            <SolutionListItem>
              <FeatureTitle>
                🖼️ Impression d’une image en haut et en bas du ticket de caisse
              </FeatureTitle>
              <FeatureDescription>
                Cette fonctionnalité permet d’imprimer en haut et/ou en bas des
                tickets de caisse une image. Très utile pour imprimer un QR code
                et pousser le client final à se rendre sur le site du restaurant
                pour y laisser un avis positif !
              </FeatureDescription>
              <FeatureImage src={img_dec_02}>
                Impression d’une image en haut et en bas du ticket de caisse
              </FeatureImage>
            </SolutionListItem>
            <SolutionListItem>
              <FeatureTitle>
                3️⃣ Comptabilisation automatique du nombre de couverts
              </FeatureTitle>
              <FeatureDescription>
                Cette nouvelle fonctionnalité permet d'attribuer un nombre de
                couvert donné à un produit depuis le BO. Ainsi, dès qu'un
                produit est ajouté à un commande, le nombre de couvert associé
                est automatiquement comptabilisé sur la commande.
              </FeatureDescription>
              <FeatureImage src={img_dec_03}>
                Comptabilisation automatique du nombre de couverts
              </FeatureImage>
            </SolutionListItem>
          </SolutionList>
        </MonthContainer>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
