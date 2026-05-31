import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import CartDrawer from "@/components/layout/CartDrawer"; // Importámos o Carrinho

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
    <html lang="pt-PT">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-sand`}>
        <Header />
        <CartDrawer /> {/* Adicionámos o Carrinho aqui */}
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}