import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "必買研究所｜Buy Lab JP",
  description: "整合日本商品排行、在地推薦與價格比較，讓每一次選購都有根據。",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
