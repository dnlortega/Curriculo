import { cookies } from 'next/headers';
import { AdminLogin } from '@/components/AdminLogin';
import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MapPin, Monitor, Clock, Users, MousePointer2 } from 'lucide-react';
import { ClearAllLogsButton } from '@/components/ClearAllLogsButton';
import { DeleteLogButton } from '@/components/DeleteLogButton';
import { LogDetailsDialog } from '@/components/LogDetailsDialog';
import { ThemeToggle } from '@/components/theme-toggle';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_session')?.value === 'authenticated';

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background relative selection:bg-primary/30">
        <div className="absolute top-4 right-4"><ThemeToggle /></div>
        <AdminLogin />
      </div>
    );
  }

  // Fetch logs
  const logs = await prisma.accessLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100, // Limit to 100 recent to prevent overload
  });

  // Calculate Stats
  const totalVisits = logs.length;
  const uniqueIps = new Set(logs.map(l => l.ip)).size;
  
  // Find top location
  const locations = logs.map(l => `${l.city}, ${l.country}`).filter(l => !l.includes('Desconhecido'));
  const topLocation = locations.sort((a, b) => 
    locations.filter(v => v === a).length - locations.filter(v => v === b).length
  ).pop() || 'N/A';

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 font-sans selection:bg-primary/30">
      
      <div className="max-w-7xl mx-auto space-y-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Painel Administrativo</h1>
            <p className="text-muted-foreground mt-1">
              Visão geral de tráfego, sessões e interações do seu portfólio.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <ClearAllLogsButton />
          </div>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card shadow-sm border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Visitas</CardTitle>
              <MousePointer2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalVisits}</div>
              <p className="text-xs text-muted-foreground">Sessões registradas no banco</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card shadow-sm border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visitantes Únicos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{uniqueIps}</div>
              <p className="text-xs text-muted-foreground">Baseado em endereços de IP distintos</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card shadow-sm border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Localização</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold truncate" title={topLocation}>{topLocation}</div>
              <p className="text-xs text-muted-foreground">Origem mais frequente</p>
            </CardContent>
          </Card>
        </div>

        {/* DATA TABLE */}
        <Card className="border-border shadow-xl overflow-hidden bg-card/50 backdrop-blur-sm">
          <CardHeader className="border-b border-border/50 bg-muted/20">
            <CardTitle>Histórico de Acessos</CardTitle>
            <CardDescription>Os 100 últimos registros capturados pelo Tracker.</CardDescription>
          </CardHeader>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[150px]">Data e Hora</TableHead>
                  <TableHead>Localização</TableHead>
                  <TableHead>Dispositivo</TableHead>
                  <TableHead>Leitura / Tempo</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead className="text-right">Foto</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="h-32 text-center text-muted-foreground">
                      Nenhum registro encontrado. Visite a página inicial para gerar dados!
                    </TableCell>
                  </TableRow>
                ) : (
                  logs.map((log) => (
                    <TableRow key={log.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell>
                        <div className="flex items-center gap-2 whitespace-nowrap text-xs md:text-sm font-medium">
                          <Clock className="w-4 h-4 text-primary" />
                          {new Date(log.createdAt).toLocaleString('pt-BR', {
                            timeZone: 'America/Sao_Paulo',
                            day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                          })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-red-500/80" />
                          <span className={log.city === 'Desconhecido' ? 'text-muted-foreground italic' : 'font-medium'}>
                            {log.city !== 'Desconhecido' && log.country !== 'Desconhecido' 
                              ? `${log.city}, ${log.country}` 
                              : 'Localização Oculta'}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-sm font-medium">
                            <Monitor className="w-4 h-4 text-blue-500/80" />
                            <span className="truncate max-w-[120px] md:max-w-[200px]" title={`${log.device} - ${log.os} - ${log.browser}`}>
                              {log.device} • {log.os}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground pl-6 flex flex-col gap-0.5">
                            <span>{log.browser}</span>
                            {log.screen && <span>Tela: {log.screen}</span>}
                            {log.language && <span>Idioma: {log.language}</span>}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <LogDetailsDialog duration={log.duration} readingLog={log.readingLog} advancedDetails={log.advancedDetails} />
                      </TableCell>
                      <TableCell className="text-muted-foreground text-xs font-mono bg-muted/30 px-2 py-1 rounded">
                        {log.ip}
                      </TableCell>
                      <TableCell className="text-right">
                        {log.photoUrl ? (
                          <div className="flex justify-end">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm relative group cursor-pointer hover:border-primary transition-colors">
                              <img src={log.photoUrl} alt="Selfie do visitante" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] text-white font-bold uppercase">Ver</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground italic">Sem foto</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DeleteLogButton id={log.id} />
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}
