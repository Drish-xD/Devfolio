import Script from 'next/script';

import Loader from '@/components/Loader';
import Toast from '@/components/Toast';
import { HOME_SCHEMA } from '@/constants';
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
      <Script
        id='structured-schema'
        type='application/ld+json'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{ __html: HOME_SCHEMA }}
      />
    </main>
  );
}

export const dynamic = 'force-static';
