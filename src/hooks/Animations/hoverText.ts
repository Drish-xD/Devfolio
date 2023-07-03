import { useLayoutEffect, useRef } from 'react';

const HoverTextAnime = () => {
  const linkRef = useRef<HTMLBodyElement>(null);

  useLayoutEffect(() => {
    const links = linkRef.current;

    if (!links) return;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const handleMouseEvent: EventListener = (event) => {
      const target = event.target as HTMLElement;

      let iteration = 0;
      const targetValue = target.getAttribute('data-value') || '';

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

    const elements = links.querySelectorAll('.hover-animation');
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
  }, [linkRef]);
  return linkRef;
};

export default HoverTextAnime;
