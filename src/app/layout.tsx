import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat'
});

export const metadata: Metadata = {
  title: "Dana Jenkins - Real Estate Professional",
  description: "Charlotte area real estate professional specializing in helping you find your dream home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
