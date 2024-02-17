'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentProps, MouseEvent } from 'react';

import { useLenis } from '@studio-freight/react-lenis';
import { UrlObject } from 'url';

import { useHoverAnimation } from '@/hooks/useHoverAnimation';
import { useTransition } from '@/providers';
import { scrollTo } from '@/utils/scrollTo';

interface NavigationLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  animate?: boolean;
  href: string | UrlObject;
}

export default function NavigationLink({
  href,
  children,
  target,
  className,
  animate = true,
  onClick
}: NavigationLinkProps) {
  const { pageExit } = useTransition();
  const pathname = usePathname();
  const ref = useHoverAnimation<HTMLAnchorElement>();
  const lenis = useLenis();

  const dataHoverProps = animate && typeof children === 'string' ? { 'data-hover': children } : {};

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const hrefString = href.toString();
    const [hrefPath, hash] = hrefString.split('#');
    if (onClick) {
      onClick(e);
    }

    if (hrefPath && hrefPath !== pathname) {
      e.preventDefault();
      pageExit(hrefString);
    }

    if ((!hrefPath || hrefPath === pathname) && hrefString.includes('#')) {
      scrollTo(lenis, `#${hash}`);
    }
  };

  return (
    <Link
      href={href}
      className={className}
      target={target}
      {...(!target && { onClick: handleClick })}
      ref={ref}
      {...dataHoverProps}
    >
      {children}
    </Link>
  );
}
