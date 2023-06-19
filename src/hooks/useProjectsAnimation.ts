import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useProjectAnimation = (duration: number) => {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const projects = projectsRef.current;

    const animateProjects = (projects: HTMLDivElement[], dur: number) => {
      projects.forEach((project) => {
        gsap.fromTo(
          project,
          {
            opacity: 0,
            y: 100
          },
          {
            y: -50,
            duration: dur,
            ease: 'none',
            scrollTrigger: {
              trigger: project,
              start: 'top bottom',
              end: 'top center',
              toggleActions: 'restart none none reset',
              scrub: true,
              onEnter: () => gsap.to(project, { opacity: 1 }),
              onLeaveBack: () => gsap.to(project, { opacity: 0 })
            }
          }
        );

        project.addEventListener('mouseenter', () => {
          gsap.to(project, {
            scale: 0.95,
            duration: 0.8,
            ease: 'power3.out'
          });
        });

        project.addEventListener('mouseleave', () => {
          gsap.to(project, {
            scale: 1,
            duration: 0.8,
            ease: 'power3.out'
          });
        });

        project.addEventListener('mouseenter', () => {
          gsap.to(project.querySelector('img'), {
            scale: 1.1,
            duration: 0.8,
            ease: 'power3.out'
          });
        });

        project.addEventListener('mouseleave', () => {
          gsap.to(project.querySelector('img'), {
            scale: 1,
            duration: 0.8,
            ease: 'power3.out'
          });
        });
      });
    };

    animateProjects(projects, duration);
  }, []);

  return projectsRef;
};
