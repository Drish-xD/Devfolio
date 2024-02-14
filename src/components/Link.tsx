'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HTMLAttributeAnchorTarget, MouseEvent, ReactNode } from 'react';

import { useLenis } from '@studio-freight/react-lenis';

import { useHoverAnimation } from '@/hooks/useHoverAnimation';
import { pageExit, scrollTo } from '@/utils/PageTransition';

interface NavigationLinkProps {
  children?: ReactNode | string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  animate?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function NavigationLink({
  href,
  children,
  target,
  className,
  animate = true,
  onClick
}: NavigationLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useHoverAnimation<HTMLAnchorElement>();
  const lenis = useLenis();

  const dataHoverProps = animate && typeof children === 'string' ? { 'data-hover': children } : {};

  const handleClick = (e: MouseEvent) => {
    const [hrefPath, hash] = href.split('#');
    if (onClick) {
      onClick();
    }

    if (hrefPath && hrefPath !== pathname) {
      e.preventDefault();
      pageExit(href, router);
    }

    if ((!hrefPath || hrefPath === pathname) && href.includes('#')) {
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
