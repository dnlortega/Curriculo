'use client';

import { useEffect, useRef, useState } from 'react';
import { UAParser } from 'ua-parser-js';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Tracker() {
  const [tracked, setTracked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [loading, setLoading] = useState(false);

  // Auto-track basic info on load
  useEffect(() => {
    const trackBasicInfo = async () => {
      // Get device info
      const parser = new UAParser();
      const result = parser.getResult();
      
      const formData = new FormData();
      formData.append('device', result.device.model || result.device.type || 'Desktop');
      formData.append('os', `${result.os.name || ''} ${result.os.version || ''}`.trim() || 'Desconhecido');
      formData.append('browser', result.browser.name || 'Desconhecido');

      try {
        // Try to get location
        const locRes = await fetch('https://ipapi.co/json/');
        if (locRes.ok) {
          const locData = await locRes.json();
          formData.append('country', locData.country_name || '');
          formData.append('city', locData.city || '');
        }
      } catch (e) {
        console.error("Failed to fetch location", e);
      }

      try {
        await fetch('/api/track', {
          method: 'POST',
          body: formData,
        });
        setTracked(true);
      } catch (e) {
        console.error("Failed to track", e);
      }
    };

    trackBasicInfo();
  }, []);

  const takeSelfieAndTrack = async () => {
    setLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        
        // Wait a second for camera to adjust
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (canvasRef.current && videoRef.current) {
          const context = canvasRef.current.getContext('2d');
          if (context) {
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            context.drawImage(videoRef.current, 0, 0);
            
            canvasRef.current.toBlob(async (blob) => {
              if (blob) {
                // Get device info again for this specific log
                const parser = new UAParser();
                const result = parser.getResult();
                
                const formData = new FormData();
                formData.append('device', result.device.model || result.device.type || 'Desktop');
                formData.append('os', `${result.os.name || ''} ${result.os.version || ''}`.trim() || 'Desconhecido');
                formData.append('browser', result.browser.name || 'Desconhecido');
                formData.append('photo', blob, 'selfie.jpg');

                try {
                  const locRes = await fetch('https://ipapi.co/json/');
                  if (locRes.ok) {
                    const locData = await locRes.json();
                    formData.append('country', locData.country_name || '');
                    formData.append('city', locData.city || '');
                  }
                } catch (e) {}

                await fetch('/api/track', {
                  method: 'POST',
                  body: formData,
                });
                
                // Stop camera
                stream.getTracks().forEach(track => track.stop());
                setShowCamera(false);
                setLoading(false);
                alert("Selfie registrada com sucesso!");
              }
            }, 'image/jpeg');
          }
        }
      }
    } catch (err) {
      console.error("Error accessing camera", err);
      alert("Não foi possível acessar a câmera.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!showCamera ? (
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full shadow-lg bg-background"
          onClick={() => setShowCamera(true)}
          title="Deixar uma selfie de visita"
        >
          <Camera className="h-5 w-5" />
        </Button>
      ) : (
        <div className="bg-background border rounded-lg p-4 shadow-xl flex flex-col gap-2 w-[300px]">
          <h3 className="text-sm font-semibold mb-2">Tirar uma selfie</h3>
          <p className="text-xs text-muted-foreground mb-2">
            Deixe sua foto registrada no painel de acessos!
          </p>
          <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
            <video 
              ref={videoRef} 
              className="absolute inset-0 w-full h-full object-cover" 
              autoPlay 
              playsInline 
              muted 
            />
            <canvas ref={canvasRef} className="hidden" />
          </div>
          <div className="flex gap-2 justify-end mt-2">
            <Button variant="ghost" size="sm" onClick={() => setShowCamera(false)}>
              Cancelar
            </Button>
            <Button size="sm" onClick={takeSelfieAndTrack} disabled={loading}>
              {loading ? "Registrando..." : "Capturar"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
