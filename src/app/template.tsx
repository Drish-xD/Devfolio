'use client';

import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  // useEffect(() => {
  //   pageEnter();
  // }, []);

  return (
    <>
      {children}
      <section className="screen" data-page-transitition>
        <span />
        <span />
        <span />
        <span />
      </section>
    </>
  );
}
