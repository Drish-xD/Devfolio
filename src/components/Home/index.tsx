'use client';

import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Home() {
  const tl_3 = gsap.timeline();

  useEffect(() => {
    // tl_3.to('.home .line-wrap', {
    //   duration: 0.7,
    //   y: 0,
    //   rotate: 0,
    //   ease: 'Expo.easeOut',
    //   stagger: {
    //     each: 0.15
    //   },
    //   delay: 4
    // });
  }, [tl_3]);

  return (
    <section className="home" id="home">
      <div className="home_container">
        <div className="line-wrap one">
          <span>♠</span>
          <h1>I Design</h1>
        </div>
        <div className="line-wrap two">
          <h1>Experiences</h1>
        </div>
        <div className="line-wrap mobile">
          <span>that</span>
          <h1>Captivate</h1>
        </div>
        <div className="line-wrap three">
          <span>that</span>
          <h1>Captivate</h1>
          <p className="intro-line">
            Hi, I'm a front-end developer, blending artistry & <br />
            technology to deliver stunning online journeys.
          </p>
        </div>
      </div>
    </section>
  );
}
