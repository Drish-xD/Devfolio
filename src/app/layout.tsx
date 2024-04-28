import dynamic from 'next/dynamic';
import { JetBrains_Mono } from 'next/font/google';
import { ReactNode } from 'react';

import { GoogleTagManager } from '@next/third-parties/google';

import { Blob, Noise } from '@/components/layout/Blob';
import { METADATA, VIEW_PORT } from '@/constants';
import { SmoothScroll, Transition } from '@/providers';
import '@/styles/global.scss';

const fontMain = JetBrains_Mono({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-main',
  fallback: ['system-ui', 'monospace'],
  display: 'swap'
});

const Header = dynamic(() => import('@/components/layout/Header'));
const Footer = dynamic(() => import('@/components/layout/Footer'));
const WebVitals = dynamic(() => import('@/components/WebVitals'));

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className={fontMain.className}>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Transition>
            <Header />
            {children}
            <Footer />
            <Blob />
            <Noise />
          </Transition>
        </SmoothScroll>
        <WebVitals />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
    </html>
  );
}

export const metadata = METADATA;
export const viewport = VIEW_PORT;
