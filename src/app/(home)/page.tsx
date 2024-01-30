import dynamic from 'next/dynamic';

import Landing from './components/Landing';
import Skills from './components/Skills';

const About = dynamic(() => import('./components/About'));
// const Projects = dynamic(() => import('./components/Projects'));
// const Skills = dynamic(() => import('./components/Skills'));
const Contacts = dynamic(() => import('./components/Contacts'));
// const Toast = dynamic(() => import('@/components/Toast'));

export default function Portfolio() {
  return (
    <main>
      {/* <Loader /> */}
      <Landing />
      {/* <Projects /> */}
      <Skills />
      <About />
      <Contacts />
      {/* <Toast /> */}
    </main>
  );
}
