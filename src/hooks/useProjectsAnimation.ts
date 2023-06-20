import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useProjectAnimation = () => {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const projects = projectsRef.current;

    const animateProjects = (projects: HTMLDivElement[]) => {
      projects.forEach((project) => {
        gsap.fromTo(
          project,
          { y: 200 },
          {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'Power4.inOut',
            scrollTrigger: {
              trigger: project,
              start: 'top bottom',
              end: 'top center-=100',
              scrub: true
            }
          }
        );

        projects.forEach((project: HTMLDivElement) => {
          project.addEventListener('mouseenter', () => {
            gsap.to(project, {
              scale: 0.95,
              duration: 0.8,
              ease: 'power3.out'
            });
            gsap.to(project.querySelector('img'), {
              scale: 1.1,
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

            gsap.to(project.querySelector('img'), {
              scale: 1,
              duration: 0.8,
              ease: 'power3.out'
            });
          });
        });
      });
    };
    animateProjects(projects);
  }, []);

  return projectsRef;
};
