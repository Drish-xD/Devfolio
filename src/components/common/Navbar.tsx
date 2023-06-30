'use client';

import { NAVLINKS } from '@lib/data';
import { useNavAnimation } from '@myhooks';
import Link from 'next/link';

export default function Navbar() {
  const { navbarRef, closeMenu, openMenu } = useNavAnimation();

  return (
    <header>
      <div className="fixed-header">
        <div className="spade">♠</div>
        <div className="hover-animation menu-open" data-value="Menu" onClick={openMenu}>
          Menu
        </div>
      </div>

      <div className="nav-container" ref={navbarRef}>
        <div className="fixed-header">
          <span></span>
          <div data-value="Close" className="hover-animation menu-close" onClick={closeMenu}>
            Close
          </div>
        </div>
        <nav className="menu">
          {NAVLINKS.map((link, i) => (
            <h2 key={link}>
              <Link
                className="hover-animation"
                data-value={link}
                href={`/#${link}`}
                onClick={closeMenu}
              >
                {link}
              </Link>
              <span>{`(0${i + 1})`}</span>
            </h2>
          ))}
        </nav>
      </div>
    </header>
  );
}
