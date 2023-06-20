import { useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { useEffect } from 'react';

const useNavbarAnimation = (): {
  openMenu: () => void;
  closeMenu: () => void;
} => {
  const nav_tl = gsap.timeline({ paused: true });
  const lenis = useLenis();

  useEffect(() => {
    nav_tl
      .to('.nav-container', {
        top: 0,
        ease: 'Expo.easeInOut',
        duration: 0.8
      })
      .to('.menu h2 span', {
        duration: 0.4,
        y: 0,
        rotate: 0,
        ease: 'Circ.easeOut',
        stagger: {
          each: 0.1
        }
      });
  }, [nav_tl]);

  const closeMenu = () => {
    nav_tl.timeScale(1.5).reverse();
    lenis.start();
  };

  const openMenu = () => {
    nav_tl.timeScale(1).play();
    lenis.stop();
  };

  return { closeMenu, openMenu };
};

export default useNavbarAnimation;
