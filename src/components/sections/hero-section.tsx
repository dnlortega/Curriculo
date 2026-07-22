"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ExternalLink, Download } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { translations, Language } from "@/i18n";

interface HeroSectionProps {
  lang: Language;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang];

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <header id="home" className="w-full px-6 md:px-12 lg:px-24 py-24 min-h-screen flex flex-col justify-center pt-32 overflow-hidden relative">
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Text Content */}
        <div className="space-y-6 max-w-2xl text-center md:text-left flex-1">
          <motion.h1 
            variants={itemVariant}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-muted-foreground leading-[1.1]"
          >
            Daniel Ortega Pereira
          </motion.h1>
          
          <motion.h2 
            variants={itemVariant}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground min-h-[40px]"
          >
            <span className="text-primary font-bold">
              <TypeAnimation
                key={lang}
                sequence={[
                  t.hero.titles[0], 2000,
                  t.hero.titles[1], 2000,
                  t.hero.titles[2], 2000,
                  t.hero.titles[3], 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h2>
          
          <motion.p 
            variants={itemVariant}
            className="text-lg text-muted-foreground/80 mt-6 leading-relaxed max-w-xl mx-auto md:mx-0" 
            dangerouslySetInnerHTML={{ __html: t.hero.description }} 
          />

          <motion.div 
            variants={itemVariant}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-8"
          >
            <Link href="https://github.com/dnlortega/" target="_blank" className={cn(buttonVariants({ size: "icon" }), "rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform")} title="GitHub">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/daniel-op" target="_blank" className={cn(buttonVariants({ variant: "outline", size: "icon" }), "rounded-full w-14 h-14 border-primary/20 hover:bg-primary/10 shadow-lg hover:scale-110 transition-transform")} title="LinkedIn">
              <Linkedin className="w-6 h-6 text-[#0A66C2] dark:text-foreground/80" />
            </Link>
            <Link href="https://vercel.com/dnlortegas-projects" target="_blank" className={cn(buttonVariants({ variant: "secondary", size: "icon" }), "rounded-full w-14 h-14 shadow-lg hover:scale-110 transition-transform")} title="Vercel Projects">
              <ExternalLink className="w-6 h-6" />
            </Link>
            <Link href={lang === 'en' ? "/resume-en.pdf" : "/curriculo.pdf"} target="_blank" className={cn(buttonVariants({ variant: "default" }), "rounded-full h-14 px-6 shadow-lg hover:scale-105 transition-transform ml-2 gap-2 text-md")} title={t.hero.downloadCV}>
              <Download className="w-5 h-5" /> {t.hero.downloadCV}
            </Link>
          </motion.div>
        </div>

        {/* Profile Image (Lateral) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="relative group flex-shrink-0 mb-8 md:mb-0"
        >
          {/* Decorative background blur */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-6 bg-gradient-to-tr from-primary/40 via-purple-500/30 to-background rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-500"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/profile.jpg"
              alt="Daniel Ortega Pereira"
              width={320}
              height={320}
              className="relative rounded-full border-4 border-background object-cover shadow-2xl z-10 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 ring-4 ring-primary/10 hover:ring-primary/40 transition-all duration-300 group-hover:scale-105"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </header>
  );
}
