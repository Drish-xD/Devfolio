'use client';

import { memo } from 'react';

import { useMarqueeAnimation } from './Marquee.anime';
import styles from './Skills.module.scss';

const Marquee = memo(function Marquee({ skills }: { skills: string[][] }) {
  const ref = useMarqueeAnimation();

  return (
    <div className={styles.marquee} ref={ref}>
      {skills.map((skillsRow, i) => (
        <h3 key={i} aria-hidden='true'>
          <SkillRow row={skillsRow} />
        </h3>
      ))}
    </div>
  );
});

const SkillRow = memo(function SkillRow({ row }: { row: string[] }) {
  return [...row, ...row].map((skill, index) => <span key={index}>{skill}</span>);
});

export default Marquee;
