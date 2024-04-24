import { Metadata } from 'next';

import { APP_URL } from './Data';

const title = {
  default: 'Drish | Portfolio',
  template: ' %s - Drish | Portfolio'
};

const description =
  "Hi, I 'm Drish, a front-end developer. I specialize in creating responsive, efficient web solutions. My work emphasizes clean design, usability, and modern web technologies, aiming to deliver optimal user experiences. Explore how strategic design and development converge in my projects.";

const images = '/images/thumbnail.webp';

/**
 * Default Metadata for the website
 */
export const METADATA: Metadata = {
  metadataBase: new URL(APP_URL),
  title,
  description,
  icons: [{ rel: 'icon', url: '/images/favicon.ico', type: 'image/x-icon' }],
  alternates: { canonical: '/' },
  keywords: [
    'Front-End',
    'Portfolio',
    'Drish',
    'DrishxD',
    'Drish-xD',
    'Web Design',
    'Development',
    'Next.js',
    'GSAP Animation',
    'Web Performance',
    'Web Developer',
    'Software Engineering',
    'Creative Coding',
    'Freelancer'
  ],
  openGraph: {
    type: 'website',
    countryName: 'India',
    title,
    description,
    images
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Drish-xD',
    site: APP_URL,
    title,
    description,
    images
  },
  category: 'Portfolio',
  creator: 'Drish',
  authors: { name: 'Drish', url: APP_URL },
  robots: 'index, follow',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js'
};
