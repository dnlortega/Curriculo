"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";
import { useSystem } from "@/components/system/system-context";

interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
}

export function AchievementsSystem() {
  const { gold, fatigue, playSystemVoice } = useSystem();
  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: "a1", title: "Mecenas do Sistema", description: "Gastou ou possui mais de 1000 de ouro.", unlocked: false },
    { id: "a2", title: "Limites Ultrapassados", description: "Chegou a 100% de fadiga muscular.", unlocked: false },
  ]);
  const [recentlyUnlocked, setRecentlyUnlocked] = useState<Achievement | null>(null);

  useEffect(() => {
    // Verifica conquistas
    let changed = false;
    const newAchievements = achievements.map(ach => {
      if (!ach.unlocked) {
        if (ach.id === "a1" && gold >= 1000) {
          ach.unlocked = true;
          changed = true;
          setRecentlyUnlocked(ach);
          playSystemVoice("quest-complete");
        }
        if (ach.id === "a2" && fatigue >= 100) {
          ach.unlocked = true;
          changed = true;
          setRecentlyUnlocked(ach);
          playSystemVoice("quest-complete");
        }
      }
      return ach;
    });

    if (changed) {
      setAchievements(newAchievements);
      setTimeout(() => setRecentlyUnlocked(null), 5000);
    }
  }, [gold, fatigue, achievements, playSystemVoice]);

  return (
    <AnimatePresence>
      {recentlyUnlocked && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed bottom-16 right-4 z-[300] bg-system-panel border border-system-gold p-4 rounded-lg shadow-[0_0_20px_rgba(251,191,36,0.3)] flex items-center gap-4 w-80 backdrop-blur-md"
        >
          <div className="bg-system-gold/20 p-3 rounded-full">
            <Trophy className="w-6 h-6 text-system-gold animate-pulse" />
          </div>
          <div>
            <p className="text-[10px] text-system-gold font-mono uppercase tracking-widest mb-1">CONQUISTA DESBLOQUEADA</p>
            <h4 className="text-white font-mono font-bold text-sm">{recentlyUnlocked.title}</h4>
            <p className="text-gray-400 text-xs font-sans mt-1">{recentlyUnlocked.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
