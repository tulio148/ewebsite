import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edgeify Digital",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${urbanist.className}  antialiased`}>
        <Navbar />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
