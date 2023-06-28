import { SectionHeader } from '@components';

export default function About() {
  return (
    <section className="global-section" id="about">
      <SectionHeader text="About" num={4} />
      <div className="about-container">
        <h3>Hi, I&rsquo;m Drish.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sapiente illo ab
          eveniet? Alias voluptas est minima officia illum eos, ad minus mollitia ipsa natus.
          Praesentium quis eveniet eaque aliquam omnis ullam nostrum adipisci quas obcaecati
          eligendi totam delectus suscipit, eos nobis labore dolores! Ad, voluptates. Illum esse
          amet modi, dolores iusto voluptatum cumque incidunt aliquid, quia perspiciatis tenetur
          exercitationem adipisci deleniti vero natus architecto nam possimus qui mollitia? Fugit
          maxime inventore saepe odit, perspiciatis in fuga sunt dignissimos possimus!
        </p>
      </div>
    </section>
  );
}
