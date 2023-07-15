'use client';

import TransitionContext from '@context/TransitionContext';
import gsap from 'gsap/dist/gsap';
import { usePathname } from 'next/navigation';
import { ReactNode, useContext, useRef } from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';

const TransitionLayout = ({ children }: { children: ReactNode }) => {
  const { toggleCompleted } = useContext(TransitionContext);
  const pathName = usePathname();
  const screenRef = useRef(null);
  const screen = screenRef.current;

  return (
    <>
      <span className="screen" ref={screenRef} />
      <SwitchTransition>
        <Transition
          key={pathName}
          timeout={500}
          onEnter={() => {
            toggleCompleted(false);
            gsap.set(screen!, { yPercent: -100 });

            gsap
              .timeline({
                paused: true
              })
              .to(screen!, { yPercent: 0, duration: 5 })
              .to(screen!, {
                onComplete: () => toggleCompleted(true)
              })
              .play();
          }}
          onExit={() => {
            gsap
              .timeline({ paused: true })
              .to(screen!, { yPercent: 100, duration: 5 })
              .to(screen!, { autoAlpha: 0 })
              .play();
          }}
        >
          {children}
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default TransitionLayout;
