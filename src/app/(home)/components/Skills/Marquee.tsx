import { useMarqueeAnime } from '@/hooks';

export default function Marquee({ skills }: { skills: string[][] }) {
  const rowRefs = useMarqueeAnime(skills);

  return (
    <>
      {skills.map((skillsRow: string[], i: number) => (
        <div key={i} className="row" ref={(ref: HTMLHeadingElement) => (rowRefs.current![i] = ref)}>
          {[0, 1].map((j: number) => (
            <h3 key={j}>
              {skillsRow.map((skill: string) => (
                <span key={skill}>{skill}</span>
              ))}
            </h3>
          ))}
        </div>
      ))}
    </>
  );
}
