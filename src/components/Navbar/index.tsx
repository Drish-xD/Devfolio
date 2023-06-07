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
        <svg viewBox="0 0 512 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      <div className="nav-container">
        <div className="menu-close" onClick={() => tl_2.reversed(!tl_2.reversed())}>
          <svg viewBox="0 0 350 512">
            <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
          </svg>
        </div>
        {/* Navbar menu */}
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
