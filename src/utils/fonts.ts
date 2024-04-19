import { JetBrains_Mono } from 'next/font/google';

export const fontMain = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-main',
  fallback: ['system-ui', 'monospace'],
  display: 'swap'
});
