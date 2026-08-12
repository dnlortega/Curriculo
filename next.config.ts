import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite acesso de outros IPs locais no modo dev (como testes via celular ou emulators)
  allowedDevOrigins: ["192.168.1.10", "localhost"],
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
