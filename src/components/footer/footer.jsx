import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import { geelyData } from "@/services/geelyData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <Image
            src={geelyData.logo.url}
            alt="Geely Logo"
            width={143}
            height={23}
            className="object-contain"
          />
        </div>

        <div className="footer__grid">
          <p className="footer__copyright">{geelyData.copyright.title}</p>
          <div className="footer__menu">
            {geelyData.footerMenu.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:underline whitespace-nowrap"
              >
                {Array.isArray(item.title) ? (
                  <>
                    {item.title[0]} <br />
                    {item.title[1]}
                  </>
                ) : (
                  item.title
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer__logo-partner">
          <Image
            src={geelyData.jameelLogo.url}
            alt="Jameel Motors Logo"
            width={154}
            height={127}
            className="jameel-logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
