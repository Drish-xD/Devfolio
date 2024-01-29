import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const fontMain = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-main',
  fallback: ['system-ui', 'monospace'],
  display: 'swap'
});

export const fontSec = localFont({
  src: './fonts/OffBit.woff2',
  variable: '--font-sec',
  fallback: ['system-ui', 'monospace'],
  display: 'swap'
});
