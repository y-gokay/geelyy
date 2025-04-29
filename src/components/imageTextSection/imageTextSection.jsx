"use client";

import Image from "next/image";
import { geelyData } from "@/services/geelyData";

export default function DesignSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white max-w-[1440px] mx-auto">
      {geelyData.designSection.map((section, index) => (
        <div key={index} className="mb-32">
          <div className="mb-14 text-left">
            {section.subtitle && (
              <h5 className="text-sm font-bold uppercase mb-2 tracking-[0.2em] text-black">
                {section.subtitle}
              </h5>
            )}
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              {section.title}
            </h2>
          </div>

          <div
            className={`flex flex-col md:flex-row ${
              index === 1 ? "md:flex-row-reverse" : ""
            } gap-8 items-start`}
          >
            {section.images.map((img, i) => (
              <div key={i} className="flex-1 flex flex-col">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={i === 0 ? 920 : 651}
                  height={i === 0 ? 926 : 493}
                  className="object-cover rounded-xl w-full h-auto mb-6"
                />
                {img.title && (
                  <div className="mt-2">
                    <h5 className="text-xl font-bold mb-2 text-black font-geelybold2023">
                      {img.title}
                    </h5>
                    <p className="text-sm text-black leading-relaxed">
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
