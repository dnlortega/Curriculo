"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSystem } from "@/components/system/system-context";
import { Activity, Skull } from "lucide-react";
import { SystemMessage } from "@/components/system/system-message";

export function FatigueSystem() {
  const { fatigue, addFatigue, playSystemVoice } = useSystem();

  // Aumenta fadiga a cada clique na página
  useEffect(() => {
    const handleClick = () => {
      // Pequena chance de adicionar fadiga ao clicar em qualquer lugar
      if (Math.random() > 0.5) {
        addFatigue(2);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [addFatigue]);

  useEffect(() => {
    if (fatigue >= 100) {
      document.documentElement.style.filter = "grayscale(100%) brightness(0.5)";
      document.body.style.pointerEvents = "none"; // Desabilita cliques na página exceto inventário se quisermos
      playSystemVoice("penalty-activated"); // "Aviso de Sistema. A penalidade começará agora."
      
      // Reseta após 5 segundos como punição temporária
      const timer = setTimeout(() => {
        document.documentElement.style.filter = "";
        document.body.style.pointerEvents = "auto";
        // remove 50 fatigue so they can play again
        addFatigue(-50); 
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      document.documentElement.style.filter = "";
      document.body.style.pointerEvents = "auto";
    }
  }, [fatigue, addFatigue, playSystemVoice]);

  if (fatigue === 0) return null;

  return (
    <>
      <div className="fixed top-4 right-4 z-50 w-64 bg-system-panel border border-system-blue/30 p-3 rounded shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <Activity className={`w-4 h-4 ${fatigue > 80 ? 'text-red-500 animate-pulse' : 'text-system-blue'}`} />
            <span className="font-mono text-xs tracking-widest text-gray-300">FADIGA MUSCULAR</span>
          </div>
          <span className={`font-mono text-xs font-bold ${fatigue > 80 ? 'text-red-500' : 'text-system-blue'}`}>
            {fatigue}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
          <motion.div 
            className={`h-full ${fatigue > 80 ? 'bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]' : 'bg-system-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]'}`}
            initial={{ width: 0 }}
            animate={{ width: `${fatigue}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence>
        {fatigue >= 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          >
            <div className="flex flex-col items-center gap-4">
              <Skull className="w-32 h-32 text-red-600 animate-pulse drop-shadow-[0_0_20px_rgba(220,38,38,1)]" />
              <h1 className="text-4xl md:text-6xl font-mono text-red-600 font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                EXAUSTÃO TOTAL
              </h1>
              <p className="text-red-400 font-mono tracking-widest bg-black/80 px-4 py-2 border border-red-900/50">
                O SISTEMA EXIGE DESCANSO. (Aguarde 5s)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
