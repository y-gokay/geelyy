"use client";

import Image from "next/image";
import { geelyData } from "@/services/geelyData";
import "./style.scss";

export default function DesignSection() {
  return (
    <section className="design-section">
      {geelyData.designSection.map((section, index) => (
        <div key={index} className="design-section__block">
          <div className="design-section__header">
            {section.subtitle && (
              <h5 className="design-section__subtitle">{section.subtitle}</h5>
            )}
            <h2 className="design-section__title">{section.title}</h2>
          </div>

          <div
            className={`design-section__grid ${index === 1 ? "reverse" : ""}`}
          >
            {section.images.map((img, i) => (
              <div key={i} className="design-section__image-block">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={i === 0 ? 920 : 651}
                  height={i === 0 ? 926 : 493}
                  className="design-section__image"
                />
                {img.title && (
                  <div className="design-section__text">
                    <h5 className="design-section__text-title">{img.title}</h5>
                    <p className="design-section__text-desc">
                      {img.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
