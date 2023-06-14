import { About, Contacts, Home, Loader, Navbar, Projects, Skills } from '@components';

export default function Portfolio() {
  return (
    <>
      <Loader />
      <Navbar />
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
