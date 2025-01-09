"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import header from "../../app/header.png";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <Image
        src={header}
        alt="Zelty Rewind 2024"
        width={0}
        priority
        className="mb-8 sm:mb-16"
      />
      <div ref={ref} className="relative max-w-7xl mx-auto pr-8">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-[#2A4661] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-[#07223A] border border-neutral-300 dark:border-white p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-white ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-white">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
      <div className="mx-16 mb-16 px-8 sm:px-24 py-8 bg-[#092B49] rounded-xl flex flex-col gap-4">
        <p className="text-lg font-bold">Merci à vous tous pour cette année incroyable ! ❤️</p>
        <p>
          Nous tenons à vous remercier pour votre confiance et votre soutien
          tout au long de l'année. C'est grâce à vous que nous avons pu faire
          évoluer, innover et développer des solutions toujours mieux adaptées à
          vos besoins.
        </p>
        <p className="font-bold">2025, nous voilà ! 🚀</p>
        <p>
          Cette nouvelle année s'annonce encore plus passionnante, avec de
          nombreuses innovations pour enrichir votre expérience. Nous sommes
          impatients de poursuivre notre collaboration et de vous accompagner
          dans tous vos projets.
        </p>
        <p>
          Merci d'être partie prenante de notre aventure. Que 2025 vous apporte
          succès et réussite !
        </p>
        <p>L’équipe Produit Zelty</p>
      </div>
    </div>
  );
};
