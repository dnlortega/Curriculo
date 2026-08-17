"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Coins, Unlock, Palette } from "lucide-react";
import { useSystem } from "@/components/system/system-context";
import { SystemMessage } from "@/components/system/system-message";

interface ShopItem {
  id: string;
  name: string;
  price: number;
  type: "THEME" | "ACCESS";
  icon: React.ElementType;
  description: string;
}

const SHOP_ITEMS: ShopItem[] = [
  { id: "s1", name: "Tema Monarca (Roxo)", price: 500, type: "THEME", icon: Palette, description: "Altera a cor principal do sistema para o Roxo Sombrio." },
  { id: "s2", name: "Tema Fogo (Vermelho)", price: 500, type: "THEME", icon: Palette, description: "Altera a cor principal do sistema para o Vermelho Igris." },
  { id: "s3", name: "Acesso ao PDF Secreto", price: 1000, type: "ACCESS", icon: Unlock, description: "Desbloqueia um currículo especial escondido pelo Arquiteto." },
];

export function SystemShop() {
  const { gold, spendGold } = useSystem();
  const [purchasedItems, setPurchasedItems] = useState<string[]>([]);
  const [message, setMessage] = useState<{ title: string; text: string; type: "info" | "warning" | "urgent" } | null>(null);

  const handlePurchase = (item: ShopItem) => {
    if (purchasedItems.includes(item.id)) {
      setMessage({ title: "ERRO", text: "Você já possui este item.", type: "warning" });
      return;
    }

    if (spendGold(item.price)) {
      setPurchasedItems((prev) => [...prev, item.id]);
      setMessage({ title: "COMPRA BEM-SUCEDIDA", text: `Você adquiriu: ${item.name}`, type: "info" });
      
      // Aplicar efeito se for tema
      if (item.id === "s1") {
        document.documentElement.style.setProperty("--system-blue", "oklch(0.6 0.25 300)"); // Roxo
        document.documentElement.style.setProperty("--color-system-blue-glow", "oklch(0.6 0.25 300 / 0.5)");
      } else if (item.id === "s2") {
        document.documentElement.style.setProperty("--system-blue", "oklch(0.6 0.25 20)"); // Vermelho
        document.documentElement.style.setProperty("--color-system-blue-glow", "oklch(0.6 0.25 20 / 0.5)");
      } else if (item.id === "s3") {
        setTimeout(() => {
          window.open("/curriculo.pdf", "_blank"); // Abre o PDF original como exemplo do segredo
        }, 2000);
      }
    } else {
      setMessage({ title: "OURO INSUFICIENTE", text: "Você não tem moedas suficientes para esta transação.", type: "urgent" });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="flex items-center justify-between mb-6 border-b border-system-gold/30 pb-4">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-6 h-6 text-system-gold" />
          <h2 className="text-2xl font-mono text-system-gold tracking-[0.2em] font-bold">LOJA DO SISTEMA</h2>
        </div>
        <div className="flex items-center gap-2 bg-black/50 border border-system-gold/50 px-4 py-2 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.2)]">
          <Coins className="w-5 h-5 text-system-gold" />
          <span className="font-mono font-bold text-system-gold glow-yellow text-lg">{gold}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SHOP_ITEMS.map((item) => {
          const isPurchased = purchasedItems.includes(item.id);
          
          return (
            <motion.div
              key={item.id}
              whileHover={!isPurchased ? { scale: 1.02 } : {}}
              className={`bg-system-panel border p-5 flex flex-col rounded-lg transition-all
                ${isPurchased ? "border-gray-800 opacity-60" : "border-system-gold/30 hover:border-system-gold shadow-[0_0_15px_rgba(251,191,36,0)] hover:shadow-[0_0_15px_rgba(251,191,36,0.3)]"}
              `}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded bg-black/50 ${isPurchased ? "text-gray-500" : "text-system-gold"}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className={`font-mono font-bold text-sm ${isPurchased ? "text-gray-500 line-through" : "text-white"}`}>
                  {item.name}
                </h3>
              </div>
              <p className="text-xs text-gray-400 font-sans mb-6 flex-1">
                {item.description}
              </p>
              <button
                onClick={() => handlePurchase(item)}
                disabled={isPurchased}
                className={`w-full py-2 flex items-center justify-center gap-2 font-mono text-sm font-bold rounded transition-colors
                  ${isPurchased 
                    ? "bg-gray-800 text-gray-600 cursor-not-allowed" 
                    : "bg-system-gold/20 text-system-gold border border-system-gold hover:bg-system-gold hover:text-black"
                  }`}
              >
                {isPurchased ? (
                  "ESGOTADO"
                ) : (
                  <>
                    <Coins className="w-4 h-4" /> {item.price}
                  </>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {message && (
          <SystemMessage 
            title={message.title} 
            message={message.text} 
            type={message.type}
            duration={3}
            onComplete={() => setMessage(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
