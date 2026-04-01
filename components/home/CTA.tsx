import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.grid}>
        <a href="#contact" className={styles.card}>
          <span className={styles.cardText}>프로젝트 문의</span>
          <span className={styles.arrow}>&rarr;</span>
        </a>
        <Link href="/portfolio" className={`${styles.card} ${styles.cardDark}`}>
          <span className={styles.cardText}>포트폴리오 보기</span>
          <span className={styles.arrow}>&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
