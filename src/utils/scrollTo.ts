import { LenisInstance } from '@studio-freight/react-lenis/types';

export const scrollTo = (lenis: LenisInstance, hash: string) => {
  const target = hash && hash !== '#' ? hash : 0;
  lenis.scrollTo(target, { duration: 2 });
};
