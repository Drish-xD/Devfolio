'use client';

import { SectionHeader } from '@components';
import { useAboutAnime } from '@myhooks';
import { ABOUTTEXT } from '@utils/data';
import Link from 'next/link';

export default function About() {
  const aboutRef = useAboutAnime();

  return (
    <section className="global-section" id="about">
      <SectionHeader text="About" num={4} />
      <div className="about-container" ref={aboutRef}>
        <h3>Hi, I&rsquo;m Drish.</h3>
        {ABOUTTEXT.map((text: string, i: number) => (
          <p key={i}>{text}</p>
        ))}
        <p>
          Here are some
          <Link
            href="https://open.spotify.com/user/9x451ffpyvo2czqnpr6b8kkyp?si=9dbff05426324240"
            target="_blank"
            data-hover="playlists"
          >
            playlists
          </Link>
          to get you going.
        </p>
      </div>
    </section>
  );
}
