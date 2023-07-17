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
  colorScheme: 'dark',
  themeColor: 'black',
  metadataBase: new URL('https://www.drishxd.dev'),
  creator: 'Drish',
  authors: { name: 'Drish', url: 'https://www.drishxd.dev' },
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
    url: '/',
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
    site: 'https://www.drishxd.dev'
  },
  robots: 'index, follow',
  referrer: 'origin-when-cross-origin'
};

/*!*******************!*/
/*!   Navbar Links    !*/
/*!*******************!*/

export const NAVLINKS = ['home', 'projects', 'skills', 'about', 'contacts'];

/*!************!*/
/*!   Skill    !*/
/*!************!*/

export const SKILLS = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Dart',
  'SCSS',
  'React.js',
  'Redux',
  'Next.js',
  'Gatsby',
  'GSAP',
  'Vue.js',
  'Flutter',
  'Native',
  'Node.js',
  'Flask',
  'MySQL',
  'MongoDB',
  'Firebase',
  'AppWrite',
  'Supabase'
];

/*!************!*/
/*!   About    !*/
/*!************!*/

export const ABOUTTEXT = [
  'A friendly front-end developer, CSS Enthusiast, and Open-Sourcerer. I bring technical expertise \
  and creative flair to every project. With a focus on crafting captivating and user-friendly websites, \
  I collaborate with clients from diverse industries.',

  'Driven by a constant desire to learn and improve, I stay up to date with the latest trends and \
  technologies in the ever-evolving world of front-end development. From mastering HTML, CSS, and \
  JavaScript to leveraging frameworks like React and Vue.js, I am always excited to explore new tools \
  and techniques that can enhance the overall user experience.',

  "I'm a curious person, who's passionate about coding, nature, cats, and music. I love to stare at \
  a not-so-bright screen while coding on a constant state of flow. "
];

/*!***************!*/
/*!   Contacts    !*/
/*!***************!*/

export const CONTACTLINKS = {
  mail: [
    {
      name: 'Drish.xD@gmail.com',
      link: 'mailto:Drish.xD@gmail.com'
    }
  ],
  socials: [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/drish-xd/'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/Drish_xD/'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/drish_xd/'
    }
  ],
  development: [
    {
      name: 'Github',
      link: 'https://github.com/Drish-xD/'
    },
    {
      name: 'Codepen',
      link: 'https://codepen.io/drish-xd'
    }
  ]
};
