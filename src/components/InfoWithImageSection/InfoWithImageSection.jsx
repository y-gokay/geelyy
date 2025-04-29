"use client";

import Image from "next/image";
import { geelyData } from "@/services/geelyData";
import "./style.scss";

export default function ChargingSection() {
  return (
    <section className="charging-section">
      <div className="charging-section__content">
        <div className="charging-section__top">
          <div className="charging-section__headings">
            <p className="charging-section__subtitle">
              {geelyData.charingSection.subtitle}
            </p>
            <h2 className="charging-section__title">
              {geelyData.charingSection.title}
            </h2>
          </div>
          <div className="charging-section__desc">
            <p>{geelyData.charingSection.description}</p>
          </div>
        </div>

        <div className="charging-section__image">
          <Image
            src={geelyData.charingSection.image.url}
            alt={geelyData.charingSection.image.alt}
            width={1592}
            height={795}
            className="object-cover w-full rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
