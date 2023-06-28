import { SectionHeader } from '@components';
import { LINKS } from '@lib/data';
import Link from 'next/link';

export default function Contacts() {
  return (
    <section className="global-section" id="contact">
      <SectionHeader text="Contact" num={5} />
      <div className="contact-container">
        <h3>
          Want to discuss a new project? <br /> Get in touch.
        </h3>

        <ul className="links-container">
          {Object.keys(LINKS).map((category: string, i: number) => (
            <li key={i}>
              <h4>{category}</h4>
              <ul>
                {LINKS[category as keyof typeof LINKS].map(({ name, link }) => (
                  <li key={name}>
                    <Link href={link} className="hover-animation" data-value={name}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
