import Link from '@/components/Link';

import styles from './Footer.module.scss';

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; {YEAR}. All rights reserved.</p>
      <Link href="#">Back to Top ↑</Link>
    </footer>
  );
}
