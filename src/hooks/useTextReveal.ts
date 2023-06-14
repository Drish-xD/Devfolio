import { MouseEvent, useEffect, useRef } from 'react';

const useTextReveal = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);

  const handleAnimation = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const targetValue = target.innerHTML;

    let iteration = 0;

    clearInterval(intervalRef.current!);

    intervalRef.current = setInterval(() => {
      target.innerText = target.innerText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return targetValue[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');

      if (iteration >= targetValue.length) {
        clearInterval(intervalRef.current!);
      }

      iteration += 1 / 3;
    }, 40);
  };

  return handleAnimation;
};

export default useTextReveal;
