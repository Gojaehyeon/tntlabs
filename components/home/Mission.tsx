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
            Beyond solving,<br />
            we create
          </h2>
          <p className={styles.description}>
            문제 해결을 넘어 창조하는 팀.<br />
            이유 있는 설계를 지향합니다.
          </p>
          <a href="#contact" className={styles.button}>
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}
