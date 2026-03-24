import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/header";

export const metadata: Metadata = {
  title: "BODTA",
  description: "보드타 — 보드 스포츠 강습 예약 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased font-pretendard">
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
      </body>
    </html>
  );
}
