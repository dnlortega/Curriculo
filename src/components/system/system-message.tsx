"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface SystemMessageProps {
  title?: string;
  message: string;
  type?: "info" | "warning" | "urgent";
  delay?: number;
  duration?: number;
  onComplete?: () => void;
}

export function SystemMessage({
  title = "SISTEMA",
  message,
  type = "info",
  delay = 0,
  duration,
  onComplete,
}: SystemMessageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    let hideTimer: NodeJS.Timeout;
    if (duration) {
      hideTimer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, (delay + duration) * 1000);
    }

    return () => {
      clearTimeout(timer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [delay, duration, onComplete]);

  const colors = {
    info: "border-system-blue text-system-blue shadow-[0_0_15px_var(--color-system-blue-glow)]",
    warning: "border-system-gold text-system-gold shadow-[0_0_15px_rgba(251,191,36,0.4)]",
    urgent: "border-red-500 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.6)]",
  };

  const bgColors = {
    info: "bg-system-blue/10",
    warning: "bg-system-gold/10",
    urgent: "bg-red-500/10",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col min-w-[300px] max-w-md 
            border-2 ${colors[type]} ${bgColors[type]} backdrop-blur-md rounded-md p-4 font-mono`}
        >
          <div className="flex items-center gap-2 mb-2 border-b border-current pb-2">
            <AlertCircle className="w-5 h-5" />
            <span className="font-bold tracking-widest">{title}</span>
          </div>
          <p className="text-sm font-semibold tracking-wide">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
