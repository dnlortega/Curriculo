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
}

export function LogDetailsDialog({ duration, readingLog }: LogDetailsDialogProps) {
  if (!duration && !readingLog) return <span className="text-muted-foreground text-xs italic">Sem dados</span>;

  let parsedLog: Record<string, number> = {};
  try {
    if (readingLog) parsedLog = JSON.parse(readingLog);
  } catch (e) {
    console.error(e);
  }

  const sections = Object.entries(parsedLog).sort((a, b) => b[1] - a[1]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 text-xs gap-1">
          <BookOpen className="w-3 h-3" />
          Detalhes
        </Button>
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
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
