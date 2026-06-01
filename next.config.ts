import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Silence the "multiple lockfiles" workspace root warning
  outputFileTracingRoot: path.join(__dirname, '../../'),
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
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // tinacms/dist/client.js imports node:crypto, node:fs, node:os, node:path
      // for server-side caching. Strip the node: prefix so webpack can resolve them,
      // then stub them out in the browser bundle via resolve.fallback.
      config.plugins.push(
        new webpack.NormalModuleReplacementPlugin(/^node:/, (resource: { request: string }) => {
          resource.request = resource.request.replace(/^node:/, '');
        })
      );
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        fs: false,
        os: false,
        path: false,
        buffer: false,
        stream: false,
        util: false,
      };
    }
    return config;
  },
};

export default nextConfig;

