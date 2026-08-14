"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { footballTeams, calculateGrowth } from "@/lib/data/football-data";
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, Activity, Ticket } from "lucide-react";
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
      <Card className="flex flex-col bg-neutral-900/50 border-neutral-800 backdrop-blur-sm hover:bg-neutral-900/80 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-neutral-400">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-black text-white tracking-tight">
            {prefix}{data.current.toLocaleString("pt-BR")}{suffix}
          </div>
          <div className="flex flex-col gap-1.5 mt-4 text-xs font-medium">
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">vs Mês Anterior</span>
              <Badge variant="outline" className={isMomPositive ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : "text-rose-400 bg-rose-400/10 border-rose-400/20"}>
                {isMomPositive ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                {Math.abs(mom).toFixed(1)}%
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-neutral-500">vs Ano Anterior</span>
              <Badge variant="outline" className={isYoyPositive ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : "text-rose-400 bg-rose-400/10 border-rose-400/20"}>
                {isYoyPositive ? <ArrowUpRight className="mr-1 h-3 w-3" /> : <ArrowDownRight className="mr-1 h-3 w-3" />}
                {Math.abs(yoy).toFixed(1)}%
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-50 font-sans pb-12 selection:bg-neutral-800">
      
      {/* Hero Banner with Team Colors */}
      <div 
        className="relative pt-12 pb-24 px-4 md:px-8 border-b border-neutral-800/50"
        style={{
          background: `linear-gradient(180deg, ${team.colors.primary}20 0%, #0a0a0a 100%)`
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 flex items-center justify-center shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={team.logo} alt={team.name} className="w-full h-full object-contain drop-shadow-xl" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">{team.name}</h1>
              <p className="text-neutral-400 text-lg">Visão Geral de Desempenho e Finanças</p>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <div className="bg-neutral-900/60 backdrop-blur-md p-2 rounded-xl border border-neutral-800 flex flex-col gap-2">
              <span className="text-xs font-medium text-neutral-400 px-2 pt-1 uppercase tracking-wider">Analisar Clube</span>
              <Select value={selectedTeamId} onValueChange={(val) => val && setSelectedTeamId(val)}>
                <SelectTrigger className="w-full md:w-[240px] h-12 bg-neutral-950 border-neutral-800 text-base">
                  <SelectValue placeholder="Selecione um time" />
                </SelectTrigger>
                <SelectContent className="bg-neutral-900 border-neutral-800 text-white">
                  {footballTeams.map((t) => (
                    <SelectItem key={t.id} value={t.id} className="hover:bg-neutral-800 focus:bg-neutral-800 cursor-pointer py-3">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.logo} alt={t.name} className="w-6 h-6 object-contain" />
                        <span className="font-semibold">{t.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-12 space-y-8 relative z-20">
        
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {renderKPI("Receita Total Bruta", team.revenue, "R$ ", " M", <DollarSign className="h-5 w-5 text-emerald-500" />)}
          {renderKPI("Despesas Operacionais", team.expenses, "R$ ", " M", <Activity className="h-5 w-5 text-rose-500" />)}
          {renderKPI("Programa Sócio Torcedor", team.members, "", "", <Users className="h-5 w-5 text-blue-500" />)}
          {renderKPI("Público Médio (Pagantes)", team.attendance, "", "", <Ticket className="h-5 w-5 text-amber-500" />)}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          
          <Card className="xl:col-span-2 bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">Evolução Financeira Mensal</CardTitle>
              <CardDescription>Comparativo entre Receitas e Despesas ao longo do ano corrente</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={team.historicalRevenue} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                  <XAxis dataKey="month" stroke="#737373" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="#737373" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value}`} />
                  <Tooltip 
                    cursor={{fill: '#262626'}}
                    contentStyle={{ backgroundColor: '#171717', borderColor: '#333', color: '#fff', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    itemStyle={{ color: '#fff', fontWeight: 600 }}
                  />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="circle" />
                  <Bar dataKey="revenue" name="Receita (M)" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  <Bar dataKey="expenses" name="Despesas (M)" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">Composição da Receita</CardTitle>
              <CardDescription>Fontes de renda no período atual</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={team.categories}
                    cx="50%"
                    cy="45%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {team.categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#171717', borderColor: '#333', color: '#fff', borderRadius: '8px' }}
                    itemStyle={{ color: '#fff', fontWeight: 600 }}
                    formatter={(value: any) => [`R$ ${value} Milhões`, 'Valor']}
                  />
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} iconType="circle"/>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
