import { useMemo, useRef } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

export const useToastAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: ref, dependencies: [ref] });

  const tween = useMemo(() => {
    if (!ref.current) {
      return null;
    }
    const toastTween = contextSafe(() =>
      gsap
        .fromTo(
          ref.current,
          { autoAlpha: 0, yPercent: 200 },
          { autoAlpha: 1, yPercent: 0, duration: 0.5, delay: 1 }
        )
        .pause()
    )();

    return toastTween;
  }, [ref.current]);

  if (tween) {
    return {
      tween,
      ref,
      hideToast: () => tween?.reverse(),
      showToast: () => tween?.play()
    };
  } else {
    return { ref };
  }
};
