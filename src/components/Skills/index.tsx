'use client';

import { SectionHeader } from '@components';
import { skills } from '@lib/data';
import { useLayoutEffect, useState } from 'react';

import Marquee from './marquee';

const COLUMN_SIZE = 5;

export default function Skills() {
  const [skills2D, setSkills2D] = useState<string[][]>([]);

  useLayoutEffect(() => {
    // Create the 2D random list of skills
    const shuffledSkills = [...skills].sort(() => Math.random() - 0.5);

    const updatedSkills2D: string[][] = Array.from(
      { length: Math.ceil(shuffledSkills.length / COLUMN_SIZE) },
      (_, i) => shuffledSkills.slice(i * COLUMN_SIZE, (i + 1) * COLUMN_SIZE)
    );

    setSkills2D(updatedSkills2D);
  }, []);

  return (
    <section id="skills">
      <div className="global-section">
        <SectionHeader text="Skills" num={3} />
      </div>
      <div className="skill-container">
        <Marquee skills={skills2D} />
      </div>
    </section>
  );
}
