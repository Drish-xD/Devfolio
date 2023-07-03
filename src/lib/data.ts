import { Metadata } from 'next';

export const METADATA: Metadata = {
  title: 'Drish | Portfolio',
  description: 'Drish',
  alternates: { canonical: 'https://portfolio-drish-xd.vercel.app/' },
  authors: { name: 'Drish', url: 'https://portfolio-drish-xd.vercel.app/' },
  category: 'Portfolio',
  colorScheme: 'dark',
  creator: 'Drish',
  icons: '',
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
    'Developer'
  ],
  openGraph: {
    type: 'website',
    countryName: 'India',
    emails: 'drish.xd@gmail.com',
    title: 'Drish | Portfolio',
    url: '',
    description: 'Drish',
    images: ''
  },
  publisher: 'Drish',
  manifest: '',
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: 'Drish | Portfolio',
    description: '',
    siteId: '',
    creator: '@Drish-xD'
  },
  referrer: 'origin'
};

export const NAVLINKS = ['home', 'about', 'skills', 'projects', 'contacts'];

export const PROJECTSJSON = [
  {
    id: 1,
    name: 'Zapkart',
    image: 'Zapkart/master/public/images/Screenshot.png',
    github: 'https://github.com/Drish-xD/Zapkart',
    live: 'https://zapkart-ecom.netlify.app/',
    tags: ['ReactJs', 'Material UI', 'Commerce.js']
  },
  {
    id: 2,
    name: 'Mark-it',
    image: 'Zapkart/master/public/images/Screenshot.png',
    github: 'https://github.com/Drish-xD/Mark-it',
    live: '',
    tags: ['React Native', 'Expo', 'Paper']
  },
  {
    id: 3,
    name: 'Fitcel',
    image: 'Zapkart/master/public/images/Screenshot.png',
    github: 'https://github.com/orgs/Fitcel/repositories',
    live: '',
    tags: ['Flutter', 'Firebase', 'Health']
  }
];

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

export const ABOUTTEXT =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sapiente illo ab \
          eveniet? Alias voluptas est minima officia illum eos, ad minus mollitia ipsa natus. \
          Praesentium quis eveniet eaque aliquam omnis ullam nostrum adipisci quas obcaecati \
          eligendi totam delectus suscipit, eos nobis labore dolores! Ad, voluptates. Illum esse \
          amet modi, dolores iusto voluptatum cumque incidunt aliquid, quia perspiciatis tenetur \
          exercitationem adipisci deleniti vero natus architecto nam possimus qui mollitia? Fugit \
          maxime inventore saepe odit, perspiciatis in fuga sunt dignissimos possimus!';

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
