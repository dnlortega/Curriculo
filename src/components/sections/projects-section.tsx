"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";
import { Github } from "@/components/icons";
import Link from "next/link";
import { translations, Language } from "@/i18n";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
  lang: Language;
}

export function ProjectsSection({ lang }: ProjectsSectionProps) {
  const t = translations[lang];

  const [projectFilter, setProjectFilter] = useState(t.projects.tags.all);
  
  const allProjectTags = useMemo(() => {
    const tags = new Set<string>();
    t.projects.items.forEach((p: any) => p.tags.forEach((tag: string) => tags.add(tag)));
    return [t.projects.tags.all, ...Array.from(tags)];
  }, [t]);

  const filteredProjects = useMemo(() => {
    if (projectFilter === t.projects.tags.all) return t.projects.items;
    return t.projects.items.filter((p: any) => p.tags.includes(projectFilter));
  }, [projectFilter, t]);

  return (
    <section
      id="projetos"
      className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-16 flex flex-col items-center pt-28 relative"
    >
      {/* Glow Effects at the background of the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="space-y-4 text-center flex flex-col items-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight inline-flex items-center justify-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
        >
          <Briefcase className="w-10 h-10 text-primary" /> {t.projects.title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center max-w-2xl text-lg"
        >
          {t.projects.description}
        </motion.p>
      </div>

      {/* Modern Filter Pills */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 w-full max-w-4xl"
      >
        {allProjectTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setProjectFilter(tag)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border-2",
              projectFilter === tag
                ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)] scale-105"
                : "bg-background/50 border-primary/20 hover:border-primary hover:bg-primary/5 text-muted-foreground hover:text-primary backdrop-blur-md"
            )}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Premium Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
              key={project.title}
              className="w-full h-full group"
            >
              {/* Premium Card Design with Hover 3D-like effect */}
              <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-transparent p-[1px] transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--primary),0.2)] group-hover:-translate-y-2">
                <Card className="flex flex-col h-full overflow-hidden border-none bg-card/60 backdrop-blur-xl relative z-10 rounded-2xl">
                  
                  {/* Image Container with Glow */}
                  <div className="h-56 w-full relative overflow-hidden flex items-center justify-center bg-muted/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none mix-blend-overlay"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={`Screenshot do projeto ${project.title}`}
                      className="w-full h-full object-cover object-top group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  <CardHeader className="flex flex-col items-start pt-6 pb-2 relative z-20">
                    <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:text-primary transition-all">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 text-left mt-2 text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow w-full flex flex-col justify-start py-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          variant="secondary" 
                          key={tag} 
                          className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors px-3 py-1 font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="gap-4 pt-4 pb-6 w-full flex justify-start border-t border-border/30">
                    <Link 
                      href={project.link} 
                      target="_blank" 
                      className={cn(buttonVariants({ variant: "default" }), "rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 group/btn transition-all")} 
                      title="Live Demo"
                    >
                      Live Demo <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Link>
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      className={cn(buttonVariants({ variant: "outline" }), "rounded-xl border-border/50 hover:bg-muted/50 transition-colors")} 
                      title="Source Code"
                    >
                      <Github className="w-4 h-4 mr-2" /> Code
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
