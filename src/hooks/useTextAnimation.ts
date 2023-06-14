import { useEffect } from 'react';

const useTextAnimation = (selector: string) => {
  useEffect(() => {
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

    const elements = document.querySelectorAll<HTMLElement>(selector);
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEvent);
      element.addEventListener('mouseout', handleMouseEvent);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEvent);
        element.removeEventListener('mouseout', handleMouseEvent);
      });
    };
  }, [selector]);
};

export default useTextAnimation;
