import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            치열하게 설계하고<br />
            <span className={styles.heroTitleBold}>집요하게 검증합니다</span>
          </h1>
          <div className={styles.heroBottom}>
            <p className={styles.heroSubtitle}>
              이유가 있는 설계, 기술을 지향합니다.<br />
              장식요소가 아닌 기능하는 프로덕트를 빚어냅니다.
            </p>
          </div>
        </div>
        <div className={styles.heroVideoContainer}>
          <video className={styles.heroVideo} autoPlay muted loop playsInline>
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroVideoOverlay}>
            <p className={styles.heroVideoText}>상상만 했던 아이디어가 현실로</p>
            <Image
              src="/tntlabs.png"
              alt="TNT Labs"
              width={200}
              height={60}
              className={styles.heroVideoBrandImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
