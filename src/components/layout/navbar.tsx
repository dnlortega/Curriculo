"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, User, Zap, GraduationCap, Award, Mail } from "lucide-react";
import { USAFlag, BrazilFlag } from "@/components/icons";
import { translations, Language } from "@/i18n";
import React from "react";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  const t = translations[lang];

  const navItems = [
    { name: t.nav.home, href: '#home', icon: <Home className="w-5 h-5" /> },
    { name: t.nav.projects, href: '#projetos', icon: <Briefcase className="w-5 h-5" /> },
    { name: t.nav.experience, href: '#experiencia', icon: <User className="w-5 h-5" /> },
    { name: t.nav.skills, href: '#habilidades', icon: <Zap className="w-5 h-5" /> },
    { name: t.nav.education, href: '#formacao', icon: <GraduationCap className="w-5 h-5" /> },
    { name: t.nav.certificates, href: '#certificados', icon: <Award className="w-5 h-5" /> },
    { name: t.nav.contact, href: '#contato', icon: <Mail className="w-5 h-5" /> },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* FLOATING PILL MENU (DESKTOP) */}
      <motion.nav
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-8 left-1/2 z-50 w-auto bg-background/60 backdrop-blur-xl border border-primary/20 rounded-full px-6 py-2.5 hidden md:flex justify-center items-center shadow-2xl shadow-primary/5 gap-8"
      >
        <a href="#home" className="font-black text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 hover:scale-105 transition-transform shrink-0 whitespace-nowrap">
          Daniel Ortega Pereira
        </a>

        <ul className="flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.name} className="shrink-0">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                title={item.name}
                className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 block"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Language Toggle */}
        <button
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform bg-muted/50 hover:bg-primary/20 shrink-0"
          title="Change Language"
        >
          {lang === 'pt' ? 
            <USAFlag className="w-6 h-6 block rounded-full shadow-sm" /> : 
            <BrazilFlag className="w-6 h-6 block rounded-full shadow-sm" />
          }
        </button>
      </motion.nav>

      {/* BOTTOM NAVIGATION BAR (MOBILE) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-border/50 flex justify-around items-center p-3 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            title={item.name}
            className="p-3 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
          >
            {item.icon}
          </a>
        ))}

        {/* Mobile Language Toggle */}
        <button
          onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
          className="flex flex-col items-center justify-center gap-1 p-2 text-muted-foreground hover:text-primary transition-colors shrink-0"
        >
          {lang === 'pt' ? 
            <USAFlag className="w-6 h-6 block rounded-full shadow-sm" /> : 
            <BrazilFlag className="w-6 h-6 block rounded-full shadow-sm" />
          }
        </button>
      </nav>
    </>
  );
}
