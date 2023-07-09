'use client';

import { useEffect, useRef, useState } from 'react';

export default function Toast({
  text = 'For the better experience, use desktop.'
}: {
  text?: string;
}) {
  const [mounted, setMounted] = useState(true);
  const toastRef = useRef<HTMLDivElement>(null);
  const [winWidth, setWinWidth] = useState(0);

  const hideToast = () => {
    import('@utils/gsap').then(({ gsap }) => {
      gsap.to(toastRef.current!, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setMounted(false);
        }
      });
    });
  };

  useEffect(() => {
    setWinWidth(window.innerWidth);

    const timer = setTimeout(() => {
      hideToast();
    }, 15000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!mounted || winWidth > 768) {
    return null;
  }

  return (
    <div className="toast" ref={toastRef} onClick={hideToast}>
      <p>{text}</p>
      <span>×</span>
    </div>
  );
}
