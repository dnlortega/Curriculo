"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Box, Code, Cpu, Database, Globe, Layers, Server, Shield, Smartphone } from "lucide-react";
import { useSystem } from "@/components/system/system-context";
import { SystemMessage } from "@/components/system/system-message";

interface Item {
  id: string;
  name: string;
  rank: "E" | "D" | "C" | "B" | "A" | "S" | "SS";
  type: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const INVENTORY_ITEMS: Item[] = [
  { id: "1", name: "Espada Longa do React", rank: "S", type: "Arma Frontend", description: "Corta tempos de desenvolvimento pela metade. Escala maravilhosamente com estado global.", icon: Code, color: "text-blue-400" },
  { id: "2", name: "Escudo do Next.js", rank: "SS", type: "Equipamento SSR", description: "Defesa impenetrável contra lentidão de carregamento inicial e má indexação SEO.", icon: Layers, color: "text-white" },
  { id: "3", name: "Cristal do Tailwind", rank: "A", type: "Material de Crafting", description: "Permite modelar interfaces instantaneamente usando apenas magia de utilitários.", icon: Box, color: "text-cyan-400" },
  { id: "4", name: "Manuscrito de TypeScript", rank: "S", type: "Feitiço Passivo", description: "Revela todos os bugs antes mesmo de você rodar o código. Essencial.", icon: Globe, color: "text-blue-500" },
  { id: "5", name: "Poção de Node.js", rank: "A", type: "Consumível Backend", description: "Gera energia assíncrona infinita para I/O.", icon: Server, color: "text-green-500" },
  { id: "6", name: "Orbe do Banco de Dados", rank: "A", type: "Armazenamento", description: "Guarda o conhecimento do mundo inteiro. Cuidado com N+1.", icon: Database, color: "text-blue-300" },
  { id: "7", name: "Adaga Vercel", rank: "S", type: "Ferramenta de Deploy", description: "Faz deploys tão rápidos que o inimigo (cliente) nem percebe o tempo de inatividade.", icon: Cpu, color: "text-white" },
  { id: "8", name: "Manto da IA", rank: "SS", type: "Artefato Lendário", description: "Gera pedaços de código magicamente. Cuidado com alucinações.", icon: Shield, color: "text-purple-400" },
  { id: "9", name: "Amuleto Mobile", rank: "B", type: "Acessório", description: "Faz as coisas ficarem boas em telas pequenas.", icon: Smartphone, color: "text-gray-400" },
];

export function Inventory() {
  const { inventory, newItemGained, setNewItemGained, addExp, playSystemVoice } = useSystem();
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const [usedItemMessage, setUsedItemMessage] = useState<string | null>(null);

  const handleUseItem = (item: Item) => {
    // Logica de uso baseada no ID do item
    if (item.id === "1") {
      setUsedItemMessage("Você equipou a Espada Longa do React. +50 Dano de Frontend.");
      playSystemVoice("equip-sword");
    } else if (item.id === "5") {
      setUsedItemMessage("Poção de Node consumida. Fadiga restaurada e I/O acelerado.");
      playSystemVoice("use-potion");
    } else {
      setUsedItemMessage(`Você usou: ${item.name}.`);
      playSystemVoice("use-item");
    }
    
    // Animação/Piscar
    document.body.style.animation = "shake 0.3s ease";
    setTimeout(() => { document.body.style.animation = ""; }, 300);
    setTimeout(() => setUsedItemMessage(null), 3000);
  };

  const rankColors = {
    E: "text-gray-500 border-gray-500",
    D: "text-green-400 border-green-400",
    C: "text-blue-400 border-blue-400",
    B: "text-purple-400 border-purple-400",
    A: "text-orange-400 border-orange-400",
    S: "text-red-500 border-red-500 glow-red",
    SS: "text-yellow-400 border-yellow-400 glow-yellow",
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="flex items-center gap-3 mb-6 border-b border-system-blue/20 pb-4">
        <h2 className="text-2xl font-mono text-system-blue tracking-[0.2em] font-bold">INVENTÁRIO DO SISTEMA</h2>
        <span className="text-xs font-mono text-gray-400 bg-black/50 px-2 py-1 rounded">12/50 Espaços</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Grid de Itens */}
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 flex-1">
          {Array.from({ length: 20 }).map((_, i) => {
            const hasItem = i < inventory.length;
            const itemId = hasItem ? inventory[i] : null;
            const item = itemId ? INVENTORY_ITEMS.find((it) => it.id === itemId) : null;
            
            return (
              <motion.div
                key={i}
                whileHover={{ scale: item ? 1.05 : 1 }}
                onMouseEnter={() => item && setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`aspect-square bg-black/40 border ${item ? 'border-system-blue/50 cursor-pointer shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'border-gray-800'} rounded-md flex items-center justify-center relative overflow-hidden group`}
              >
                {item ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-system-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <item.icon className={`w-8 h-8 ${item.color} drop-shadow-md z-10`} />
                    <span className="absolute bottom-1 right-1 text-[10px] font-mono text-gray-500">x1</span>
                  </>
                ) : (
                  <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)] opacity-50" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Detalhes do Item */}
        <div className="w-full md:w-72 bg-system-panel border border-system-blue/30 rounded-lg p-4 h-[300px] shadow-[0_0_15px_var(--color-system-blue-glow)]">
          {hoveredItem ? (
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <hoveredItem.icon className={`w-12 h-12 ${hoveredItem.color} drop-shadow-lg`} />
                <span className={`px-2 py-1 font-mono font-bold border rounded bg-black/50 ${rankColors[hoveredItem.rank]}`}>
                  Rank {hoveredItem.rank}
                </span>
              </div>
              <h3 className="font-bold text-white text-lg font-mono tracking-tight mb-1">{hoveredItem.name}</h3>
              <p className="text-xs text-system-blue font-mono mb-4">{hoveredItem.type}</p>
              
              <div className="flex-1 overflow-y-auto mb-4">
                <p className="text-gray-300 text-sm font-sans leading-relaxed">
                  {hoveredItem.description}
                </p>
              </div>

              <button
                onClick={() => handleUseItem(hoveredItem)}
                className="w-full mt-auto bg-system-blue/20 hover:bg-system-blue border border-system-blue text-system-blue hover:text-white font-mono py-2 rounded transition-all shadow-[0_0_10px_var(--color-system-blue-glow)]"
              >
                [ USAR ITEM ]
              </button>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-center">
              <p className="text-gray-500 font-mono text-sm tracking-widest">SELECIONE UM ITEM</p>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {usedItemMessage && (
          <SystemMessage 
            title="SISTEMA DE INVENTÁRIO" 
            message={usedItemMessage} 
            type="info"
            duration={3}
            onComplete={() => setUsedItemMessage(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {newItemGained && (
          <SystemMessage 
            title="NOVO ITEM ADQUIRIDO" 
            message={`Você obteve um novo item no inventário!`} 
            type="info"
            duration={4}
            onComplete={() => setNewItemGained(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
