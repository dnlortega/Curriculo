"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { footballTeams, calculateGrowth } from "@/lib/data/football-data";
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, Ticket, Star } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function FootballDashboard() {
  const [selectedTeamId, setSelectedTeamId] = useState<string>("flamengo");

  const team = useMemo(() => footballTeams.find((t) => t.id === selectedTeamId) || footballTeams[0], [selectedTeamId]);

  const renderKPI = (title: string, data: any, prefix = "", suffix = "", icon: React.ReactNode) => {
    const mom = calculateGrowth(data.current, data.previousMonth);
    const yoy = calculateGrowth(data.current, data.previousYear);

    const isMomPositive = mom >= 0;
    const isYoyPositive = yoy >= 0;

    return (
      <Card className="flex flex-col bg-neutral-900/50 border-neutral-800 backdrop-blur-sm h-full justify-between p-4">
        <div className="flex flex-row items-center justify-between pb-1">
          <span className="text-sm font-semibold text-neutral-400">{title}</span>
          {icon}
        </div>
        <div>
          <div className="text-3xl font-black text-white tracking-tight">
            {prefix}{data.current.toLocaleString("pt-BR")}{suffix}
          </div>
          <div className="flex gap-2 mt-2 text-xs font-medium">
            <Badge variant="outline" className={isMomPositive ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20 px-1 py-0" : "text-rose-400 bg-rose-400/10 border-rose-400/20 px-1 py-0"}>
              {isMomPositive ? <ArrowUpRight className="mr-0.5 h-3 w-3" /> : <ArrowDownRight className="mr-0.5 h-3 w-3" />}
              {Math.abs(mom).toFixed(1)}% MoM
            </Badge>
            <Badge variant="outline" className={isYoyPositive ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20 px-1 py-0" : "text-rose-400 bg-rose-400/10 border-rose-400/20 px-1 py-0"}>
              {isYoyPositive ? <ArrowUpRight className="mr-0.5 h-3 w-3" /> : <ArrowDownRight className="mr-0.5 h-3 w-3" />}
              {Math.abs(yoy).toFixed(1)}% YoY
            </Badge>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0a0a0a] text-neutral-50 flex flex-col font-sans selection:bg-neutral-800">
      
      {/* Header Compacto */}
      <header 
        className="flex-none px-4 py-2 border-b border-neutral-800/80 flex items-center justify-between"
        style={{
          background: `linear-gradient(90deg, ${team.colors.primary}25 0%, #0a0a0a 40%)`
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg p-1 flex items-center justify-center border border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={team.logo} alt={team.name} className="w-full h-full object-contain drop-shadow-md" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white leading-tight">{team.name}</h1>
            <p className="text-neutral-400 text-xs mt-0.5">Visão Executiva • Desempenho e Finanças</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Select value={selectedTeamId} onValueChange={(val) => val && setSelectedTeamId(val)}>
            <SelectTrigger className="w-[200px] h-9 bg-neutral-950/80 border-neutral-700 text-sm">
              <SelectValue placeholder="Selecione um clube" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-neutral-800 text-white max-h-[300px]">
              {footballTeams.map((t) => (
                <SelectItem key={t.id} value={t.id} className="cursor-pointer py-1.5">
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.logo} alt={t.name} className="w-5 h-5 object-contain" />
                    <span className="font-semibold text-sm">{t.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-2 md:p-3 flex flex-col gap-2 md:gap-3 overflow-hidden">
        
        {/* KPIs Row */}
        <div className="flex-none grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          {renderKPI("Receita Total (Bruta)", team.revenue, "R$ ", " M", <DollarSign className="h-4 w-4 text-emerald-500" />)}
          {renderKPI("Despesas Operacionais", team.expenses, "R$ ", " M", <Activity className="h-4 w-4 text-rose-500" />)}
          {renderKPI("Programa Sócio Torcedor", team.members, "", "", <Users className="h-4 w-4 text-blue-500" />)}
          {renderKPI("Público Médio (Pagantes)", team.attendance, "", "", <Ticket className="h-4 w-4 text-amber-500" />)}
        </div>

        {/* Charts & Players Row */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-3 min-h-0">
          
          {/* Main Chart */}
          <Card className="lg:col-span-6 bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col">
            <CardHeader className="py-2 px-3 flex-none border-b border-neutral-800/50">
              <CardTitle className="text-sm font-bold text-white">Evolução Financeira Mensal</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={team.historicalRevenue} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                  <XAxis dataKey="month" stroke="#737373" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#737373" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(val) => `R$${val}`} />
                  <Tooltip 
                    cursor={{fill: '#262626'}}
                    contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fff', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Bar dataKey="expenses" name="Despesas (M)" fill="#ef4444" radius={[2, 2, 0, 0]} maxBarSize={40} />
                  <Bar dataKey="revenue" name="Receita (M)" fill="#10b981" radius={[2, 2, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="lg:col-span-3 bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col">
            <CardHeader className="py-2 px-3 flex-none border-b border-neutral-800/50">
              <CardTitle className="text-sm font-bold text-white">Composição</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={team.categories}
                    cx="50%"
                    cy="45%"
                    innerRadius={40}
                    outerRadius={65}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {team.categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fff', fontSize: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px', bottom: 0 }} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Players */}
          <Card className="lg:col-span-3 bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col">
            <CardHeader className="py-2 px-3 flex-none border-b border-neutral-800/50">
              <CardTitle className="text-sm font-bold text-white flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                Destaques
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-y-auto min-h-0">
              <div className="divide-y divide-neutral-800">
                {team.topPlayers?.map((player: any, idx: number) => (
                  <div key={idx} className="p-2 md:p-3 hover:bg-neutral-800/50 transition-colors flex items-center gap-2 md:gap-3">
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
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
        </div>
      </main>
    </div>
  );
}
