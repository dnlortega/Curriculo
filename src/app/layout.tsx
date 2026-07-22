import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daniel-ortega.vercel.app"),
  title: "Daniel Ortega Pereira | Analista Sênior & Desenvolvedor Full Stack",
  description: "Portfólio de Daniel Ortega Pereira, profissional com 17+ anos de experiência na área de tecnologia, especialista em Next.js, Integração de Sistemas e Análise de Dados (Power BI).",
  keywords: ["Daniel Ortega Pereira", "Daniel Ortega", "Analista de Sistemas Sênior", "Desenvolvedor Next.js", "Desenvolvedor React", "Power BI", "Integração de Sistemas", "Portfólio de Tecnologia"],
  authors: [{ name: "Daniel Ortega Pereira", url: "https://www.linkedin.com/in/daniel-op" }],
  creator: "Daniel Ortega Pereira",
  openGraph: {
    title: "Daniel Ortega Pereira | Desenvolvedor & Analista Sênior",
    description: "Profissional com 17+ anos de experiência na área de tecnologia, especialista em Next.js, Integrações e Dados.",
    url: "https://daniel-ortega.vercel.app",
    siteName: "Portfólio de Daniel Ortega",
    images: [
      {
        url: "https://github.com/dnlortega.png",
        width: 400,
        height: 400,
        alt: "Daniel Ortega",
      },
    ],
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${outfit.variable} ${jetbrainsMono.variable} min-h-full flex flex-col bg-background text-foreground antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
