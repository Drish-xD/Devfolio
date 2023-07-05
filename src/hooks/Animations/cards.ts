import { gsap } from '@utils/gsap';
import { useEffect, useRef } from 'react';

export const useCardsAnime = () => {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const projects = projectsRef.current;

    const animateProjects = (projects: HTMLDivElement[]) => {
      projects.forEach((project) => {
        gsap.context(() => {
          const tl = gsap.timeline({
            paused: true,
            delay: 0.1,
            scrollTrigger: {
              trigger: project,
              start: 'top bottom',
              end: 'top center-=100',
              toggleActions: 'restart none none reset'
            }
          });
          tl.fromTo(
            project,
            {
              scale: 0.8
            },
            {
              scale: 1,
              duration: 0.5,
              ease: 'Power4.inOut'
            }
          ).fromTo(
            project.querySelector('.card-cover span'),
            {
              x: 0
            },
            {
              x: '-100%',
              duration: 0.75,
              ease: 'power3.in'
            },
            0
          );
        }, project);
      });
    };
    animateProjects(projects);

    const hoverCard = (project: HTMLDivElement, cardInfo: Element) => {
      const hovertl = gsap.timeline({ paused: true });
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
          cardInfo.querySelector('.tags')!.children,
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
          project.querySelector('.link'),
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
          project.querySelector('.link'),
          {
            rotate: 365,
            duration: 1,
            ease: 'back.inOut(3)'
          },
          0
        );

      const circleLink = project.querySelector('.link');

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
      const cardInfo = project.querySelector('.card-info');
      hoverCard(project, cardInfo!);
    });
  }, []);

  return projectsRef;
};
