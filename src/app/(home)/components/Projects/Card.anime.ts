import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export const useCardsAnimation = () => {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const projects = projectsRef.current;

      // OnScroll animation
      projects.forEach((project) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: project,
              start: '0 bottom',
              end: '100% center',
              toggleActions: 'restart none none reset',
              markers: true
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
              ease: 'Power4.in'
            }
          )
          .to(project.querySelectorAll('.overlay_project span'), {
            xPercent: -100,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2
          });
      });

      const hoverCard = (project: HTMLDivElement, cardInfo: Element) => {
        const hovertl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: cardInfo,
            start: 'top bottom',
            end: 'top center-=100',
            toggleActions: 'restart none none reset'
          }
        });
        hovertl
          .to(cardInfo, {
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            duration: 0.2
          })
          .to(
            cardInfo.querySelector('h3')!.children,
            {
              y: 0,
              rotate: 0,
              stagger: 0.025,
              duration: 0.4,
              ease: 'back.out(2)'
            },
            0
          )
          .fromTo(
            cardInfo.querySelector('div')!.children,
            {
              scale: 0
            },
            {
              scale: 1,
              stagger: 0.025,
              duration: 0.5,
              ease: 'back.out(2)'
            },
            0
          )
          .fromTo(
            project.querySelector('a'),
            {
              scale: 0
            },
            {
              scale: 1,
              duration: 0.5,
              ease: 'back.out(2)'
            },
            0
          )
          .to(
            project.querySelector('a'),
            {
              rotate: 365,
              duration: 1,
              ease: 'back.inOut(3)'
            },
            0
          );

        matchMedia('(max-width: 1024px)').matches
          ? hovertl.scrollTrigger?.enable()
          : hovertl.scrollTrigger?.disable();

        const circleLink = project.querySelector('a');

        circleLink?.addEventListener('mouseenter', () => {
          gsap.to(circleLink, {
            scale: 0.9,
            duration: 0.4
          });
        });

        circleLink?.addEventListener('mouseleave', () => {
          gsap.to(circleLink, {
            scale: 1,
            duration: 0.4
          });
        });

        project.addEventListener('mouseenter', () => {
          hovertl.play();
        });

        project.addEventListener('mouseleave', () => {
          hovertl.reverse();
        });
      };

      projects.forEach((project: HTMLDivElement) => {
        const cardInfo = project.querySelector('hgroup');
        hoverCard(project, cardInfo!);
      });
    },
    { scope: projectsRef }
  );

  return projectsRef;
};
