import { Metadata } from 'next';

/*!***************!*/
/*!   MetaData    !*/
/*!***************!*/

export const METADATA: Metadata = {
  title: {
    default: 'Drish | Portfolio',
    template: ' %s - Drish | Portfolio'
  },
  description:
    "Hi, I 'm Drish, a front-end developer, CSS Enthusiast, and Open-Sourcerer from India. \
    Let's bring your vision to life through seamless coding and captivating designs.",
  category: 'Portfolio',
  metadataBase: new URL('https://drishxd.dev'),
  creator: 'Drish',
  authors: { name: 'Drish', url: 'https://drishxd.dev' },
  icons: '/images/icon.png',
  alternates: { canonical: '/' },
  keywords: [
    'Portfolio',
    'Drish',
    'DrishxD',
    'Drish-xD',
    'Drish Portfolio',
    'Drish.xD',
    'Website',
    'Gsap',
    'SRM',
    'Front-end',
    'Developer',
    'NextJs',
    'Next.js',
    'India',
    'freelancer'
  ],
  openGraph: {
    type: 'website',
    countryName: 'India',
    emails: 'drish.xd@gmail.com',
    title: 'Drish | Portfolio',
    url: 'https://drishxd.dev',
    description:
      "Hi, I 'm Drish, a front-end developer, CSS Enthusiast, and Open-Sourcerer from India. \
    Let's bring your vision to life through seamless coding and captivating designs.",
    images: '/images/screenshot.webp'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drish | Portfolio',
    description:
      "Hi, I 'm Drish, a front-end developer, CSS Enthusiast, and Open-Sourcerer from India. \
    Let's bring your vision to life through seamless coding and captivating designs.",
    creator: '@Drish-xD',
    images: '/images/screenshot.webp',
    site: 'https://drishxd.dev'
  },
  robots: 'index, follow',
  referrer: 'origin-when-cross-origin'
};
