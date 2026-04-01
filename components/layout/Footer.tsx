import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/" className={styles.wordmark}>
            TNTlabs
          </Link>
          <nav className={styles.nav}>
            <Link href="/#products">Products</Link>
            <Link href="/#capabilities">Capabilities</Link>
            <Link href="/#team">Team</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.bottom}>
          <div className={styles.business}>
            <p>대표: 고득성 · 사업자등록번호: 431-10-02875 · 응용 소프트웨어 개발 및 공급업</p>
            <p>경기도 성남시 분당구 판교로 700 · 010-9674-1345 · contact@tntlabs.kr</p>
          </div>
          <p className={styles.copyright}>&copy; 2025 TNT LABS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
