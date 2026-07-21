"use client";

import Image from "next/image";

export const BrazilFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 17 64 64" preserveAspectRatio="xMidYMid slice" className={className}>
    <path fill="#5c9e31" d="M36 17c17.673 0 32 14.327 32 32s-14.327 32-32 32S4 66.673 4 49s14.327-32 32-32z"/>
    <path fill="#fcc21b" d="M36 21L11 49l25 28 25-28-25-28z"/>
    <circle cx="36" cy="49" r="14" fill="#0052b4"/>
    <path fill="#fff" d="M23.167 53.649c5.111-3.65 13.905-5.918 25.592-2.146-.425-1.121-.933-2.196-1.517-3.214-11.442-3.136-19.82-.442-24.873 3.328.243.696.505 1.373.798 2.032z"/>
    <circle cx="38" cy="45" r="1" fill="#fff"/>
    <circle cx="34" cy="43" r="1" fill="#fff"/>
    <circle cx="30" cy="44" r="1" fill="#fff"/>
    <circle cx="28" cy="47" r="1" fill="#fff"/>
    <circle cx="41" cy="47" r="1" fill="#fff"/>
    <circle cx="35" cy="51" r="1" fill="#fff"/>
    <circle cx="39" cy="53" r="1" fill="#fff"/>
    <circle cx="42" cy="51" r="1" fill="#fff"/>
  </svg>
);

export const USAFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="4 25 64 46" preserveAspectRatio="xMidYMid slice" className={className}>
    <path fill="#d22f27" d="M68 25H4v46h64V25z"/>
    <path fill="#fff" d="M68 31H4v6h64v-6zm0 12H4v6h64v-6zm0 12H4v6h64v-6z"/>
    <path fill="#0052b4" d="M4 25h32v26H4z"/>
    <circle cx="8" cy="30" r="1" fill="#fff"/>
    <circle cx="16" cy="30" r="1" fill="#fff"/>
    <circle cx="24" cy="30" r="1" fill="#fff"/>
    <circle cx="32" cy="30" r="1" fill="#fff"/>
    <circle cx="12" cy="34" r="1" fill="#fff"/>
    <circle cx="20" cy="34" r="1" fill="#fff"/>
    <circle cx="28" cy="34" r="1" fill="#fff"/>
    <circle cx="8" cy="38" r="1" fill="#fff"/>
    <circle cx="16" cy="38" r="1" fill="#fff"/>
    <circle cx="24" cy="38" r="1" fill="#fff"/>
    <circle cx="32" cy="38" r="1" fill="#fff"/>
    <circle cx="12" cy="42" r="1" fill="#fff"/>
    <circle cx="20" cy="42" r="1" fill="#fff"/>
    <circle cx="28" cy="42" r="1" fill="#fff"/>
    <circle cx="8" cy="46" r="1" fill="#fff"/>
    <circle cx="16" cy="46" r="1" fill="#fff"/>
    <circle cx="24" cy="46" r="1" fill="#fff"/>
    <circle cx="32" cy="46" r="1" fill="#fff"/>
  </svg>
);

export const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

export const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export const IssuerLogo = ({ issuer, className }: { issuer?: string, className?: string }) => {
  if (issuer === 'Alura') return <img src="https://cursos.alura.com.br/assets/images/alura/favicon.ico" alt="Alura" className={className} />;
  if (issuer === 'DIO') return <img src="https://www.dio.me/favicon.png" alt="DIO" className={className} />;
  if (issuer === 'Unimed') return <img src="https://www.unimed.coop.br/base-theme/images/favicon.ico" alt="Unimed" className={className} />;
  if (issuer === 'DataGuvi') return <img src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.dataguvi.com.br/&size=64" alt="DataGuvi" className={className} />;
  if (issuer === 'Prefeitura') return <img src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.tupa.sp.gov.br/&size=64" alt="Prefeitura" className={className} />;
  if (issuer === 'Fatec') return <img src="https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.fatec.edu.br/&size=64" alt="Fatec" className={className} />;
  return <Award className={className} />;
};

import { Award } from "lucide-react";
