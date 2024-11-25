import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const yekanBakh = localFont({
  src: [
    {
      path: "./fonts/yekan-bakh-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/yekan-bakh-bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
});

export const metadata: Metadata = {
  title: "پاداش",
  description: "پاداش",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${yekanBakh.className} antialiased`}>{children}</body>
    </html>
  );
}
