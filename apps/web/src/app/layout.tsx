import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Musiconnect",
  description: "Listen to the best curated artist over the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}  h-full antialiased`}>
      <body className="font-sans bg-background text-foreground min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
