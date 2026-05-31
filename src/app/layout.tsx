import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";

// Importando as fontes premium
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Lumière | Redefina o seu espaço",
  description: "E-commerce premium de móveis e artigos para casa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-sand`}>
        <Header />
        {/* O padding-top (pt-20) garante que o conteúdo não fique escondido atrás da navbar fixa */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}