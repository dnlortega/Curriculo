import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, ExternalLink, MessageCircle, Code2, Briefcase, User, Mail } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "Vagas LinkedIn",
      description: "Agregador de vagas de TI para Bauru SP. Busca oportunidades no LinkedIn, VagasBauru, Indeed e Catho.",
      tags: ["JavaScript", "Next.js", "Scraping", "Integrações"],
      link: "https://vagas-linkedin.vercel.app",
      github: "https://github.com/dnlortega/vagas-linkedin",
      image: "https://vagas-linkedin.vercel.app/og-image.jpg" // Placeholder if needed, but since it's an aggregator maybe we can use a generic IT icon or placeholder
    },
    {
      title: "Kanban Tarefas",
      description: "Sistema de gerenciamento de tarefas em colunas no estilo Kanban, desenvolvido com foco em produtividade.",
      tags: ["TypeScript", "React", "Drag and Drop", "Tailwind CSS"],
      link: "https://kanban-tarefas-black.vercel.app",
      github: "https://github.com/dnlortega/kanban-tarefas",
    },
    {
      title: "Presença Next.js",
      description: "Aplicação para controle de presença e lista de convidados em eventos.",
      tags: ["TypeScript", "Next.js", "Vercel"],
      link: "https://presenca-nextjs-l6a2.vercel.app",
      github: "https://github.com/dnlortega/presenca-nextjs",
    },
    {
      title: "Condomínio",
      description: "Sistema de gestão e informações para moradores do condomínio Recanto dos Pássaros.",
      tags: ["TypeScript", "React", "Dashboard"],
      link: "https://recantopassaros.vercel.app",
      github: "https://github.com/dnlortega/condominio",
    },
    {
      title: "Barbeiro",
      description: "Landing page e sistema de agendamento para barbearias.",
      tags: ["TypeScript", "Frontend", "Agendamento"],
      link: "https://barbeiro-brown.vercel.app",
      github: "https://github.com/dnlortega/barbeiro",
    },
    {
      title: "Chá de Bebê",
      description: "Página interativa para lista de presentes e confirmação de presença em Chá de Bebê.",
      tags: ["TypeScript", "React", "Lista de Presentes"],
      link: "https://cha-bebe.vercel.app",
      github: "https://github.com/dnlortega/Cha-bebe",
    },
    {
      title: "NovaCar",
      description: "Plataforma de exibição e busca de veículos novos e seminovos.",
      tags: ["TypeScript", "Frontend", "Automotivo"],
      link: "https://novacar-five.vercel.app",
      github: "https://github.com/dnlortega/novacar",
    }
  ];

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 overflow-x-hidden flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* HEADER SECTION */}
      <header className="container max-w-5xl mx-auto px-4 py-20 flex flex-col items-center justify-center text-center space-y-8 min-h-[70vh]">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Image 
            src="/profile.jpg" 
            alt="Daniel Ortega Pereira" 
            width={150} 
            height={150} 
            className="relative rounded-full border-4 border-background object-cover shadow-2xl"
          />
        </div>
        
        <div className="space-y-4 max-w-3xl flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60 text-center">
            Daniel Ortega Pereira
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground text-center">
            Desenvolvedor Full Stack & Especialista em React/Next.js
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl text-center mt-6">
            Construindo interfaces modernas, rápidas e experiências de usuário incríveis com o ecossistema JavaScript moderno. 
            Mais de dezenas de projetos entregues com alta qualidade e deploy automatizado na Vercel.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button asChild size="lg" className="rounded-full gap-2">
            <Link href="https://github.com/dnlortega/" target="_blank">
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full gap-2 border-primary/20 hover:bg-primary/10">
            <Link href="https://www.linkedin.com/in/daniel-op" target="_blank">
              <Linkedin className="w-5 h-5 text-[#0A66C2]" />
              LinkedIn
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="rounded-full gap-2">
            <Link href="https://vercel.com/dnlortegas-projects" target="_blank">
              <ExternalLink className="w-5 h-5" />
              Vercel
            </Link>
          </Button>
        </div>
      </header>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full max-w-5xl" />

      {/* PROJECTS SECTION */}
      <section className="container max-w-5xl mx-auto px-4 py-24 space-y-12 flex flex-col items-center">
        <div className="space-y-2 text-center flex flex-col items-center">
          <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
            <Code2 className="w-8 h-8 text-primary" /> Meus Projetos na Vercel
          </h3>
          <p className="text-muted-foreground text-center">Confira algumas das aplicações reais que desenvolvi recentemente.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden border-primary/10 hover:border-primary/50 transition-colors bg-card/50 backdrop-blur-sm group items-center text-center">
              <div className="h-48 w-full bg-muted/50 relative overflow-hidden flex items-center justify-center border-b border-border/50">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <Briefcase className="w-16 h-16 text-muted-foreground/30 group-hover:scale-110 group-hover:text-primary/50 transition-all duration-500" />
              </div>
              <CardHeader className="flex flex-col items-center text-center">
                <CardTitle className="text-xl group-hover:text-primary transition-colors text-center">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-center">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow w-full flex justify-center">
                <div className="flex flex-wrap justify-center gap-2">
                  {project.tags.map(tag => (
                    <Badge variant="secondary" key={tag} className="bg-primary/5 hover:bg-primary/20 border-primary/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3 pt-4 border-t border-border/50 w-full flex flex-col sm:flex-row justify-center">
                <Button asChild size="sm" className="w-full gap-2">
                  <Link href={project.link} target="_blank">
                    <ExternalLink className="w-4 h-4" /> Deploy
                  </Link>
                </Button>
                <Button asChild size="sm" variant="outline" className="w-full gap-2">
                  <Link href={project.github} target="_blank">
                    <Github className="w-4 h-4" /> Código
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="container max-w-5xl mx-auto px-4 py-24 space-y-12 flex flex-col items-center">
        <div className="space-y-2 text-center flex flex-col items-center">
          <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
            <User className="w-8 h-8 text-primary" /> Habilidades
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Shadcn UI', 'Node.js', 'Vercel', 'Git & GitHub'].map(skill => (
            <div key={skill} className="px-6 py-3 rounded-full border border-primary/20 bg-card/50 backdrop-blur-sm text-foreground font-medium shadow-sm hover:border-primary transition-colors cursor-default text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-12 bg-muted/20 w-full flex flex-col items-center">
        <div className="container max-w-5xl mx-auto px-4 text-center text-muted-foreground flex flex-col items-center justify-center gap-4">
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

      {/* FLOATING WHATSAPP BUTTON CENTERED */}
      <Link 
        href="https://wa.me/55014981294913" 
        target="_blank" 
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-bold text-lg whitespace-nowrap">
          WhatsApp 014 98129-4913
        </span>
      </Link>

    </main>
  );
}
