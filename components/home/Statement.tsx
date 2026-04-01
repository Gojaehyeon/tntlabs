import styles from './Statement.module.css';

export default function Statement() {
  return (
    <section className={styles.statement}>
      <div className={styles.inner}>
        <p className={styles.text}>
          <span className={styles.muted}>We design and build </span>
          <span className={styles.bright}>AI agent systems</span>
          <span className={styles.muted}> and </span>
          <span className={styles.bright}>products</span>
          <span className={styles.muted}> that transform how organizations </span>
          <span className={styles.bright}>operate</span>
          <span className={styles.muted}>, from intelligent automation to </span>
          <span className={styles.bright}>full-stack applications</span>
          <span className={styles.muted}>.</span>
        </p>
      </div>
    </section>
  );
}
