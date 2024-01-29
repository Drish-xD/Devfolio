'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, Ref } from 'react';

import { useLenis } from '@studio-freight/react-lenis';

import { useHoverAnimation } from '@/hooks/useHoverAnimation';

// import { pageExit } from '@/utils/PageTransition';

interface NavigationLinkProps {
  children: ReactNode | string;
  href: string;
  as: 'Hash' | 'External' | 'Page';
  animate?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function NavigationLink({
  href,
  children,
  as,
  className,
  animate = true,
  onClick
}: NavigationLinkProps) {
  const router = useRouter();
  const ref = useHoverAnimation();
  const lenis = useLenis();

  const dataHoverProps = animate && typeof children === 'string' ? { 'data-hover': children } : {};

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (as === 'Hash') {
      const sanitizedHref = href.split('#').pop();
      const target = sanitizedHref ? `#${sanitizedHref}` : 0;
      lenis.scrollTo(target, { duration: 2 });
    } else {
      //TODO: add pageExit animation
      // pageExit(href, router);
    }
  };

  if (as === 'External') {
    return (
      <Link
        href={href}
        className={className}
        target="_blank"
        ref={ref as Ref<HTMLAnchorElement>}
        {...dataHoverProps}
      >
        {children}
      </Link>
    );
  }

  if (as === 'Hash') {
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={className}
        ref={ref as Ref<HTMLAnchorElement>}
        {...dataHoverProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={className}
      onClick={handleClick}
      ref={ref as Ref<HTMLButtonElement>}
      {...dataHoverProps}
    >
      {children}
    </button>
  );
}
