import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite acesso de outros IPs locais no modo dev (como testes via celular ou emulators)
  allowedDevOrigins: ["192.168.1.10", "localhost"],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "logo.clearbit.com" },
      { protocol: "https", hostname: "ui-avatars.com" },
      { protocol: "https", hostname: "api.microlink.io" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
};

export default nextConfig;
