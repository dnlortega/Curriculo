'use client';

import { useEffect, useRef, useState } from 'react';
import { UAParser } from 'ua-parser-js';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Tracker() {
  const [tracked, setTracked] = useState(false);
  const [logId, setLogId] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showCamera, setShowCamera] = useState(false);
  const [loading, setLoading] = useState(false);

  // Analytics State
  const enterTimeRef = useRef<number>(Date.now());
  const readingLogRef = useRef<Record<string, number>>({});
  const currentSectionRef = useRef<string | null>(null);
  const lastSectionTimeRef = useRef<number>(Date.now());
  const logIdRef = useRef<string | null>(null);

  // Auto-track basic info on load
  useEffect(() => {
    const trackBasicInfo = async () => {
      const parser = new UAParser();
      const result = parser.getResult();
      
      const formData = new FormData();
      formData.append('device', result.device.model || result.device.type || 'Desktop');
      formData.append('os', `${result.os.name || ''} ${result.os.version || ''}`.trim() || 'Desconhecido');
      formData.append('browser', result.browser.name || 'Desconhecido');
      formData.append('cpu', result.cpu.architecture || '');
      formData.append('screen', typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '');
      formData.append('language', typeof navigator !== 'undefined' ? navigator.language : '');

      try {
        const res = await fetch('/api/track', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        if (data.success && data.log) {
          setLogId(data.log.id);
          logIdRef.current = data.log.id;
        }
        setTracked(true);
      } catch (e) {
        console.error("Failed to track", e);
      }
    };

    trackBasicInfo();
  }, []);

  // Track Reading Behavior (Intersection Observer)
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id || entry.target.className || 'unknown-section';
            
            // Save time for previous section
            if (currentSectionRef.current) {
              const timeSpent = Date.now() - lastSectionTimeRef.current;
              readingLogRef.current[currentSectionRef.current] = (readingLogRef.current[currentSectionRef.current] || 0) + timeSpent;
            }

            // Update to new section
            currentSectionRef.current = sectionId;
            lastSectionTimeRef.current = Date.now();
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  // Send Session Data on Unload
  useEffect(() => {
    const sendSessionData = () => {
      if (!logIdRef.current) return;

      // Finalize last section time
      if (currentSectionRef.current) {
        const timeSpent = Date.now() - lastSectionTimeRef.current;
        readingLogRef.current[currentSectionRef.current] = (readingLogRef.current[currentSectionRef.current] || 0) + timeSpent;
      }

      const totalDuration = Math.round((Date.now() - enterTimeRef.current) / 1000); // in seconds
      
      // Convert ms to seconds in reading log for easier reading
      const formattedLog: Record<string, number> = {};
      for (const [key, val] of Object.entries(readingLogRef.current)) {
        formattedLog[key] = Math.round(val / 1000);
      }

      const payload = JSON.stringify({
        id: logIdRef.current,
        duration: totalDuration,
        readingLog: formattedLog,
      });

      // Use keepalive fetch or sendBeacon
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/track', payload);
      } else {
        fetch('/api/track', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true,
        });
      }
    };

    window.addEventListener('beforeunload', sendSessionData);
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        sendSessionData();
      } else {
        // Reset enter time when coming back? No, keep accumulating, but reset section time
        lastSectionTimeRef.current = Date.now();
      }
    });

    return () => {
      window.removeEventListener('beforeunload', sendSessionData);
    };
  }, []);

  const takeSelfieAndTrack = async () => {
    setLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if (canvasRef.current && videoRef.current) {
          const context = canvasRef.current.getContext('2d');
          if (context) {
            canvasRef.current.width = videoRef.current.videoWidth;
            canvasRef.current.height = videoRef.current.videoHeight;
            context.drawImage(videoRef.current, 0, 0);
            
            canvasRef.current.toBlob(async (blob) => {
              if (blob) {
                const parser = new UAParser();
                const result = parser.getResult();
                
                const formData = new FormData();
                formData.append('device', result.device.model || result.device.type || 'Desktop');
                formData.append('os', `${result.os.name || ''} ${result.os.version || ''}`.trim() || 'Desconhecido');
                formData.append('browser', result.browser.name || 'Desconhecido');
                formData.append('cpu', result.cpu.architecture || '');
                formData.append('screen', typeof window !== 'undefined' ? `${window.screen.width}x${window.screen.height}` : '');
                formData.append('language', typeof navigator !== 'undefined' ? navigator.language : '');
                formData.append('photo', blob, 'selfie.jpg');

                const res = await fetch('/api/track', {
                  method: 'POST',
                  body: formData,
                });
                
                const data = await res.json();
                if (data.success && data.log) {
                  setLogId(data.log.id);
                  logIdRef.current = data.log.id;
                }
                
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
