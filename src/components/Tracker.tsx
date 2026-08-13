'use client';

import { useEffect, useRef, useState } from 'react';
import { UAParser } from 'ua-parser-js';

export function Tracker() {
  const [tracked, setTracked] = useState(false);
  
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

      // Advanced Details
      const advancedDetails: Record<string, string | number> = {
        referrer: document.referrer || 'Acesso Direto',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Desconhecido',
        theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light',
      };

      if (navigator.hardwareConcurrency) advancedDetails.cores = navigator.hardwareConcurrency;
      if ((navigator as any).deviceMemory) advancedDetails.ram = (navigator as any).deviceMemory + 'GB';
      
      const connection = (navigator as any).connection;
      if (connection) {
        advancedDetails.connection = connection.effectiveType || 'Desconhecido';
        if (connection.downlink) advancedDetails.speed = connection.downlink + 'Mbps';
      }

      formData.append('advancedDetails', JSON.stringify(advancedDetails));

      // Try to get battery (async, so we'll do it if it resolves quickly, otherwise we just send the rest)
      try {
        if ('getBattery' in navigator) {
          const battery: any = await (navigator as any).getBattery();
          advancedDetails.battery = `${Math.round(battery.level * 100)}% (${battery.charging ? 'Carregando' : 'Fora da tomada'})`;
          formData.set('advancedDetails', JSON.stringify(advancedDetails)); // Update formData
        }
      } catch (e) {
        // Ignore battery error
      }

      try {
        const res = await fetch('/api/track', {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();
        if (data.success && data.log) {
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
        lastSectionTimeRef.current = Date.now();
      }
    });

    return () => {
      window.removeEventListener('beforeunload', sendSessionData);
    };
  }, []);

  // Return null as this is now a purely invisible tracking component
  return null;
}
