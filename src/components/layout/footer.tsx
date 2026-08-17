"use client";

import Link from "next/link";
import { Github, Linkedin } from "@/components/icons";
import { translations, Language } from "@/i18n";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  return (
    <footer className="relative border-t py-12 bg-muted/20 w-full flex flex-col items-center">
      <div className="w-full px-6 md:px-12 lg:px-24 text-center text-muted-foreground flex flex-col items-center justify-center gap-4">
        <p>© {new Date().getFullYear()} Daniel Ortega Pereira. {t.footer}</p>
        <div className="flex justify-center gap-4">
          <Link href="https://github.com/dnlortega" className="hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/daniel-op" className="hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>
      
      {/* Botão Secreto para o Sistema */}
      <div className="absolute right-4 bottom-4 opacity-5 hover:opacity-100 transition-opacity">
        <Link 
          href="/system" 
          onClick={(e) => {
            e.preventDefault();
            document.body.style.transition = "background-color 0.5s ease";
            document.body.style.backgroundColor = "#000";
            setTimeout(() => {
              window.location.href = "/system";
            }, 500);
          }}
          className="w-4 h-4 rounded-full bg-system-blue/50 flex items-center justify-center cursor-crosshair group relative"
          title="Sistema"
        >
          <span className="w-1 h-1 bg-system-blue rounded-full"></span>
        </Link>
      </div>
    </footer>
  );
}
