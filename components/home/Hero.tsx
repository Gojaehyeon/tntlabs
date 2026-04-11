'use client';

import { useRef, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.videoWrap}>
        <video ref={videoRef} className={styles.video} autoPlay muted loop playsInline>
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
          인공지능을 이용한 창조적인 프로덕트를 구축합니다.
        </p>
      </div>
      <div className={styles.scrollHint}>
        <span>Scroll to Explore</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
