"use client";

import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ImageTextSection from "@/components/imageTextSection/imageTextSection";
import SectionImage from "@/components/sectionImage/SectionImage";
import InfoWithImageSection from "@/components/InfoWithImageSection/InfoWithImageSection";
import { geelyData } from "@/services/geelyData";

export default function Home() {
  const page = {
    blocks: [
      {
        id: "0001",
        __component: "hero.main",
      },
      {
        id: "0002",
        __component: "ImageText.section",
      },
      {
        id: "0003",
        __component: "section.image",
        dataKey: "sectiondata",
      },
      {
        id: "0004",
        __component: "section.InfoWithImage",
      },
    ],
  };

  const COMPONENT_MAP = {
    "hero.main": Hero,
    "ImageText.section": ImageTextSection,
    "section.image": SectionImage,
    "section.InfoWithImage": InfoWithImageSection,
  };

  return (
    <>
      <Header />
      <main className="page">
        {page.blocks.map((block) => {
          const Component = COMPONENT_MAP[block.__component];
          const Datas = block.dataKey ? geelyData[block.dataKey] : undefined;

          return Component ? (
            <Component
              key={block.id + block.__component}
              data={Datas}
              variant={block.variant}
            />
          ) : null;
        })}
      </main>
    </>
  );
}
