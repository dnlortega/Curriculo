"use client";

import { motion } from "framer-motion";
import { Zap, Code2, LayoutTemplate, Server } from "lucide-react";
import { translations, Language } from "@/i18n";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  lang: Language;
}

const skillCategories = [
  {
    title: "Frontend & UI",
    icon: <LayoutTemplate className="w-5 h-5 text-blue-500" />,
    skills: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "000000", darkInvert: true },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "Shadcn UI", slug: "shadcnui", color: "000000", darkInvert: true },
      { name: "Framer Motion", slug: "framer", color: "0055FF" },
    ]
  },
  {
    title: "Languages",
    icon: <Code2 className="w-5 h-5 text-yellow-500" />,
    skills: [
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", slug: "css", color: "1572B6" },
    ]
  },
  {
    title: "Backend & DevOps",
    icon: <Server className="w-5 h-5 text-green-500" />,
    skills: [
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Vercel", slug: "vercel", color: "000000", darkInvert: true },
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "181717", darkInvert: true },
    ]
  }
];

export function SkillsSection({ lang }: SkillsSectionProps) {
  const t = translations[lang];

  return (
    <section
      id="habilidades"
      className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-16 flex flex-col items-center bg-muted/5 border-y border-border/50 pt-28 relative overflow-hidden"
    >
      <div className="absolute left-0 bottom-0 w-[40vw] h-[40vw] bg-purple-600/5 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="space-y-4 text-center flex flex-col items-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight inline-flex items-center justify-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
        >
          <Zap className="w-10 h-10 text-primary" /> {t.skills.title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center max-w-2xl text-lg"
        >
          {lang === 'pt' ? 'Algumas das tecnologias com as quais trabalho diariamente:' : 'Some of the technologies I work with daily:'}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            className="flex flex-col bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 hover:shadow-[0_0_30px_rgba(var(--primary),0.1)] hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8 border-b border-border/50 pb-4">
              <div className="p-2 bg-background rounded-lg shadow-sm border border-border/50">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
            </div>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 }
                }
              }}
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.5, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
                  }}
                  whileHover={{ scale: 1.2, rotate: 5, zIndex: 10 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border border-border/50 bg-background/80 backdrop-blur-sm shadow-sm hover:border-primary/50 hover:shadow-primary/20 hover:shadow-xl transition-all cursor-default group"
                  title={skill.name}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                    alt={skill.name}
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform duration-300 drop-shadow-md",
                      skill.darkInvert ? "dark:invert" : ""
                    )}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
