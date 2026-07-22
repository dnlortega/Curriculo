"use client";

import { useState, useEffect } from "react";
import { Language } from "@/i18n";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { EducationSection } from "@/components/sections/education-section";
import { CertificatesSection } from "@/components/sections/certificates-section";
import { ContactSection } from "@/components/sections/contact-section";
import { useTheme } from "next-themes";

export default function Home() {
  // i18n & Theme state
  const [lang, setLang] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Vagas LinkedIn",
      description: "Agregador de vagas de TI para Bauru SP. Busca oportunidades no LinkedIn, VagasBauru, Indeed e Catho.",
      tags: ["JavaScript", "Next.js", "Scraping", "Integrações"],
      link: "https://vagas-linkedin.vercel.app",
      github: "https://github.com/dnlortega/vagas-linkedin",
      image: "https://api.microlink.io/?url=https://vagas-linkedin.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Kanban Tarefas",
      description: "Sistema de gerenciamento de tarefas em colunas no estilo Kanban, desenvolvido com foco em produtividade.",
      tags: ["TypeScript", "React", "Drag and Drop", "Tailwind CSS"],
      link: "https://kanban-tarefas-black.vercel.app",
      github: "https://github.com/dnlortega/kanban-tarefas",
      image: "https://api.microlink.io/?url=https://kanban-tarefas-black.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Presença Next.js",
      description: "Aplicação para controle de presença e lista de convidados em eventos.",
      tags: ["TypeScript", "Next.js", "Vercel"],
      link: "https://presenca-nextjs-l6a2.vercel.app",
      github: "https://github.com/dnlortega/presenca-nextjs",
      image: "https://api.microlink.io/?url=https://presenca-nextjs-l6a2.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Condomínio",
      description: "Sistema de gestão e informações para moradores do condomínio Recanto dos Pássaros.",
      tags: ["TypeScript", "React", "Dashboard"],
      link: "https://recantopassaros.vercel.app",
      github: "https://github.com/dnlortega/condominio",
      image: "https://api.microlink.io/?url=https://recantopassaros.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Barbeiro",
      description: "Landing page e sistema de agendamento para barbearias.",
      tags: ["TypeScript", "Frontend", "Agendamento"],
      link: "https://barbeiro-brown.vercel.app",
      github: "https://github.com/dnlortega/barbeiro",
      image: "https://api.microlink.io/?url=https://barbeiro-brown.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Chá de Bebê",
      description: "Página interativa para lista de presentes e confirmação de presença em Chá de Bebê.",
      tags: ["TypeScript", "React", "Lista de Presentes"],
      link: "https://cha-bebe.vercel.app",
      github: "https://github.com/dnlortega/Cha-bebe",
      image: "https://api.microlink.io/?url=https://cha-bebe.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "NovaCar",
      description: "Plataforma de exibição e busca de veículos novos e seminovos.",
      tags: ["TypeScript", "Frontend", "Automotivo"],
      link: "https://novacar-five.vercel.app",
      github: "https://github.com/dnlortega/novacar",
      image: "https://api.microlink.io/?url=https://novacar-five.vercel.app&screenshot=true&meta=false&embed=screenshot.url"
    }
  ];

  return (
    <main className="min-h-screen relative selection:bg-primary/30 overflow-x-hidden flex flex-col items-center">
      
      {/* PROGRAMMER THEMED BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      {/* BACKGROUND EFFECTS (STATIC) */}
      <div className="fixed inset-0 w-full h-full -z-20 bg-background pointer-events-none overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Static Glowing Orbs */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[150px] translate-y-1/3" />
      </div>

      {/* NAVIGATION */}
      <Navbar lang={lang} setLang={setLang} />

      {/* FLOATING WHATSAPP BUTTON (ALL SCREENS) */}
      <a
        href="https://wa.me/5514981294913?text=Ol%C3%A1%20Daniel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-6 right-6 z-[60] p-3 md:p-4 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        title="Fale comigo no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* SECTIONS */}
      <HeroSection lang={lang} />
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full opacity-50" />
      
      <ExperienceSection lang={lang} />
      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full opacity-50" />
      
      <ProjectsSection lang={lang} projects={projects} />
      
      <SkillsSection lang={lang} />
      
      <EducationSection lang={lang} />
      
      <CertificatesSection lang={lang} />
      
      <ContactSection lang={lang} />

      {/* FOOTER */}
      <Footer lang={lang} />

    </main>
  );
}
