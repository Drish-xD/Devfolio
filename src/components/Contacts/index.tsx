import { SectionHeader } from '@components';

export default function Contacts() {
  return (
    <section className="global-section" id="contact">
      <SectionHeader text="Contact" num={5} />
      <div className="contact-container"></div>
    </section>
  );
}
