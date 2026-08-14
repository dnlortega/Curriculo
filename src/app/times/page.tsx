"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { footballTeams, calculateGrowth } from "@/lib/data/football-data";
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, Ticket, Star, Shield, ArrowRightLeft } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function FootballDashboard() {
  const [selectedTeamId, setSelectedTeamId] = useState<string>("flamengo");
  const [comparisonTeamId, setComparisonTeamId] = useState<string | null>(null);
  const [year, setYear] = useState<string>("2024");
  const [month, setMonth] = useState<string>("Todos");
  const [championship, setChampionship] = useState<string>("Todos");

  const team = useMemo(() => footballTeams.find((t) => t.id === selectedTeamId) || footballTeams[0], [selectedTeamId]);
  const comparisonTeam = useMemo(() => comparisonTeamId ? footballTeams.find((t) => t.id === comparisonTeamId) : null, [comparisonTeamId]);

  // Merge historical revenue for comparison
  const mergedChartData = useMemo(() => {
    if (!comparisonTeam) return team.historicalRevenue.map(d => ({ ...d, [team.name + ' Rec']: d.revenue, [team.name + ' Desp']: d.expenses }));
    
    return team.historicalRevenue.map((data, index) => {
      const compData = comparisonTeam.historicalRevenue[index] || { revenue: 0, expenses: 0 };
      return {
        month: data.month,
        [`${team.name} Rec`]: data.revenue,
        [`${comparisonTeam.name} Rec`]: compData.revenue,
      };
    });
  }, [team, comparisonTeam]);

  // Merge stats for Radar
  const radarData = useMemo(() => {
    if (!team.stats) return [];
    return team.stats.map(s => {
      const cStat = comparisonTeam?.stats?.find(cs => cs.subject === s.subject);
      return {
        subject: s.subject,
        [team.name]: s.value,
        ...(comparisonTeam ? { [comparisonTeam.name]: cStat?.value || 0 } : {})
      };
    });
  }, [team, comparisonTeam]);

  const renderKPI = (title: string, data: any, compData: any, prefix = "", suffix = "", icon: React.ReactNode) => {
    const mom = calculateGrowth(data.current, data.previousMonth);
    const isMomPositive = mom >= 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="flex flex-col bg-neutral-900/50 border-neutral-800 backdrop-blur-sm h-full justify-between p-4">
          <div className="flex flex-row items-center justify-between pb-1">
            <span className="text-sm font-semibold text-neutral-400">{title}</span>
            {icon}
          </div>
          <div className="mt-1 flex flex-col justify-end flex-1">
            <div className="flex justify-between items-end">
              <div>
                <motion.div 
                  key={data.current}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl font-black text-white tracking-tight"
                >
                  {prefix}{data.current.toLocaleString("pt-BR")}{suffix}
                </motion.div>
                <div className="flex gap-2 mt-1 text-xs font-medium">
                  <Badge variant="outline" className={isMomPositive ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20 px-1 py-0" : "text-rose-400 bg-rose-400/10 border-rose-400/20 px-1 py-0"}>
                    {isMomPositive ? <ArrowUpRight className="mr-0.5 h-3 w-3" /> : <ArrowDownRight className="mr-0.5 h-3 w-3" />}
                    {Math.abs(mom).toFixed(1)}% MoM
                  </Badge>
                </div>
              </div>
              
              {comparisonTeam && compData && (
                <div className="text-right border-l border-neutral-800 pl-2 ml-2">
                   <div className="text-xs text-neutral-500 mb-0.5">{comparisonTeam.name}</div>
                   <motion.div 
                      key={compData.current}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-lg font-bold text-neutral-300 tracking-tight"
                    >
                      {prefix}{compData.current.toLocaleString("pt-BR")}{suffix}
                    </motion.div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0a0a0a] text-neutral-50 flex flex-col font-sans selection:bg-neutral-800">
      
      {/* Header Compacto com Filtros */}
      <header 
        className="flex-none px-4 py-3 border-b border-neutral-800/80 flex flex-col gap-2 transition-all duration-500"
        style={{
          background: comparisonTeam 
            ? `linear-gradient(90deg, ${team.colors.primary}30 0%, #0a0a0a 50%, ${comparisonTeam.colors.primary}30 100%)`
            : `linear-gradient(90deg, ${team.colors.primary}25 0%, #0a0a0a 40%)`
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 w-1/3">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg p-1 flex items-center justify-center border border-white/5 relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={team.logo} alt={team.name} className="w-full h-full object-contain drop-shadow-md relative z-10" />
              <div className="absolute -top-2 -right-2 bg-neutral-900 border border-neutral-700 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center z-20 shadow-md">
                {team.position}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-white leading-tight">{team.name}</h1>
              <div className="flex gap-1 mt-0.5">
                <Badge variant="outline" className="text-[9px] px-1 py-0 border-neutral-700 text-neutral-400">Série A</Badge>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 justify-center w-1/3">
            <Select value={year} onValueChange={setYear}>
              <SelectTrigger className="w-[90px] h-7 bg-neutral-950/80 border-neutral-800 text-xs text-neutral-300">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger className="w-[100px] h-7 bg-neutral-950/80 border-neutral-800 text-xs text-neutral-300">
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800 text-white max-h-[200px]">
                <SelectItem value="Todos">Ano Todo</SelectItem>
                <SelectItem value="01">Jan</SelectItem>
                <SelectItem value="02">Fev</SelectItem>
              </SelectContent>
            </Select>
            <Select value={championship} onValueChange={setChampionship}>
              <SelectTrigger className="w-[130px] h-7 bg-neutral-950/80 border-neutral-800 text-xs text-neutral-300">
                <SelectValue placeholder="Camp" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Brasileirao">Brasileirão</SelectItem>
                <SelectItem value="CdB">Copa do Brasil</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 justify-end w-1/3">
            <Select value={selectedTeamId} onValueChange={(val) => val && setSelectedTeamId(val)}>
              <SelectTrigger className="w-[160px] h-9 bg-neutral-950/80 border-neutral-700 text-sm">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800 text-white max-h-[300px]">
                {footballTeams.map((t) => (
                  <SelectItem key={t.id} value={t.id} className="cursor-pointer py-1.5">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.logo} alt={t.name} className="w-5 h-5 object-contain" />
                      <span className="font-semibold text-sm truncate">{t.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="text-neutral-500 font-bold px-1 text-xs">VS</div>
            
            <Select value={comparisonTeamId || "none"} onValueChange={(val) => setComparisonTeamId(val === "none" ? null : val)}>
              <SelectTrigger className="w-[160px] h-9 bg-neutral-950/80 border-neutral-700 text-sm">
                <SelectValue placeholder="Comparar com..." />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800 text-white max-h-[300px]">
                <SelectItem value="none" className="text-neutral-500 italic">Nenhum</SelectItem>
                {footballTeams.filter(t => t.id !== selectedTeamId).map((t) => (
                  <SelectItem key={t.id} value={t.id} className="cursor-pointer py-1.5">
                    <div className="flex items-center gap-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.logo} alt={t.name} className="w-5 h-5 object-contain" />
                      <span className="font-semibold text-sm truncate">{t.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            {comparisonTeam && (
              <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg p-1 flex items-center justify-center border border-white/5 ml-2 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={comparisonTeam.logo} alt={comparisonTeam.name} className="w-full h-full object-contain drop-shadow-md z-10" />
                <div className="absolute -top-2 -right-2 bg-neutral-900 border border-neutral-700 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center z-20 shadow-md">
                  {comparisonTeam.position}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-2 md:p-3 flex flex-col gap-2 md:gap-3 overflow-hidden">
        
        {/* KPIs Row */}
        <div className="flex-none grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 h-24">
          {renderKPI("Receita Total (Bruta)", team.revenue, comparisonTeam?.revenue, "R$ ", " M", <DollarSign className="h-4 w-4 text-emerald-500" />)}
          {renderKPI("Despesas Operacionais", team.expenses, comparisonTeam?.expenses, "R$ ", " M", <Activity className="h-4 w-4 text-rose-500" />)}
          {renderKPI("Sócio Torcedor", team.members, comparisonTeam?.members, "", "", <Users className="h-4 w-4 text-blue-500" />)}
          {renderKPI("Público Pagante", team.attendance, comparisonTeam?.attendance, "", "", <Ticket className="h-4 w-4 text-amber-500" />)}
        </div>

        {/* Charts & Players Row */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-3 min-h-0">
          
          {/* Main Chart */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="lg:col-span-5 flex flex-col">
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col h-full">
              <CardHeader className="py-2 px-3 flex-none border-b border-neutral-800/50">
                <CardTitle className="text-sm font-bold text-white flex justify-between">
                  Evolução Mensal (Receita)
                  {comparisonTeam && <span className="text-xs font-normal text-neutral-400">Comparativo</span>}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mergedChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                    <XAxis dataKey="month" stroke="#737373" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#737373" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `R$${val}`} />
                    <Tooltip 
                      cursor={{fill: '#262626'}}
                      contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fff', fontSize: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '10px' }} />
                    <Bar dataKey={`${team.name} Rec`} fill={team.colors.primary} radius={[2, 2, 0, 0]} maxBarSize={40} />
                    {comparisonTeam ? (
                      <Bar dataKey={`${comparisonTeam.name} Rec`} fill={comparisonTeam.colors.primary} radius={[2, 2, 0, 0]} maxBarSize={40} />
                    ) : (
                      <Bar dataKey={`${team.name} Desp`} fill="#ef4444" radius={[2, 2, 0, 0]} maxBarSize={40} />
                    )}
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Radar Chart (Team Strength) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="lg:col-span-4 flex flex-col">
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col h-full">
              <CardHeader className="py-2 px-3 flex-none border-b border-neutral-800/50">
                <CardTitle className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-neutral-400" />
                  Força do Clube (Atributos)
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-0 min-h-0 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="65%" data={radarData}>
                    <PolarGrid stroke="#333" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#a3a3a3', fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fff', fontSize: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Radar name={team.name} dataKey={team.name} stroke={team.colors.primary} fill={team.colors.primary} fillOpacity={0.4} />
                    {comparisonTeam && (
                      <Radar name={comparisonTeam.name} dataKey={comparisonTeam.name} stroke={comparisonTeam.colors.primary} fill={comparisonTeam.colors.primary} fillOpacity={0.4} />
                    )}
                    <Legend wrapperStyle={{ fontSize: '10px' }} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Players */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="lg:col-span-3 flex flex-col">
            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col h-full">
              <CardHeader className="py-2 px-3 flex-none border-b border-neutral-800/50">
                <CardTitle className="text-sm font-bold text-white flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  Destaques (Top 3)
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-0 overflow-y-auto min-h-0">
                <div className="divide-y divide-neutral-800">
                  {team.topPlayers?.slice(0, 3).map((player: any, idx: number) => (
                    <motion.div 
                      key={player.name + team.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="p-2 md:p-3 hover:bg-neutral-800/50 transition-colors flex items-center gap-2 md:gap-3"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm md:text-base font-bold text-neutral-400 border border-neutral-700">
                        {player.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm md:text-base font-bold text-white truncate">{player.name}</p>
                        <p className="text-[10px] md:text-xs text-neutral-500 uppercase tracking-wider">{player.pos}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-neutral-950 px-2 py-1 rounded-md border border-neutral-800">
                        <span className="text-xs md:text-sm font-bold text-emerald-400">{player.rating}</span>
                      </div>
                    </motion.div>
                  ))}
                  {team.topPlayers?.length === 0 && (
                    <div className="p-4 text-center text-neutral-500 text-sm">Nenhum jogador em destaque.</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
        </div>
      </main>
    </div>
  );
}
