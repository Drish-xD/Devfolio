/**
 * @type {import('next').NextConfig}
 */

const path = require('path');

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['www.drishxd.dev', 'images.ctfassets.net']
  },
  experimental: {
    nextScriptWorkers: true
  }
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withMDX = require('@next/mdx')();
module.exports = withBundleAnalyzer(withMDX(nextConfig));
