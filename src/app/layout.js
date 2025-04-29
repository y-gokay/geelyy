import { Space_Grotesk, Open_Sans } from "next/font/google";
import "@/styles/globals.scss";
import Footer from "@/components/footer/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
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
        className={`${spaceGrotesk.variable} ${openSans.variable} antialiased`}
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
