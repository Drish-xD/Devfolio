import styles from './Landing.module.scss';

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <h1>
        I Create
        <span>Experiences</span>
        <span>
          <span>that</span>
          Captivate
        </span>
      </h1>
      <p>
        Hi, I&rsquo;m a front-end developer, blending artistry & technology to deliver stunning
        online journeys.
      </p>
    </section>
  );
}
