"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const getIssuerDomain = (issuer: string) => {
  const map: Record<string, string> = {
    "Unimed Bauru": "unimedbauru.com.br",
    "HOSPITAL UNIMED BAURU": "unimedbauru.com.br",
    "Hashtag Treinamentos": "hashtagtreinamentos.com",
    "Full Stack Club": "fullstackclub.com.br",
    "Xperiun | Data Analytics": "xperiun.com",
    "TreinaWeb": "treinaweb.com.br",
    "Dev em Dobro": "devemdobro.com",
    "Rocketseat": "rocketseat.com.br",
    "Lab - Hub Unimed": "unimed.coop.br",
    "Alura": "alura.com.br",
    "Daxus (antiga Empowerdata)": "daxus.com.br",
    "Udemy Alumni": "udemy.com",
    "Unimed Fesp": "unimedfesp.coop.br",
    "SESCOOP/SP": "sescoopsp.coop.br",
    "UNINTER Centro Universitário Internacional": "uninter.com",
    "Prefeitura Municipal de Bauru": "bauru.sp.gov.br",
    "Microlins Franchising": "microlins.com.br",
    "Microcamp": "microcamp.com.br",
    "SOS Computadores": "sos.com.br"
  };
  return map[issuer] || null;
};

const getInitialsAvatar = (name: string) => {
  const initial = name.charAt(0).toUpperCase();
  const colors = ['#f87171', '#fb923c', '#fbbf24', '#a3e635', '#34d399', '#22d3ee', '#818cf8', '#c084fc', '#f472b6'];
  const color = colors[name.length % colors.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="${color}"/><text x="50" y="68" font-family="Arial, sans-serif" font-weight="bold" font-size="50" fill="#ffffff" text-anchor="middle">${initial}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const IssuerLogo = ({ issuer, className }: { issuer: string; className?: string }) => {
  const domain = getIssuerDomain(issuer);
  const [errorLevel, setErrorLevel] = useState(0);

  const googleFavicon = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : null;
  const localAvatar = getInitialsAvatar(issuer);

  let currentSrc = localAvatar;

  if (issuer.toLowerCase().includes('uninter')) {
    currentSrc = "/uninter-logo.svg";
  } else if (domain) {
    if (errorLevel === 0) {
      currentSrc = `https://logo.clearbit.com/${domain}`;
    } else if (errorLevel === 1) {
      currentSrc = googleFavicon!;
    }
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      key={currentSrc}
      src={currentSrc}
      alt={`Logo ${issuer}`}
      className={cn("rounded bg-background object-contain", className)}
      loading="lazy"
      onError={() => {
        setErrorLevel(prev => prev + 1);
      }}
    />
  );
};
