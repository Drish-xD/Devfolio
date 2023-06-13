'use client';

import { gsap } from 'gsap';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Navbar() {
  const links = ['home', 'about', 'skills', 'projects', 'contacts'];

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

  return (
    <header>
      <div className="menu-open" onClick={() => tl_2.reversed(!tl_2.reversed())}>
        Menu
      </div>

      <div className="nav-container">
        <div className="menu-close" onClick={() => tl_2.reversed(!tl_2.reversed())}>
          Close
        </div>
        <nav className="menu">
          {links.map((link) => (
            <h2 key={link}>
              <span>
                <Link href={`/#${link}`} onClick={() => tl_2.reversed(!tl_2.reversed())}>
                  {link}
                </Link>
              </span>
            </h2>
          ))}
        </nav>
      </div>
    </header>
  );
}
