"use client";

import Image from "next/image";
import { geelyData } from "@/services/geelyData";
import "./style.scss";

export default function SectionImage({ data }) {
  const safeData = data || geelyData.sectiondata;

  return (
    <section className="section-image">
      <Image
        src={safeData.backgroundImage}
        alt="Range Background"
        fill
        className="section-image__bg"
        priority
      />

      <div className="section-image__content">
        <h5 className="section-image__subtitle">{safeData.subtitle}</h5>
        <h2 className="section-image__title">{safeData.title}</h2>
        <p className="section-image__description">{safeData.description}</p>
      </div>
    </section>
  );
}
