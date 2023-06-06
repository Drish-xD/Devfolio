/**
 * @type {import('next').NextConfig}
 */

const path = require('path');

const nextConfig = {
  trailingSlash: true,
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
};

module.exports = nextConfig;
