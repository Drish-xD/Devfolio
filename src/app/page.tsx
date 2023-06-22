'use client';

import { Loader } from '@components';
import { nextImport } from '@lib/nextImport';
import { useHoverTextAnimation, useSplitTextAnimation } from '@myhooks';
import { Lenis, useLenis } from '@studio-freight/react-lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

// dynamic imports
const { Home, Projects, Skills, About, Contacts } = {
  Home: nextImport('Home'),
  Projects: nextImport('Projects'),
  Skills: nextImport('Skills'),
  About: nextImport('About'),
  Contacts: nextImport('Contacts')
};

export default function Portfolio() {
  // smooth scroll using lenis
  const lenis = useLenis(ScrollTrigger.update);
  useLayoutEffect(() => ScrollTrigger.refresh, [lenis]);
  // section-header animations
  useSplitTextAnimation();
  // text-hover animation
  useHoverTextAnimation('.hover-animation');

  return (
    <>
      <Loader />
      <Lenis
        root
        options={{
          duration: 2,
          smoothWheel: true
        }}
      >
        <main>
          <Home />
          <Projects />
          <Skills />
          <About />
          <Contacts />
        </main>
      </Lenis>
    </>
  );
}
