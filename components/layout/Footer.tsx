'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerCol}>
            <p>대표: 고득성</p>
            <p>사업자등록번호: 431-10-02875</p>
            <p>응용 소프트웨어 개발 및 공급업</p>
          </div>
          <div className={styles.footerCol}>
            <p>010-9674-1345</p>
            <p>contact@tntlabs.kr</p>
            <p>경기도 성남시 분당구 판교로 700</p>
          </div>
          <div className={`${styles.footerCol} ${styles.footerRight}`}>
            <div className={styles.themeToggle}>
              <svg className={styles.sunIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
              <label className={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                />
                <span className={styles.toggleSlider}></span>
              </label>
              <svg className={styles.moonIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 TNTLABS ALL RIGHTS RESERVED.</p>
          <Link href="#" className={styles.privacyLink}>Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
