import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const CardsAnime = () => {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const projects = projectsRef.current;

    const animateProjects = (projects: HTMLDivElement[]) => {
      projects.forEach((project) => {
        gsap.context(() => {
          gsap.fromTo(
            project,
            { y: '80%' },
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
        }, project);

        projects.forEach((project: HTMLDivElement) => {
          const cardImage = project.querySelector('.card-image');
          cardImage!.addEventListener('mouseenter', () => {
            gsap.to(cardImage, {
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

          cardImage!.addEventListener('mouseleave', () => {
            gsap.to(cardImage, {
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

export default CardsAnime;
