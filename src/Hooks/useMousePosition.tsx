import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

const useMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent | TouchEvent) => {
      let x: number, y: number;

      if ('touches' in ev) {
        const touch = (ev as TouchEvent).touches[0];
        [x, y] = [touch.clientX, touch.clientY];
      } else {
        [x, y] = [(ev as MouseEvent).clientX, (ev as MouseEvent).clientY];
      }

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
