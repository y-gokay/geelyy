import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.scss";
import Footer from "@/components/footer/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const geelyBold2 = localFont({
  src: "../assets/fonts/GEELY-Bold-20230926.woff",
  display: "swap",
  variable: "--geely-bold-2",
});

const geelyBold = localFont({
  src: "../assets/fonts/GEELY-Bold.woff",
  display: "swap",
  variable: "--geely-bold",
});

const geelyLight = localFont({
  src: "../assets/fonts/GEELY-Light.woff",
  display: "swap",
  variable: "--geely-light",
});

const geelyNormal = localFont({
  src: "../assets/fonts/GEELY-Normal.woff",
  display: "swap",
  variable: "--geely-normal",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: {
    default: "GEELY",
    template: "%s | GEELY",
  },
  description: "GEELY site description",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/geely/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="/scripts/circkr.min.js" defer></script>
      </head>
      <body
        className={`${geelyBold.variable} ${geelyBold2.variable} ${geelyLight.variable} ${geelyNormal.variable} ${inter.variable} antialiased`}
      >
        {children}
        <Footer
          data={{
            logo: { url: "/logo.svg" },
            social: { links: [] },
            menu: { links: [] },
            logo2: { url: "/logo2.svg" },
            logo2Link: "#",
            logo2LinkTarget: "_blank",
          }}
        />
      </body>
    </html>
  );
}
