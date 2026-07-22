"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Search, ChevronDown, ShieldCheck, Calendar, Hash } from "lucide-react";
import { translations, Language } from "@/i18n";
import { getCursos } from "@/data/cursos";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { IssuerLogo } from "@/components/ui/issuer-logo";
import { cn } from "@/lib/utils";

interface CertificatesSectionProps {
  lang: Language;
}

export function CertificatesSection({ lang }: CertificatesSectionProps) {
  const t = translations[lang];

  const [courseFilter, setCourseFilter] = useState<string>("All");
  const [courseSearch, setCourseSearch] = useState<string>("");
  const [visibleCoursesCount, setVisibleCoursesCount] = useState<number>(9);

  const cursos = useMemo(() => getCursos(lang), [lang]);

  // Update filters when language changes
  useEffect(() => {
    setCourseFilter(t.certificates.filterAll);
  }, [lang, t]);

  // Course Filtering logic
  const allCourseSkills = useMemo(() => {
    const skills = new Set<string>();
    cursos.forEach(c => {
      if (c.skills) {
        c.skills.split(',').forEach(s => skills.add(s.trim().replace(/ e mais \d+ competências/, '').replace(/ and \d+ more skills/, '').trim()));
      }
    });
    const cleanSkills = Array.from(skills).filter(s => s.length > 0 && s.length < 20).slice(0, 8);
    return [t.certificates.filterAll, ...cleanSkills];
  }, [t, cursos]);

  const filteredCourses = useMemo(() => {
    let filtered = cursos;
    if (courseFilter !== t.certificates.filterAll) {
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
  }, [courseFilter, courseSearch, t, cursos]);

  const displayedCourses = filteredCourses.slice(0, visibleCoursesCount);

  return (
    <section
      id="certificados"
      className="w-full px-6 md:px-12 lg:px-24 py-24 space-y-12 flex flex-col items-center pt-28"
    >
      <div className="space-y-2 text-center flex flex-col items-center">
        <h3 className="text-3xl font-bold tracking-tight inline-flex items-center justify-center gap-3">
          <Award className="w-8 h-8 text-primary" /> {t.certificates.title}
        </h3>
        <p className="text-muted-foreground text-center">{t.certificates.description.replace('{count}', cursos.length.toString())}</p>
      </div>

      <div className="flex flex-col items-center gap-6 w-full max-w-5xl">
        {/* Search Bar */}
        <div className="relative w-full max-w-md group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder={t.certificates.searchPlaceholder}
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
                "px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors duration-300 border",
                courseFilter === skill
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card/50 border-primary/10 hover:border-primary/50 hover:bg-primary/5 text-muted-foreground hover:text-foreground"
              )}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <AnimatePresence mode="popLayout">
          {displayedCourses.map((curso, index) => (
            <motion.div
              key={`${curso.title}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
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


                  {/* Skills Badges */}
                  {curso.skills && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {curso.skills.split(',').slice(0, 3).map((skill, idx) => (
                        <Badge variant="secondary" key={idx} className="text-[10px] px-2 py-0.5 bg-muted/50 border border-transparent group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                          {skill.trim().replace(/ e mais (\d+) competências/, ' +$1').replace(/ and (\d+) more skills/, ' +$1')}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State for Search */}
      {displayedCourses.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          {t.certificates.empty}
        </div>
      )}

      {/* Load More Pagination */}
      {filteredCourses.length > visibleCoursesCount && (
        <div className="pt-8">
          <button
            onClick={() => setVisibleCoursesCount(prev => prev + 9)}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-8 gap-2 border-primary/20 hover:bg-primary hover:text-primary-foreground shadow-lg transition-all duration-300 group"
            )}
          >
            {t.certificates.loadMore} <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </section>
  );
}
