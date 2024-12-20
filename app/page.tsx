import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function Home() {
  const data = [
    {
      title: "Janvier",
      content: (
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              BO
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>🛵 Intégration avec le nouveau Logisticien</li>
              <li>
                🍔 Nouvelle page pour afficher les réglements directement depuis
                le nBO
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              API Publique
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>⏱️ Amélioration des temps de réponses</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              Caisse
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>
                💻 Re-organisation des options et appareils (meilleurs
                lisibilité)
              </li>
              <li>📌 Nouvelle page de login et de code pin #newDesign</li>
              <li>
                💰 Utilisateurs multi compte peut se connecter sur la caisse et
                on lui demande sur quel restaurant il veut aller
              </li>
            </ul>
            <Image
              src="https://cdn.prod.website-files.com/60a36e8b1bb8de262d076ecf/62019e6834c811e8b87b97fe_ECRANS-STYLISES_ECRAN%20fid%C3%A9lit%C3%A9%20(1)-p-3200.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Février",
      content: (
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              BO
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>🛵 Intégration avec le nouveau Logisticien</li>
              <li>
                🍔 Nouvelle page pour afficher les réglements directement depuis
                le nBO
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              API Publique
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>⏱️ Amélioration des temps de réponses</li>
            </ul>
            <Image
              src="https://cdn.prod.website-files.com/60a36e8b1bb8de262d076ecf/62019e6834c811e8b87b97fe_ECRANS-STYLISES_ECRAN%20fid%C3%A9lit%C3%A9%20(1)-p-3200.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              Caisse
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>
                💻 Re-organisation des options et appareils (meilleurs
                lisibilité)
              </li>
              <li>📌 Nouvelle page de login et de code pin #newDesign</li>
              <li>
                💰 Utilisateurs multi compte peut se connecter sur la caisse et
                on lui demande sur quel restaurant il veut aller
              </li>
            </ul>
            <Image
              src="https://cdn.prod.website-files.com/60a36e8b1bb8de262d076ecf/61f86adcfe6ae67dadfa9c5c_ECRANS-STYLISES_ECRAN%20Caisse.svg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mars",
      content: (
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              BO
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>🛵 Intégration avec le nouveau Logisticien</li>
              <li>
                🍔 Nouvelle page pour afficher les réglements directement depuis
                le nBO
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              API Publique
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>⏱️ Amélioration des temps de réponses</li>
            </ul>
          </div>
          <div className="mb-8">
            <h3 className="text-neutral-800 dark:text-neutral-200 font-bold text-xl">
              Caisse
            </h3>
            <ul className="text-neutral-800 dark:text-neutral-200 mb-8">
              <li>
                💻 Re-organisation des options et appareils (meilleurs
                lisibilité)
              </li>
              <li>📌 Nouvelle page de login et de code pin #newDesign</li>
              <li>
                💰 Utilisateurs multi compte peut se connecter sur la caisse et
                on lui demande sur quel restaurant il veut aller
              </li>
            </ul>
            <Image
              src="https://cdn.prod.website-files.com/60a36e8b1bb8de262d076ecf/61f8718603f8fa0b5c727f7b_611fce2f69ccf005f2e781fa_ECRANS-STYLISES_ECRAN%20Page%20Support%20%20(1)%20-%20actualise%CC%81%20(1)%20(1)-p-3200.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
