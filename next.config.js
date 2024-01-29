/**
 * @type {import('next').NextConfig}
 */
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@/base'] = path.resolve(__dirname, 'src/styles/base');
    return config;
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.drishxd.dev' },
      { protocol: 'https', hostname: 'images.ctfassets.net' }
    ]
  }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withMDX = require('@next/mdx')();

module.exports = withBundleAnalyzer(withMDX(nextConfig));
