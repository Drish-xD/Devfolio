import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const SplitTextAnime = (): void => {
  const sectionHeaders = useRef<NodeListOf<Element> | null>(null);

  useLayoutEffect(() => {
    sectionHeaders.current = document.querySelectorAll('.section-header');

    sectionHeaders.current.forEach((header) => {
      // copy text and clear div
      const text = header.textContent?.trim() || '';
      header.textContent = '';

      const createdElements: (HTMLHeadingElement | HTMLSpanElement)[] = [];

      // split text for h2 and span
      const characters = Array.from(text);
      const h2Text = characters.slice(0, -4);
      const spanText = characters.slice(-4).join('');

      // Create and append h2 elements
      for (const char of h2Text) {
        const h2Node = document.createElement('h2');
        h2Node.textContent = char;
        createdElements.push(h2Node);
        header.appendChild(h2Node);
      }

      // Create and append span element
      const spanElement = document.createElement('span');
      spanElement.textContent = spanText;
      createdElements.push(spanElement);
      header.appendChild(spanElement);

      // Animation
      gsap.context(() => {
        gsap.from(createdElements, {
          y: '100%',
          ease: 'power3.out',
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: header,
            scrub: true
          }
        });
      }, createdElements);
    });
  }, []);
};

export default SplitTextAnime;
