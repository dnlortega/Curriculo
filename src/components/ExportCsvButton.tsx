'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useState } from 'react';

export function ExportCsvButton({ logs }: { logs: any[] }) {
  const [isExporting, setIsExporting] = useState(false);

  const exportCsv = () => {
    setIsExporting(true);
    
    // Define headers
    const headers = [
      'Data e Hora',
      'Origem',
      'Cidade',
      'Estado',
      'Pais',
      'Lat,Lng',
      'Dispositivo',
      'OS',
      'Navegador',
      'Tela',
      'RAM',
      'CPU',
      'Bateria',
      'Rede',
      'Velocidade',
      'Tema',
      'Timezone',
      'IP',
      'Tempo Total (s)'
    ];

    // Format rows
    const rows = logs.map(log => {
      let adv: any = {};
      try {
        if (log.advancedDetails) adv = JSON.parse(log.advancedDetails);
      } catch (e) {}

      const date = new Date(log.createdAt).toLocaleString('pt-BR');
      
      const row = [
        `"${date}"`,
        `"${adv.referrer || 'Direto'}"`,
        `"${log.city?.split(' - ')[0] || log.city}"`,
        `"${log.city?.split(' - ')[1] || ''}"`,
        `"${log.country}"`,
        `"${adv['Coordenadas (GPS)'] || ''}"`,
        `"${log.device}"`,
        `"${log.os}"`,
        `"${log.browser}"`,
        `"${log.screen}"`,
        `"${adv.ram || ''}"`,
        `"${adv.cores || log.cpu || ''}"`,
        `"${adv.battery || ''}"`,
        `"${adv.connection || ''}"`,
        `"${adv.speed || ''}"`,
        `"${adv.theme || ''}"`,
        `"${adv.timezone || ''}"`,
        `"${log.ip}"`,
        `"${log.duration || 0}"`
      ];

      return row.join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `historico_acessos_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsExporting(false);
  };

  return (
    <Button 
      variant="secondary" 
      onClick={exportCsv} 
      disabled={isExporting || logs.length === 0}
      className="gap-2"
    >
      <Download className="w-4 h-4" />
      {isExporting ? 'Exportando...' : 'Exportar CSV'}
    </Button>
  );
}
