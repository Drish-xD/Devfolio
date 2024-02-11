// import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { LenisInstance } from '@studio-freight/react-lenis/types';
import { gsap } from 'gsap';

export const pageEnter = async () => {
  // Fix these animations
  const transitionElement = document.querySelector('[data-page-transitition]');
  console.log(transitionElement);
  if (!transitionElement) return;

  gsap
    .timeline()
    .fromTo(
      transitionElement?.querySelectorAll('span'),
      { xPercent: 100 },
      { xPercent: 200, duration: 0.8, ease: 'Power4.easeInOut', stagger: -0.1 }
    );
};

export const pageExit = async (href: string, router: AppRouterInstance) => {
  const transitionElement = document.querySelector('[data-page-transitition]');
  if (!transitionElement) return;

  gsap.fromTo(
    transitionElement.querySelectorAll('span'),
    { xPercent: 0 },
    {
      xPercent: 100,
      duration: 0.8,
      ease: 'Power4.easeInOut',
      stagger: 0.1,
      delay: -0.4,
      onComplete: () => {
        router.push(href);
      }
    }
  );
};

export const scrollTo = (lenis: LenisInstance, hash: string) => {
  const target = hash && hash !== '#' ? hash : 0;
  lenis.scrollTo(target, { duration: 2 });
};
