'use client';

import { useHoverAnime, useNavAnime } from '@myhooks';
import { NAVLINKS } from '@utils/data';
import Link from 'next/link';

export default function Navbar() {
  const { navbarRef, closeMenu, openMenu } = useNavAnime();
  const ref = useHoverAnime();

  return (
    <header ref={ref}>
      <div className="fixed-header">
        <span>♠</span>
        <span data-hover="Menu" onClick={openMenu}>
          Menu
        </span>
      </div>

      <section ref={navbarRef}>
        <div className="fixed-header">
          <span>♠</span>
          <span data-hover="Close" onClick={closeMenu}>
            Close
          </span>
        </div>
        <nav>
          {NAVLINKS.map((link, i) => (
            <h2 key={link}>
              <Link data-hover={link} href={`/#${link}`} onClick={closeMenu}>
                {link}
              </Link>
              <span>{`(0${i + 1})`}</span>
            </h2>
          ))}
        </nav>
      </section>
    </header>
  );
}
