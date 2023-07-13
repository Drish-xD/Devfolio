'use client';

import { gsap } from '@utils/gsap';
import { useEffect, useRef } from 'react';

export default function Toast({ text = 'Available for Freelance Work' }: { text?: string }) {
  const toastRef = useRef<HTMLDivElement>(null);

  const showToast = () => {
    gsap.to(toastRef.current!, {
      opacity: 1,
      duration: 0.5
    });
  };

  const hideToast = () => {
    gsap.to(toastRef.current!, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        toastRef.current!.remove();
      }
    });
  };

  useEffect(() => {
    const showTimer = setTimeout(showToast, 4500);
    const hideTimer = setTimeout(hideToast, 25000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="toast" ref={toastRef}>
      <p>{text}</p>
      <span onClick={hideToast}>×</span>
    </div>
  );
}
