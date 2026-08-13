"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertTriangle, Activity, Server, Clock, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

type ServiceStatus = "operational" | "degraded" | "outage";

interface Service {
  id: string;
  name: string;
  description: string;
  status: ServiceStatus;
  uptime: string;
}

const initialServices: Service[] = [
  {
    id: "meu-inss",
    name: "Meu INSS",
    description: "Serviços previdenciários e agendamentos",
    status: "operational",
    uptime: "99.9%",
  },
  {
    id: "meu-sus",
    name: "Conecte SUS",
    description: "Histórico de saúde e carteira de vacinação",
    status: "operational",
    uptime: "99.8%",
  },
  {
    id: "govbr",
    name: "Portal Gov.br",
    description: "Acesso unificado aos serviços do governo",
    status: "operational",
    uptime: "98.5%",
  },
  {
    id: "ecac",
    name: "e-CAC (Receita Federal)",
    description: "Centro Virtual de Atendimento ao Contribuinte",
    status: "operational",
    uptime: "99.5%",
  },
  {
    id: "ctps",
    name: "Carteira de Trabalho Digital",
    description: "Acesso aos dados trabalhistas",
    status: "degraded",
    uptime: "95.2%",
  },
  {
    id: "cnh",
    name: "CNH Digital / Senatran",
    description: "Documentos de trânsito e veículos",
    status: "operational",
    uptime: "99.9%",
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
        if (Math.random() > 0.8) {
          const statuses: ServiceStatus[] = ["operational", "degraded", "outage"];
          const newStatus = statuses[Math.floor(Math.random() * statuses.length)];
          return { ...service, status: newStatus };
        }
        return service;
      }));
      setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
      setIsRefreshing(false);
    }, 1200);
  };

  const getStatusConfig = (status: ServiceStatus) => {
    switch (status) {
      case "operational":
        return {
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
          text: "Operacional",
          badgeClass: "bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/25 border-emerald-500/20",
          color: "bg-emerald-500",
          bgGradient: "from-emerald-500/5 to-transparent"
        };
      case "degraded":
        return {
          icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
          text: "Instabilidade",
          badgeClass: "bg-amber-500/15 text-amber-600 hover:bg-amber-500/25 border-amber-500/20",
          color: "bg-amber-500",
          bgGradient: "from-amber-500/5 to-transparent"
        };
      case "outage":
        return {
          icon: <XCircle className="w-5 h-5 text-rose-500" />,
          text: "Fora do Ar",
          badgeClass: "bg-rose-500/15 text-rose-600 hover:bg-rose-500/25 border-rose-500/20",
          color: "bg-rose-500",
          bgGradient: "from-rose-500/5 to-transparent"
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
      : { title: "Instabilidade parcial em alguns sistemas", icon: <AlertTriangle className="w-12 h-12 text-amber-500" />, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 pb-20">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-5xl">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-600 dark:text-blue-500" />
            <span className="font-bold text-lg tracking-tight">StatusGov</span>
          </div>
          <button 
            onClick={refreshStatus}
            disabled={isRefreshing}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
            title="Atualizar Status"
          >
            <RefreshCw className={`w-5 h-5 text-slate-500 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-12 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Status dos Serviços Gov.br
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Acompanhe em tempo real a disponibilidade dos principais serviços digitais do governo federal.
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
                <p className="text-slate-600 dark:text-slate-400 mt-2 flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-4 h-4" />
                  Última atualização: {lastUpdate}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Server className="w-6 h-6 text-slate-400" />
            Serviços Monitorados
          </h3>
          <Badge variant="outline" className="font-mono bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            {operationalCount} / {services.length} Online
          </Badge>
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
              <motion.div key={service.id} variants={itemVariants}>
                <Card className={`h-full overflow-hidden hover:shadow-md transition-all duration-300 border-slate-200 dark:border-slate-800 group bg-gradient-to-br ${config.bgGradient} dark:bg-slate-900`}>
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className={`p-2 rounded-lg bg-white dark:bg-slate-950 shadow-sm border border-slate-100 dark:border-slate-800 relative`}>
                        <div className={`absolute inset-0 opacity-20 blur-md rounded-lg ${config.color}`} />
                        <div className="relative z-10">
                           {config.icon}
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
                    <div className="flex items-center justify-between text-sm mt-2 pt-4 border-t border-slate-100 dark:border-slate-800/50">
                      <span className="text-slate-500 dark:text-slate-400">Uptime (30 dias)</span>
                      <span className="font-mono font-medium text-slate-700 dark:text-slate-300">
                        {service.uptime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </main>
    </div>
  );
}
