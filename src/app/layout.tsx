import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Ortega Pereira | Desenvolvedor Full Stack & Especialista Next.js",
  description: "Portfólio de Daniel Ortega Pereira, desenvolvedor apaixonado por tecnologia, com vasta experiência em Next.js, React, Tailwind CSS e criação de interfaces modernas. Conheça meus projetos.",
  keywords: ["Daniel Ortega Pereira", "Daniel Ortega", "Desenvolvedor Next.js", "Desenvolvedor React", "Frontend", "Portfólio de Tecnologia"],
  authors: [{ name: "Daniel Ortega Pereira", url: "https://www.linkedin.com/in/daniel-op" }],
  creator: "Daniel Ortega Pereira",
  openGraph: {
    title: "Daniel Ortega Pereira | Desenvolvedor Next.js",
    description: "Conheça o portfólio de Daniel Ortega Pereira e seus principais projetos criados com React e Next.js.",
    url: "https://vercel.com/dnlortegas-projects",
    siteName: "Portfólio Daniel Ortega Pereira",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
