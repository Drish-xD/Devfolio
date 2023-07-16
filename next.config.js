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
    domains: ['www.drishxd.dev']
  }
};

module.exports = nextConfig;
