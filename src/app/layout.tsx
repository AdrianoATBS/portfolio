"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Cabecalho from "@/src/components/Cabecalho";
import MenuMobile from "../components/MenuMobile";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const inter = Inter({
  subsets: ["latin"],
  variable: "--fonte-texto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600","700"],
  variable: "--fonte-titulos",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuAberto, setMenuAberto] = useState(false);
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${poppins.variable} bg-fundo antialiased `}
      >
        <button className="md:hidden fixed top-4 right-4 z-50 text-texto"
         onClick={() => setMenuAberto(true)}><GiHamburgerMenu size={24} /></button>
        <Cabecalho />
        <MenuMobile aberto={menuAberto} fechar={() => {setMenuAberto(false)}} />
        {children}
      </body>
    </html>
  );
}
