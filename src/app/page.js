import Header from "@/components/header/Header";

import Hero from "@/components/hero/Hero";
import ImageTextSection from "../components/imageTextSection/imageTextSection";
import SectionImage from "@/components/sectionImage/SectionImage";

export default async function Home() {
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
      },
    ],
  };

  const COMPONENT_MAP = {
    "hero.main": Hero,
    "ImageText.section": ImageTextSection,
    "section.image": SectionImage,
  };

  return (
    <>
      <Header />
      <main className="page">
        {page.blocks.map((block) => {
          const Component = COMPONENT_MAP[block.__component];
          return Component ? (
            <Component key={block.id + block.__component} />
          ) : null;
        })}
      </main>
    </>
  );
}
