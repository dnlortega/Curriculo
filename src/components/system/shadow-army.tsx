"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skull, UserCheck } from "lucide-react";

interface Shadow {
  id: string;
  name: string;
  rank: string;
  role: string;
  power: number;
}

const SHADOWS: Shadow[] = [
  { id: "1", name: "Igris (Frontend AI)", rank: "Cavaleiro Comandante", role: "Vanguarda", power: 15420 },
  { id: "2", name: "Beru (Backend API)", rank: "Rei Formiga", role: "Assassino", power: 22100 },
  { id: "3", name: "Iron (Database)", rank: "Cavaleiro de Elite", role: "Tanque", power: 8500 },
  { id: "4", name: "Tusk (DevOps)", rank: "Mago de Elite", role: "Suporte", power: 12300 },
];

export function ShadowArmy() {
  const [arisen, setArisen] = useState(false);
  const [isCasting, setIsCasting] = useState(false);

  const handleArise = () => {
    setIsCasting(true);
    // Treme a tela levemente
    document.body.style.animation = "shake 0.5s ease-in-out";
    
    setTimeout(() => {
      setArisen(true);
      setIsCasting(false);
      document.body.style.animation = "";
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 relative">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      `}} />

      <div className="flex items-center gap-3 mb-6 border-b border-purple-900/50 pb-4">
        <h2 className="text-2xl font-mono text-purple-500 tracking-[0.2em] font-bold">EXÉRCITO DE SOMBRAS</h2>
        <span className="text-xs font-mono text-gray-400 bg-black/50 px-2 py-1 rounded">HABILIDADE DE CLASSE</span>
      </div>

      {!arisen ? (
        <div className="flex flex-col items-center justify-center py-20 border border-purple-900/30 rounded-lg bg-black/40 backdrop-blur-md">
          <Skull className={`w-16 h-16 text-purple-900 mb-6 ${isCasting ? "animate-pulse scale-110 text-purple-600 drop-shadow-[0_0_20px_rgba(147,51,234,0.8)]" : ""}`} />
          <p className="text-gray-500 font-mono mb-8 text-center max-w-md">
            Extrair a sombra de alvos derrotados (projetos concluídos) e adicioná-los ao seu exército.
          </p>
          <button
            onClick={handleArise}
            disabled={isCasting}
            className={`font-mono text-2xl font-bold tracking-[0.5em] px-12 py-4 rounded transition-all duration-500
              ${isCasting 
                ? "bg-purple-900 text-white shadow-[0_0_50px_rgba(147,51,234,1)] scale-110" 
                : "bg-transparent text-purple-600 border-2 border-purple-900 hover:bg-purple-900/20 hover:text-purple-400 hover:shadow-[0_0_20px_rgba(147,51,234,0.5)]"
              }`}
          >
            {isCasting ? "EXTRAINDO..." : "ERGA-SE"}
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {SHADOWS.map((shadow, idx) => (
            <motion.div
              key={shadow.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: idx * 0.4, type: "spring" }}
              className="bg-black/60 border border-purple-500/30 rounded-lg p-4 flex items-center gap-4 shadow-[0_0_15px_rgba(147,51,234,0.15)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded bg-purple-950 flex items-center justify-center border border-purple-800 z-10">
                <UserCheck className="w-8 h-8 text-purple-400 drop-shadow-[0_0_5px_currentColor]" />
              </div>
              
              <div className="flex-1 z-10">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-purple-100 font-mono tracking-wider">{shadow.name}</h3>
                  <span className="text-[10px] font-mono text-purple-400 bg-purple-900/50 px-2 py-0.5 rounded border border-purple-700/50">
                    Lv. Max
                  </span>
                </div>
                <p className="text-xs text-purple-300/70 font-mono mb-2">{shadow.rank} • {shadow.role}</p>
                <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: idx * 0.4 + 0.5, duration: 1 }}
                    className="h-full bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.8)]" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
