'use client';

import gsap from 'gsap';
import { Fragment, useEffect } from 'react';

export default function Loader() {
  const tl = gsap.timeline();

  useEffect(() => {
    // Overlay Fade Animation
    gsap.to('.loader-overlay', {
      autoAlpha: 0,
      duration: 1.5
    });

    // Wave Letter Animation
    tl.from('.grid span', {
      duration: 0.75,
      scale: 0.001,
      rotate: 10,
      yPercent: 40,
      ease: 'power1.inOut',
      delay: 0.5,
      stagger: {
        amount: 2,
        // from: 'right',
        grid: [7, 7],
        yoyo: true,
        repeat: 3
      }
    });

    // Loader FadeOut Animation
    tl.to('.loader', {
      opacity: 0,
      ease: 'none',
      delay: -1.5,
      duration: 2
    });

    tl.to('.loader', {
      autoAlpha: 0,
      duration: 0.25
    });

    tl.from('body', {
      overflow: 'hidden',
      delay: -0.75
    });
  }, [tl]);
  return (
    <section className="loader">
      <div className="loader-overlay"></div>
      <div className="grid">
        {/* Repeat the word 7 times */}
        {[...Array(7)].map((_, i) => (
          <Fragment key={i}>
            <span>B</span>
            <span>O</span>
            <span>N</span>
            <span>J</span>
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
