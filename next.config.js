/**
 * @type {import('next').NextConfig}
 */

const path = require('path');

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['raw.githubusercontent.com']
  }
};

module.exports = nextConfig;
