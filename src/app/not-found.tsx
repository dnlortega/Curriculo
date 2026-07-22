"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SearchX, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="min-h-screen relative selection:bg-primary/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
      
      {/* PROGRAMMER THEMED BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-background">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center max-w-md"
      >
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 shadow-[0_0_30px_rgba(var(--primary),0.2)]">
          <SearchX className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary to-purple-500 mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Página não encontrada
        </h2>
        <p className="text-muted-foreground mb-8">
          Parece que você se perdeu no código. A página que você está procurando não existe ou foi movida.
        </p>

        <Link
          href="/"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full px-8 gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          )}
        >
          <Home className="w-5 h-5" />
          Voltar para o Início
        </Link>
      </motion.div>
    </main>
  );
}
