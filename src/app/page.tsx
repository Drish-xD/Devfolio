import { Loader } from '@components';
import { nextImport } from '@lib/nextImport';

// dynamic imports
const { Home, Projects, Skills, About, Contacts } = {
  Home: nextImport('Home'),
  Projects: nextImport('Projects'),
  Skills: nextImport('Skills'),
  About: nextImport('About'),
  Contacts: nextImport('Contacts')
};

export default function Portfolio() {
  return (
    <>
      <Loader />
      <main>
        <Home />
        <Projects />
        <Skills />
        <About />
        <Contacts />
      </main>
    </>
  );
}
