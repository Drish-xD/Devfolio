'use client';

import { memo } from 'react';

import Link from '@/components/Link';
import SectionTitle from '@/components/SectionTitle';

import { useAboutAnimation } from './About.anime';
import styles from './About.module.scss';

const About = memo(function About({ about, spotify }: { about: string[]; spotify: string }) {
  const aboutRef = useAboutAnimation();

  return (
    <section id='about'>
      <SectionTitle text='About' num={4} />
      <div ref={aboutRef} className={styles.about}>
        <h3>Hi, I&rsquo;m Drish.</h3>
        {about.map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
        <p>
          Here are some
          <Link href={spotify} target='_blank'>
            playlists
          </Link>
          to get you going.
        </p>
      </div>
    </section>
  );
});

export default About;
