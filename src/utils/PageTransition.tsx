import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import { LenisInstance } from '@studio-freight/react-lenis/types';
import { gsap } from 'gsap';

export const pageEnter = async () => {
  const transitionElement = document.getElementById('overlay_page');

  if (!transitionElement) return;
  gsap.timeline().fromTo(
    transitionElement?.querySelectorAll('span'),
    { xPercent: 100 },
    {
      xPercent: 200,
      duration: 0.8,
      stagger: 0.1,
      ease: 'Power4.easeInOut'
    }
  );
};

export const pageExit = async (href: string, router: AppRouterInstance) => {
  const transitionElement = document.getElementById('overlay_page');

  if (!transitionElement) return;

  gsap.fromTo(
    transitionElement.querySelectorAll('span'),
    { xPercent: 0 },
    {
      xPercent: 100,
      duration: 0.8,
      stagger: 0.1,
      ease: 'Power4.easeInOut',
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
