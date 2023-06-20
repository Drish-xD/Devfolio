import { gsap } from 'gsap';
import { useEffect } from 'react';

const useLoaderAnimation = () => {
  const loader_tl = gsap.timeline();

  useEffect(() => {
    // Overlay Fade Animation
    gsap.to('.loader-overlay', {
      autoAlpha: 0,
      duration: 1.5
    });

    gsap.to('.grid', {
      autoAlpha: 1
    });

    // Wave Letter Animation
    loader_tl
      .from('.grid span', {
        opacity: 1,
        duration: 0.75,
        scale: 0.001,
        rotate: 10,
        yPercent: 40,
        ease: 'power1.inOut',
        delay: 0.5,
        stagger: {
          amount: 2,
          from: 'end',
          grid: [7, 7],
          yoyo: true,
          repeat: 3
        }
      })
      // Loader FadeOut Animation
      .to('.loader', {
        autoAlpha: 0,
        ease: 'none',
        delay: -1.2,
        duration: 2
      })
      .to('.loader', {
        display: 'none'
      });
  }, [loader_tl]);
};

export default useLoaderAnimation;
