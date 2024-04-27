import Loader from '@/components/Loader';
import Toast from '@/components/Toast';
import { getContent } from '@/utils/contentful';

import About from './components/About';
import Contacts from './components/Contacts';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default async function Portfolio() {
  const content = await getContent();

  return (
    <main>
      <Loader />
      <Landing />
      <Projects />
      <Skills skills={content?.skills || []} />
      <About about={content?.about || []} spotify={content?.otherLinks.spotify || ''} />
      <Contacts contacts={content?.contactLinks || {}} />
      <Toast />
    </main>
  );
}

export const dynamic = 'force-static';
