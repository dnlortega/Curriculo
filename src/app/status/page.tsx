"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Activity, Server, Clock, RefreshCw, BarChart3, Globe2, ShieldAlert, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";

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
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function GovStatusPage() {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
  }, []);

  const refreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setServices(prev => prev.map(service => {
        if (Math.random() > 0.7) {
          const statuses: ServiceStatus[] = ["operational", "degraded", "outage"];
          const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
          const newResponseTime = newStatus === "outage" ? 0 : Math.floor(Math.random() * 800) + 40;
          return { ...service, status: newStatus, responseTime: newResponseTime };
        }
        // Even if status doesn't change, fluctuate response time
        const flux = Math.floor(Math.random() * 50) - 25;
        const newResponseTime = service.status === "outage" ? 0 : Math.max(20, service.responseTime + flux);
        return { ...service, responseTime: newResponseTime };
      }));
      setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
      setIsRefreshing(false);
    }, 1500);
  };

  const getStatusConfig = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return {
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
          text: "Operacional",
          badgeClass: "bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/25 border-emerald-500/20",
          color: "bg-emerald-500",
          bgGradient: "from-emerald-500/5 to-transparent",
          textColor: "text-emerald-500"
        };
      case "degraded":
        return {
          icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
          text: "Instabilidade",
          badgeClass: "bg-amber-500/15 text-amber-600 hover:bg-amber-500/25 border-amber-500/20",
          color: "bg-amber-500",
          bgGradient: "from-amber-500/5 to-transparent",
          textColor: "text-amber-500"
        };
      case "outage":
        return {
          icon: <XCircle className="w-5 h-5 text-rose-500" />,
          text: "Fora do Ar",
          badgeClass: "bg-rose-500/15 text-rose-600 hover:bg-rose-500/25 border-rose-500/20",
          color: "bg-rose-500",
          bgGradient: "from-rose-500/5 to-transparent",
          textColor: "text-rose-500"
        };
    }
  };

  const operationalCount = services.filter(s => s.status === "operational").length;
  const isAllOperational = operationalCount === services.length;
  const hasOutage = services.some(s => s.status === "outage");
  
  const overallStatus = isAllOperational 
    ? { title: "Todos os sistemas operacionais", icon: <CheckCircle2 className="w-12 h-12 text-emerald-500" />, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" }
    : hasOutage 
      ? { title: "Falhas críticas detectadas", icon: <XCircle className="w-12 h-12 text-rose-500" />, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" }
      : { title: "Instabilidade parcial", icon: <AlertTriangle className="w-12 h-12 text-amber-500" />, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 pb-20">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-600 dark:text-blue-500" />
            <span className="font-bold text-lg tracking-tight">GovStatus Pro</span>
          </div>
          <button 
            onClick={refreshStatus}
            disabled={isRefreshing}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 flex items-center gap-2 text-sm font-medium"
            title="Atualizar Status"
          >
            <span className="hidden sm:inline-block">Sincronizar</span>
            <RefreshCw className={`w-5 h-5 text-slate-500 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Monitoramento Governamental
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Painel de transparência e acompanhamento em tempo real da disponibilidade, latência e estabilidade dos serviços digitais do Brasil.
            </p>
          </div>

          <Card className={`overflow-hidden border-2 shadow-lg transition-colors duration-500 ${overallStatus.border}`}>
            <div className={`p-8 flex flex-col md:flex-row items-center justify-center gap-6 ${overallStatus.bg}`}>
              <motion.div
                animate={isRefreshing ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0 }}
              >
                {overallStatus.icon}
              </motion.div>
              <div className="text-center md:text-left">
                <h2 className={`text-2xl md:text-3xl font-bold ${overallStatus.color}`}>
                  {overallStatus.title}
                </h2>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-3">
                  <Badge variant="outline" className="bg-white/50 dark:bg-black/20 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                    <Clock className="w-3.5 h-3.5 mr-1" />
                    Atualizado: {lastUpdate}
                  </Badge>
                  <Badge variant="outline" className="bg-white/50 dark:bg-black/20 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                    <Server className="w-3.5 h-3.5 mr-1" />
                    {services.length} Nós monitorados
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Activity className="w-6 h-6 text-slate-400" />
            Visão Detalhada dos Serviços
          </h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Operacional
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Instável
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-500 font-medium">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Offline
            </div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const config = getStatusConfig(service.status);
            return (
              <Dialog key={service.id}>
                <DialogTrigger asChild>
                  <motion.div variants={itemVariants} className="cursor-pointer h-full">
                    <Card className={`h-full overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-slate-200 dark:border-slate-800 group bg-gradient-to-br ${config.bgGradient} dark:bg-slate-900`}>
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg bg-white dark:bg-slate-950 shadow-sm border border-slate-100 dark:border-slate-800 relative`}>
                              <div className={`absolute inset-0 opacity-20 blur-md rounded-lg ${config.color}`} />
                              <div className="relative z-10">
                                 {config.icon}
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className={`font-medium border ${config.badgeClass}`}>
                            {config.text}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.name}
                        </CardTitle>
                        <CardDescription className="text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mt-2 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                          <div className="flex flex-col gap-1">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Latência</span>
                            <span className={`font-mono text-sm font-medium ${service.responseTime > 500 ? 'text-amber-500' : 'text-slate-700 dark:text-slate-300'}`}>
                              {service.status === 'outage' ? '--' : `${service.responseTime}ms`}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Uptime</span>
                            <span className="font-mono text-sm font-medium text-slate-700 dark:text-slate-300">
                              {service.uptime}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </DialogTrigger>
                
                <DialogContent className="sm:max-w-[500px] border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
                  <DialogHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center justify-center`}>
                        {config.icon}
                      </div>
                      <Badge variant="outline" className={`text-base py-1 px-3 border-2 ${config.badgeClass}`}>
                        {config.text}
                      </Badge>
                    </div>
                    <DialogTitle className="text-2xl font-bold">{service.name}</DialogTitle>
                    <DialogDescription className="text-base mt-2">
                      {service.description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid grid-cols-2 gap-4 my-6">
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                      <Zap className="w-5 h-5 text-amber-500 mb-2" />
                      <span className="text-xs text-slate-500 font-semibold uppercase">Tempo de Resposta</span>
                      <span className="text-xl font-mono font-bold text-slate-700 dark:text-slate-200">
                        {service.status === 'outage' ? 'Inacessível' : `${service.responseTime} ms`}
                      </span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center">
                      <BarChart3 className="w-5 h-5 text-emerald-500 mb-2" />
                      <span className="text-xs text-slate-500 font-semibold uppercase">Uptime (30 dias)</span>
                      <span className="text-xl font-mono font-bold text-slate-700 dark:text-slate-200">
                        {service.uptime}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                      <Server className="w-4 h-4" /> Informações Adicionais
                    </h4>
                    <div className="grid grid-cols-1 gap-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-slate-50 dark:border-slate-800/50">
                        <span className="text-slate-500 flex items-center gap-2"><Globe2 className="w-4 h-4" /> Região</span>
                        <span className="font-medium">{service.region}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-50 dark:border-slate-800/50">
                        <span className="text-slate-500 flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Último Incidente</span>
                        <span className={`font-medium ${service.status !== 'operational' ? config.textColor : ''}`}>
                          {service.lastIncident}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-500">Categoria</span>
                        <Badge variant="secondary">{service.category}</Badge>
                      </div>
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

