import { GoogleTag, LenisWrapper } from '@components';
import { jetBrain, offBit } from '@fonts';
import '@styles/global.scss';
import { METADATA } from '@utils/data';
import { nextImport } from '@utils/nextImport';
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
