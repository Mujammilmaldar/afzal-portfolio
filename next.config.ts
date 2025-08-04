import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
  images: {
    domains: ['afzaldigital.com', 'assets.tina.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'afzaldigital.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
