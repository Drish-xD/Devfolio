import { Loader } from '@components';
import { nextImport } from '@utils/nextImport';

// dynamic imports
const { Home, Projects, About, Contacts, Skills } = {
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
