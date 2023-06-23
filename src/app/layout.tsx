import { jetBrain, offBit } from '@fonts/font';
import { nextImport } from '@lib/nextImport';
import '@styles/global.scss';
import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

const Blob = nextImport('Blob');
const Navbar = nextImport('Navbar');

export const metadata = {
  title: 'Drish | Portfolio',
  description: 'Drish'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetBrain.variable} ${offBit.variable}`}>
      <body>
        <Blob />
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
