"use client";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageCircle, Code2, User, Award, Calendar, GraduationCap, ChevronDown, ChevronUp, Download, Mail, Send, Search, ShieldCheck, Hash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cursos } from "@/data/cursos";
import { useState, useMemo } from "react";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const getIssuerDomain = (issuer: string) => {
  const map: Record<string, string> = {
    "Unimed Bauru": "unimedbauru.com.br",
    "HOSPITAL UNIMED BAURU": "unimedbauru.com.br",
    "Hashtag Treinamentos": "hashtagtreinamentos.com",
    "Full Stack Club": "fullstackclub.com.br",
    "Xperiun | Data Analytics": "xperiun.com",
    "TreinaWeb": "treinaweb.com.br",
    "Dev em Dobro": "devemdobro.com",
    "Rocketseat": "rocketseat.com.br",
    "Lab - Hub Unimed": "unimed.coop.br",
    "Alura": "alura.com.br",
    "Daxus (antiga Empowerdata)": "daxus.com.br",
    "Udemy Alumni": "udemy.com",
    "Unimed Fesp": "unimedfesp.coop.br",
    "SESCOOP/SP": "sescoopsp.coop.br",
    "UNINTER Centro Universitário Internacional": "uninter.com",
    "Prefeitura Municipal de Bauru": "bauru.sp.gov.br",
    "Microlins Franchising": "microlins.com.br",
    "Microcamp": "microcamp.com.br",
    "SOS Computadores": "sos.com.br"
  };
  return map[issuer] || null;
};

const IssuerLogo = ({ issuer, className }: { issuer: string; className?: string }) => {
  const domain = getIssuerDomain(issuer);
  const [errorLevel, setErrorLevel] = useState(0);
  
  const googleFavicon = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : null;
  const uiAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(issuer)}&background=random&color=fff&size=128`;
  
  let currentSrc = uiAvatar;
  if (domain) {
    if (errorLevel === 0) {
      currentSrc = `https://logo.clearbit.com/${domain}`;
    } else if (errorLevel === 1) {
      currentSrc = googleFavicon!;
    }
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img 
      src={currentSrc} 
      alt={`Logo ${issuer}`} 
      className={cn("rounded bg-background object-cover", className)}
      onError={() => {
        if (errorLevel < 2) {
          setErrorLevel(prev => prev + 1);
        }
      }}
    />
  );
};

export default function Home() {
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

  const [courseFilter, setCourseFilter] = useState<string>("Todos");
  const [courseSearch, setCourseSearch] = useState<string>("");
  const [visibleCoursesCount, setVisibleCoursesCount] = useState<number>(9);
  
  const [projectFilter, setProjectFilter] = useState<string>("Todos");

  // Project Filtering
  const allProjectTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tags.add(t)));
    return ["Todos", ...Array.from(tags)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (projectFilter === "Todos") return projects;
    return projects.filter(p => p.tags.includes(projectFilter));
  }, [projects, projectFilter]);

  // Course Filtering
  const allCourseSkills = useMemo(() => {
    const skills = new Set<string>();
    cursos.forEach(c => {
      if (c.skills) {
        c.skills.split(',').forEach(s => skills.add(s.trim().replace(' e mais ', '').replace(/[0-9]+ competências/, '').trim()));
      }
    });
    // Limpar strings vazias ou muito longas para os filtros principais
    const cleanSkills = Array.from(skills).filter(s => s.length > 0 && s.length < 20).slice(0, 8); 
    return ["Todos", ...cleanSkills];
  }, []);

  const filteredCourses = useMemo(() => {
    let filtered = cursos;
    if (courseFilter !== "Todos") {
      filtered = filtered.filter(c => c.skills?.includes(courseFilter));
    }
    if (courseSearch.trim() !== "") {
      const q = courseSearch.toLowerCase();
      filtered = filtered.filter(c => 
        c.title.toLowerCase().includes(q) || 
        (c.issuer && c.issuer.toLowerCase().includes(q))
      );
    }
    return filtered;
  }, [courseFilter, courseSearch]);

  const displayedCourses = filteredCourses.slice(0, visibleCoursesCount);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Formação', href: '#formacao' },
    { name: 'Certificados', href: '#certificados' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <main className="min-h-screen relative selection:bg-primary/30 overflow-x-hidden flex flex-col items-center">
      
      {/* FLOATING PILL MENU */}
      <motion.nav 
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-4 md:top-8 left-1/2 z-50 w-[95%] md:w-auto max-w-[90vw] bg-background/60 backdrop-blur-xl border border-primary/20 rounded-full px-4 md:px-6 py-2.5 flex justify-between md:justify-center items-center shadow-2xl shadow-primary/5 gap-4 md:gap-8"
      >
        <a href="#home" className="font-black text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 hover:scale-105 transition-transform shrink-0">
          DO.
        </a>
        
        <ul className="flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {navItems.map((item) => (
            <li key={item.name} className="shrink-0">
              <a 
                href={item.href} 
                className="px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 block"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 w-full h-full -z-20 bg-background pointer-events-none overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-purple-600/15 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[150px] translate-y-1/3" />
      </div>
      
      {/* HEADER SECTION */}
      <header id="home" className="w-full px-6 md:px-12 lg:px-24 py-24 min-h-screen flex flex-col justify-center pt-32">
        <motion.div 
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          
          {/* Text Content */}
          <motion.div variants={fadeUpVariant} className="space-y-6 max-w-2xl text-center md:text-left flex-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground leading-[1.1]">
              Daniel Ortega Pereira
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
              Desenvolvedor Full Stack & <span className="text-primary">Especialista Next.js</span>
            </h2>
            <p className="text-lg text-muted-foreground/80 mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
              Construindo interfaces modernas, rápidas e experiências de usuário incríveis com o ecossistema JavaScript. 
              Múltiplos projetos entregues com alta qualidade e deploy automatizado na Vercel.
            </p>

            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-8">
              <Link href="https://github.com/dnlortega/" target="_blank" className={cn(buttonVariants({ size: "icon" }), "rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform")} title="GitHub">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/daniel-op" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-full w-14 h-14 border-primary/20 hover:bg-primary/10 shadow-lg hover:scale-110 transition-transform")} title="LinkedIn">
                <Linkedin className="w-6 h-6 text-[#0A66C2] dark:text-foreground/80" />
              </Link>
              <Link href="https://vercel.com/dnlortegas-projects" target="_blank" className={cn(buttonVariants({ variant: "secondary", size: "icon" }), "rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform")} title="Vercel Projects">
                <ExternalLink className="w-6 h-6" />
              </Link>
              <Link href="/curriculo.pdf" target="_blank" className={cn(buttonVariants({ variant: "default" }), "rounded-full h-14 px-6 shadow-lg hover:scale-105 transition-transform ml-2 gap-2 text-md")} title="Baixar CV">
                <Download className="w-5 h-5" /> Baixar CV
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile Image (Lateral) */}
          <motion.div variants={fadeUpVariant} className="relative group flex-shrink-0 mb-8 md:mb-0">
            {/* Decorative background blur */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/40 via-purple-500/30 to-background rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
            
            {/* Outer animated rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 scale-[1.15] animate-[spin_10s_linear_infinite] hidden md:block"></div>
            <div className="absolute inset-0 rounded-full border border-muted-foreground/20 scale-[1.3] animate-[spin_15s_linear_infinite_reverse] hidden md:block"></div>
            
            <Image 
              src="/profile.jpg" 
              alt="Daniel Ortega Pereira" 
              width={320} 
              height={320} 
              className="relative rounded-full border-4 border-background object-cover shadow-2xl z-10 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 ring-4 ring-primary/10 group-hover:ring-primary/40 group-hover:-translate-y-2 transition-all duration-700"
              priority
            />
          </motion.div>

        </motion.div>
      </header>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full opacity-50" />

      {/* PROJECTS SECTION */}
      <motion.section 
        id="projetos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-12 flex flex-col items-center pt-28"
      >
        <motion.div variants={fadeUpVariant} className="space-y-2 text-center flex flex-col items-center">
          <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
            <Code2 className="w-8 h-8 text-primary" /> Meus Projetos na Vercel
          </h3>
          <p className="text-muted-foreground text-center">Confira algumas das aplicações reais que desenvolvi recentemente.</p>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-2 w-full max-w-4xl">
          {allProjectTags.map(tag => (
            <button 
              key={tag}
              onClick={() => setProjectFilter(tag)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border",
                projectFilter === tag 
                  ? "bg-primary text-primary-foreground border-primary shadow-md scale-105" 
                  : "bg-card/50 border-primary/20 hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title} 
                className="w-full h-full"
              >
              <Card className="flex flex-col h-full overflow-hidden border-primary/10 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm group items-center text-center">
                <div className="h-48 w-full bg-muted/50 relative overflow-hidden flex items-center justify-center border-b border-border/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-20 group-hover:opacity-40 transition-opacity z-10 pointer-events-none"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={project.image} 
                    alt={`Screenshot do projeto ${project.title}`} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                </div>
                <CardHeader className="flex flex-col items-center text-center pb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors text-center">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-center">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow w-full flex justify-center py-2">
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tags.map(tag => (
                      <Badge variant="secondary" key={tag} className="bg-primary/5 hover:bg-primary/20 border-primary/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3 pt-4 border-t border-border/50 w-full flex justify-center mt-auto">
                  <Link href={project.link} target="_blank" className={cn(buttonVariants({ size: "icon", variant: "default" }), "w-10 h-10 rounded-full shadow-sm")} title="Deploy">
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <Link href={project.github} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "w-10 h-10 rounded-full shadow-sm border-primary/20")} title="Código">
                    <Github className="w-4 h-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      {/* SKILLS SECTION */}
      <motion.section 
        id="habilidades"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-12 flex flex-col items-center bg-muted/5 border-y border-border/50 pt-28"
      >
        <motion.div variants={fadeUpVariant} className="space-y-2 text-center flex flex-col items-center">
          <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-primary" /> Habilidades
          </h3>
        </motion.div>
        <motion.div variants={fadeUpVariant} className="flex flex-wrap justify-center gap-4 w-full">
          {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Shadcn UI', 'Node.js', 'Vercel', 'Git & GitHub'].map(skill => (
            <div key={skill} className="px-6 py-3 rounded-full border border-primary/20 bg-card/80 backdrop-blur-sm text-foreground font-medium shadow-sm hover:border-primary transition-colors cursor-default text-center hover:scale-105">
              {skill}
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* ACADEMIC FORMATION SECTION */}
      <motion.section 
        id="formacao"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full px-6 md:px-12 lg:px-24 py-16 space-y-8 flex flex-col items-center pt-28"
      >
        <motion.div variants={fadeUpVariant} className="space-y-2 text-center flex flex-col items-center">
          <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" /> Formação Acadêmica
          </h3>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="w-full max-w-3xl">
          <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <CardHeader className="relative z-10 pb-2">
              <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                <div className="flex gap-4 items-start">
                  <IssuerLogo issuer="UNINTER Centro Universitário Internacional" className="w-12 h-12 rounded-lg shadow-sm hidden sm:block" />
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      Análise e Desenvolvimento de Sistemas
                    </CardTitle>
                    <CardDescription className="text-lg mt-1 font-medium text-primary flex items-center gap-2">
                      <IssuerLogo issuer="UNINTER Centro Universitário Internacional" className="w-5 h-5 sm:hidden" />
                      UNINTER Centro Universitário Internacional
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="bg-background/50 backdrop-blur whitespace-nowrap border-primary/30 py-1 text-sm font-medium">
                  Jan 2023 – Jun 2025
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 pt-4">
              <p className="text-muted-foreground mb-4">
                Graduação (Tecnólogo) focada no desenvolvimento de software, engenharia de sistemas, metodologias ágeis e inovação tecnológica.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10">Gestão de TI</Badge>
                <Badge variant="secondary" className="bg-primary/10">Satisfação do cliente</Badge>
                <Badge variant="secondary" className="bg-primary/5">+12 competências</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* CERTIFICATIONS SECTION */}
      <motion.section 
        id="certificados"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-12 flex flex-col items-center pt-28"
      >
        <motion.div variants={fadeUpVariant} className="space-y-2 text-center flex flex-col items-center">
          <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-primary" /> Certificados e Cursos
          </h3>
          <p className="text-muted-foreground text-center">Explore meu arsenal de mais de {cursos.length} especializações tecnológicas.</p>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="flex flex-col items-center gap-6 w-full max-w-5xl">
          {/* Search Bar */}
          <div className="relative w-full max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar curso, instituição..." 
              value={courseSearch}
              onChange={(e) => {
                setCourseSearch(e.target.value);
                setVisibleCoursesCount(9);
              }}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-primary/20 bg-card/50 backdrop-blur-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm group-hover:shadow-md"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {allCourseSkills.map(skill => (
              <button 
                key={skill}
                onClick={() => { 
                  setCourseFilter(skill); 
                  setVisibleCoursesCount(9); 
                }}
                className={cn(
                  "px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border",
                  courseFilter === skill 
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105" 
                    : "bg-card/50 border-primary/10 hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
                )}
              >
                {skill}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {displayedCourses.map((curso, index) => (
              <motion.div 
                layout
                key={`${curso.title}-${index}`} 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <Card className="h-full border-primary/10 hover:border-primary/40 transition-all duration-500 bg-gradient-to-br from-card/40 to-card/10 hover:bg-card/60 backdrop-blur-md flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden">
                  {/* Glowing Edge Effect */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/50 to-purple-500/50 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"></div>
                  
                  <CardHeader className="p-6 pb-4">
                    <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                      {curso.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 text-sm flex-grow flex flex-col justify-end space-y-4">
                    
                    {/* Issuer & Shield */}
                    {curso.issuer && (
                      <div className="flex items-center gap-3 p-2 rounded-lg bg-background/50 border border-border/50 group-hover:border-primary/20 transition-colors">
                        <IssuerLogo issuer={curso.issuer} className="w-8 h-8 rounded-md shadow-sm" /> 
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground flex items-center gap-1">
                            {curso.issuer}
                            <ShieldCheck className="w-4 h-4 text-primary/80" />
                          </span>
                          {curso.date && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {curso.date}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Credential */}
                    {curso.credential && (
                      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-primary/5 p-1.5 rounded border border-primary/10 truncate">
                        <Hash className="w-3 h-3 text-primary shrink-0" />
                        <span className="truncate" title={curso.credential}>{curso.credential}</span>
                      </div>
                    )}

                    {/* Skills Badges */}
                    {curso.skills && (
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {curso.skills.split(',').slice(0, 3).map((skill, idx) => (
                          <Badge variant="secondary" key={idx} className="text-[10px] px-2 py-0.5 bg-muted/50 border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                            {skill.trim().replace(' e mais ', ' +')}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State for Search */}
        {displayedCourses.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center text-muted-foreground">
            Nenhum curso encontrado com esses filtros.
          </motion.div>
        )}

        {/* Load More Pagination */}
        {filteredCourses.length > visibleCoursesCount && (
          <motion.div variants={fadeUpVariant} className="pt-8">
            <button
              onClick={() => setVisibleCoursesCount(prev => prev + 9)}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-8 gap-2 border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-lg transition-all duration-300 group"
              )}
            >
              Carregar mais cursos <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </motion.section>

      {/* CONTACT SECTION */}
      <motion.section 
        id="contato"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-12 flex flex-col items-center bg-muted/5 border-t border-border/50"
      >
        <motion.div variants={fadeUpVariant} className="space-y-2 text-center flex flex-col items-center max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
            <Mail className="w-8 h-8 text-primary" /> Vamos Conversar?
          </h3>
          <p className="text-muted-foreground text-center">
            Estou sempre aberto a novos desafios e oportunidades. Me mande uma mensagem e responderei o mais rápido possível!
          </p>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="w-full max-w-2xl">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl shadow-primary/5">
            <CardContent className="p-6 sm:p-10 flex flex-col gap-6">
              <form action="https://formsubmit.co/0ac4e9bdb09ec9ff4761f2fed39d1f2c" method="POST" className="flex flex-col gap-6">
                {/* Configuration for FormSubmit */}
                <input type="hidden" name="_subject" value="Novo Contato do Portfólio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Nome</label>
                    <input type="text" name="name" required placeholder="Seu nome completo" className="w-full p-3 rounded-md border border-input bg-background hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">E-mail</label>
                    <input type="email" name="email" required placeholder="seu@email.com" className="w-full p-3 rounded-md border border-input bg-background hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Mensagem</label>
                  <textarea name="message" required rows={4} placeholder="Como posso te ajudar?" className="w-full p-3 rounded-md border border-input bg-background hover:border-primary/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"></textarea>
                </div>
                <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full gap-2 mt-2")}>
                  Enviar Mensagem <Send className="w-4 h-4" />
                </button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t py-12 bg-muted/20 w-full flex flex-col items-center">
        <div className="w-full px-6 md:px-12 lg:px-24 text-center text-muted-foreground flex flex-col items-center justify-center gap-4">
          <p>© {new Date().getFullYear()} Daniel Ortega Pereira. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
            <Link href="https://github.com/dnlortega" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/daniel-op" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON CENTERED (ICON ONLY) */}
      <Link 
        href="https://wa.me/55014981294913" 
        target="_blank" 
        title="Me mande uma mensagem no WhatsApp"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-7 h-7" />
      </Link>

    </main>
  );
}
