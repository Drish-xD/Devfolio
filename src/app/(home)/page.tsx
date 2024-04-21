import Loader from '@/components/Loader';
import Toast from '@/components/Toast';

import About from './components/About';
import Contacts from './components/Contacts';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function Portfolio() {
  return (
    <main>
      <Loader />
      <Landing />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Toast />
    </main>
  );
}

export const dynamic = 'force-static';
