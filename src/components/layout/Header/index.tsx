'use client';

import { memo } from 'react';

import Link from '@/components/Link';
import Overlay from '@/components/Overlay';
import { NAV_LINKS } from '@/constants';
import { useHoverAnimation } from '@/hooks/useHoverAnimation';

import { useNavAnimation } from './Header.anime';
import styles from './Header.module.scss';

const Header = memo(function Header() {
  const { navRef, openMenu, closeMenu } = useNavAnimation();

  return (
    <header className={styles.header}>
      <FixedNav label='Menu' onClick={openMenu} />

      <section ref={navRef}>
        <Overlay count={4} id='header' className={styles.overlay} />
        <FixedNav label='Close' onClick={closeMenu} />
        <NavLinks onClick={closeMenu} />
      </section>
    </header>
  );
});

const FixedNav = memo(function FixedNav({
  label,
  onClick
}: {
  label: string;
  onClick: () => void;
}) {
  const ref = useHoverAnimation<HTMLDivElement>();
  return (
    <div className={styles.fixed_nav} id='fixed_nav' ref={ref}>
      <Link disableHover href='/' onClick={label === 'Close' ? onClick : () => {}}>
        ♠
      </Link>
      <div data-hover={label} onClick={onClick}>
        {label}
      </div>
    </div>
  );
});

const NavLinks = memo(function NavLinks({ onClick }: { onClick: () => void }) {
  return (
    <nav>
      <ul>
        {NAV_LINKS.map(({ label, value, ...rest }, i) => (
          <li key={label}>
            <Link href={value} onClick={onClick} {...rest}>
              {label}
            </Link>
            <span>({String(i + 1).padStart(2, '0')})</span>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default Header;
