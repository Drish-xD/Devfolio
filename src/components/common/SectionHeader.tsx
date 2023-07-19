'use client';

import { useTitleAnime } from '@myhooks';

export default function SectionHeader({
  text,
  num,
  trigger = true
}: {
  text: string;
  num?: number;
  trigger?: boolean;
}) {
  const ref = useTitleAnime(trigger);

  return (
    <div ref={ref} className="section-header">
      {Array.from(text).map((letter: string, i: number) => (
        <h2 key={i}>{letter}</h2>
      ))}
      {num && <span>{`(0${num})`}</span>}
    </div>
  );
}
