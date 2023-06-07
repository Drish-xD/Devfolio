import { Blob } from '@components';
import '@styles/global.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Drish | Portfolio',
  description: 'Drish'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Blob />
        {children}
      </body>
    </html>
  );
}
