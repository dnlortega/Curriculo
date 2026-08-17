"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skull, Sword, ShieldAlert } from "lucide-react";
import { useSystem } from "@/components/system/system-context";

export function RaidMinigame() {
  const { level, addExp, addGold, addItem, playSystemVoice } = useSystem();
  
  const [bossHp, setBossHp] = useState(1000);
  const maxBossHp = 1000;
  const [isDead, setIsDead] = useState(false);
  const [shake, setShake] = useState(false);

  // Dano do jogador escala com o nível
  const playerDamage = 50 + (level * 5);

  const attackBoss = () => {
    if (isDead) return;

    // Treme a tela
    setShake(true);
    setTimeout(() => setShake(false), 100);

    setBossHp((prev) => {
      const newHp = prev - playerDamage;
      if (newHp <= 0) {
        handleBossDefeated();
        return 0;
      }
      return newHp;
    });
  };

  const handleBossDefeated = () => {
    setIsDead(true);
    playSystemVoice("quest-complete"); // Ou voz de vitória
    addExp(2000);
    addGold(300);
    addItem("4"); // Exemplo: Adiciona um item raro ao inventário (ex: Cristal de Banco de Dados)
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-6 bg-system-panel border border-red-900/50 rounded-lg shadow-[0_0_30px_rgba(220,38,38,0.15)] relative overflow-hidden">
      
      {/* Background macabro da masmorra */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="flex items-center justify-between mb-8 border-b border-red-900/50 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-8 h-8 text-red-500 animate-pulse" />
          <h2 className="text-3xl font-mono text-red-500 tracking-[0.2em] font-bold">GATE DE RANK-A DETECTADO</h2>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-8 relative z-10">
        <AnimatePresence mode="wait">
          {!isDead ? (
            <motion.div
              key="boss"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                x: shake ? [-10, 10, -10, 10, 0] : 0,
                filter: shake ? "brightness(1.5) hue-rotate(90deg)" : "brightness(1) hue-rotate(0deg)"
              }}
              exit={{ scale: 0, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <h3 className="font-mono text-xl text-red-400 mb-2 font-bold tracking-widest">[Hydra do NullReference]</h3>
              
              {/* Barra de HP do Boss */}
              <div className="w-64 h-3 bg-gray-900 rounded-full mb-8 border border-red-900 overflow-hidden relative">
                <motion.div 
                  className="h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                  initial={{ width: "100%" }}
                  animate={{ width: `${(bossHp / maxBossHp) * 100}%` }}
                  transition={{ duration: 0.2 }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-white font-bold drop-shadow-md">
                  {bossHp} / {maxBossHp}
                </span>
              </div>

              {/* Monstro (Representação visual) */}
              <button 
                onClick={attackBoss}
                className="w-32 h-32 bg-black rounded-full border-2 border-red-500 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.4)] hover:scale-105 active:scale-95 transition-transform group cursor-crosshair relative"
              >
                <div className="absolute inset-0 rounded-full bg-red-500/20 animate-ping" />
                <Skull className="w-16 h-16 text-red-500 group-hover:text-red-400 transition-colors drop-shadow-[0_0_15px_rgba(220,38,38,1)]" />
              </button>

              <p className="mt-6 text-sm text-gray-500 font-mono tracking-widest animate-pulse">CLIQUE PARA ATACAR</p>
            </motion.div>
          ) : (
            <motion.div
              key="victory"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-system-blue/20 rounded-full flex items-center justify-center border border-system-blue shadow-[0_0_50px_var(--color-system-blue-glow)] mb-6">
                <Sword className="w-12 h-12 text-system-blue" />
              </div>
              <h3 className="text-3xl font-mono text-system-blue font-bold tracking-[0.2em] mb-2 glow-text">MASMORRA CONCLUÍDA</h3>
              <p className="text-gray-400 font-mono mb-6 max-w-md">
                O Monstro foi derrotado. A essência do código foi purificada e convertida em atributos para o Jogador.
              </p>
              <div className="flex gap-4">
                <div className="bg-black/50 border border-system-gold/50 px-4 py-2 rounded text-system-gold font-mono font-bold">
                  + 300 OURO
                </div>
                <div className="bg-black/50 border border-system-blue/50 px-4 py-2 rounded text-system-blue font-mono font-bold">
                  + 2000 EXP
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
