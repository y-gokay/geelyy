"use client";

import Image from "next/image";
import { geelyData } from "@/services/geelyData";
import "./style.scss";

export default function Hero() {
  return (
    <section className="hero">
      <Image
        src={geelyData.bannerDesktop.url}
        alt="Hero"
        fill
        priority
        className="hero__bg"
      />
      <div className="hero__container">
        <h1 className="hero__title">{geelyData.mainHero.title}</h1>

        <div className="hero__badge">
          <Image
            src={geelyData.euroNCAP.url}
            alt="Euro NCAP"
            width={339}
            height={164}
          />
        </div>

        <div className="hero__specs">
          {geelyData.mainHero.features.map((feature, index) => (
            <div key={index} className="hero__spec-block">
              <div className="hero__spec-bar" />
              <div className="hero__spec-text">
                <p>{feature.title}</p>
                <h4>{feature.value}</h4>
                <p>{feature.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
