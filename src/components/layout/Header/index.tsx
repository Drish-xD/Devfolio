'use client';

import NextLink from 'next/link';

import Link from '@/components/Link';
import { NAV_LINKS } from '@/constants';
import { useHoverAnimation } from '@/hooks/useHoverAnimation';

import { useNavAnimation } from './header.anime';
import styles from './header.module.scss';

export default function Header() {
  const { navRef, openMenu, closeMenu } = useNavAnimation();

  return (
    <header className={styles.header}>
      <FixedNav label="Menu" onClick={openMenu} />

      <section ref={navRef}>
        <Overlay />
        <FixedNav label="Close" onClick={closeMenu} />
        <NavLinks onClick={closeMenu} />
      </section>
    </header>
  );
}

const Overlay = () => {
  return (
    <div className={`${styles.overlay} overlay`}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

const FixedNav = ({ label, onClick }: { label: string; onClick: () => void }) => {
  const ref = useHoverAnimation<HTMLDivElement>();
  return (
    <div className={styles.fixed_nav} id="fixed_nav" ref={ref}>
      <NextLink href="/" onClick={label === 'Close' ? onClick : () => {}}>
        ♠
      </NextLink>
      <div data-hover={label} onClick={onClick}>
        {label}
      </div>
    </div>
  );
};

const NavLinks = ({ onClick }: { onClick: () => void }) => {
  return (
    <nav>
      {NAV_LINKS.map(({ label, value }, i) => (
        <h2 key={label}>
          <Link href={value} onClick={onClick} as="Hash">
            {label}
          </Link>
          <span>({String(i + 1).padStart(2, '0')})</span>
        </h2>
      ))}
    </nav>
  );
};
