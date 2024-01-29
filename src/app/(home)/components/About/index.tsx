'use client';

import Link from '@/components/Link';
import SectionTitle from '@/components/SectionTitle';
import { ABOUT_TEXT } from '@/constants';

import { useAboutAnimation } from './About.anime';
import styles from './About.module.scss';

export default function About() {
  const aboutRef = useAboutAnimation();

  return (
    <section id="about" className={styles.about}>
      <SectionTitle text="About" num={4} />
      <div ref={aboutRef}>
        <h3>Hi, I&rsquo;m Drish.</h3>
        {ABOUT_TEXT.map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
        <p>
          Here are some
          <Link
            href="https://open.spotify.com/user/9x451ffpyvo2czqnpr6b8kkyp?si=9dbff05426324240"
            as="External"
          >
            playlists
          </Link>
          to get you going.
        </p>
      </div>
    </section>
  );
}
