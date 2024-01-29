'use client';

import { useEffect, useRef, useState } from 'react';

import { gsap } from 'gsap';

export default function Toast({ text = 'Available for Freelance Work' }: { text?: string }) {
  const [isCopied, setCopied] = useState<boolean>(false);
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

  const copyToClipBoard = () => {
    navigator.clipboard.writeText('hey@drishxd.dev');
    setCopied(true);
    setTimeout(hideToast, 5000);
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
      <p onClick={copyToClipBoard}>{isCopied ? 'Email Copied' : text}</p>
      <span onClick={hideToast}>×</span>
    </div>
  );
}
