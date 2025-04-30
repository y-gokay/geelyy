"use client";

import Image from "next/image";
import { geelyData } from "@/services/geelyData";
import "./style.scss";
import "./batteryStyle.scss";

export default function SectionImage({ data, variant = "default" }) {
  const safeData = data || geelyData.sectiondata;
  const sectionClass =
    variant === "battery" ? "section-image battery" : "section-image";

  return (
    <section className={sectionClass}>
      <Image
        src={safeData.backgroundImage}
        alt={safeData.title || "Section Background"}
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
