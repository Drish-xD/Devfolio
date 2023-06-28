import { jetBrain, offBit } from '@fonts/font';
import { nextImport } from '@lib/nextImport';
import '@styles/global.scss';
import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

const { Blob, Navbar, Footer } = {
  Blob: nextImport('Blob'),
  Navbar: nextImport('Navbar'),
  Footer: nextImport('Footer')
};

export const metadata = {
  title: 'Drish | Portfolio',
  description: 'Drish'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetBrain.variable} ${offBit.variable}`}>
      <body>
        <Navbar />
        {children}
        <Blob />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
