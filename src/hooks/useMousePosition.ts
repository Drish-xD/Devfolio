import { useEffect, useState } from 'react';

import { type MousePosition } from '@/types';

/**
 * Custom hook to find the position of the cusror or touch
 */
export const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: undefined,
    y: undefined
  });

  useEffect(() => {
    const { innerHeight, innerWidth } = window;

    const updateMousePosition = throttle((event: MouseEvent | TouchEvent) => {
      let x: number, y: number;

      if ('touches' in event) {
        const { clientX, clientY } = (event as TouchEvent).touches[0];
        x = calcPosition(clientX, innerWidth);
        y = calcPosition(clientY, innerHeight);
      } else {
        x = calcPosition(event.clientX, innerWidth);
        y = calcPosition(event.clientY, innerHeight);
      }

      setMousePosition({ x, y });
    }, 120);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

/**
 * Function to add some debounce for tracking mouse position
 */
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

/**
 * Function to calculate the position of mouse
 */
const calcPosition = (value: number, total: number) => value - total / 2;
