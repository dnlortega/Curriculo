"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { footballTeams, calculateGrowth } from "@/lib/data/football-data";
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, Ticket, Star, Shield, PieChart as PieChartIcon } from "lucide-react";
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
import { motion } from "framer-motion";

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function FootballDashboard() {
  const [selectedTeamId, setSelectedTeamId] = useState<string>("flamengo");
  const [year, setYear] = useState<string>("2024");
  const [month, setMonth] = useState<string>("Todos");
  const [championship, setChampionship] = useState<string>("Todos");

  const team = useMemo(() => footballTeams.find((t) => t.id === selectedTeamId) || footballTeams[0], [selectedTeamId]);

  const radarData = useMemo(() => {
    if (!team.stats) return [];
    return team.stats.map(s => ({
      subject: s.subject,
      [team.name]: s.value
    }));
  }, [team]);

  const renderKPI = (title: string, data: any, prefix = "", suffix = "", icon: React.ReactNode, delay: number) => {
    const mom = calculateGrowth(data.current, data.previousMonth);
    const yoy = calculateGrowth(data.current, data.previousYear);
    const isMomPositive = mom >= 0;
    const isYoyPositive = yoy >= 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
        className="h-full"
      >
        <Card className="flex flex-col bg-neutral-900/50 border-neutral-800 backdrop-blur-sm h-full justify-between p-3 lg:p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110" />
          <div className="flex flex-row items-center justify-between pb-1 lg:pb-2">
            <span className="text-sm lg:text-sm font-semibold text-neutral-400">{title}</span>
            <div className="p-1.5 lg:p-2 bg-neutral-800/50 rounded-lg">{icon}</div>
          </div>
          <div className="mt-1 flex flex-col justify-end flex-1">
            <motion.div 
              key={data.current}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-xl lg:text-3xl font-black text-white tracking-tight"
            >
              {prefix}{data.current.toLocaleString("pt-BR")}{suffix}
            </motion.div>
            <div className="flex gap-2 mt-2 lg:mt-3 text-xs lg:text-xs font-medium">
              <Badge variant="outline" className={isMomPositive ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20 px-2 py-0" : "text-rose-400 bg-rose-400/10 border-rose-400/20 px-2 py-0"}>
                {isMomPositive ? <ArrowUpRight className="mr-0.5 h-3 w-3" /> : <ArrowDownRight className="mr-0.5 h-3 w-3" />}
                {Math.abs(mom).toFixed(1)}% MoM
              </Badge>
              <Badge variant="outline" className={isYoyPositive ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20 px-2 py-0" : "text-rose-400 bg-rose-400/10 border-rose-400/20 px-2 py-0"}>
                {isYoyPositive ? <ArrowUpRight className="mr-0.5 h-3 w-3" /> : <ArrowDownRight className="mr-0.5 h-3 w-3" />}
                {Math.abs(yoy).toFixed(1)}% YoY
              </Badge>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#050505] text-neutral-50 flex flex-col font-sans selection:bg-neutral-800">
      
      {/* Header Premium */}
      <header 
        className="flex-none px-4 py-3 lg:px-6 lg:py-4 flex items-center justify-between border-b border-white/5 relative"
      >
        <div 
          className="absolute inset-0 opacity-20 -z-10"
          style={{
            background: `linear-gradient(90deg, ${team.colors.primary} 0%, transparent 50%)`
          }}
        />
        
        <div className="flex items-center gap-3 w-1/3">
          <motion.div 
            key={team.logo}
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-xl rounded-xl p-1.5 flex items-center justify-center border border-white/10 relative shadow-2xl overflow-hidden"
          >
            <span className="absolute inset-0 flex items-center justify-center text-white/80 font-black text-2xl z-0">{team.name.charAt(0)}</span>
            <div className="absolute -top-1.5 -right-1.5 bg-neutral-900 border border-neutral-700 text-xs lg:text-xs font-black w-5 h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center z-20 shadow-xl">
              {team.position}
            </div>
          </motion.div>
          <div>
            <motion.h1 
              key={team.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-lg lg:text-2xl font-black tracking-tight text-white leading-none mb-1"
            >
              {team.name}
            </motion.h1>
            <div className="flex gap-2 items-center">
              <Badge variant="secondary" className="text-xs lg:text-xs px-2 py-0 bg-neutral-800 text-neutral-300 border-neutral-700 hover:bg-neutral-700">
                Série A
              </Badge>
              <span className="text-neutral-500 text-xs lg:text-xs font-medium">Dashboard Executivo</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 justify-center w-1/3">
          <Select value={year} onValueChange={(val) => setYear(val || "2024")}>
            <SelectTrigger className="w-[80px] lg:w-[100px] h-8 lg:h-9 bg-neutral-900/50 border-neutral-800 text-sm lg:text-sm text-neutral-300 focus:ring-1 focus:ring-neutral-700">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Select value={month} onValueChange={(val) => setMonth(val || "Todos")}>
            <SelectTrigger className="w-[90px] lg:w-[110px] h-8 lg:h-9 bg-neutral-900/50 border-neutral-800 text-sm lg:text-sm text-neutral-300 focus:ring-1 focus:ring-neutral-700">
              <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-neutral-800 text-white max-h-[200px]">
              <SelectItem value="Todos">Ano</SelectItem>
              <SelectItem value="01">Jan</SelectItem>
              <SelectItem value="02">Fev</SelectItem>
              <SelectItem value="03">Mar</SelectItem>
            </SelectContent>
          </Select>
          <Select value={championship} onValueChange={(val) => setChampionship(val || "Todos")}>
            <SelectTrigger className="w-[110px] lg:w-[140px] h-8 lg:h-9 bg-neutral-900/50 border-neutral-800 text-sm lg:text-sm text-neutral-300 focus:ring-1 focus:ring-neutral-700">
              <SelectValue placeholder="Camp" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
              <SelectItem value="Todos">Todos</SelectItem>
              <SelectItem value="Brasileirao">Brasileirão</SelectItem>
              <SelectItem value="CdB">Copa do Brasil</SelectItem>
              <SelectItem value="Libertadores">Liberta</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-end w-1/3">
          <div className="bg-neutral-900/80 p-1 lg:p-1.5 rounded-lg border border-neutral-800 flex items-center">
            <Select value={selectedTeamId} onValueChange={(val) => val && setSelectedTeamId(val)}>
              <SelectTrigger className="w-[180px] lg:w-[220px] h-8 lg:h-10 bg-transparent border-0 shadow-none focus:ring-0 text-sm lg:text-sm font-semibold">
                <SelectValue placeholder="Alternar..." />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800 text-white max-h-[300px]">
                {footballTeams.map((t) => (
                  <SelectItem key={t.id} value={t.id} className="cursor-pointer py-2 focus:bg-neutral-800">
                    <div className="flex items-center gap-2 lg:gap-3">
                      <div className="w-5 h-5 rounded flex items-center justify-center bg-neutral-800 text-xs font-bold text-neutral-400">
                        {t.name.charAt(0)}
                      </div>
                      <span className="font-bold text-sm lg:text-sm truncate">{t.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      {/* Horizontal Team Logos Strip */}
      <div className="w-full overflow-x-auto flex-none border-b border-white/5 bg-neutral-950/30 backdrop-blur-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center gap-2 lg:gap-3 px-4 py-3 min-w-max">
          {footballTeams.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTeamId(t.id)}
              className={`relative group px-4 py-2 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                selectedTeamId === t.id 
                  ? 'bg-white/10 border border-white/20 scale-105 shadow-lg z-10' 
                  : 'bg-transparent border border-transparent hover:bg-white/5 hover:scale-105'
              }`}
              title={t.name}
            >
              <span className={`text-sm lg:text-sm font-bold transition-all duration-300 ${
                selectedTeamId === t.id ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'
              }`}>
                {t.name}
              </span>
              {selectedTeamId === t.id && (
                <motion.div
                  layoutId="activeTeamLogo"
                  className="absolute -bottom-1 w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: t.colors.primary, boxShadow: `0 0 8px ${t.colors.primary}` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 p-3 md:p-6 flex flex-col gap-3 md:gap-5 overflow-y-auto relative custom-scrollbar">
        
        {/* Watermark Logo removed */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.02] pointer-events-none transition-all duration-1000">
          <span className="text-[400px] font-black tracking-tighter" style={{ color: team.colors.primary }}>
            {team.name.charAt(0)}
          </span>
        </div>

        {/* KPIs Row */}
        <div className="flex-none grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 z-10 relative">
          {renderKPI("Receita Bruta (Acumulado)", team.revenue, "R$ ", " M", <DollarSign className="h-5 w-5 text-emerald-400" />, 0.1)}
          {renderKPI("Despesas Operacionais", team.expenses, "R$ ", " M", <Activity className="h-5 w-5 text-rose-400" />, 0.2)}
          {renderKPI("Sócio Torcedor", team.members, "", "", <Users className="h-5 w-5 text-blue-400" />, 0.3)}
          {renderKPI("Média de Público", team.attendance, "", "", <Ticket className="h-5 w-5 text-amber-400" />, 0.4)}
        </div>

        {/* Charts & Players Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-5 z-10">
          
          {/* Radar Chart (Team Strength) */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-3 flex flex-col">
            <Card className="bg-neutral-900/40 border-neutral-800/80 backdrop-blur-md flex flex-col h-full shadow-xl">
              <CardHeader className="py-3 px-4 flex-none border-b border-neutral-800/50">
                <CardTitle className="text-sm lg:text-sm font-black text-white flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-neutral-400" />
                  Atributos do Clube
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-2 lg:p-4 min-h-0 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="#262626" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#a3a3a3', fontSize: 10, fontWeight: 'bold' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fff', fontSize: '11px', borderRadius: '6px', padding: '4px 8px' }}
                      itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                    />
                    <Radar name={team.name} dataKey={team.name} stroke={team.colors.primary} strokeWidth={2} fill={team.colors.primary} fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Chart */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-6 flex flex-col">
            <Card className="bg-neutral-900/40 border-neutral-800/80 backdrop-blur-md flex flex-col h-full shadow-xl">
              <CardHeader className="py-3 px-4 flex-none border-b border-neutral-800/50">
                <CardTitle className="text-sm lg:text-sm font-black text-white flex justify-between items-center">
                  Evolução Financeira (R$ M)
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: team.colors.primary}}></div><span className="text-xs lg:text-sm text-neutral-400 font-medium">Receita</span></div>
                    {/* Fixed Despesas to always be Neutral Gray so it doesn't clash with red teams */}
                    <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-neutral-600"></div><span className="text-xs lg:text-sm text-neutral-400 font-medium">Despesas</span></div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 p-2 lg:p-4 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={team.historicalRevenue} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                    <XAxis dataKey="month" stroke="#737373" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                    <YAxis stroke="#737373" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `R$${val}`} />
                    <Tooltip 
                      cursor={{fill: '#262626'}}
                      contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fff', fontSize: '11px', borderRadius: '6px', padding: '6px 10px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="expenses" name="Despesas" fill="#525252" radius={[3, 3, 0, 0]} maxBarSize={35} />
                    <Bar dataKey="revenue" name="Receita" fill={team.colors.primary} radius={[3, 3, 0, 0]} maxBarSize={35} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Top Players & Categories */}
          <div className="lg:col-span-3 flex flex-col gap-2 min-h-0">
            {/* Top Players */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex-none flex flex-col">
              <Card className="bg-neutral-900/40 border-neutral-800/80 backdrop-blur-md flex flex-col h-full shadow-xl">
                <CardHeader className="py-2 px-3 flex-none border-b border-neutral-800/50">
                  <CardTitle className="text-xs lg:text-sm font-black text-white flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    Principais Destaques
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-none p-0 overflow-hidden">
                  <div className="divide-y divide-neutral-800/50 flex flex-col">
                    {team.topPlayers?.slice(0, 3).map((player: any, idx: number) => (
                      <div key={player.name + team.id} className="py-2 px-3 hover:bg-neutral-800/30 transition-colors flex items-center gap-2">
                        <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-neutral-800 flex items-center justify-center text-xs lg:text-xs font-black text-white border border-neutral-700 shadow-inner">
                          {player.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs lg:text-xs font-bold text-white truncate leading-tight">{player.name}</p>
                          <p className="text-xs lg:text-xs text-neutral-500 uppercase tracking-widest font-semibold leading-tight">{player.pos}</p>
                        </div>
                        <div className="flex items-center gap-1 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                          <span className="text-xs lg:text-xs font-black text-emerald-400">{player.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Revenue Categories */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex-1 flex flex-col min-h-0">
              <Card className="bg-neutral-900/40 border-neutral-800/80 backdrop-blur-md flex flex-col h-full shadow-xl">
                <CardHeader className="py-2 px-3 flex-none border-b border-neutral-800/50">
                  <CardTitle className="text-xs lg:text-sm font-black text-white flex items-center gap-1.5">
                    <PieChartIcon className="w-4 h-4 text-purple-400" />
                    Distribuição (Receitas)
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-2 min-h-[150px] relative flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={team.categories}
                        cx="35%"
                        cy="50%"
                        innerRadius="45%"
                        outerRadius="80%"
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                      >
                        {team.categories?.map((entry: any, index: number) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fff', fontSize: '10px', borderRadius: '4px', padding: '2px 6px' }}
                        itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                        formatter={(value: any, name: any) => [`${value}%`, name]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  {/* Legend overlay */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-2 flex flex-col gap-0.5">
                    {team.categories?.map((cat: any, i: number) => (
                      <div key={cat.name} className="flex items-center gap-1 text-xs lg:text-xs font-semibold text-neutral-400 leading-tight">
                        <div className="w-1.5 h-1.5 rounded-full shadow-sm flex-shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                        <span className="truncate max-w-[75px]">{cat.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
