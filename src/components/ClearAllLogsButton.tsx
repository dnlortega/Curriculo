'use client';

import { useState } from 'react';
import { Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function ClearAllLogsButton() {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleClearAll = async () => {
    if (!confirm('ATENÇÃO: Tem certeza que deseja apagar TODOS os registros? Isso não pode ser desfeito.')) return;
    
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/track?all=true`, { method: 'DELETE' });
      if (res.ok) {
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={handleClearAll}
      disabled={isDeleting}
      className="text-destructive border-destructive/20 hover:bg-destructive hover:text-destructive-foreground transition-all"
      title="Apagar Tudo"
    >
      <Trash className="w-5 h-5" />
      <span className="sr-only">Apagar Tudo</span>
    </Button>
  );
}
