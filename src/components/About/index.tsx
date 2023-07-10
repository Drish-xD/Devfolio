'use client';

import { SectionHeader } from '@components';
import { useAboutAnime } from '@myhooks';
import { ABOUTTEXT } from '@utils/data';

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
      </div>
    </section>
  );
}
