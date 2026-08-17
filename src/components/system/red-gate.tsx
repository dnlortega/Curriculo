"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertOctagon, Snowflake } from "lucide-react";
import { useSystem } from "@/components/system/system-context";

export function RedGate() {
  const { playSystemVoice, levelUp, addGold } = useSystem();
  const [isActive, setIsActive] = useState(false);
  const [hasEscaped, setHasEscaped] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15); // 15 segundos para escapar

  // Verifica aleatoriamente se o Red Gate deve abrir ao carregar o componente (apenas 1 vez por sessão)
  useEffect(() => {
    const hasTriggered = sessionStorage.getItem("redGateTriggered");
    if (!hasTriggered) {
      // 10% de chance de ativar, mas para fins de demonstração, vamos deixar 20%
      if (Math.random() < 0.2) {
        setTimeout(() => {
          setIsActive(true);
          sessionStorage.setItem("redGateTriggered", "true");
          playSystemVoice("penalty-activated"); // "Aviso de Sistema. A penalidade começará agora" serve bem aqui
        }, 5000); // Demora 5s após carregar a página
      }
    }
  }, [playSystemVoice]);

  // Cronômetro da morte
  useEffect(() => {
    if (!isActive || hasEscaped) return;
    
    if (timeLeft <= 0) {
      // Falhou em escapar
      setIsActive(false);
      // Aqui poderíamos forçar um reload ou escurecer a tela
      document.body.style.filter = "grayscale(100%) blur(2px)";
      setTimeout(() => {
        document.body.style.filter = "";
        alert("O Jogador morreu no Portal Vermelho. Reiniciando Sistema.");
        window.location.reload();
      }, 2000);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, hasEscaped]);

  const handleEscape = () => {
    setHasEscaped(true);
    playSystemVoice("quest-complete");
    levelUp();
    addGold(500);
    setTimeout(() => {
      setIsActive(false);
    }, 3000);
  };

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] overflow-hidden pointer-events-auto"
      >
        {/* Fundo Escarlate e Neve */}
        <div className="absolute inset-0 bg-red-950/90 backdrop-blur-sm" />
        
        {/* Efeito de neve tosco mas efetivo com divs absolutas animadas via CSS */}
        <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] animate-[slideDown_10s_linear_infinite]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {!hasEscaped ? (
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-black/80 border-2 border-red-600 p-8 rounded-lg text-center shadow-[0_0_100px_rgba(220,38,38,0.5)] max-w-lg relative"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-red-600 rounded-full p-4 shadow-[0_0_30px_rgba(220,38,38,1)]">
                <AlertOctagon className="w-12 h-12 text-white animate-ping" />
              </div>

              <h1 className="text-3xl font-mono text-red-500 font-bold mt-8 mb-4 tracking-widest uppercase">
                PORTAL VERMELHO
              </h1>
              
              <div className="flex items-center justify-center gap-2 text-blue-300 font-mono mb-6">
                <Snowflake className="w-4 h-4 animate-spin-slow" />
                <span>O ambiente está congelando...</span>
                <Snowflake className="w-4 h-4 animate-spin-slow" />
              </div>

              <p className="text-gray-300 font-mono text-sm leading-relaxed mb-6">
                Uma anomalia de código de alto nível prendeu você em um Portal Vermelho. 
                O fluxo do tempo aqui é diferente. Sobreviva ou seja apagado do repositório.
              </p>

              <div className="text-6xl font-mono text-white font-bold mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                00:{timeLeft.toString().padStart(2, "0")}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEscape}
                className="w-full bg-red-600 hover:bg-red-500 text-white font-mono font-bold py-4 rounded transition-colors uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(220,38,38,0.5)]"
              >
                PROCURAR SAÍDA
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-black/80 border-2 border-blue-500 p-8 rounded-lg text-center shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            >
              <h2 className="text-3xl font-mono text-blue-400 font-bold mb-4 tracking-widest">
                PORTAL FECHADO
              </h2>
              <p className="text-gray-300 font-mono mb-4">Você sobreviveu ao Red Gate. Recompensas massivas obtidas.</p>
              <div className="flex gap-4 justify-center">
                <span className="text-system-gold font-bold">+500 Ouro</span>
                <span className="text-blue-400 font-bold">+1 Nível</span>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
