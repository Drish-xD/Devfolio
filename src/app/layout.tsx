import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

import { SmoothScroll } from '@/providers';
import '@/styles/global.scss';
import { fontMain, fontSec } from '@/utils/fonts';

const Header = dynamic(() => import('@/components/layout/Header'));
const Footer = dynamic(() => import('@/components/layout/Footer'));
const Blob = dynamic(() => import('@/components/layout/Blob'));
const Noise = dynamic(() => import('@/components/layout/Blob/Noise'));

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontMain.variable} ${fontSec.variable}`}>
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <Blob />
          <Noise />
        </SmoothScroll>
      </body>
    </html>
  );
}

// export const metadata = METADATA;
