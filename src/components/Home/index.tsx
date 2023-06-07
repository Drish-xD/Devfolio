'use client';

import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Home() {
  const tl_3 = gsap.timeline();

  useEffect(() => {
    tl_3.to('.home .word span', {
      duration: 0.7,
      y: 0,
      rotate: 0,
      ease: 'Expo.easeOut',
      stagger: {
        each: 0.15
      },
      delay: 4
    });
  }, []);

  return (
    <section className="home" id="home">
      <div className="home_container">
        <div className="word">
          <span>Front-End</span>
        </div>
        <div className="word">
          <span>Developer</span>
        </div>
        <div className="word">
          <span>portfolio &apos;23</span>
        </div>
      </div>
    </section>
  );
}
