import { useLayoutEffect, useRef } from 'react';

export const useHoverAnime = () => {
  const bodyRef = useRef<HTMLBodyElement>(null);

  useLayoutEffect(() => {
    const body = bodyRef.current;

    if (!body) return;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const handleMouseEvent: EventListener = (event) => {
      const target = event.target as HTMLElement;

      let iteration = 0;
      const targetValue = target.getAttribute('data-hover') || '';

      const interval = setInterval(() => {
        target.innerText = targetValue
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return targetValue[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');

        if (iteration >= targetValue.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const elements = body.querySelectorAll('[data-hover]');
    elements.forEach((element) => {
      element.addEventListener('mouseover', handleMouseEvent);
      element.addEventListener('mouseleave', handleMouseEvent);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseover', handleMouseEvent);
        element.removeEventListener('mouseleave', handleMouseEvent);
      });
    };
  }, [bodyRef]);
  return bodyRef;
};
