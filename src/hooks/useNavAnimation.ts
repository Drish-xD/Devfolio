import { gsap } from 'gsap';
import { useEffect } from 'react';

const useNavbarAnimation = (): {
  toggleMenu: () => void;
} => {
  const tl_2 = gsap.timeline({ paused: true });

  useEffect(() => {
    tl_2
      .to('body', {
        overflow: 'hidden',
        delay: -1,
        duration: 0
      })
      .to('.nav-container', {
        top: 0,
        ease: 'Expo.easeInOut',
        duration: 0.8,
        delay: -1
      })
      .to('.menu h2 span', {
        duration: 0.5,
        y: 0,
        rotate: 0,
        ease: 'Circ.easeOut',
        stagger: {
          each: 0.1
        }
      })
      .reverse();
  }, [tl_2]);

  const toggleMenu = () => {
    tl_2.reversed(!tl_2.reversed());
  };

  return { toggleMenu };
};

export default useNavbarAnimation;
