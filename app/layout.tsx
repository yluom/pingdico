import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PingDico - Le dico qui gratte",
  description:
    "Dictionnaire en ligne du jargon pongiste français. Carottes, grattes, topspins et autres expressions du tennis de table.",
  keywords: [
    "ping-pong",
    "tennis de table",
    "jargon",
    "dictionnaire",
    "vocabulaire",
    "pongiste",
    "FFTT",
  ],
  openGraph: {
    title: "PingDico - Le dico qui gratte",
    description:
      "Dictionnaire en ligne du jargon pongiste français. Découvre le vocabulaire des pongistes !",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
