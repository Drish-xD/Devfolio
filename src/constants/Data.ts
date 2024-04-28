// /*!*******************!*/
// /*!   Navbar Links    !*/
// /*!*******************!*/

export const NAV_LINKS = [
  {
    label: 'Home',
    value: '/#home'
  },
  {
    label: 'Projects',
    value: '/#projects'
  },
  {
    label: 'Skills',
    value: '/#skills'
  },
  {
    label: 'About',
    value: '/#about'
  },
  {
    label: 'Contacts',
    value: '/#contacts'
  }
];

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://drishxd.dev';
export const isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === 'prod';
