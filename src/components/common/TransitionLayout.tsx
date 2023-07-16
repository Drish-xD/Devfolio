'use client';

import TransitionContext from '@context/TransitionContext';
import gsap from 'gsap/dist/gsap';
import { usePathname } from 'next/navigation';
import { ReactNode, useContext, useRef } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';

const TransitionLayout = ({ children }: { children: ReactNode }) => {
  const { toggleCompleted } = useContext(TransitionContext);
  const pathName = usePathname();
  const screenRef = useRef<HTMLDivElement>(null);

  const screen = screenRef.current!;

  const pageExit = async () => {
    toggleCompleted(false);
    gsap.fromTo(
      screen.querySelectorAll('span'),
      {
        xPercent: 0
      },
      {
        xPercent: 100,
        duration: 0.8,
        ease: 'Power4.easeInOut',
        stagger: 0.1,
        delay: -0.4
      }
    );
  };

  const pageEnter = async () => {
    gsap.timeline().fromTo(
      screen.querySelectorAll('span'),
      {
        xPercent: 100
      },
      {
        xPercent: 200,
        duration: 0.8,
        ease: 'Power4.easeInOut',
        stagger: -0.1,
        onComplete: () => toggleCompleted(true)
      }
    );
  };

  return (
    <>
      <section className="screen" ref={screenRef}>
        <span />
        <span />
        <span />
        <span />
      </section>
      <SwitchTransition>
        <Transition
          key={pathName}
          nodeRef={screenRef}
          timeout={1000}
          onEnter={pageEnter}
          onExit={pageExit}
        >
          {children}
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default TransitionLayout;
