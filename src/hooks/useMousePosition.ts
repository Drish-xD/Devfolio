import { useEffect, useState } from 'react';

import { type MousePosition } from '@/types';

export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    const halfWindowWidth = window.innerWidth / 2;
    const halfWindowHeight = window.innerHeight / 2;

    const updateMousePosition = throttle((event: MouseEvent | TouchEvent) => {
      let x: number, y: number;

      if ('touches' in event) {
        const touch = (event as TouchEvent).touches[0];
        x = touch.clientX - halfWindowWidth;
        y = touch.clientY - halfWindowHeight;
      } else {
        x = event.clientX - halfWindowWidth;
        y = event.clientY - halfWindowHeight;
      }

      setMousePosition({ x, y });
    }, 200);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const throttle = <T, F extends (...args: any[]) => any>(
  func: (this: T, ...args: Parameters<F>) => ReturnType<F>,
  limit: number
): ((this: T, ...args: Parameters<F>) => void) => {
  let inThrottle: boolean;
  return function (this: T, ...args: Parameters<F>) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
