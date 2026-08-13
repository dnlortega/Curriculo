"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Activity, Server, Clock, RefreshCw, BarChart3, Globe2, ShieldAlert, Zap, Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect, useCallback } from "react";

type ServiceStatus = "operational" | "degraded" | "outage";

interface Service {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  uptime: string;
  responseTime: number;
  lastIncident: string;
  category: string;
  region: string;
}

const initialServices: Service[] = [
  {
    id: "meu-inss",
    name: "Meu INSS",
    description: "Serviços previdenciários e agendamentos",
    status: "operational",
    uptime: "99.9%",
    responseTime: 124,
    lastIncident: "Nenhum nos últimos 30 dias",
    category: "Previdência",
    region: "Nacional"
  },
  {
    id: "meu-sus",
    name: "Conecte SUS",
    description: "Histórico de saúde e carteira de vacinação",
    status: "degraded",
    uptime: "99.8%",
    responseTime: 850,
    lastIncident: "Atual: Falha para logar",
    category: "Saúde",
    region: "Nacional"
  },
  {
    id: "govbr",
    name: "Portal Gov.br",
    description: "Acesso unificado aos serviços do governo",
    status: "operational",
    uptime: "99.99%",
    responseTime: 45,
    lastIncident: "Nenhum nos últimos 90 dias",
    category: "Identidade",
    region: "Nacional"
  },
  {
    id: "ecac",
    name: "e-CAC (Receita Federal)",
    description: "Centro Virtual de Atendimento ao Contribuinte",
    status: "operational",
    uptime: "99.5%",
    responseTime: 210,
    lastIncident: "Manutenção programada há 2 dias",
    category: "Tributos",
    region: "Nacional"
  },
  {
    id: "ctps",
    name: "Carteira de Trabalho Digital",
    description: "Acesso aos dados trabalhistas",
    status: "degraded",
    uptime: "95.2%",
    responseTime: 840,
    lastIncident: "Atual: Lentidão no login",
    category: "Trabalho",
    region: "Nacional"
  },
  {
    id: "cnh",
    name: "CNH Digital / Senatran",
    description: "Documentos de trânsito e veículos",
    status: "operational",
    uptime: "99.9%",
    responseTime: 115,
    lastIncident: "Nenhum nos últimos 15 dias",
    category: "Trânsito",
    region: "Nacional"
  },
  {
    id: "esocial",
    name: "e-Social",
    description: "Sistema de Escrituração Digital das Obrigações Fiscais",
    status: "operational",
    uptime: "98.7%",
    responseTime: 320,
    lastIncident: "Falha de comunicação há 5 dias",
    category: "Trabalho",
    region: "Nacional"
  },
  {
    id: "sougov",
    name: "SouGov.br",
    description: "Serviços aos servidores públicos federais",
    status: "outage",
    uptime: "96.4%",
    responseTime: 0,
    lastIncident: "Atual: Sistema indisponível",
    category: "Servidores",
    region: "Nacional"
  },
  {
    id: "enem",
    name: "Página do Participante (Enem)",
    description: "Acesso aos resultados e inscrições",
    status: "operational",
    uptime: "99.1%",
    responseTime: 65,
    lastIncident: "Pico de acessos há 20 dias",
    category: "Educação",
    region: "Nacional"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function GovStatusPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [autoRefreshInterval, setAutoRefreshInterval] = useState<number>(0);

  useEffect(() => {
    setMounted(true);
    setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
  }, []);

  const refreshStatus = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setServices(prev => prev.map(service => {
        if (Math.random() > 0.8) {
          const statuses: ServiceStatus[] = ["operational", "degraded", "outage"];
          const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
          const newResponseTime = newStatus === "outage" ? 0 : Math.floor(Math.random() * 800) + 40;
          return { ...service, status: newStatus, responseTime: newResponseTime };
        }
        const flux = Math.floor(Math.random() * 50) - 25;
        const newResponseTime = service.status === "outage" ? 0 : Math.max(20, service.responseTime + flux);
        return { ...service, responseTime: newResponseTime };
      }));
      setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
      setIsRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (autoRefreshInterval === 0) return;
    const interval = setInterval(() => {
      refreshStatus();
    }, autoRefreshInterval * 1000);
    return () => clearInterval(interval);
  }, [autoRefreshInterval, refreshStatus]);

  const getStatusConfig = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return {
          icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
          text: "[ OK ]",
          badgeClass: "bg-emerald-950/30 text-emerald-400 border-emerald-900/50 font-bold",
          color: "text-emerald-400",
          bgGradient: "bg-zinc-900/50 hover:bg-zinc-900/80 border-emerald-900/30",
          shadow: "hover:shadow-[0_0_15px_rgba(52,211,153,0.1)]"
        };
      case "degraded":
        return {
          icon: <AlertTriangle className="w-4 h-4 text-yellow-400" />,
          text: "[ WARN ]",
          badgeClass: "bg-yellow-950/30 text-yellow-400 border-yellow-900/50 font-bold animate-pulse",
          color: "text-yellow-400",
          bgGradient: "bg-zinc-900/50 hover:bg-zinc-900/80 border-yellow-900/50",
          shadow: "hover:shadow-[0_0_15px_rgba(250,204,21,0.15)]"
        };
      case "outage":
        return {
          icon: <XCircle className="w-4 h-4 text-red-500" />,
          text: "[ FAIL ]",
          badgeClass: "bg-red-950/30 text-red-500 border-red-900/50 font-bold animate-pulse",
          color: "text-red-500",
          bgGradient: "bg-red-950/10 hover:bg-red-950/20 border-red-900/50",
          shadow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
        };
    }
  };

  const operationalCount = services.filter(s => s.status === "operational").length;
  const isAllOperational = operationalCount === services.length;
  const hasOutage = services.some(s => s.status === "outage");
  const affectedServices = services.filter(s => s.status !== "operational");
  
  const overallStatus = isAllOperational 
    ? { title: "SYSTEMS_NOMINAL", icon: <CheckCircle2 className="w-10 h-10 text-emerald-400" />, color: "text-emerald-400", bg: "bg-emerald-950/10", border: "border-emerald-900/50" }
    : hasOutage 
      ? { title: "CRITICAL_FAILURE_DETECTED", icon: <XCircle className="w-10 h-10 text-red-500" />, color: "text-red-500", bg: "bg-red-950/10", border: "border-red-900/50" }
      : { title: "PARTIAL_DEGRADATION", icon: <AlertTriangle className="w-10 h-10 text-yellow-400" />, color: "text-yellow-400", bg: "bg-yellow-950/10", border: "border-yellow-900/50" };

  if (!mounted) return null;

  return (
    <div className="h-screen w-full bg-zinc-950 text-zinc-300 font-mono overflow-hidden flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      <header className="z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-10 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span className="font-bold text-xs tracking-widest text-zinc-100">GOV.BR_STATUS_MONITOR</span>
          </div>
          <div className="flex items-center gap-3 text-[10px]">
            <select 
              className="bg-zinc-900 border border-zinc-700 rounded-none px-1 py-0.5 outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer appearance-none text-zinc-300"
              value={autoRefreshInterval}
              onChange={(e) => setAutoRefreshInterval(Number(e.target.value))}
            >
              <option value={0}>AUTO_SYNC: OFF</option>
              <option value={10}>SYNC_FREQ: 10s</option>
              <option value={30}>SYNC_FREQ: 30s</option>
              <option value={60}>SYNC_FREQ: 60s</option>
            </select>
            <button 
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="px-2 py-0.5 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors disabled:opacity-50 flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3 h-3 text-emerald-500 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline-block tracking-widest">FORCE_SYNC</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center container mx-auto px-4 max-w-7xl relative z-10 w-full py-2">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <div className="flex items-end justify-between mb-2">
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-widest text-zinc-100 uppercase">
                Server_Farm_Status
              </h1>
            </div>
            <div className="text-right text-[10px] font-mono text-zinc-500">
              <p>SESSION_ID: 0x8F9A2 | UPTIME: 99.9%</p>
            </div>
          </div>

          <Card className={`rounded-none border shadow-2xl transition-all duration-500 ${overallStatus.border} ${overallStatus.bg}`}>
            <div className="p-3 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={isRefreshing ? { scale: [1, 1.1, 1], opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0 }}
                >
                  {overallStatus.icon}
                </motion.div>
                <div>
                  <h2 className={`text-sm font-bold tracking-widest ${overallStatus.color}`}>
                    {overallStatus.title}
                  </h2>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> PING: {lastUpdate}
                    </span>
                    <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                      <Server className="w-3 h-3" /> NODES: {operationalCount}/{services.length}
                    </span>
                  </div>
                </div>
              </div>

              {affectedServices.length > 0 && (
                <div className="border-l border-zinc-800 pl-4">
                  <p className="text-[10px] font-bold text-zinc-400 mb-1 tracking-widest uppercase">Alert_Log:</p>
                  <div className="flex flex-col gap-0.5">
                    {affectedServices.map(svc => (
                      <div key={svc.id} className="flex items-center gap-1 text-[10px]">
                        <span className={`${svc.status === 'outage' ? 'text-red-500' : 'text-yellow-400'}`}>
                          {svc.status === 'outage' ? '[ERR]' : '[WARN]'}
                        </span>
                        <span className="text-zinc-300">{svc.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        <div className="mb-1 flex items-center justify-between border-b border-zinc-800 pb-1">
          <h3 className="text-xs font-bold tracking-widest text-zinc-300 uppercase">
            &gt; Network_Nodes
          </h3>
          <div className="flex items-center gap-3 text-[10px] font-medium">
            <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> OP</span>
            <span className="text-yellow-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" /> DEG</span>
            <span className="text-red-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> OUT</span>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2"
        >
          {services.map((service) => {
            const config = getStatusConfig(service.status);
            return (
              <Dialog key={service.id}>
                <DialogTrigger render={<motion.button variants={itemVariants} className="cursor-pointer h-full w-full text-left appearance-none border-none bg-transparent p-0 m-0 focus:outline-none" />}>
                  <Card className={`h-full rounded-none border transition-all duration-300 group ${config.bgGradient} ${config.shadow}`}>
                    <CardHeader className="p-2 pb-1">
                      <div className="flex justify-between items-start mb-1">
                        <span className={`text-[10px] font-bold tracking-widest ${config.color}`}>
                          {config.text}
                        </span>
                        <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider">
                          ID: {service.id}
                        </span>
                      </div>
                      <CardTitle className="text-xs font-bold text-zinc-100 tracking-wide truncate">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-2 pt-1">
                      <div className="flex justify-between items-end border-t border-zinc-800/50 pt-1 mt-1">
                        <div className="flex flex-col">
                          <span className="text-[8px] text-zinc-600 uppercase tracking-widest">PING</span>
                          <span className={`text-[10px] font-bold ${service.responseTime > 500 ? 'text-yellow-400' : 'text-zinc-300'}`}>
                            {service.status === 'outage' ? 'TIMEOUT' : `${service.responseTime}ms`}
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[8px] text-zinc-600 uppercase tracking-widest">UPTIME</span>
                          <span className="text-[10px] font-bold text-zinc-300">
                            {service.uptime}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-[500px] rounded-none border-zinc-700 bg-zinc-950 font-mono text-zinc-300 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                  <DialogHeader className="border-b border-zinc-800 pb-3 mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest">NODE_DETAILS</span>
                      <span className={`text-xs font-bold tracking-widest ${config.color}`}>
                        {config.text}
                      </span>
                    </div>
                    <DialogTitle className="text-lg font-bold tracking-widest uppercase text-zinc-100">
                      &gt; {service.name}
                    </DialogTitle>
                    <DialogDescription className="text-[10px] text-zinc-500 font-mono mt-1">
                      {service.description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-zinc-900 border border-zinc-800 p-2 flex flex-col">
                      <span className="text-[8px] text-zinc-500 tracking-widest mb-1 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-zinc-400" /> LATENCY
                      </span>
                      <span className={`text-base font-bold ${service.status === 'outage' ? 'text-red-500' : 'text-zinc-200'}`}>
                        {service.status === 'outage' ? 'TIMEOUT' : `${service.responseTime} ms`}
                      </span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-2 flex flex-col">
                      <span className="text-[8px] text-zinc-500 tracking-widest mb-1 flex items-center gap-1">
                        <BarChart3 className="w-3 h-3 text-zinc-400" /> UPTIME_30D
                      </span>
                      <span className="text-base font-bold text-zinc-200">
                        {service.uptime}
                      </span>
                    </div>
                  </div>

                  <div className="border border-zinc-800 bg-zinc-900/50 p-3 text-[10px]">
                    <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/50">
                      <span className="text-zinc-500">REGION_LOCK</span>
                      <span className="text-zinc-300 font-bold">{service.region}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/50">
                      <span className="text-zinc-500">SYSTEM_TAG</span>
                      <span className="text-zinc-300 bg-zinc-800 px-1 py-0.5">{service.category}</span>
                    </div>
                    <div className="flex justify-between items-start py-1.5">
                      <span className="text-zinc-500">LAST_INCIDENT</span>
                      <span className={`font-bold text-right max-w-[200px] ${service.status !== 'operational' ? config.color : 'text-zinc-300'}`}>
                        {service.lastIncident}
                      </span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
}

