import { useEffect, useRef } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

export const useToastAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const toastTween = useRef<gsap.core.Tween>();

  const { contextSafe } = useGSAP({ scope: ref });

  useEffect(() => {
    toastTween.current = contextSafe(() =>
      gsap
        .fromTo(
          ref.current,
          { autoAlpha: 0, yPercent: 200 },
          { autoAlpha: 1, yPercent: 0, duration: 0.5, delay: 1 }
        )
        .pause()
    )();
  }, []);

  return {
    ref,
    hideToast: () => toastTween.current?.reverse(),
    showToast: () => toastTween.current?.play()
  };
};
