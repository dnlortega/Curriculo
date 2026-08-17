import { Metadata } from "next";
import { StatusWindow } from "@/components/system/status-window";
import { QuestLog } from "@/components/system/quest-log";
import { SystemMessage } from "@/components/system/system-message";
import { ParticlesBackground } from "@/components/system/particles-background";
import { DailyQuest } from "@/components/system/daily-quest";
import { Inventory } from "@/components/system/inventory";
import { ShadowArmy } from "@/components/system/shadow-army";

export const metadata: Metadata = {
  title: "Console do Sistema",
  description: "Acesso restrito ao painel do Arquiteto do Sistema.",
};

export default function SystemPage() {
  return (
    <div className="min-h-screen bg-system-bg text-white font-sans selection:bg-system-blue/30 selection:text-system-blue overflow-x-hidden relative pb-20">
      
      {/* Background Particles Effect */}
      <ParticlesBackground />
      
      {/* Glow effect in the center */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-system-blue/5 rounded-full blur-[120px] z-0 pointer-events-none" />

      <main className="relative z-10 container mx-auto px-4 pt-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-system-blue to-blue-300 font-bold tracking-[0.3em] uppercase drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
            O Sistema
          </h1>
          <p className="mt-4 text-system-blue/70 font-mono tracking-widest text-sm uppercase">
            Acesso concedido: Jogador Único
          </p>
        </header>

        <div className="flex flex-col gap-12 items-center max-w-6xl mx-auto">
          {/* Main Status */}
          <StatusWindow />

          {/* Grid for Daily Quest and Log */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
            <DailyQuest />
            <QuestLog />
          </div>

          {/* Inventory */}
          <Inventory />

          {/* Shadow Army (Arise) */}
          <ShadowArmy />
        </div>

        {/* System initial message */}
        <SystemMessage 
          title="BEM-VINDO JOGADOR" 
          message="O Arquiteto conectou você ao Sistema com sucesso." 
          type="info" 
          delay={1} 
          duration={5} 
        />
        
        {/* Hidden quest message appearing later */}
        <SystemMessage 
          title="NOVA QUEST DISPONÍVEL" 
          message="Verifique sua Missão Diária para evitar penalidades." 
          type="warning" 
          delay={7} 
          duration={6} 
        />
      </main>
    </div>
  );
}
