import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Edgeify Digital",
  description: "description",
  icons: {
    icon: [
      { url: "/logos/logoImg-16.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/logoImg-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/logoImg-48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/logos/logoImg-favicon.ico",
    apple: [
      { url: "/logos/logoImg-48.png", sizes: "48x48", type: "image/png" },
      { url: "/logos/logoImg-64.avif", sizes: "64x64", type: "image/avif" },
      { url: "/logos/logoImg-128.avif", sizes: "128x128", type: "image/avif" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}  scroll-smooth   antialiased`}>
        <Navbar />
        <main className="bg-[white] pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
