import { GoogleTag, LenisWrapper } from '@components';
import { jetBrain, offBit } from '@fonts/font';
import { METADATA } from '@lib/data';
import { nextImport } from '@lib/nextImport';
import '@styles/global.scss';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

// dynamic imports
const { Blob, Navbar, Footer } = {
  Blob: nextImport('Blob'),
  Navbar: nextImport('Navbar'),
  Footer: nextImport('Footer')
};

// meta data
export const metadata = METADATA;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetBrain.variable} ${offBit.variable}`}>
      <GoogleTag />
      <LenisWrapper>
        <Navbar />
        {children}
        <Blob />
        <Footer />
        <VercelAnalytics />
      </LenisWrapper>
    </html>
  );
}
