import { Metadata } from 'next';

const title = {
  default: 'Drish | Portfolio',
  template: ' %s - Drish | Portfolio'
};

const description =
  "Hi, I 'm Drish, a front-end developer. I specialize in creating responsive, efficient web solutions. My work emphasizes clean design, usability, and modern web technologies, aiming to deliver optimal user experiences. Explore how strategic design and development converge in my projects.";

const images = '/images/screenshot.webp';

const url = 'https://drishxd.dev';

/**
 * Default Metadata for the website
 */
export const METADATA: Metadata = {
  title,
  description,
  category: 'Portfolio',
  metadataBase: new URL(url),
  creator: 'Drish',
  authors: { name: 'Drish', url },
  icons: '/images/icon.png',
  alternates: { canonical: '/' },
  generator: 'Next.js',
  keywords: [
    'Front-End Development',
    'Responsive Web Design',
    'Next.js Development',
    'GSAP Animation',
    'Web Performance',
    'User Experience Design',
    'Professional Web Developer',
    'Software Engineering',
    'Creative Coding',
    'Portfolio',
    'Drish',
    'DrishxD',
    'Drish-xD',
    'Drish',
    'Freelancer'
  ],
  openGraph: {
    type: 'website',
    countryName: 'India',
    emails: 'hey@drishxd.dev',
    title,
    description,
    images
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Drish-xD',
    site: url,
    title,
    description,
    images
  },
  robots: 'index, follow',
  referrer: 'origin-when-cross-origin'
};
