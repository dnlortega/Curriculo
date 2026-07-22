"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { translations, Language } from "@/i18n";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IssuerLogo } from "@/components/ui/issuer-logo";

interface EducationSectionProps {
  lang: Language;
}

export function EducationSection({ lang }: EducationSectionProps) {
  const t = translations[lang];

  return (
    <section
      id="formacao"
      className="w-full px-6 md:px-12 lg:px-24 py-16 space-y-8 flex flex-col items-center pt-28"
    >
      <div className="space-y-2 text-center flex flex-col items-center">
        <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8 text-primary" /> {t.education.title}
        </h3>
      </div>

      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            <CardHeader className="relative z-10 pb-2">
              <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                <div className="flex gap-4 items-start">
                  <IssuerLogo issuer="UNINTER Centro Universitário Internacional" className="w-12 h-12 rounded-lg shadow-sm hidden sm:block" />
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {t.education.course}
                    </CardTitle>
                    <CardDescription className="text-lg mt-1 font-medium text-primary flex items-center gap-2">
                      <IssuerLogo issuer="UNINTER Centro Universitário Internacional" className="w-5 h-5 sm:hidden" />
                      UNINTER Centro Universitário Internacional
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="bg-background/50 backdrop-blur whitespace-nowrap border-primary/30 py-1 text-sm font-medium">
                  {t.education.date}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 pt-4">
              <p className="text-muted-foreground mb-4">
                {t.education.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.education.badges.map((badge, i) => (
                  <Badge key={i} variant={i === 2 ? "outline" : "secondary"} className={i === 2 ? "border-primary/20 bg-background" : "bg-primary/10"}>
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
