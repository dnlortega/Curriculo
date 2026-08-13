'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Settings } from 'lucide-react';

export function DashboardTabs({ analyticsContent, settingsContent }: { analyticsContent: React.ReactNode, settingsContent: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<'analytics' | 'settings'>('analytics');

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4 mb-8">
        <Button 
          variant={activeTab === 'analytics' ? 'default' : 'outline'} 
          onClick={() => setActiveTab('analytics')}
          className="gap-2 w-48"
        >
          <Globe className="w-4 h-4" />
          Radar de Acessos
        </Button>
        <Button 
          variant={activeTab === 'settings' ? 'default' : 'outline'} 
          onClick={() => setActiveTab('settings')}
          className="gap-2 w-48"
        >
          <Settings className="w-4 h-4" />
          Integrações & Segurança
        </Button>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'analytics' ? analyticsContent : settingsContent}
      </div>
    </div>
  );
}
