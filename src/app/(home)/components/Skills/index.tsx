'use client';

import { useLayoutEffect, useState } from 'react';

import SectionTitle from '@/components/SectionTitle';
import { SKILLS } from '@/constants';

import Marquee from './Marquee';

const COLUMN_SIZE = 5;

export default function Skills() {
  const [skills2D, setSkills2D] = useState<string[][]>([]);

  useLayoutEffect(() => {
    // Create the 2D random list of skills
    const shuffledSkills = [...SKILLS].sort(() => Math.random() - 0.5);

    const updatedSkills2D: string[][] = Array.from(
      { length: Math.ceil(shuffledSkills.length / COLUMN_SIZE) },
      (_, i) => shuffledSkills.slice(i * COLUMN_SIZE, (i + 1) * COLUMN_SIZE)
    );

    setSkills2D(updatedSkills2D);
  }, []);

  console.log(skills2D);

  return (
    <section id="skills">
      <div className="global-section">
        <SectionTitle text="Skills" num={3} />
      </div>
      <div className="skill-container">
        <Marquee skills={skills2D} />
      </div>
    </section>
  );
}
