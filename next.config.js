// @ts-check
 
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'placehold.co',
      }, 
      {
        hostname: 'localhost',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: false,
  output: 'export',
  distDir: 'out',
  trailingSlash: true
}

module.exports = nextConfig;
