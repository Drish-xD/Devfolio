import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';

export const useNavAnimation = () => {
  const navRef = useRef<HTMLElement>(null);
  const nav_tl = useRef<gsap.core.Timeline>();
  const lenis = useLenis();

  useGSAP(
    () => {
      const navbar = navRef.current;
      nav_tl.current = gsap
        .timeline({ paused: true })
        .to(navbar, { y: 0 }, 0)
        .fromTo(
          '.overlay_header span',
          { yPercent: -100 },
          { yPercent: 0, ease: 'Expo.easeInOut', duration: 0.8, stagger: 0.2 },
          0
        )
        .fromTo('#fixed_nav', { opacity: 0 }, { opacity: 1 }, 1)
        .fromTo(
          'li a',
          { yPercent: 110, rotate: 5 },
          { yPercent: 0, rotate: 0, stagger: 0.1, duration: 0.4, ease: 'back.out(2)' },
          1
        )
        .fromTo(
          'li span',
          { scale: 0 },
          { scale: 1, stagger: 0.1, duration: 0.4, ease: 'back.out(2)' },
          1
        );
    },
    { scope: navRef }
  );

  const { contextSafe } = useGSAP({ scope: navRef });

  const closeMenu = contextSafe(() => {
    nav_tl.current!.timeScale(1.5).reverse();
    lenis.start();
  });

  const openMenu = contextSafe(() => {
    nav_tl.current!.timeScale(1).play();
    lenis.stop();
  });

  return { closeMenu, openMenu, navRef };
};
