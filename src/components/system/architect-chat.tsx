"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Cpu } from "lucide-react";
import { useSystem } from "@/components/system/system-context";

interface Message {
  id: string;
  sender: "user" | "architect";
  text: string;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  "react": "Os registros apontam maestria de Rank-S em React. Ele utiliza essa feitiçaria para construir interfaces complexas sem esgotar sua mana.",
  "node": "Node.js é sua arma principal no lado sombrio do servidor. Ele controla o fluxo de I/O com a precisão de um monarca.",
  "experiencia": "Ele sobreviveu a inúmeras Masmorras Corporativas, trabalhando em projetos Full-Stack de alto impacto.",
  "nivel": "Seu nível é incalculável. Ele quebrou o limitador imposto pelo Sistema há muito tempo.",
  "contato": "Se deseja recrutar o Jogador, utilize a interface de Guilda na página principal. Ele está aberto a novas Raids.",
  "default": "Sua pergunta não consta nos Registros Akáshicos. Reformule, humano, ou limite-se a perguntar sobre as habilidades do Jogador.",
};

export function ArchitectChat() {
  const { playSystemVoice } = useSystem();
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "architect", text: "Eu sou o Arquiteto. O que você deseja saber sobre o Jogador?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    // Lógica simples de "IA"
    setTimeout(() => {
      let responseText = KNOWLEDGE_BASE["default"];
      const lowerInput = userMsg.toLowerCase();

      if (lowerInput.includes("react") || lowerInput.includes("frontend")) {
        responseText = KNOWLEDGE_BASE["react"];
      } else if (lowerInput.includes("node") || lowerInput.includes("backend")) {
        responseText = KNOWLEDGE_BASE["node"];
      } else if (lowerInput.includes("experiência") || lowerInput.includes("experiencia") || lowerInput.includes("trabalho")) {
        responseText = KNOWLEDGE_BASE["experiencia"];
      } else if (lowerInput.includes("nível") || lowerInput.includes("nivel") || lowerInput.includes("level")) {
        responseText = KNOWLEDGE_BASE["nivel"];
      } else if (lowerInput.includes("contato") || lowerInput.includes("falar") || lowerInput.includes("contratar")) {
        responseText = KNOWLEDGE_BASE["contato"];
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), sender: "architect", text: responseText }]);
      setIsTyping(false);
      playSystemVoice("item-acquired"); // Somzinho sutil para a mensagem chegando
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-black/80 border-2 border-system-blue/40 rounded-lg shadow-[0_0_40px_var(--color-system-blue-glow)] overflow-hidden flex flex-col h-[500px]">
      <div className="bg-system-blue/10 border-b border-system-blue/40 p-4 flex items-center gap-3">
        <Cpu className="w-6 h-6 text-system-blue animate-pulse" />
        <div>
          <h2 className="text-xl font-mono text-system-blue font-bold tracking-[0.2em] uppercase">Comunicador do Arquiteto</h2>
          <p className="text-xs font-mono text-system-blue/70">Terminal de Consulta do Sistema - Status: ONLINE</p>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div 
                className={`max-w-[80%] p-4 rounded-lg font-mono text-sm leading-relaxed ${
                  msg.sender === "user" 
                    ? "bg-system-blue/20 border border-system-blue text-white" 
                    : "bg-black border border-system-blue/50 text-system-blue shadow-[0_0_15px_rgba(59,130,246,0.1)]"
                }`}
              >
                {msg.sender === "architect" && <span className="font-bold text-xs text-system-gold block mb-2">[O ARQUITETO]</span>}
                {msg.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-black border border-system-blue/50 p-4 rounded-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-system-blue rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-system-blue rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-system-blue rounded-full animate-bounce delay-200" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-system-blue/40 bg-black">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Terminal className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-system-blue/50" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Pergunte ao Sistema..."
              className="w-full bg-black border border-system-blue/50 rounded p-3 pl-10 font-mono text-system-blue focus:outline-none focus:border-system-blue focus:shadow-[0_0_10px_var(--color-system-blue-glow)] transition-all placeholder:text-system-blue/30"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-system-blue/20 hover:bg-system-blue border border-system-blue text-system-blue hover:text-white px-6 rounded flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
