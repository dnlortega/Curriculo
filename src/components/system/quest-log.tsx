"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Swords } from "lucide-react";

interface QuestProps {
  title: string;
  type: "MAIN" | "DAILY" | "HIDDEN";
  status: "COMPLETED" | "IN_PROGRESS";
  description: string;
  rewards: string[];
  delay?: number;
}

function QuestItem({ title, type, status, description, rewards, delay = 0 }: QuestProps) {
  const isCompleted = status === "COMPLETED";

  const typeColors = {
    MAIN: "text-system-gold border-system-gold",
    DAILY: "text-system-blue border-system-blue",
    HIDDEN: "text-purple-500 border-purple-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`border-l-2 pl-4 py-2 ${
        isCompleted ? "opacity-70 border-gray-600" : typeColors[type]
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {isCompleted ? (
            <CheckCircle2 className="w-5 h-5 text-gray-500" />
          ) : (
            <Swords className={`w-5 h-5 ${typeColors[type].split(" ")[0]}`} />
          )}
          <span className={`font-mono text-sm tracking-widest ${typeColors[type].split(" ")[0]}`}>
            [{type} QUEST]
          </span>
        </div>
        <span className={`font-mono text-xs ${isCompleted ? "text-gray-500" : "text-system-blue"}`}>
          {isCompleted ? "CONCLUÍDA" : "EM ANDAMENTO"}
        </span>
      </div>

      <h4 className={`text-lg font-bold font-mono mb-2 ${isCompleted ? "text-gray-400 line-through" : "text-white"}`}>
        {title}
      </h4>
      <p className="text-gray-400 text-sm mb-4 font-sans">{description}</p>

      {!isCompleted && (
        <div className="bg-black/30 p-3 rounded border border-gray-800">
          <span className="text-xs text-gray-500 font-mono tracking-widest block mb-2">RECOMPENSAS:</span>
          <ul className="text-sm font-mono text-system-gold space-y-1">
            {rewards.map((reward, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-system-gold rounded-full inline-block" />
                {reward}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export function QuestLog() {
  const quests: QuestProps[] = [
    {
      title: "Construir o Portfólio Supremo",
      type: "MAIN",
      status: "IN_PROGRESS",
      description: "Desenvolva uma interface impressionante usando Next.js, Tailwind e Framer Motion para mostrar suas habilidades ao mundo.",
      rewards: ["+1000 EXP", "Título: Mestre do Front-end", "Atenção dos Recrutadores"],
      delay: 0.2,
    },
    {
      title: "Dominar o Vercel",
      type: "DAILY",
      status: "COMPLETED",
      description: "Faça o deploy de uma aplicação Next.js perfeitamente otimizada.",
      rewards: ["+50 EXP"],
      delay: 0.4,
    },
    {
      title: "Integrar IA ao Fluxo",
      type: "HIDDEN",
      status: "IN_PROGRESS",
      description: "Utilize IA para acelerar o desenvolvimento e criar experiências dinâmicas.",
      rewards: ["Habilidade: Visão do Arquiteto", "+500 EXP"],
      delay: 0.6,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-system-panel border border-system-blue/30 rounded-lg p-6 w-full max-w-2xl mx-auto mt-8
        shadow-[0_0_20px_var(--color-system-blue-glow)] backdrop-blur-md relative"
    >
      <div className="flex items-center gap-3 mb-6 border-b border-system-blue/20 pb-4">
        <Clock className="w-6 h-6 text-system-blue" />
        <h2 className="text-2xl font-mono text-system-blue tracking-[0.2em] font-bold">LOG DE MISSÕES</h2>
      </div>

      <div className="space-y-6">
        {quests.map((quest, index) => (
          <QuestItem key={index} {...quest} />
        ))}
      </div>
    </motion.div>
  );
}
