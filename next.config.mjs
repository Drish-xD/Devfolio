// @ts-check
import Analyzer from '@next/bundle-analyzer';
import MDX from '@next/mdx';
import withPlaiceholder from '@plaiceholder/next';
import path from 'path';

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias['@/base'] = path.resolve(process.cwd(), 'src/styles/base');
    return config;
  },
  images: {
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
    path: process.env.NODE_ENV_,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.drishxd.dev' },
      { protocol: 'https', hostname: 'images.ctfassets.net' }
    ]
  }
};

const withBundleAnalyzer = Analyzer({ enabled: process.env.ANALYZE === 'true' });

const withMDX = MDX();

export default withBundleAnalyzer(withMDX(withPlaiceholder(nextConfig)));
