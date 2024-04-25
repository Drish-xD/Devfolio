import { memo } from 'react';

import SectionTitle from '@/components/SectionTitle';

import Marquee from './Marquee';

const Skills = memo(function Skills({ skills }: { skills: string[] }) {
  return (
    <section id="skills">
      <SectionTitle text="Skills" num={3} />
      <Marquee skills={create3dArray(skills, 6)} />
    </section>
  );
});

const create3dArray = (array: string[], size: number): string[][] =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  );

export default Skills;
