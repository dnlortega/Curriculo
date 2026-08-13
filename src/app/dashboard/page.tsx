import { cookies } from 'next/headers';
import { AdminLogin } from '@/components/AdminLogin';
import { prisma } from '@/lib/prisma';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MapPin, Monitor, Clock, Users, MousePointer2, Link2, Cpu, Battery, Wifi, Smartphone, Globe, SunMoon, HardDrive } from 'lucide-react';
import { ClearAllLogsButton } from '@/components/ClearAllLogsButton';
import { DeleteLogButton } from '@/components/DeleteLogButton';
import { LogDetailsDialog } from '@/components/LogDetailsDialog';
import { ThemeToggle } from '@/components/theme-toggle';
import { ExportCsvButton } from '@/components/ExportCsvButton';
import { Badge } from '@/components/ui/badge';
import { DashboardTabs } from '@/components/DashboardTabs';
import { SettingsPanel } from '@/components/SettingsPanel';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_session')?.value === 'authenticated';

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background relative selection:bg-primary/30 flex items-center justify-center p-4">
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
  const locations = logs.map(l => `${l.city}, ${l.country}`).filter(l => !l.includes('Desconhecido') && !l.includes('Oculta'));
  const topLocation = locations.sort((a, b) => 
    locations.filter(v => v === a).length - locations.filter(v => v === b).length
  ).pop() || 'N/A';

  const analyticsContent = (
    <div className="space-y-8">
      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/40 shadow-sm border-border hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sessões Totais</CardTitle>
            <div className="p-2 bg-primary/10 rounded-full"><MousePointer2 className="h-4 w-4 text-primary" /></div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalVisits}</div>
            <p className="text-xs text-muted-foreground mt-1">Tráfego registrado no banco de dados</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/40 shadow-sm border-border hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visitantes Únicos</CardTitle>
            <div className="p-2 bg-blue-500/10 rounded-full"><Users className="h-4 w-4 text-blue-500" /></div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{uniqueIps}</div>
            <p className="text-xs text-muted-foreground mt-1">Endereços de IP distintos</p>
          </CardContent>
        </Card>
        
        <Card className="bg-card/40 shadow-sm border-border hover:border-primary/50 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Localização</CardTitle>
            <div className="p-2 bg-red-500/10 rounded-full"><MapPin className="h-4 w-4 text-red-500" /></div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold truncate tracking-tight" title={topLocation}>{topLocation}</div>
            <p className="text-xs text-muted-foreground mt-1">Polo de origem mais frequente</p>
          </CardContent>
        </Card>
      </div>

      {/* DATA TABLE */}
      <Card className="border-border shadow-2xl overflow-hidden bg-card/60 backdrop-blur-md">
        <CardHeader className="border-b border-border/50 bg-muted/20">
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Radar de Acessos
          </CardTitle>
          <CardDescription>Inspeção granular das últimas sessões.</CardDescription>
        </CardHeader>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="w-[120px]">Sessão</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Geolocalização</TableHead>
                <TableHead>Sistema</TableHead>
                <TableHead>Máquina</TableHead>
                <TableHead>Rede & Extras</TableHead>
                <TableHead className="text-center">Leitura</TableHead>
                <TableHead className="text-right">Ação</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="h-48 text-center text-muted-foreground">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Globe className="w-8 h-8 opacity-20" />
                      <p>Nenhum registro encontrado no radar.</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                logs.map((log) => {
                  let adv: any = {};
                  try {
                    if (log.advancedDetails) adv = JSON.parse(log.advancedDetails);
                  } catch (e) {}

                  return (
                  <TableRow key={log.id} className="hover:bg-muted/40 transition-colors group">
                    {/* Sessão */}
                    <TableCell className="align-top">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2 whitespace-nowrap text-[13px] font-semibold">
                          <Clock className="w-3.5 h-3.5 text-primary" />
                          {new Date(log.createdAt).toLocaleString('pt-BR', {
                            timeZone: 'America/Sao_Paulo',
                            day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                          })}
                        </div>
                        <Badge variant="outline" className="w-fit text-[10px] font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                          {log.ip}
                        </Badge>
                      </div>
                    </TableCell>

                    {/* Origem */}
                    <TableCell className="align-top">
                      <div className="flex items-center gap-1.5">
                        <Link2 className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground max-w-[120px] truncate" title={adv.referrer || 'Acesso Direto'}>
                          {adv.referrer || 'Direto'}
                        </span>
                      </div>
                    </TableCell>

                    {/* Geolocalização */}
                    <TableCell className="align-top">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-[13px]">
                          <MapPin className="w-3.5 h-3.5 text-red-500/80" />
                          <span className={log.city === 'Desconhecido' ? 'text-muted-foreground italic' : 'font-medium'}>
                            {log.city !== 'Desconhecido' && log.country !== 'Desconhecido' 
                              ? `${log.city}, ${log.country}` 
                              : 'Oculta'}
                          </span>
                        </div>
                        {adv['Coordenadas (GPS)'] && (
                          <a href={adv['Google Maps']} target="_blank" rel="noreferrer" className="text-[10px] text-blue-500 hover:text-blue-400 hover:underline pl-5 transition-colors flex items-center gap-1">
                            Abrir no Maps
                          </a>
                        )}
                      </div>
                    </TableCell>

                    {/* Sistema */}
                    <TableCell className="align-top">
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-1.5 text-[13px] font-medium">
                          <Monitor className="w-3.5 h-3.5 text-blue-500/80" />
                          <span className="truncate max-w-[130px]" title={log.device}>{log.device}</span>
                        </div>
                        <div className="text-[11px] text-muted-foreground pl-5 flex flex-col">
                          <span title={log.os}>{log.os}</span>
                          <span title={log.browser}>{log.browser}</span>
                          {log.screen && <span className="opacity-80">Tela: {log.screen}</span>}
                        </div>
                      </div>
                    </TableCell>

                    {/* Hardware */}
                    <TableCell className="align-top">
                      <div className="flex flex-col gap-1.5">
                        {adv.ram && (
                          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <HardDrive className="w-3.5 h-3.5" /> RAM: <span className="font-medium text-foreground">{adv.ram}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                          <Cpu className="w-3.5 h-3.5" /> CPU: <span className="font-medium text-foreground">{adv.cores || log.cpu || '?'}</span>
                        </div>
                        {adv.battery && (
                          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <Battery className="w-3.5 h-3.5" /> Bat: <span className="font-medium text-foreground">{adv.battery}</span>
                          </div>
                        )}
                      </div>
                    </TableCell>

                    {/* Rede & Extras */}
                    <TableCell className="align-top">
                      <div className="flex flex-col gap-1.5">
                        {adv.connection && (
                          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <Wifi className="w-3.5 h-3.5" /> <span className="font-medium text-foreground">{adv.connection} {adv.speed ? `(${adv.speed})` : ''}</span>
                          </div>
                        )}
                        {adv.theme && (
                          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <SunMoon className="w-3.5 h-3.5" /> <span className="font-medium text-foreground capitalize">{adv.theme}</span>
                          </div>
                        )}
                        {adv.timezone && (
                          <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                            <Globe className="w-3.5 h-3.5" /> <span className="font-medium text-foreground truncate max-w-[80px]" title={adv.timezone}>{adv.timezone.split('/')[1] || adv.timezone}</span>
                          </div>
                        )}
                      </div>
                    </TableCell>

                    {/* Leitura */}
                    <TableCell className="align-top text-center">
                      <LogDetailsDialog duration={log.duration} readingLog={log.readingLog} advancedDetails={log.advancedDetails} />
                    </TableCell>

                    {/* Ações */}
                    <TableCell className="align-top text-right">
                      <DeleteLogButton id={log.id} />
                    </TableCell>
                  </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background p-6 md:p-12 font-sans selection:bg-primary/30">
      
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Painel de Inteligência
            </h1>
            <p className="text-muted-foreground mt-1 text-sm md:text-base">
              Monitoramento avançado de comportamento e tráfego.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <ExportCsvButton logs={logs} />
            <ClearAllLogsButton />
          </div>
        </div>

        <DashboardTabs 
          analyticsContent={analyticsContent}
          settingsContent={<SettingsPanel />}
        />

      </div>
    </div>
  );
}
