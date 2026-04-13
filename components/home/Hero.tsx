'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = wrapRef.current?.querySelector('video');
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    tryPlay();
    video.addEventListener('loadedmetadata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    const onFirstInteraction = () => {
      tryPlay();
      document.removeEventListener('touchstart', onFirstInteraction);
      document.removeEventListener('click', onFirstInteraction);
    };
    document.addEventListener('touchstart', onFirstInteraction, { once: true });
    document.addEventListener('click', onFirstInteraction, { once: true });

    return () => {
      video.removeEventListener('loadedmetadata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      document.removeEventListener('touchstart', onFirstInteraction);
      document.removeEventListener('click', onFirstInteraction);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div
        ref={wrapRef}
        className={styles.videoWrap}
        dangerouslySetInnerHTML={{
          __html: `<video class="${styles.video}" autoplay muted loop playsinline webkit-playsinline preload="auto"><source src="/tntlabs.m4v" type="video/mp4" /></video><div class="${styles.overlay}"></div>`,
        }}
      />
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
