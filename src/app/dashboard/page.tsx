import { PrismaClient } from '@prisma/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MapPin, Monitor, Clock, UserCheck } from 'lucide-react';
import { ClearAllLogsButton } from '@/components/ClearAllLogsButton';
import { DeleteLogButton } from '@/components/DeleteLogButton';

// In a real app, this should be outside or instantiated differently to avoid connection limits
// But for Next.js 15 Server Components, we can do this for simplicity in this example
const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DashboardPage() {
  const logs = await prisma.accessLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
  });

  return (
    <div className="container mx-auto py-10 px-4 md:px-6 space-y-8 animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Painel de Acessos</h1>
          <p className="text-muted-foreground">
            Monitore quem visitou o seu currículo.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
            <UserCheck className="w-5 h-5" />
            <span>{logs.length} Registros Recentes</span>
          </div>
          {logs.length > 0 && <ClearAllLogsButton />}
        </div>
      </div>

      <Card className="border-border shadow-lg overflow-hidden">
        <CardHeader className="bg-muted/50 border-b">
          <CardTitle>Histórico de Visitas</CardTitle>
          <CardDescription>
            Mostrando os últimos {logs.length} acessos registrados.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-[100px]">Data/Hora</TableHead>
                  <TableHead>Localização</TableHead>
                  <TableHead>Dispositivo</TableHead>
                  <TableHead>IP</TableHead>
                  <TableHead className="text-right">Foto</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center text-muted-foreground">
                      Nenhum acesso registrado ainda.
                    </TableCell>
                  </TableRow>
                ) : (
                  logs.map((log) => (
                    <TableRow key={log.id} className="group transition-colors hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2 whitespace-nowrap text-xs md:text-sm">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          {new Date(log.createdAt).toLocaleString('pt-BR', {
                            day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                          })}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          {log.city !== 'Desconhecido' && log.country !== 'Desconhecido' 
                            ? `${log.city}, ${log.country}` 
                            : 'Localização Oculta'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 text-sm">
                          <Monitor className="w-4 h-4 text-muted-foreground" />
                          <span className="truncate max-w-[120px] md:max-w-[200px]" title={`${log.device} - ${log.os} - ${log.browser}`}>
                            {log.device} • {log.os}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm font-mono">
                        {log.ip}
                      </TableCell>
                      <TableCell className="text-right">
                        {log.photoUrl ? (
                          <div className="flex justify-end">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                              <img 
                                src={log.photoUrl} 
                                alt="Selfie" 
                                className="object-cover w-full h-full"
                              />
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
        </CardContent>
      </Card>
    </div>
  );
}
