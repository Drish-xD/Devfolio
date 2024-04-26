import lazyLoad from 'next/dynamic';

import Loader from '@/components/Loader';
import { getContent } from '@/utils/contentful';

import About from './components/About';
import Contacts from './components/Contacts';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Toast = lazyLoad(() => import('@/components/Toast'), { ssr: false });

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
