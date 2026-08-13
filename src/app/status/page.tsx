"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Activity, Server, Clock, RefreshCw, BarChart3, Globe2, ShieldAlert, Zap, Terminal, Volume2, VolumeX, Maximize, Skull } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect, useCallback, useRef } from "react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

type ServiceStatus = "operational" | "degraded" | "outage";

interface PingHistory {
  time: string;
  ping: number;
  status: ServiceStatus;
}

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
  history: PingHistory[];
}

const generateHistory = (base: ServiceStatus, basePing: number): PingHistory[] => {
  return Array(20).fill(null).map((_, i) => ({
    time: new Date(Date.now() - (19 - i) * 5000).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' }),
    ping: base === 'outage' ? 0 : basePing + Math.floor(Math.random() * 20) - 10,
    status: base
  }));
};

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
    region: "Nacional",
    history: generateHistory("operational", 124)
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
    region: "Nacional",
    history: generateHistory("degraded", 850)
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
    region: "Nacional",
    history: generateHistory("operational", 45)
  },
  {
    id: "esocial",
    name: "e-Social",
    description: "Sistema de escrituração digital",
    status: "operational",
    uptime: "99.5%",
    responseTime: 210,
    lastIncident: "Ontem, 14:30 - Lentidão na consulta",
    category: "Trabalho",
    region: "Brasília-DF",
    history: generateHistory("operational", 210)
  },
  {
    id: "enem",
    name: "SiSU / Enem",
    description: "Sistema de seleção unificada",
    status: "operational",
    uptime: "98.5%",
    responseTime: 65,
    lastIncident: "Há 15 dias - Sobrecarga",
    category: "Educação",
    region: "São Paulo-SP",
    history: generateHistory("operational", 65)
  },
  {
    id: "ecac",
    name: "Receita Federal (e-CAC)",
    description: "Serviços fiscais e tributários",
    status: "outage",
    uptime: "99.1%",
    responseTime: 0,
    lastIncident: "Atual: Fora do ar",
    category: "Finanças",
    region: "Nacional",
    history: generateHistory("outage", 0)
  },
  {
    id: "ctps",
    name: "Carteira Digital",
    description: "CTPS Digital e Seguro Desemprego",
    status: "operational",
    uptime: "99.9%",
    responseTime: 180,
    lastIncident: "Há 45 dias - API Instável",
    category: "Trabalho",
    region: "Rio de Janeiro-RJ",
    history: generateHistory("operational", 180)
  },
  {
    id: "cnh",
    name: "CNH Digital (Senatran)",
    description: "Documentos de trânsito",
    status: "operational",
    uptime: "99.7%",
    responseTime: 110,
    lastIncident: "Nenhum nos últimos 30 dias",
    category: "Trânsito",
    region: "Fortaleza-CE",
    history: generateHistory("operational", 110)
  },
  {
    id: "tse",
    name: "TSE (e-Título)",
    description: "Serviços eleitorais e biometria",
    status: "operational",
    uptime: "99.8%",
    responseTime: 95,
    lastIncident: "Nenhum nos últimos 30 dias",
    category: "Cidadania",
    region: "Brasília-DF",
    history: generateHistory("operational", 95)
  },
  {
    id: "cadunico",
    name: "CadÚnico",
    description: "Cadastro de Programas Sociais",
    status: "operational",
    uptime: "99.2%",
    responseTime: 310,
    lastIncident: "Lentidão recorrente no mês",
    category: "Social",
    region: "Nacional",
    history: generateHistory("operational", 310)
  },
  {
    id: "prouni",
    name: "PROUNI / FIES",
    description: "Sistemas de acesso ao ensino superior",
    status: "degraded",
    uptime: "95.5%",
    responseTime: 980,
    lastIncident: "Atual: Alta carga de usuários",
    category: "Educação",
    region: "Nacional",
    history: generateHistory("degraded", 980)
  },
  {
    id: "assinatura",
    name: "Assinatura Gov.br",
    description: "Portal de Assinaturas Eletrônicas",
    status: "operational",
    uptime: "99.99%",
    responseTime: 55,
    lastIncident: "Nenhum nos últimos 90 dias",
    category: "Identidade",
    region: "São Paulo-SP",
    history: generateHistory("operational", 55)
  }
];

const TacticalMap = ({ services }: { services: Service[] }) => {
  const nodes = [
    { id: 'DF', x: 50, y: 55, label: 'Brasília-DF', regions: ['Brasília-DF', 'Nacional'] },
    { id: 'SP', x: 65, y: 75, label: 'São Paulo-SP', regions: ['São Paulo-SP'] },
    { id: 'RJ', x: 75, y: 70, label: 'Rio-RJ', regions: ['Rio de Janeiro-RJ'] },
    { id: 'CE', x: 80, y: 25, label: 'Fortaleza-CE', regions: ['Fortaleza-CE'] },
    { id: 'AM', x: 25, y: 30, label: 'Manaus-AM', regions: [] }
  ];

  return (
    <div className="relative w-full h-full bg-zinc-950/50 border border-zinc-800 rounded-none overflow-hidden min-h-[80px] sm:min-h-[100px]">
      <svg className="absolute inset-0 w-full h-full" viewBox="15 15 70 70" preserveAspectRatio="xMidYMid meet">
        {/* Network connections */}
        <path d="M50 55 L65 75 L75 70 L50 55 L80 25 L25 30 L50 55" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
        <path d="M25 30 L80 25" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="1 1" />
        
        {nodes.map(node => {
          const relevantServices = services.filter(s => node.regions.includes(s.region));
          const hasOutage = relevantServices.some(s => s.status === 'outage');
          const hasDegraded = relevantServices.some(s => s.status === 'degraded');
          const nodeColor = hasOutage ? '#ef4444' : hasDegraded ? '#facc15' : '#34d399';
          
          return (
            <g key={node.id}>
              {hasOutage && (
                <circle cx={node.x} cy={node.y} r="4" fill="none" stroke={nodeColor} strokeWidth="0.5" className="animate-ping opacity-75" />
              )}
              <circle cx={node.x} cy={node.y} r="1.5" fill={nodeColor} />
              <text x={node.x + 3} y={node.y + 1} fontSize="3" fill="#a1a1aa" className="font-mono">{node.id}</text>
            </g>
          );
        })}
      </svg>
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">TACTICAL_MAP</span>
        <span className="text-[6px] text-zinc-600 font-mono">NODE_OVERVIEW: BR</span>
      </div>
    </div>
  );
};

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
  const [isMuted, setIsMuted] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [chaosMode, setChaosMode] = useState(false);
  
  const prevStatuses = useRef<Record<string, ServiceStatus>>({});

  useEffect(() => {
    setMounted(true);
    setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
    
    const initialObj: Record<string, ServiceStatus> = {};
    initialServices.forEach(s => initialObj[s.id] = s.status);
    prevStatuses.current = initialObj;
    
    addLog("[SYS] Dashboard initialization complete. Monitoring started.");
  }, []);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString('pt-BR', { hour12: false });
    setLogs(prev => [`[${time}] ${msg}`, ...prev].slice(0, 50));
  };

  const playAlertSound = useCallback(() => {
    if (isMuted) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.warn("Audio play failed", e);
    }
  }, [isMuted]);

  useEffect(() => {
    if (!mounted) return;
    let changed = false;
    services.forEach(service => {
      const prev = prevStatuses.current[service.id];
      if (prev && prev !== service.status) {
        changed = true;
        const alertType = service.status === 'outage' ? '[CRITICAL]' : service.status === 'degraded' ? '[WARN]' : '[OK]';
        addLog(`${alertType} Node ${service.id.toUpperCase()} changed state to ${service.status.toUpperCase()}`);
      }
      prevStatuses.current[service.id] = service.status;
    });

    if (changed) {
      playAlertSound();
    }
  }, [services, playAlertSound, mounted]);

  const triggerChaos = () => {
    setChaosMode(true);
    addLog("[SYS] CHAOS MODE ENGAGED. Simulating massive cyberattack...");
    refreshStatus(true);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        addLog(`[ERR] Fullscreen failed: ${err.message}`);
      });
      addLog("[SYS] Fullscreen mode enabled");
    } else {
      document.exitFullscreen();
      addLog("[SYS] Fullscreen mode disabled");
    }
  };

  const refreshStatus = useCallback(async (isChaos = chaosMode) => {
    setIsRefreshing(true);
    
    try {
      if (isChaos) {
        setServices(prev => prev.map(service => {
          const isFailing = Math.random() > 0.5;
          const newStatus: ServiceStatus = isFailing ? "outage" : "operational";
          const newResponseTime = isFailing ? 0 : Math.floor(Math.random() * 200) + 20;
          const now = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' });
          return { 
            ...service, 
            status: newStatus, 
            responseTime: newResponseTime,
            history: [...service.history, { time: now, ping: newResponseTime, status: newStatus }].slice(-20)
          };
        }));
      } else {
        const res = await fetch('/api/ping');
        const data = await res.json();
        
        setServices(prev => prev.map(service => {
          const apiStatus = data.find((d: any) => d.id === service.id);
          if (!apiStatus) return service;
          
          const now = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' });
          return {
            ...service,
            status: apiStatus.status as ServiceStatus,
            responseTime: apiStatus.responseTime,
            history: [...service.history, { time: now, ping: apiStatus.responseTime, status: apiStatus.status as ServiceStatus }].slice(-20)
          };
        }));
      }
    } catch (e) {
      addLog("[ERR] Failed to fetch backend status.");
    } finally {
      setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
      setIsRefreshing(false);
    }
  }, [chaosMode]);

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
          shadow: "hover:shadow-[0_0_15px_rgba(52,211,153,0.1)]",
          barColor: "bg-emerald-500"
        };
      case "degraded":
        return {
          icon: <AlertTriangle className="w-4 h-4 text-yellow-400" />,
          text: "[ WARN ]",
          badgeClass: "bg-yellow-950/30 text-yellow-400 border-yellow-900/50 font-bold animate-pulse",
          color: "text-yellow-400",
          bgGradient: "bg-zinc-900/50 hover:bg-zinc-900/80 border-yellow-900/50",
          shadow: "hover:shadow-[0_0_15px_rgba(250,204,21,0.15)]",
          barColor: "bg-yellow-400"
        };
      case "outage":
        return {
          icon: <XCircle className="w-4 h-4 text-red-500" />,
          text: "[ FAIL ]",
          badgeClass: "bg-red-950/30 text-red-500 border-red-900/50 font-bold animate-pulse",
          color: "text-red-500",
          bgGradient: "bg-red-950/10 hover:bg-red-950/20 border-red-900/50",
          shadow: "hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]",
          barColor: "bg-red-500"
        };
    }
  };

  const categories = ["ALL", ...Array.from(new Set(services.map(s => s.category.toUpperCase())))];
  
  const filteredServices = services.filter(s => {
    const matchCategory = categoryFilter === "ALL" || s.category.toUpperCase() === categoryFilter;
    const matchNode = selectedNodes.length === 0 || selectedNodes.includes(s.id);
    return matchCategory && matchNode;
  });
  
  const operationalCount = services.filter(s => s.status === "operational").length;
  const isAllOperational = operationalCount === services.length;
  const hasOutage = services.some(s => s.status === "outage");
  const affectedServices = services.filter(s => s.status !== "operational");
  
  const overallStatus = isAllOperational 
    ? { title: "SYSTEMS_NOMINAL", icon: <CheckCircle2 className="w-10 h-10 text-emerald-400" />, color: "text-emerald-400", bg: "bg-emerald-950/10", border: "border-emerald-900/50" }
    : hasOutage 
      ? { title: "[!] CRITICAL_FAILURE_DETECTED", icon: <XCircle className="w-10 h-10 text-red-500" />, color: "text-red-500 font-bold", bg: "bg-red-950/20", border: "border-red-600" }
      : { title: "PARTIAL_DEGRADATION", icon: <AlertTriangle className="w-10 h-10 text-yellow-400" />, color: "text-yellow-400", bg: "bg-yellow-950/10", border: "border-yellow-900/50" };

  return (
    <div className={`h-screen w-full bg-zinc-950 text-zinc-300 font-mono flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200 ${chaosMode ? 'animate-[shake_0.5s_ease-in-out_infinite]' : ''}`}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
      `}} />
      <div className={`fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px] ${chaosMode ? 'bg-red-950/20' : ''}`} />
      
      <header className="z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md shrink-0">
        <div className="container mx-auto px-2 sm:px-4 h-10 flex flex-wrap items-center justify-between max-w-7xl">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Terminal className="w-3 h-3 text-emerald-500" />
            <span className="font-bold text-[9px] sm:text-xs tracking-widest text-zinc-100 hidden sm:inline-block">GOV.BR_STATUS</span>
            <span className="font-bold text-[9px] sm:text-xs tracking-widest text-zinc-100 sm:hidden">GOV.BR</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-[10px]">
            <button 
              onClick={triggerChaos}
              className={`px-2 py-0.5 border transition-colors flex items-center gap-1.5 ${chaosMode ? 'bg-red-600 text-white border-red-500 animate-pulse' : 'bg-zinc-900 border-zinc-700 hover:bg-red-950/30 hover:border-red-900/50 hover:text-red-400 text-zinc-500'}`}
              title="Engage Chaos Mode"
            >
              <Skull className="w-3 h-3" />
              <span className="hidden sm:inline-block">CHAOS</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className="px-2 py-0.5 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors flex items-center gap-1.5 text-zinc-400"
              title="Fullscreen"
            >
              <Maximize className="w-3 h-3" />
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`px-2 py-0.5 border transition-colors flex items-center gap-1.5 ${isMuted ? 'bg-zinc-900 border-zinc-700 text-zinc-500' : 'bg-emerald-950/30 border-emerald-900/50 text-emerald-400 hover:bg-emerald-900/40'}`}
              title={isMuted ? "Unmute Alerts" : "Mute Alerts"}
            >
              {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
            </button>
            <select 
              className="bg-zinc-900 border border-zinc-700 rounded-none px-1 py-0.5 outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer appearance-none text-zinc-300 max-w-[80px] sm:max-w-none text-[8px] sm:text-[10px]"
              value={autoRefreshInterval}
              onChange={(e) => setAutoRefreshInterval(Number(e.target.value))}
            >
              <option value={0}>AUTO_SYNC: OFF</option>
              <option value={10}>SYNC_FREQ: 10s</option>
              <option value={30}>SYNC_FREQ: 30s</option>
              <option value={60}>SYNC_FREQ: 60s</option>
            </select>
            <button 
              onClick={() => refreshStatus()}
              disabled={isRefreshing}
              className="px-2 py-0.5 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-colors disabled:opacity-50 flex items-center gap-1.5"
            >
              <RefreshCw className={`w-3 h-3 text-emerald-500 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline-block tracking-widest">FORCE_SYNC</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-start container mx-auto px-2 sm:px-4 max-w-7xl relative z-10 w-full py-2 overflow-hidden h-[calc(100vh-2.5rem)]">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 shrink-0"
        >
          <div className="flex items-end justify-between mb-2">
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-widest text-zinc-100 uppercase">
                Server_Farm
              </h1>
            </div>
            <div className="text-right text-[8px] sm:text-[10px] font-mono text-zinc-500 hidden sm:block">
              <p>SESSION_ID: 0x8F9A2 | UPTIME: 99.9%</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Card className={`col-span-1 md:col-span-2 rounded-none border shadow-2xl transition-all duration-500 ${overallStatus.border} ${overallStatus.bg}`}>
              <div className="p-2 sm:p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 h-full">
                <div className="flex items-center gap-3 sm:gap-4">
                  <motion.div
                    animate={isRefreshing ? { scale: [1, 1.1, 1], opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0 }}
                    className="shrink-0"
                  >
                    {overallStatus.icon}
                  </motion.div>
                  <div>
                    <h2 className={`text-base sm:text-lg font-bold tracking-widest ${overallStatus.color}`}>
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
                  <div className="w-full sm:w-auto border-t sm:border-t-0 sm:border-l border-zinc-800 pt-2 sm:pt-0 sm:pl-4">
                    <p className="text-[8px] font-bold text-zinc-500 mb-0 tracking-widest uppercase">Alert_Log:</p>
                    <div className="flex flex-col gap-0 max-h-[35px] overflow-y-auto sm:overflow-hidden">
                      {affectedServices.map(svc => (
                        <div key={svc.id} className="flex items-center gap-1 text-[8px]">
                          <span className={`${svc.status === 'outage' ? 'text-red-500' : 'text-yellow-400'}`}>
                            {svc.status === 'outage' ? '[ERR]' : '[WARN]'}
                          </span>
                          <span className="text-zinc-400">{svc.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>

            <div className="col-span-1 hidden md:block">
              <TacticalMap services={services} />
            </div>
          </div>
        </motion.div>

        <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-1 gap-2 shrink-0">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <h3 className="text-[10px] sm:text-xs font-bold tracking-widest text-zinc-300 uppercase mr-1 sm:mr-2">
              &gt; Filters:
            </h3>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 uppercase tracking-widest transition-colors ${categoryFilter === cat ? 'bg-zinc-700 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                [{cat}]
              </button>
            ))}
            
            <Dialog>
              <DialogTrigger asChild>
                <button className={`ml-2 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 uppercase tracking-widest transition-colors border ${selectedNodes.length > 0 ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400' : 'border-zinc-700 text-zinc-400 hover:bg-zinc-800'}`}>
                  + TARGET_NODES {selectedNodes.length > 0 && `(${selectedNodes.length})`}
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[400px] rounded-none border-zinc-700 bg-zinc-950 font-mono text-zinc-300">
                <DialogHeader>
                  <DialogTitle className="text-xs tracking-widest uppercase text-emerald-500 mb-2">TARGET_SELECTION_MATRIX</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-2 mt-2 max-h-[300px] overflow-y-auto">
                  {services.map(svc => {
                    const isSelected = selectedNodes.includes(svc.id);
                    return (
                      <button 
                        key={svc.id} 
                        onClick={() => {
                          setSelectedNodes(prev => 
                            isSelected ? prev.filter(id => id !== svc.id) : [...prev, svc.id]
                          );
                        }} 
                        className={`text-[10px] text-left px-2 py-1.5 border transition-colors truncate ${isSelected ? 'bg-emerald-950/40 border-emerald-900/80 text-emerald-400' : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'}`}
                      >
                        {isSelected ? '[x]' : '[ ]'} {svc.name}
                      </button>
                    )
                  })}
                </div>
                <div className="flex justify-end mt-4">
                  <button onClick={() => setSelectedNodes([])} className="text-[10px] text-zinc-500 hover:text-red-400 uppercase tracking-widest">
                    [ CLEAR_TARGETS ]
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[10px] font-medium self-end sm:self-auto">
            <span className="text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" /> OP</span>
            <span className="text-yellow-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" /> DEG</span>
            <span className="text-red-500 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-red-500 rounded-full" /> OUT</span>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-1 sm:gap-2 pb-0 flex-1 min-h-0"
        >
          <AnimatePresence>
          {filteredServices.map((service) => {
            const config = getStatusConfig(service.status);
            return (
              <Dialog key={service.id}>
                <DialogTrigger render={<motion.button layout variants={itemVariants} initial="hidden" animate="show" exit={{ opacity: 0, scale: 0.9 }} className="cursor-pointer h-full w-full text-left appearance-none border-none bg-transparent p-0 m-0 focus:outline-none" />}>
                  <Card className={`h-full rounded-none border transition-all duration-300 group flex flex-col ${config.bgGradient} ${config.shadow}`}>
                    <CardHeader className="p-1.5 sm:p-2 pb-0.5 shrink-0">
                      <div className="flex justify-between items-start mb-0.5">
                        <span className={`text-[9px] sm:text-[10px] font-bold tracking-widest ${config.color}`}>
                          {config.text}
                        </span>
                        <span className="text-[7px] sm:text-[8px] text-zinc-500 font-bold uppercase tracking-wider">
                          ID: {service.id}
                        </span>
                      </div>
                      <CardTitle className="text-[10px] sm:text-xs font-bold text-zinc-100 tracking-wide truncate">
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-1.5 sm:p-2 pt-0.5 flex flex-col justify-between flex-1 min-h-0">
                      <div className="flex justify-between items-end border-t border-zinc-800/50 pt-1 mt-1 mb-1 shrink-0">
                        <div className="flex flex-col">
                          <span className="text-[7px] sm:text-[8px] text-zinc-600 uppercase tracking-widest">PING</span>
                          <span className={`text-[9px] sm:text-[10px] font-bold ${service.responseTime > 500 ? 'text-yellow-400' : 'text-zinc-300'}`}>
                            {service.status === 'outage' ? 'TIMEOUT' : `${service.responseTime}ms`}
                          </span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-[7px] sm:text-[8px] text-zinc-600 uppercase tracking-widest">UPTIME</span>
                          <span className="text-[9px] sm:text-[10px] font-bold text-zinc-300">
                            {service.uptime}
                          </span>
                        </div>
                      </div>
                      <div className="h-6 sm:h-8 w-full mt-1 opacity-80 group-hover:opacity-100 transition-opacity flex-1 min-h-[20px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={service.history}>
                            <Area 
                              type="monotone" 
                              dataKey="ping" 
                              stroke={service.status === 'outage' ? '#ef4444' : service.status === 'degraded' ? '#facc15' : '#10b981'} 
                              fill={service.status === 'outage' ? '#7f1d1d' : service.status === 'degraded' ? '#713f12' : '#064e3b'}
                              strokeWidth={1}
                              isAnimationActive={false}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
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
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                    <div className="bg-zinc-900 border border-zinc-800 p-2 flex flex-col">
                      <span className="text-[8px] text-zinc-500 tracking-widest mb-1 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-zinc-400" /> LATENCY
                      </span>
                      <span className={`text-sm sm:text-base font-bold ${service.status === 'outage' ? 'text-red-500' : 'text-zinc-200'}`}>
                        {service.status === 'outage' ? 'TIMEOUT' : `${service.responseTime} ms`}
                      </span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-2 flex flex-col">
                      <span className="text-[8px] text-zinc-500 tracking-widest mb-1 flex items-center gap-1">
                        <BarChart3 className="w-3 h-3 text-zinc-400" /> UPTIME_30D
                      </span>
                      <span className="text-sm sm:text-base font-bold text-zinc-200">
                        {service.uptime}
                      </span>
                    </div>
                  </div>

                  <div className="border border-zinc-800 bg-zinc-900/50 p-3 text-[10px] mb-4">
                    <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/50">
                      <span className="text-zinc-500">REGION_LOCK</span>
                      <span className="text-zinc-300 font-bold">{service.region}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/50">
                      <span className="text-zinc-500">SYSTEM_TAG</span>
                      <span className="text-zinc-300 bg-zinc-800 px-1 py-0.5">{service.category}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/50">
                      <span className="text-zinc-500">IP_ADDRESS</span>
                      <span className="text-zinc-300 font-mono">10.4.{service.name.length}.{service.responseTime % 255}</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 border-b border-zinc-800/50">
                      <span className="text-zinc-500">SERVER_LOAD</span>
                      <span className={`font-mono ${service.status === 'outage' ? 'text-red-500' : 'text-emerald-400'}`}>
                        {service.status === 'outage' ? 'ERR_CONNECTION' : `CPU: ${Math.max(5, service.responseTime % 100)}% | RAM: ${(service.responseTime % 8) + 2}GB`}
                      </span>
                    </div>
                    <div className="flex justify-between items-start py-1.5">
                      <span className="text-zinc-500">LAST_INCIDENT</span>
                      <span className={`font-bold text-right max-w-[200px] ${service.status !== 'operational' ? config.color : 'text-zinc-300'}`}>
                        {service.lastIncident}
                      </span>
                    </div>
                  </div>

                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={service.history} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                        <XAxis dataKey="time" tick={{ fontSize: 8, fill: '#71717a' }} stroke="#3f3f46" />
                        <YAxis tick={{ fontSize: 8, fill: '#71717a' }} stroke="#3f3f46" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', fontSize: '10px' }}
                          itemStyle={{ color: '#e4e4e7' }}
                        />
                        <Area 
                          type="stepAfter" 
                          dataKey="ping" 
                          stroke={config.color.replace('text-', 'text-').split('-')[1] === 'emerald' ? '#10b981' : config.color.replace('text-', 'text-').split('-')[1] === 'yellow' ? '#facc15' : '#ef4444'} 
                          fill={config.color.replace('text-', 'text-').split('-')[1] === 'emerald' ? '#064e3b' : config.color.replace('text-', 'text-').split('-')[1] === 'yellow' ? '#713f12' : '#7f1d1d'}
                          strokeWidth={2}
                          isAnimationActive={false}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
          </AnimatePresence>
        </motion.div>
      </main>

      <footer className="h-6 w-full border-t border-zinc-800 bg-black flex items-center px-4 overflow-hidden z-50">
        <div className="text-[10px] text-zinc-500 flex items-center whitespace-nowrap overflow-hidden">
          <span className="font-bold text-emerald-500 mr-2">&gt; SYS_LOG:</span>
          {logs[0] || "No new events"}
        </div>
      </footer>
    </div>
  );
}
