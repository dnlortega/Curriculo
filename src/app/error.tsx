"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen relative selection:bg-primary/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      
      {/* PROGRAMMER THEMED BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-destructive opacity-10 blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center max-w-md bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-destructive/20 shadow-xl shadow-destructive/5"
      >
        <div className="w-20 h-20 bg-destructive/10 text-destructive rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ops! Algo deu errado.
        </h1>
        <p className="text-muted-foreground mb-8 text-sm md:text-base">
          Ocorreu um erro inesperado na aplicação. Não se preocupe, isso já foi registrado. Você pode tentar novamente ou voltar ao início.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button
            onClick={() => reset()}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "flex-1 gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-lg"
            )}
          >
            <RefreshCcw className="w-4 h-4" />
            Tentar Novamente
          </button>
          
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "flex-1 gap-2"
            )}
          >
            <Home className="w-4 h-4" />
            Voltar ao Início
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
