'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, createContext, useContext, useState } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { TransitionContextProps } from '@/types';

const TransitionContext = createContext<TransitionContextProps | null>(null);

export const Transition = ({ children }: { children: ReactNode }) => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const { contextSafe } = useGSAP();

  const pageEnter = contextSafe(async () => {
    const transitionElement = document.getElementById('overlay_page');
    if (!transitionElement || !isPending) return;

    gsap.timeline().fromTo(
      transitionElement?.querySelectorAll('span'),
      { xPercent: 100 },
      {
        xPercent: 200,
        duration: 0.8,
        stagger: 0.1,
        ease: 'Power4.easeInOut',
        onComplete: () => setIsPending(false)
      }
    );
  });

  const pageExit = contextSafe(async (href: string) => {
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
        onStart: () => setIsPending(true),
        onComplete: () => router.push(href, { scroll: false })
      }
    );
  });

  return (
    <TransitionContext.Provider
      value={{
        isPending,
        pageEnter,
        pageExit
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a Provider');
  }

  return context;
}
