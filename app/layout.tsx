import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialMediaButtons from "@/components/social-media-buttons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delta Digital",
  description: "Somos una consultora de marketing digital y desarrollo web integrada por gente altamente capacitada, y certificada en herramientas de vanguardia y comprometida con sus clientes para generar valor.",
  icons:{
    icon:"/Logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SocialMediaButtons/>
      </body>
    </html>
  );
}
