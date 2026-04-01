import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <img
            src="/team.jpg"
            alt="TNT Labs team"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            We build what<br />
            others won&apos;t
          </h2>
          <p className={styles.description}>
            Apple Developer Academy @POSTECH 출신 개발자들이 모여,
            기술로 문제를 해결하는 팀. 이유 있는 설계를 지향합니다.
          </p>
          <a href="#contact" className={styles.button}>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}
