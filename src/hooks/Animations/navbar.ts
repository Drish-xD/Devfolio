import { useLenis } from '@studio-freight/react-lenis';
import { gsap } from 'gsap';
import { RefObject, useLayoutEffect, useRef } from 'react';

const NavbarAnime = (): {
  openMenu: () => void;
  closeMenu: () => void;
  navbarRef: RefObject<HTMLDivElement>;
} => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const nav_tl = gsap.timeline({ paused: true });
  const lenis = useLenis();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      nav_tl
        .to(navbarRef.current, {
          top: 0,
          ease: 'Expo.easeInOut',
          duration: 0.8
        })
        .to(
          '.menu h2 a',
          {
            duration: 0.4,
            y: 0,
            rotate: 0,
            stagger: 0.1,
            ease: 'back.out(2)'
          },
          1
        )
        .fromTo(
          '.menu h2 span',
          { scale: 0 },
          {
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'back.out(2)'
          },
          1
        );
    }, navbarRef);

    return () => ctx.revert();
  }, [nav_tl]);

  const closeMenu = () => {
    nav_tl.timeScale(1.5).reverse();
    lenis.start();
  };

  const openMenu = () => {
    nav_tl.timeScale(1).play();
    lenis.stop();
  };

  return { closeMenu, openMenu, navbarRef };
};

export default NavbarAnime;
