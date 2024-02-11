'use client';

import styles from './SectionTitle.module.scss';
import { useTitleAnimation } from './Title.anime';

export default function SectionHeader({ text, num }: { text: string; num?: number }) {
  const ref = useTitleAnimation();

  return (
    <hgroup className={styles.title} ref={ref}>
      <h2>
        {Array.from(text).map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h2>
      {num && <sub>({String(num).padStart(2, '0')})</sub>}
    </hgroup>
  );
}
