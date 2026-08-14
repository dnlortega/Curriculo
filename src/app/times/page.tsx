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
        className="flex-none px-6 py-3 border-b border-neutral-800/80 flex items-center justify-between"
        style={{
          background: `linear-gradient(90deg, ${team.colors.primary}25 0%, #0a0a0a 40%)`
        }}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl p-1.5 flex items-center justify-center border border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={team.logo} alt={team.name} className="w-full h-full object-contain drop-shadow-md" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white leading-tight">{team.name}</h1>
            <p className="text-neutral-400 text-sm mt-0.5">Visão Executiva • Desempenho e Finanças</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Select value={selectedTeamId} onValueChange={(val) => val && setSelectedTeamId(val)}>
            <SelectTrigger className="w-[240px] h-11 bg-neutral-950/80 border-neutral-700 text-base">
              <SelectValue placeholder="Selecione um clube" />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-neutral-800 text-white max-h-[300px]">
              {footballTeams.map((t) => (
                <SelectItem key={t.id} value={t.id} className="cursor-pointer py-2.5">
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.logo} alt={t.name} className="w-6 h-6 object-contain" />
                    <span className="font-semibold text-base">{t.name}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden p-4 flex flex-col gap-4">
        
        {/* KPIs Row */}
        <div className="flex-none h-28 grid grid-cols-4 gap-4">
          {renderKPI("Receita Total (Bruta)", team.revenue, "R$ ", " M", <DollarSign className="h-5 w-5 text-emerald-500" />)}
          {renderKPI("Despesas Operacionais", team.expenses, "R$ ", " M", <Activity className="h-5 w-5 text-rose-500" />)}
          {renderKPI("Programa Sócio Torcedor", team.members, "", "", <Users className="h-5 w-5 text-blue-500" />)}
          {renderKPI("Público Médio (Pagantes)", team.attendance, "", "", <Ticket className="h-5 w-5 text-amber-500" />)}
        </div>

        {/* Charts & Players Row */}
        <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
          
          {/* Main Chart */}
          <Card className="col-span-7 bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col">
            <CardHeader className="py-4 px-5 flex-none border-b border-neutral-800/50">
              <CardTitle className="text-lg font-bold text-white">Evolução Financeira Mensal</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-2 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={team.historicalRevenue} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                  <XAxis dataKey="month" stroke="#737373" fontSize={11} tickLine={false} axisLine={false} dy={5} />
                  <YAxis stroke="#737373" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value}`} />
                  <Tooltip 
                    cursor={{fill: '#262626'}}
                    contentStyle={{ backgroundColor: '#171717', borderColor: '#333', color: '#fff', borderRadius: '6px' }}
                    itemStyle={{ color: '#fff', fontSize: '12px' }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} iconType="circle" />
                  <Bar dataKey="revenue" name="Receita (M)" fill="#10b981" radius={[3, 3, 0, 0]} maxBarSize={30} />
                  <Bar dataKey="expenses" name="Despesas (M)" fill="#ef4444" radius={[3, 3, 0, 0]} maxBarSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="col-span-3 bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col">
            <CardHeader className="py-4 px-5 flex-none border-b border-neutral-800/50">
              <CardTitle className="text-lg font-bold text-white">Composição</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-2 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={team.categories}
                    cx="50%"
                    cy="45%"
                    innerRadius="50%"
                    outerRadius="80%"
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {team.categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#171717', borderColor: '#333', color: '#fff', borderRadius: '6px' }}
                    itemStyle={{ color: '#fff', fontSize: '12px' }}
                    formatter={(value: any) => [`R$ ${value} M`, 'Valor']}
                  />
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ fontSize: '10px', paddingTop: '5px' }} iconType="circle"/>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Players */}
          <Card className="col-span-2 bg-neutral-900/50 border-neutral-800 backdrop-blur-sm flex flex-col">
            <CardHeader className="py-4 px-5 flex-none border-b border-neutral-800/50">
              <CardTitle className="text-lg font-bold text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                Destaques
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0 overflow-y-auto min-h-0">
              <div className="divide-y divide-neutral-800">
                {team.topPlayers?.map((player: any, idx: number) => (
                  <div key={idx} className="p-4 hover:bg-neutral-800/50 transition-colors flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-lg font-bold text-neutral-400 border border-neutral-700">
                      {player.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-white truncate">{player.name}</p>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider mt-0.5">{player.pos}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-neutral-950 px-2.5 py-1.5 rounded-md border border-neutral-800">
                      <span className="text-sm font-bold text-emerald-400">{player.rating}</span>
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
