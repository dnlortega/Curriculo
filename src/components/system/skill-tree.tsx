"use client";

import { motion } from "framer-motion";
import { useSystem } from "@/components/system/system-context";
import { Code, Server, Database, Globe, Layers, Cpu, Cloud, Smartphone } from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  icon: React.ElementType;
  requiredLevel: number;
  x: number; // Porcentagem horizontal (0-100)
  y: number; // Porcentagem vertical (0-100)
  connections: string[]; // IDs of connected nodes
}

const SKILL_NODES: SkillNode[] = [
  { id: "html", name: "Fundamentos WEB", icon: Globe, requiredLevel: 1, x: 50, y: 10, connections: ["react", "node"] },
  { id: "react", name: "Feitiçaria React", icon: Code, requiredLevel: 2, x: 25, y: 40, connections: ["next"] },
  { id: "node", name: "Alquimia Node.js", icon: Server, requiredLevel: 2, x: 75, y: 40, connections: ["db", "cloud"] },
  { id: "next", name: "Domínio Next.js", icon: Layers, requiredLevel: 5, x: 25, y: 70, connections: [] },
  { id: "db", name: "Pilar de Dados (SQL)", icon: Database, requiredLevel: 4, x: 50, y: 60, connections: ["cloud"] },
  { id: "cloud", name: "Aura Vercel/AWS", icon: Cloud, requiredLevel: 6, x: 75, y: 80, connections: [] },
  { id: "mobile", name: "Agilidade Mobile", icon: Smartphone, requiredLevel: 8, x: 50, y: 90, connections: [] },
];

export function SkillTree() {
  const { level } = useSystem();

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-6 bg-system-panel border border-system-blue/30 rounded-lg shadow-[0_0_30px_var(--color-system-blue-glow)] relative">
      <div className="flex justify-between items-end mb-8 border-b border-system-blue/20 pb-4">
        <div>
          <h2 className="text-2xl font-mono text-system-blue tracking-[0.2em] font-bold">ÁRVORE DE HABILIDADES</h2>
          <p className="text-gray-400 font-mono text-sm mt-1">Evolua para despertar novos nós de poder.</p>
        </div>
        <div className="text-right">
          <span className="text-gray-500 font-mono text-xs block mb-1">PONTOS DE HABILIDADE (NÍVEL)</span>
          <span className="text-system-gold font-bold font-mono text-xl">{level}</span>
        </div>
      </div>

      <div className="relative w-full h-[500px] border border-gray-800 rounded-lg bg-black/50 overflow-hidden">
        {/* Render connections first so they are behind nodes */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {SKILL_NODES.map((node) => 
            node.connections.map((targetId) => {
              const target = SKILL_NODES.find(n => n.id === targetId);
              if (!target) return null;
              
              const isUnlocked = level >= node.requiredLevel && level >= target.requiredLevel;
              
              return (
                <line
                  key={`${node.id}-${targetId}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke={isUnlocked ? "var(--system-blue)" : "#374151"}
                  strokeWidth={isUnlocked ? 3 : 1}
                  className={isUnlocked ? "drop-shadow-[0_0_5px_var(--color-system-blue-glow)]" : ""}
                />
              );
            })
          )}
        </svg>

        {/* Render Nodes */}
        {SKILL_NODES.map((node) => {
          const isUnlocked = level >= node.requiredLevel;
          const isNext = level === node.requiredLevel - 1; // Can be unlocked next level
          
          return (
            <motion.div
              key={node.id}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer group`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              whileHover={{ scale: 1.1 }}
            >
              <div 
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative
                  ${isUnlocked 
                    ? "bg-system-blue/20 border-system-blue text-system-blue shadow-[0_0_20px_var(--color-system-blue-glow)]" 
                    : isNext
                      ? "bg-gray-800 border-gray-500 text-gray-500"
                      : "bg-gray-900 border-gray-800 text-gray-700"
                  }
                `}
              >
                {isUnlocked && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-system-blue/20" />
                )}
                <node.icon className={`w-6 h-6 ${isUnlocked ? 'drop-shadow-[0_0_5px_currentColor]' : ''}`} />
              </div>
              
              <div className="mt-2 bg-black/80 border border-gray-800 px-2 py-1 rounded text-center opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap absolute top-full pointer-events-none z-10">
                <p className={`font-mono text-xs font-bold ${isUnlocked ? 'text-system-blue' : 'text-gray-500'}`}>
                  {node.name}
                </p>
                <p className="font-mono text-[10px] text-gray-600 mt-0.5">
                  Requer Nível {node.requiredLevel}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
