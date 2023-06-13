import { Blob } from '@components';
import { jetBrain, offBit } from '@fonts/font';
import '@styles/global.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Drish | Portfolio',
  description: 'Drish'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jetBrain.variable} ${offBit.variable}`}>
      <body>
        <Blob />
        {children}
      </body>
    </html>
  );
}
