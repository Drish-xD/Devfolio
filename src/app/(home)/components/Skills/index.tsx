import { memo } from 'react';

import SectionTitle from '@/components/SectionTitle';
import { SKILLS } from '@/constants';

import Marquee from './Marquee';

const Skills = memo(function Skills() {
  return (
    <section id="skills">
      <SectionTitle text="Skills" num={3} />
      <Marquee skills={create3dArray(SKILLS, 6)} />
    </section>
  );
});

const create3dArray = (array: string[], size: number): string[][] =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  );

export default Skills;
