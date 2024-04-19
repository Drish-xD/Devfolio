import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import { GoogleTagManager } from '@next/third-parties/google';

import WebVitals from '@/components/WebVitals';
import { METADATA } from '@/constants';
import { SmoothScroll, Transition } from '@/providers';
import '@/styles/global.scss';
import { fontMain } from '@/utils/fonts';

const Header = dynamic(() => import('@/components/layout/Header'));
const Footer = dynamic(() => import('@/components/layout/Footer'));
const Blob = dynamic(() => import('@/components/layout/Blob'));
const Noise = dynamic(() => import('@/components/layout/Blob/Noise'));

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontMain.variable}`}>
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
