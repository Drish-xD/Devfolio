import { memo } from 'react';

import Link from '@/components/Link';
import SectionTitle from '@/components/SectionTitle';
import { LinkObject } from '@/types';

import styles from './Contacts.module.scss';

const Contacts = memo(function Contacts({
  contacts
}: {
  contacts: { [key: string]: LinkObject[] };
}) {
  return (
    <section id='contacts'>
      <SectionTitle text='Contact' num={5} />
      <div className={styles.contacts}>
        <h3>
          Want to discuss a new project? <br /> Get in touch.
        </h3>

        <ul>
          {Object.keys(contacts).map((category: string, i: number) => (
            <li key={i}>
              <h4>{category}</h4>
              <ul>
                {contacts[category as keyof typeof contacts].map(({ label, value }) => (
                  <li key={label}>
                    <Link href={value} target='_blank'>
                      {label}
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
});

export default Contacts;
