"use client";

import { useEffect, useState } from "react";
import { Github } from "lucide-react";

export function GithubAura() {
  const [hasCommits, setHasCommits] = useState<boolean | null>(null);

  useEffect(() => {
    // Busca eventos públicos do GitHub do usuário (dnlortega)
    const fetchGithubActivity = async () => {
      try {
        const res = await fetch("https://api.github.com/users/dnlortega/events/public");
        const events = await res.json();
        
        if (Array.isArray(events)) {
          // Verifica se houve evento Push hoje
          const today = new Date().toISOString().split("T")[0];
          const pushedToday = events.some(
            (event: any) => event.type === "PushEvent" && event.created_at.startsWith(today)
          );
          
          setHasCommits(pushedToday);
          
          // Se codou hoje, aplica aura global
          if (pushedToday) {
            document.documentElement.style.setProperty("--color-system-blue-glow", "oklch(0.6 0.2 260 / 0.8)"); // Glow azul forte
            document.body.classList.add("github-aura-active");
          }
        }
      } catch (err) {
        console.error("Erro ao buscar GitHub", err);
      }
    };

    fetchGithubActivity();
  }, []);

  if (hasCommits === null) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-black/80 border border-gray-800 px-3 py-2 rounded-full backdrop-blur-md">
      <Github className={`w-4 h-4 ${hasCommits ? 'text-system-blue animate-pulse shadow-[0_0_10px_var(--color-system-blue-glow)]' : 'text-gray-500'}`} />
      <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
        {hasCommits ? "Aura de Contribuição Ativa" : "Sem código hoje (Aura Fraca)"}
      </span>
    </div>
  );
}
