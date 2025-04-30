"use client";

import Image from "next/image";
import Link from "next/link";
import { geelyData } from "@/services/geelyData";
import "./style.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__left">
          <Link href="/" className="header__logo">
            <Image
              src={geelyData.logo.url}
              alt="Geely Logo"
              width={143}
              height={23}
              className="object-contain"
              priority
            />
          </Link>

          <nav className="header__nav">
            <ul>
              <li>
                <Link href="/ex5">{geelyData.menu[0].title}</Link>
              </li>
              <li>
                <Link href="/about">{geelyData.menu[1].title}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
