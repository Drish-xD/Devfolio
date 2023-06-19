import { gsap } from 'gsap';
import { useEffect } from 'react';

const useNavbarAnimation = (): {
  openMenu: () => void;
  closeMenu: () => void;
} => {
  const tl_2 = gsap.timeline({ paused: true });

  useEffect(() => {
    tl_2
      .to('body', {
        overflow: 'hidden'
      })
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
  }, []);

  const closeMenu = () => {
    tl_2.timeScale(1.5).reverse();
  };

  const openMenu = () => {
    tl_2.timeScale(1).play();
  };

  return { closeMenu, openMenu };
};

export default useNavbarAnimation;
