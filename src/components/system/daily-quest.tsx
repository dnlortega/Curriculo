"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { SystemMessage } from "@/components/system/system-message";

export function DailyQuest() {
  const [completed, setCompleted] = useState(false);
  const [penalty, setPenalty] = useState(false);
  const [showReward, setShowReward] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    setTimeout(() => setShowReward(true), 1000);
  };

  const handlePenalty = () => {
    setPenalty(true);
    // Apply a red flash to the body
    document.body.style.transition = "background-color 0.1s ease";
    document.body.style.backgroundColor = "#450a0a";
    setTimeout(() => {
      document.body.style.backgroundColor = "#0a0a0a"; // Revert to system bg
    }, 500);
  };

  if (penalty) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, -2, 2, -2, 0] }}
          transition={{ duration: 0.5 }}
          className="bg-red-950/80 border-2 border-red-500 rounded-lg p-6 w-full max-w-md mx-auto my-8 shadow-[0_0_30px_rgba(239,68,68,0.5)] backdrop-blur-md text-center"
        >
          <h2 className="text-3xl font-mono text-red-500 tracking-widest font-bold mb-4 animate-pulse">AVISO DO SISTEMA</h2>
          <p className="text-red-300 font-mono mb-4">Você falhou em completar a Missão Diária.</p>
          <p className="text-xl font-bold font-mono text-white mb-6 uppercase">A penalidade começará agora.</p>
          <div className="text-6xl mb-4">🏜️</div>
          <p className="text-sm font-mono text-red-400">Objetivo: Sobreviva por 4 horas no deserto dos bugs sem StackOverflow.</p>
        </motion.div>
        <SystemMessage 
          title="PENALIDADE ATIVADA" 
          message="Você foi transportado para a Zona de Penalidade." 
          type="urgent" 
        />
      </>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-system-panel border border-system-blue/30 rounded-lg p-6 w-full max-w-md mx-auto my-8 shadow-[0_0_20px_var(--color-system-blue-glow)] backdrop-blur-md"
    >
      <div className="flex flex-col items-center border-b border-system-blue/20 pb-4 mb-4">
        <h2 className="text-xl font-mono text-system-blue tracking-[0.2em] font-bold">MISSÃO DIÁRIA</h2>
        <span className="text-xs font-mono text-gray-400 mt-1">O PREPARO DO DEV FORTE</span>
      </div>

      <div className="space-y-4 font-mono text-sm mb-6">
        <div className="flex items-center justify-between text-gray-300">
          <span className={completed ? "line-through text-gray-600" : ""}>[Incompleto] 100 Linhas de Código</span>
          <span className="text-system-blue">{completed ? "100/100" : "0/100"}</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <span className={completed ? "line-through text-gray-600" : ""}>[Incompleto] 10 Commits</span>
          <span className="text-system-blue">{completed ? "10/10" : "0/10"}</span>
        </div>
        <div className="flex items-center justify-between text-gray-300">
          <span className={completed ? "line-through text-gray-600" : ""}>[Incompleto] 1 Litro de Café</span>
          <span className="text-system-blue">{completed ? "1/1" : "0/1"}</span>
        </div>
      </div>

      {!completed ? (
        <div className="flex gap-4">
          <button 
            onClick={handleComplete}
            className="flex-1 bg-system-blue/20 hover:bg-system-blue text-system-blue hover:text-white border border-system-blue font-mono py-2 rounded transition-all shadow-[0_0_10px_var(--color-system-blue-glow)]"
          >
            COMPLETAR
          </button>
          <button 
            onClick={handlePenalty}
            className="flex-1 bg-red-900/20 hover:bg-red-600 text-red-500 hover:text-white border border-red-500 font-mono py-2 rounded transition-all"
          >
            IGNORAR
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-green-500 mb-2">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-mono font-bold tracking-widest">COMPLETA</span>
          </div>
          <p className="text-xs text-gray-400 font-mono">Recompensas disponíveis.</p>
        </div>
      )}

      <AnimatePresence>
        {showReward && (
          <SystemMessage 
            title="RECOMPENSA" 
            message="Você recebeu: +500 EXP, Status Total +1, Caixa Aleatória." 
            type="info" 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
