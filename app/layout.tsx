import type { Metadata } from "next";

import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer"

import "./globals.css"
import { 
  Abel_400, 
} from "@/app/fonts"

import 'animate.css';

export const metadata: Metadata = {
  title: "M. E. Abdelsalam - Protfolio Website",
  description: "This is my humble website where I share what I build and write with everyone on the web.",
  metadataBase: new URL('https://moehab.surge.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={`${Abel_400.className} bg-primary`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
