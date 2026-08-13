'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

interface LogDetailsDialogProps {
  duration: number | null;
  readingLog: string | null;
  advancedDetails: string | null;
}

export function LogDetailsDialog({ duration, readingLog, advancedDetails }: LogDetailsDialogProps) {
  if (!duration && !readingLog && !advancedDetails) return <span className="text-muted-foreground text-xs italic">Sem dados</span>;

  let parsedLog: Record<string, number> = {};
  let parsedAdvanced: Record<string, string | number> = {};
  
  try {
    if (readingLog) parsedLog = JSON.parse(readingLog);
    if (advancedDetails) parsedAdvanced = JSON.parse(advancedDetails);
  } catch (e) {
    console.error(e);
  }

  const sections = Object.entries(parsedLog).sort((a, b) => b[1] - a[1]);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 gap-1 cursor-pointer">
          <BookOpen className="w-3 h-3" />
          Detalhes
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Análise de Comportamento</DialogTitle>
          <DialogDescription>
            Detalhes de tempo e leitura deste visitante.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex justify-between items-center bg-muted/50 p-3 rounded-lg border border-border">
            <span className="text-sm font-medium">Tempo Total no Site</span>
            <span className="text-lg font-bold text-primary">
              {duration ? `${duration}s` : 'Desconhecido'}
            </span>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-semibold">O que leu (Atenção por Seção)</h4>
            {sections.length === 0 ? (
              <p className="text-xs text-muted-foreground italic">Nenhuma seção registrada.</p>
            ) : (
              <div className="space-y-2 max-h-[150px] overflow-y-auto pr-2">
                {sections.map(([section, time]) => (
                  <div key={section} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground capitalize">
                      {section.replace('section', '').replace('-', ' ').trim() || 'Hero'}
                    </span>
                    <span className="font-mono">{time}s</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {Object.keys(parsedAdvanced).length > 0 && (
            <div className="space-y-2 mt-4 pt-4 border-t border-border">
              <h4 className="text-sm font-semibold">Detalhes Secretos (Hardware & Conexão)</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(parsedAdvanced).map(([key, val]) => (
                  <div key={key} className="flex flex-col bg-muted/30 p-2 rounded">
                    <span className="text-muted-foreground capitalize font-medium">{key}</span>
                    <span className="font-mono truncate" title={String(val)}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
