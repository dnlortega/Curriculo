"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IssuerLogo } from "@/components/ui/issuer-logo";
import { translations, Language } from "@/i18n";

interface ExperienceSectionProps {
  lang: Language;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const t = translations[lang];

  return (
    <section
      id="experiencia"
      className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-16 flex flex-col items-center pt-28 bg-muted/5 border-b border-border/50 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>

      <div className="space-y-4 text-center flex flex-col items-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight inline-flex items-center justify-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500"
        >
          <User className="w-10 h-10 text-primary" /> {t.experience.title}
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center max-w-2xl text-lg"
        >
          {t.experience.description}
        </motion.p>
      </div>

      <div className="w-full max-w-4xl mt-8">
        {/* The Timeline Line */}
        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-12">
          
          {t.experience.jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Dot (Glowing on hover) */}
              <div className="absolute w-8 h-8 bg-background rounded-full -left-[17px] border-4 border-primary/20 group-hover:border-primary flex items-center justify-center shadow-md transition-colors duration-300 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              </div>

              {/* Job Card (Glassmorphism) */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="bg-card/40 backdrop-blur-md border border-border/50 group-hover:border-primary/50 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-colors duration-300 relative z-10"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{job.role}</h4>
                  <Badge variant="secondary" className="w-fit bg-primary/10 text-primary border-primary/20 px-3 py-1 font-semibold">{job.date}</Badge>
                </div>
                
                <h5 className="text-lg font-medium text-muted-foreground mb-6 flex items-center gap-3">
                  <IssuerLogo issuer={job.company} className="w-8 h-8 rounded-md bg-white shadow-sm" /> 
                  {job.company}
                </h5>
                
                <div 
                  className="text-muted-foreground leading-relaxed prose-sm dark:prose-invert max-w-none" 
                  dangerouslySetInnerHTML={{ __html: job.description }} 
                />
              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
