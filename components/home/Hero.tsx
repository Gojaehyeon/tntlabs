import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.videoWrap}>
        <video className={styles.video} autoPlay muted loop playsInline>
          <source src="/tntlabs.m4v" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          We Build AI That<br />
          Detonates Impact
        </h1>
        <p className={styles.subtitle}>
          AI 에이전트 시스템과 프로덕트를 설계하고 구축합니다.
        </p>
      </div>
      <div className={styles.scrollHint}>
        <span>Scroll to Explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
