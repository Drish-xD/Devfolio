import { useRef } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

export const useCardsAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const project = ref.current;

      if (!project) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: project,
            start: 'top 90%',
            end: 'bottom center',
            toggleActions: 'restart none none reverse'
          }
        })
        .fromTo(
          project,
          {
            scale: 0.8
          },
          {
            scale: 1,
            duration: 0.6,
            ease: 'power4.in'
          }
        )
        .to('#overlay_project span', {
          xPercent: -100,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2
        })
        .to('#overlay_project', {
          display: 'none'
        });

      const hoverCard = contextSafe!(() => {
        const timeline = gsap
          .timeline({
            paused: true,
            scrollTrigger: {
              trigger: 'hgroup',
              start: 'top bottom',
              end: 'top center-=100',
              toggleActions: 'restart none none reverse'
            }
          })
          .to('hgroup', {
            background: 'linear-gradient(#00000000 0%, #000000b3 50%, #000000 100%)',
            duration: 0.2
          })
          .from(
            'h3 span',
            {
              yPercent: 100,
              rotate: 25,
              stagger: 0.025,
              duration: 0.4,
              ease: 'back.out(2)'
            },
            0
          )
          .from(
            'ul li',
            {
              scale: 0,
              stagger: 0.025,
              duration: 0.5,
              ease: 'back.out(2)'
            },
            0
          )
          .to(
            'a',
            {
              scale: 1,
              duration: 0.5,
              ease: 'back.out(2)'
            },
            0
          )
          .from(
            'a span',
            {
              rotate: 365,
              duration: 1,
              ease: 'back.inOut(3)'
            },
            0
          );

        matchMedia('(max-width: 1024px)').matches
          ? timeline.delay(1.5).scrollTrigger?.enable()
          : timeline.scrollTrigger?.disable();

        const tween = gsap
          .to('a', {
            scale: 0.9,
            duration: 0.2
          })
          .pause();

        return { timeline, tween };
      });

      const { timeline, tween } = hoverCard();

      project.addEventListener('mouseenter', () => timeline.play());
      project.addEventListener('mouseleave', () => timeline.reverse());

      const link = project.querySelector('a');
      link?.addEventListener('mouseenter', () => tween.play());
      link?.addEventListener('mouseleave', () => tween.reverse());

      return () => {
        project.removeEventListener('mouseenter', () => timeline.play());
        project.removeEventListener('mouseleave', () => timeline.reverse());

        link?.removeEventListener('mouseenter', () => tween.play());
        link?.removeEventListener('mouseleave', () => tween.reverse());
      };
    },

    { scope: ref }
  );

  return ref;
};
