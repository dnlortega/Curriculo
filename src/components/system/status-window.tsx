"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface StatRowProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
}

function StatRow({ label, value, max = 100, color = "bg-system-blue" }: StatRowProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="text-gray-300 font-mono tracking-widest uppercase w-32">{label}</span>
      <div className="flex-1 mx-4 h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(value / max) * 100}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-full ${color} shadow-[0_0_10px_currentColor]`}
        />
      </div>
      <span className="font-mono text-system-blue glow-text w-8 text-right">{value}</span>
    </div>
  );
}

type ClassType = "Desperto" | "Mago de Frontend" | "Guerreiro de Backend" | "Assassino Full-Stack" | "Arqueiro DevOps";

interface ClassStats {
  forca: number;
  agilidade: number;
  inteligencia: number;
  senso: number;
  vitalidade: number;
  color: string;
}

const CLASS_DATA: Record<ClassType, ClassStats> = {
  "Desperto": { forca: 10, agilidade: 10, inteligencia: 10, senso: 10, vitalidade: 10, color: "text-gray-400" },
  "Mago de Frontend": { forca: 20, agilidade: 95, inteligencia: 85, senso: 99, vitalidade: 60, color: "text-cyan-400" },
  "Guerreiro de Backend": { forca: 99, agilidade: 30, inteligencia: 90, senso: 40, vitalidade: 95, color: "text-red-500" },
  "Assassino Full-Stack": { forca: 85, agilidade: 85, inteligencia: 90, senso: 80, vitalidade: 75, color: "text-purple-500" },
  "Arqueiro DevOps": { forca: 60, agilidade: 90, inteligencia: 95, senso: 85, vitalidade: 80, color: "text-green-400" },
};

export function StatusWindow() {
  const [playerClass, setPlayerClass] = useState<ClassType>("Desperto");
  const [showClassSelector, setShowClassSelector] = useState(false);

  const stats = CLASS_DATA[playerClass];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-system-panel border border-system-blue/30 rounded-lg p-6 w-full max-w-2xl mx-auto
          shadow-[0_0_30px_var(--color-system-blue-glow)] backdrop-blur-md relative overflow-hidden"
      >
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-system-blue rounded-tl-lg" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-system-blue rounded-tr-lg" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-system-blue rounded-bl-lg" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-system-blue rounded-br-lg" />

        <div className="text-center mb-8 border-b border-system-blue/20 pb-4 relative">
          <h2 className="text-3xl font-mono text-system-blue tracking-[0.2em] font-bold mb-2">STATUS DO JOGADOR</h2>
          <div className="flex justify-center gap-8 text-sm font-mono text-gray-400 items-center">
            <p>NOME: <span className="text-white">DANIEL ORTEGA</span></p>
            <p>NÍVEL: <span className="text-system-gold">99</span></p>
            <p className="flex items-center gap-2">
              CLASSE: 
              <span className={`font-bold ${stats.color}`}>{playerClass.toUpperCase()}</span>
              <button 
                onClick={() => setShowClassSelector(true)}
                className="ml-2 text-xs bg-system-blue/20 hover:bg-system-blue text-system-blue hover:text-white px-2 py-1 rounded transition-colors"
              >
                TROCAR
              </button>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-system-blue/80 font-mono tracking-widest mb-4 text-sm">ATRIBUTOS BÁSICOS</h3>
            <StatRow label="FORÇA (BACK)" value={stats.forca} />
            <StatRow label="AGILIDADE (FRONT)" value={stats.agilidade} />
            <StatRow label="INTELIGÊNCIA (LOGIC)" value={stats.inteligencia} />
            <StatRow label="SENSO (UI/UX)" value={stats.senso} />
            <StatRow label="VITALIDADE (ENERGIA)" value={stats.vitalidade} />
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                <span>HP (CAFÉ)</span>
                <span>{stats.vitalidade * 10}/1000</span>
              </div>
              <div className="h-4 bg-gray-800 rounded-sm overflow-hidden border border-red-900/50">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.vitalidade}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" 
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-gray-400 mb-1">
                <span>MP (CRIATIVIDADE)</span>
                <span>{stats.inteligencia * 10}/1000</span>
              </div>
              <div className="h-4 bg-gray-800 rounded-sm overflow-hidden border border-blue-900/50">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.inteligencia}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]" 
                />
              </div>
            </div>

            <div className="pt-4 border-t border-system-blue/20">
              <h3 className="text-system-blue/80 font-mono tracking-widest mb-3 text-sm">HABILIDADES DA CLASSE</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-system-gold">Lv.MAX</span>
                  <span className="text-gray-300">Resolução de Problemas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-system-gold">Lv.MAX</span>
                  <span className="text-gray-300">Adaptação Rápida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Class Selector Modal */}
      <AnimatePresence>
        {showClassSelector && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-system-bg border-2 border-system-blue p-8 rounded-lg max-w-xl w-full shadow-[0_0_50px_var(--color-system-blue-glow)]"
            >
              <h2 className="text-2xl font-mono text-system-blue mb-6 text-center tracking-[0.2em]">SISTEMA DE MUDANÇA DE CLASSE</h2>
              <p className="text-gray-400 font-mono text-sm mb-6 text-center">Selecione o caminho que deseja trilhar. Seus atributos se adaptarão à sua escolha.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {(Object.keys(CLASS_DATA) as ClassType[]).map((cls) => (
                  <button
                    key={cls}
                    onClick={() => {
                      setPlayerClass(cls);
                      setShowClassSelector(false);
                    }}
                    className={`p-4 border border-gray-700 rounded text-left font-mono hover:border-system-blue hover:bg-system-blue/10 transition-all group ${playerClass === cls ? 'border-system-blue bg-system-blue/20' : ''}`}
                  >
                    <div className={`font-bold mb-1 ${CLASS_DATA[cls].color}`}>{cls}</div>
                    <div className="text-xs text-gray-500">
                      STR: {CLASS_DATA[cls].forca} | AGI: {CLASS_DATA[cls].agilidade} | INT: {CLASS_DATA[cls].inteligencia}
                    </div>
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button 
                  onClick={() => setShowClassSelector(false)}
                  className="font-mono text-gray-500 hover:text-white transition-colors"
                >
                  [ CANCELAR ]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
