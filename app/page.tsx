import { Timeline } from "@/components/ui/Timeline";
import { SolutionTitle } from "@/components/ui/SolutionTitle";
import { FeatureTitle } from "@/components/ui/FeatureTitle";
import { FeatureDescription } from "@/components/ui/FeatureDescription";
import { FeatureImage } from "@/components/ui/FeatureImage";
import { Month } from "@/components/ui/Month";
import { Solution } from "@/components/ui/Solution";
import { SolutionList } from "@/components/ui/SolutionList";
import { SolutionListItem } from "@/components/ui/SolutionListItem";

import img_jan_01 from "./images/jan1.png";
import img_jan_02 from "./images/jan2.png";
import img_feb_01 from "./images/feb1.png";
import img_mar_01 from "./images/mar1.png";
import img_mar_02 from "./images/mar2.png";
import img_mar_03 from "./images/mar3.png";
import img_mar_04 from "./images/mar4.png";
import img_apr_01 from "./images/apr1.png";
import img_may_01 from "./images/may1.png";
import img_jul_01 from "./images/jul1.png";
import img_jul_02 from "./images/jul2.png";
import img_sep_01 from "./images/sep1.png";
import img_oct_01 from "./images/oct1.png";
import img_oct_02 from "./images/sep2.png";
import img_nov_01 from "./images/nov1.png";
import img_nov_02 from "./images/nov2.png";
import img_dec_01 from "./images/dec1.png";
import img_dec_02 from "./images/dec2.png";
import img_dec_03 from "./images/dec3.png";

export default function Home() {
  const data = [
    {
      title: "Janvier",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Caisse</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  ⏸️ Mode Occupé : Prenez le contrôle de vos commandes avec la
                  mise en pause des partenaires de livraison sur Zelty Delivery
                </FeatureTitle>
                <FeatureDescription>
                  Gagnez en sérénité pendant vos services : mettez en pause vos
                  plateformes partenaires directement depuis votre caisse en un
                  clic, et reprenez le contrôle de votre rythme en période de
                  forte affluence.
                </FeatureDescription>
                <FeatureImage src={img_jan_01} priority>
                  Mode Occupé : Prenez le contrôle de vos commandes avec la mise
                  en pause des partenaires de livraison sur Zelty Delivery
                </FeatureImage>
              </SolutionListItem>
              <SolutionListItem>
                <FeatureTitle>
                  💳 Boostez vos pourboires et modernisez vos paiements
                </FeatureTitle>
                <FeatureDescription>
                  Avec les TPE Yavin, vos clients peuvent exprimer leur
                  satisfaction en laissant un pourboire directement depuis le
                  TPE, sur la totalité ou une partie de leur note, en toute
                  simplicité.
                </FeatureDescription>
                <FeatureImage src={img_jan_02} priority>
                  Boostez vos pourboires et modernisez vos paiements
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Février",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Caisse</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🖨️ Simplifiez vos opérations avec l’impression automatique
                </FeatureTitle>
                <FeatureDescription>
                  Personnalisez l’impression des tickets de caisse selon vos
                  besoins, grâce à une option qui déclenche automatiquement
                  l’impression à la clôture des commandes. Un gain de temps pour
                  vous et une meilleure expérience pour vos clients. Le tout
                  personnalisable en fonction du mode de consommation.
                </FeatureDescription>
                <FeatureImage src={img_feb_01} priority>
                  Simplifiez vos opérations avec l’impression automatique
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Mars",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Caisse</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🔔 Restez à jour avec des alertes personnalisées
                </FeatureTitle>
                <FeatureDescription>
                  Une nouvelle notification vous informe directement sur votre
                  caisse des mises à jour importantes et des actions à
                  entreprendre pour garantir une performance optimale de votre
                  système.
                </FeatureDescription>
                <FeatureImage src={img_mar_01}>
                  Restez à jour avec des alertes personnalisées
                </FeatureImage>
              </SolutionListItem>
              <SolutionListItem>
                <FeatureTitle>
                  📷 Simplifiez l'identification client avec le QR code
                </FeatureTitle>
                <FeatureDescription>
                  Scannez un QR code contenant un numéro de téléphone pour
                  accéder instantanément à une fiche client existante ou en
                  créer une nouvelle. Offrez une expérience rapide et
                  personnalisée à vos clients !
                </FeatureDescription>
                <FeatureImage src={img_mar_02}>
                  Simplifiez l'identification client avec le QR code
                </FeatureImage>
              </SolutionListItem>
              <SolutionListItem>
                <FeatureTitle>
                  💳 Optimisez vos paiements avec les TPE Belorder
                </FeatureTitle>
                <FeatureDescription>
                  Nous avons intégré les TPE Belorder à notre système, offrant
                  ainsi une nouvelle option de paiement fiable et rapide,
                  directement connectée à votre caisse.
                </FeatureDescription>
                <FeatureImage src={img_mar_04}>
                  Optimisez vos paiements avec les TPE Belorder
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
          <Solution>
            <SolutionTitle>API Publique</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🧑🏻‍🍳 Facilitez la gestion des commandes en cuisine
                </FeatureTitle>
                <FeatureDescription>
                  Vos partenaires peuvent désormais envoyer directement
                  n'importe quel produit d'une commande en production, offrant
                  plus de flexibilité et d'efficacité.
                </FeatureDescription>
              </SolutionListItem>
            </SolutionList>
          </Solution>
          <Solution>
            <SolutionTitle>Back Office</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  ❌ Simplifiez la résiliation des restaurants avec le Back
                  Office
                </FeatureTitle>
                <FeatureDescription>
                  En gestion multisite, vous pouvez désormais résilier un
                  restaurant directement depuis l’espace Admin du Back Office.
                  Après 3 mois, toutes les données sont automatiquement
                  supprimées, garantissant la conformité et la sécurité des
                  informations.
                </FeatureDescription>
                <FeatureImage src={img_mar_03}>
                  Simplifiez la résiliation des restaurants avec le Back Office
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Avril",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Caisse</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🛵 Accélérez vos livraisons avec l'intégration d'Uber Direct
                </FeatureTitle>
                <FeatureDescription>
                  Nous avons ajouté Uber Direct à Zelty Dispatch, vous
                  permettant de gérer vos livraisons encore plus efficacement et
                  d'élargir vos options de transport pour une expérience client
                  optimisée.
                </FeatureDescription>
                <FeatureImage src={img_apr_01}>
                  Accélérez vos livraisons avec l'intégration d'Uber Direct
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Mai",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Caisse</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  📞 Gagnez du temps avec la création rapide de réservations
                </FeatureTitle>
                <FeatureDescription>
                  Lorsqu'un client vous appelle, ouvrez simplement la caisse,
                  cliquez sur "Créer une réservation" et les informations du
                  client sont déjà pré-remplies. Il ne vous reste plus qu’à
                  renseigner la date, l’heure et le nombre de convives, pour une
                  prise de réservation ultra-rapide et sans erreur.
                  Incontournable pour la restauration assise.
                </FeatureDescription>
              </SolutionListItem>
            </SolutionList>
          </Solution>
          <Solution>
            <SolutionTitle>Back Office</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🧑🏻‍💻 Gérez facilement vos restaurants avec les nouveaux filtres
                </FeatureTitle>
                <FeatureDescription>
                  Dans l'admin, vous pouvez désormais filtrer les restaurants
                  par état d'abonnement. Cela vous permet d'obtenir rapidement
                  des données sur les restaurants actifs, en résiliation, ou
                  dans d'autres états, pour une gestion multisite simplifiée et
                  plus précise.
                </FeatureDescription>
                <FeatureImage src={img_may_01}>
                  Gérez facilement vos restaurants avec les nouveaux filtres
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Juillet",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Back Office</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  📝 Autonomie totale pour l'export fiscal
                </FeatureTitle>
                <FeatureDescription>
                  Les restaurateurs peuvent désormais exporter leurs données
                  fiscales de manière autonome, facilitant ainsi leur gestion
                  administrative et assurant un suivi simplifié et conforme.
                </FeatureDescription>
                <FeatureImage src={img_jul_01}>
                  Autonomie totale pour l'export fiscal
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
          <Solution>
            <SolutionList>
              <SolutionTitle>Caisse</SolutionTitle>
              <SolutionList>
                <SolutionListItem>
                  <FeatureTitle>
                    📥 Facilitez la communication entre sièges et établissements
                    avec le centre de notification
                  </FeatureTitle>
                  <FeatureDescription>
                    Les sièges peuvent désormais envoyer des messages
                    directement via la caisse à leurs établissements. Cela
                    permet d’avoir une communication fluide et centralisée. Au
                    final, c’est un meilleur pilotage de votre enseigne.
                  </FeatureDescription>
                  <FeatureImage src={img_jul_02}>
                    Facilitez la communication entre sièges et établissements
                    avec le centre de notification
                  </FeatureImage>
                </SolutionListItem>
              </SolutionList>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Septembre",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Commande en ligne</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  💅🏻 Améliorez l'expérience client avec la nouvelle interface de
                  commande en ligne
                </FeatureTitle>
                <FeatureDescription>
                  Offrez à vos clients une interface modernisée et plus
                  intuitive pour passer leurs commandes en ligne, avec une
                  navigation simplifiée et un design plus attractif pour
                  maximiser les conversions.
                </FeatureDescription>
                <FeatureImage src={img_sep_01}>
                  Améliorez l'expérience client avec la nouvelle interface de
                  commande en ligne
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Octobre",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Caisse</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🍎 Gagnez du temps avec la consolidation automatique des menus
                </FeatureTitle>
                <FeatureDescription>
                  Désormais, ajoutez un produit à une commande et il sera
                  automatiquement intégré à un menu associé. Cela simplifie le
                  processus pour le restaurateur, qui n'a plus besoin de
                  modifier manuellement le menu pour y ajouter un produit,
                  améliorant ainsi l'efficacité et la gestion des commandes.
                </FeatureDescription>
                <FeatureImage src={img_oct_01}>
                  Gagnez du temps avec la consolidation automatique des menus
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
          <Solution>
            <SolutionTitle>Back Office</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🚛 Optimisez la gestion des stocks avec la rupture automatique
                </FeatureTitle>
                <FeatureDescription>
                  Définissez un seuil de stock pour chaque produit et, une fois
                  atteint, le produit sera automatiquement mis en rupture, vous
                  évitant ainsi toute action manuelle. Cela garantit une gestion
                  simplifiée et gain de temps opérationnel.
                </FeatureDescription>
                <FeatureImage src={img_oct_02}>
                  Optimisez la gestion des stocks avec la rupture automatique
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Novembre",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Commande en ligne</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🛵 Proposez la livraison directement depuis la commande en
                  ligne
                </FeatureTitle>
                <FeatureDescription>
                  Les restaurants utilisant notre commande en ligne peuvent
                  désormais vendre leurs produits en livraison, que ce soit via
                  leur propre flotte de livreurs ou en intégrant une plateforme
                  de livraison en marque blanche comme Uber Direct. Une solution
                  simple pour élargir leur portée et satisfaire encore plus de
                  clients.
                </FeatureDescription>
                <FeatureImage src={img_nov_01}>
                  Proposez la livraison directement depuis la commande en ligne
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
          <Solution>
            <SolutionTitle>Back Office</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🙆🏻‍♀️ Simplification du processus d'import de carte
                </FeatureTitle>
                <FeatureDescription>
                  La refonte du processus d'import de carte permet désormais de
                  les créer plus rapidement sur le Back Office, accélérant
                  ainsi le lancement de votre activité.
                </FeatureDescription>
                <FeatureImage src={img_nov_02}>
                  Simplification du processus d'import de carte
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
    {
      title: "Décembre",
      content: (
        <Month>
          <Solution>
            <SolutionTitle>Back Office</SolutionTitle>
            <SolutionList>
              <SolutionListItem>
                <FeatureTitle>
                  🗑️ Gagnez du temps avec la suppression groupée de clients
                </FeatureTitle>
                <FeatureDescription>
                  Cette nouvelle fonctionnalité permet de supprimer rapidement
                  et efficacement un grand nombre de clients en base,
                  simplifiant ainsi la gestion des données et vous faisant
                  gagner un temps précieux.
                </FeatureDescription>
                <FeatureImage src={img_dec_01}>
                  Gagnez du temps avec la suppression groupée de clients
                </FeatureImage>
              </SolutionListItem>
              <SolutionListItem>
                <FeatureTitle>
                  🖼️ Personnalisez vos tickets de caisse avec une image
                </FeatureTitle>
                <FeatureDescription>
                  Imprimez une image en haut et/ou en bas de vos tickets de
                  caisse, idéale pour ajouter un QR code incitant vos clients à
                  visiter votre site et laisser un avis positif. Une manière
                  simple de fidéliser et d’encourager les retours clients !
                </FeatureDescription>
                <FeatureImage src={img_dec_02}>
                  Personnalisez vos tickets de caisse avec une image
                </FeatureImage>
              </SolutionListItem>
              <SolutionListItem>
                <FeatureTitle>
                  3️⃣ Simplifiez la comptabilisation des couverts
                </FeatureTitle>
                <FeatureDescription>
                  Associez automatiquement un nombre de couverts à chaque
                  produit depuis le Back Office. Dès qu'un produit est ajouté à
                  une commande, le nombre de couverts est comptabilisé sans
                  aucune action supplémentaire, facilitant ainsi la gestion des
                  commandes et des besoins en cuisine en restauration assise.
                </FeatureDescription>
                <FeatureImage src={img_dec_03}>
                  Simplifiez la comptabilisation des couverts
                </FeatureImage>
              </SolutionListItem>
            </SolutionList>
          </Solution>
        </Month>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
