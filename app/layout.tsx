import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yourDrive — Bannu",
  description:
    "yourDrive — bike & rickshaw ride-hailing coming to Bannu. Drivers: sign up now.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Themed for the brand green; refined when the UI lands in later modules.
  themeColor: "#047857",
};

// Default language is Urdu (RTL) for the public site. The language toggle and
// per-page <html lang/dir> switching arrive with the i18n module.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ur" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
