import { NextResponse } from "next/server";

const URLS: Record<string, string> = {
  "meu-inss": "https://meu.inss.gov.br/",
  "meu-sus": "https://conectesus.saude.gov.br/",
  "govbr": "https://www.gov.br/",
  "ecac": "https://cav.receita.fazenda.gov.br/",
  "ctps": "https://servicos.mte.gov.br/",
  "cnh": "https://portalservicos.senatran.serpro.gov.br/",
  "esocial": "https://login.esocial.gov.br/",
  "sougov": "https://sougov.economia.gov.br/",
  "enem": "https://enem.inep.gov.br/participante/"
};

export const dynamic = 'force-dynamic';

export async function GET() {
  const promises = Object.entries(URLS).map(async ([id, url]) => {
    const start = Date.now();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout

      const res = await fetch(url, {
        method: "HEAD", // Light request
        signal: controller.signal,
        headers: {
          "User-Agent": "GovStatus-Monitor/1.0"
        },
        cache: "no-store"
      });
      
      clearTimeout(timeoutId);
      const end = Date.now();
      const responseTime = end - start;

      let status = "operational";
      if (!res.ok) {
        // Some gov sites return 403 for automated scripts, 
        // we can count 403 as operational if it just blocked us, but generally anything >= 500 is outage
        if (res.status >= 500) {
          status = "outage";
        } else if (responseTime > 1000) {
          status = "degraded";
        }
      } else if (responseTime > 1500) {
        status = "degraded";
      }

      return {
        id,
        status,
        responseTime
      };
    } catch (error: any) {
      const end = Date.now();
      const responseTime = end - start;
      // AbortError indicates a timeout
      if (error.name === 'AbortError') {
        return {
          id,
          status: "outage",
          responseTime: 3000
        };
      }
      return {
        id,
        status: "outage",
        responseTime: responseTime
      };
    }
  });

  const results = await Promise.allSettled(promises);
  const data = results.map(r => r.status === 'fulfilled' ? r.value : null).filter(Boolean);

  return NextResponse.json(data);
}
