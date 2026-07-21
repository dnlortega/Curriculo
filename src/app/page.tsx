import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MessageCircle, Code2, User } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

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

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 overflow-x-hidden flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* HEADER SECTION */}
      <header className="container max-w-6xl mx-auto px-4 py-24 min-h-[80vh] flex flex-col justify-center">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="space-y-6 max-w-2xl text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground leading-[1.1]">
              Daniel <br className="hidden md:block"/> Ortega
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
              Desenvolvedor Full Stack & <span className="text-primary">Especialista Next.js</span>
            </h2>
            <p className="text-lg text-muted-foreground/80 mt-6 leading-relaxed max-w-xl mx-auto md:mx-0">
              Construindo interfaces modernas, rápidas e experiências de usuário incríveis com o ecossistema JavaScript. 
              Múltiplos projetos entregues com alta qualidade e deploy automatizado na Vercel.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 pt-8">
              <Link href="https://github.com/dnlortega/" target="_blank" className={cn(buttonVariants({ size: "icon" }), "rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform")} title="GitHub">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/daniel-op" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-full w-14 h-14 border-primary/20 hover:bg-primary/10 shadow-lg hover:scale-110 transition-transform")} title="LinkedIn">
                <Linkedin className="w-6 h-6 text-[#0A66C2] dark:text-foreground/80" />
              </Link>
              <Link href="https://vercel.com/dnlortegas-projects" target="_blank" className={cn(buttonVariants({ variant: "secondary", size: "icon" }), "rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform")} title="Vercel Projects">
                <ExternalLink className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Profile Image (Lateral) */}
          <div className="relative group flex-shrink-0 mb-8 md:mb-0">
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
          </div>

        </div>
      </header>

      <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full max-w-6xl opacity-50" />

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
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-20 group-hover:opacity-40 transition-opacity z-10 pointer-events-none"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={`Screenshot do projeto ${project.title}`} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
              </div>
              <CardHeader className="flex flex-col items-center text-center">
                <CardTitle className="text-xl group-hover:text-primary transition-colors text-center">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 text-center">{project.description}</CardDescription>
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
              <CardFooter className="gap-3 pt-4 border-t border-border/50 w-full flex justify-center">
                <Link href={project.link} target="_blank" className={cn(buttonVariants({ size: "icon", variant: "default" }), "w-10 h-10 rounded-full shadow-sm")} title="Deploy">
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link href={project.github} target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "w-10 h-10 rounded-full shadow-sm border-primary/20")} title="Código">
                  <Github className="w-4 h-4" />
                </Link>
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
