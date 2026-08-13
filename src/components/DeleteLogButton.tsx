'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function DeleteLogButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm('Apagar este registro?')) return;
    
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/track?id=${id}`, { method: 'DELETE' });
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
      variant="ghost" 
      size="icon" 
      className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors"
      onClick={handleDelete}
      disabled={isDeleting}
      title="Apagar"
    >
      <Trash2 className="h-4 w-4" />
      <span className="sr-only">Apagar</span>
    </Button>
  );
}
