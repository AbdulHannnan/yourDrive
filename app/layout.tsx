import type { Metadata, Viewport } from "next";
import { Noto_Nastaliq_Urdu, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Nastaliq is the natural script for Urdu; Noto Naskh Arabic is loaded as a
// fallback so Pashto-specific letters (and any glyph missing from Nastaliq)
// still render. Both are subset to Arabic and use display:swap so text is
// readable immediately on slow 3G while the font streams in.
const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-nastaliq",
});

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-naskh",
});

export const metadata: Metadata = {
  title: "yourDrive — Bannu",
  description:
    "yourDrive — bike & rickshaw ride-hailing coming to Bannu. Drivers: sign up now.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#047857",
};

// SSR renders Urdu (RTL) — the default public language. The I18nProvider then
// restores the viewer's saved choice and keeps <html lang/dir> in sync.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ur" dir="rtl" className={`${nastaliq.variable} ${naskh.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <I18nProvider>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
