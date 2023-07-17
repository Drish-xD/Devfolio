import { Loader } from '@components';
import { nextImport } from '@utils/nextImport';

// dynamic imports
const { Home, Projects, About, Contacts, Skills, Toast } = {
  Home: nextImport('Home'),
  Projects: nextImport('Projects'),
  Skills: nextImport('Skills'),
  About: nextImport('About'),
  Contacts: nextImport('Contacts'),
  Toast: nextImport('Toast')
};

export default function Portfolio() {
  return (
    <main>
      <Loader />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contacts />
      <Toast />
    </main>
  );
}
