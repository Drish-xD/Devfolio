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
    domains: ['www.drishxd.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        port: '',
        pathname: '/secure.notion-static.com/**'
      }
    ]
  }
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
