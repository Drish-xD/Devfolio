'use client';

import useNavbarAnimation from '@hooks/useNavAnimation';
import useTextAnimation from '@hooks/useTextAnimation';
import Link from 'next/link';

export default function Navbar() {
  const { closeMenu, openMenu } = useNavbarAnimation();
  useTextAnimation('.hover-animation');

  const links = ['home', 'about', 'skills', 'projects', 'contacts'];

  return (
    <header>
      <div className="fixed-header">
        <div className="spade">♠</div>
        <div className="hover-animation menu-open" data-value="Menu" onClick={openMenu}>
          Menu
        </div>
      </div>

      <div className="nav-container">
        <div className="fixed-header">
          <span></span>
          <div data-value="Close" className="hover-animation menu-close" onClick={closeMenu}>
            Close
          </div>
        </div>
        <nav className="menu">
          {links.map((link) => (
            <h2 key={link}>
              <span>
                <Link
                  className="hover-animation"
                  data-value={link}
                  href={`/#${link}`}
                  onClick={closeMenu}
                >
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
