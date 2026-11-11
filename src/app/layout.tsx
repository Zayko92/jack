import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../fonts/inter-300-normal.ttf", weight: "300", style: "normal" },
    { path: "../fonts/inter-400-normal.ttf", weight: "400", style: "normal" },
    { path: "../fonts/inter-500-normal.ttf", weight: "500", style: "normal" },
    { path: "../fonts/inter-600-normal.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-body", display: "swap",
});
const instrument = localFont({
  src: [
    { path: "../fonts/instrument-serif-400-normal.ttf", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-400-italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-display", display: "swap",
});
const mono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-400-normal.ttf", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono-500-normal.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-mono", display: "swap",
});
const crave = localFont({
  src: "../fonts/crave-fine-italic.woff2",
  weight: "400", style: "italic", variable: "--font-brand", display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Gioacchino Orlando", template: "%s | Gioacchino Orlando" },
  description: "Gioacchino Orlando — autore, editor e reporter freelance. Reportage, libri e articoli.",
  applicationName: "Gioacchino Orlando",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  openGraph: {
    title: "Gioacchino Orlando",
    description: "Autore, editor e reporter freelance. Reportage, libri e articoli.",
    locale: "it_IT",
    type: "website",
    siteName: "Gioacchino Orlando",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${inter.variable} ${instrument.variable} ${mono.variable} ${crave.variable}`}>
      <body>
        <a href="#contenuto" className="skip-link">Vai al contenuto</a>
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
