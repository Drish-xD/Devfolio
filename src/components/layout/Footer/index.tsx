import { memo } from 'react';

import Link from '@/components/Link';

import styles from './Footer.module.scss';

const YEAR = new Date().getFullYear();

const Footer = memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; {YEAR}. All rights reserved.</p>
      <Link href="#">Back to Top ↑</Link>
    </footer>
  );
});

export default Footer;
