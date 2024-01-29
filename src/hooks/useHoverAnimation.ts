import { Ref, useEffect, useRef } from 'react';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DELAY = 30;
const ITERATION = 1 / 3;

export const useHoverAnimation = <T extends HTMLElement = HTMLElement>(): Ref<T> => {
  const ref = useRef<T>(null);

  const isPhoneDevice = () => window.innerWidth <= 768;

  useEffect(() => {
    const targetElement = ref.current;

    if (!targetElement || isPhoneDevice()) return;

    let animationFrameId: number;
    let timeoutId: NodeJS.Timeout;

    const handleHoverEvent: EventListener = (event) => {
      const target = event.target as HTMLElement;
      const targetValue = target.getAttribute('data-hover') || '';
      let iteration = 0;

      const animate = () => {
        target.innerText = targetValue
          .split('')
          .map((letter, index) =>
            index < iteration ? letter : LETTERS[Math.floor(Math.random() * 26)]
          )
          .join('');

        iteration += ITERATION;

        if (iteration < targetValue.length) {
          timeoutId = setTimeout(() => {
            animationFrameId = requestAnimationFrame(animate);
          }, DELAY);
        }
      };
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
      animationFrameId = requestAnimationFrame(animate);
    };

    const applyHoverEffect = (element: HTMLElement) => {
      element.addEventListener('mouseover', handleHoverEvent);
      element.addEventListener('mouseleave', handleHoverEvent);
    };

    if (targetElement.getAttribute('data-hover')) {
      applyHoverEffect(targetElement);
    } else {
      const elements = targetElement.querySelectorAll('[data-hover]');
      elements.forEach((element) => applyHoverEffect(element as HTMLElement));
    }

    return () => {
      const cleanupHoverEffect = (element: HTMLElement) => {
        element.removeEventListener('mouseover', handleHoverEvent);
        element.removeEventListener('mouseleave', handleHoverEvent);
      };

      if (targetElement.getAttribute('data-hover')) {
        cleanupHoverEffect(targetElement);
      } else {
        const elements = targetElement.querySelectorAll('[data-hover]');
        elements.forEach((element) => cleanupHoverEffect(element as HTMLElement));
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [ref]);

  return ref;
};
