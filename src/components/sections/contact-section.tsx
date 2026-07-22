"use client";

import { Mail, MessageCircle } from "lucide-react";
import { translations, Language } from "@/i18n";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  lang: Language;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const t = translations[lang];

  return (
    <section
      id="contato"
      className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-12 flex flex-col items-center bg-muted/5 border-t border-border/50"
    >
      <div className="space-y-2 text-center flex flex-col items-center max-w-2xl">
        <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
          <Mail className="w-8 h-8 text-primary" /> {t.contact.title}
        </h3>
        <p className="text-muted-foreground text-center">
          {t.contact.description}
        </p>
      </div>

      <div className="w-full max-w-xl">
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500 overflow-hidden relative group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
          <CardContent className="p-8 sm:p-12 flex flex-col items-center text-center gap-8">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <MessageCircle className="w-10 h-10 text-green-500" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">{t.contact.whatsappTitle}</h3>
              <p className="text-muted-foreground">
                {t.contact.whatsappDesc}
              </p>
            </div>

            <a
              href="https://wa.me/5514981294913?text=Ol%C3%A1%20Daniel,%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto px-12 gap-3 text-lg h-14 bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20"
              )}
            >
              <MessageCircle className="w-5 h-5" /> {t.contact.button}
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
