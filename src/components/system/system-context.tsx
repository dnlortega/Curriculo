"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SystemContextType {
  level: number;
  exp: number;
  maxExp: number;
  gold: number;
  fatigue: number;
  inventory: string[];
  addExp: (amount: number) => void;
  addGold: (amount: number) => void;
  spendGold: (amount: number) => boolean;
  addFatigue: (amount: number) => void;
  recoverFatigue: (amount: number) => void;
  levelUp: () => void;
  addItem: (itemId: string) => void;
  playSystemVoice: (text: string) => void;
  justLeveledUp: boolean;
  setJustLeveledUp: (value: boolean) => void;
  newItemGained: string | null;
  setNewItemGained: (value: string | null) => void;
}

const SystemContext = createContext<SystemContextType | undefined>(undefined);

export function SystemProvider({ children }: { children: React.ReactNode }) {
  const [level, setLevel] = useState(1);
  const [exp, setExp] = useState(0);
  const [gold, setGold] = useState(100);
  const [fatigue, setFatigue] = useState(0);
  const [justLeveledUp, setJustLeveledUp] = useState(false);
  // Inventário começa com alguns itens básicos (IDs 1 a 3)
  const [inventory, setInventory] = useState<string[]>(["1", "2", "3"]);
  const [newItemGained, setNewItemGained] = useState<string | null>(null);

  // Calculate max EXP needed for current level (exponential growth)
  const maxExp = Math.floor(1000 * Math.pow(1.5, level - 1));

  const playSystemVoice = (voiceId: string) => {
    if (typeof window !== "undefined") {
      // Tenta tocar o arquivo MP3 correspondente na pasta public/sounds/
      // Ex: /sounds/level-up.mp3, /sounds/quest-complete.mp3, etc.
      const audio = new Audio(`/sounds/${voiceId}.mp3`);
      
      // Ajusta o volume para não estourar os ouvidos
      audio.volume = 0.8;
      
      // Se houver erro (arquivo não existe), silencia silenciosamente no console
      audio.play().catch((err) => {
        console.log(`Arquivo de voz não encontrado: /public/sounds/${voiceId}.mp3`);
        // Fallback: se quiser manter o TTS robótico enquanto não tiver o MP3, descomente abaixo
        // const utterance = new SpeechSynthesisUtterance("Arquivo de voz ausente.");
        // utterance.lang = "pt-BR";
        // window.speechSynthesis.speak(utterance);
      });
    }
  };

  const addExp = (amount: number) => {
    setExp((prev) => prev + amount);
  };

  const addGold = (amount: number) => {
    setGold((prev) => prev + amount);
  };

  const spendGold = (amount: number) => {
    if (gold >= amount) {
      setGold((prev) => prev - amount);
      return true;
    }
    return false;
  };

  const addFatigue = (amount: number) => {
    setFatigue((prev) => Math.min(prev + amount, 100));
  };

  const recoverFatigue = (amount: number) => {
    setFatigue((prev) => Math.max(prev - amount, 0));
  };

  const levelUp = () => {
    setLevel((prev) => prev + 1);
    setJustLeveledUp(true);
    playSystemVoice("level-up"); // Vai tentar tocar /sounds/level-up.mp3
  };

  const addItem = (itemId: string) => {
    if (!inventory.includes(itemId)) {
      setInventory((prev) => [...prev, itemId]);
      setNewItemGained(itemId);
      playSystemVoice("item-acquired"); // Vai tentar tocar /sounds/item-acquired.mp3
    }
  };

  // Handle EXP overflow to trigger level up
  useEffect(() => {
    if (exp >= maxExp) {
      const excess = exp - maxExp;
      levelUp();
      setExp(excess); // Carry over excess EXP
    }
  }, [exp, maxExp, levelUp]);

  return (
    <SystemContext.Provider value={{ 
      level, exp, maxExp, gold, fatigue, inventory, 
      addExp, addGold, spendGold, addFatigue, recoverFatigue, 
      levelUp, addItem, playSystemVoice, justLeveledUp, setJustLeveledUp, 
      newItemGained, setNewItemGained 
    }}>
      {children}
    </SystemContext.Provider>
  );
}

export function useSystem() {
  const context = useContext(SystemContext);
  if (context === undefined) {
    throw new Error("useSystem must be used within a SystemProvider");
  }
  return context;
}
