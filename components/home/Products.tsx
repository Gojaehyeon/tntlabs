'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Products.module.css';

const products = [
  {
    id: 'kip',
    name: 'kip',
    tagline: 'Smart Archive',
    video: '/kip.m4v',
    description:
      'AI 기반 지능형 아카이브 시스템. 비정형 데이터를 구조화하고, 자연어 검색과 자동 분류로 지식 관리의 새로운 기준을 제시합니다.',
    capabilities: [
      'Natural language search',
      'Auto-classification & tagging',
      'Unstructured data processing',
      'Knowledge graph generation',
    ],
  },
  {
    id: 'atom',
    name: 'Atom',
    tagline: 'AI Agent\nFramework',
    video: '/atom.mov',
    description:
      '복잡한 업무를 자율적으로 수행하는 AI 에이전트 시스템. 멀티 에이전트 오케스트레이션, 도구 통합, 메모리 관리를 하나의 프레임워크로 제공합니다.',
    capabilities: [
      'Multi-agent orchestration',
      'Tool integration & function calling',
      'Long-term memory management',
      'Real-time streaming',
    ],
  },
  {
    id: 'focuscard',
    name: 'Foca',
    tagline: 'Screen Time\nFocus Tool',
    video: '/foca.m4v',
    description:
      '스크린타임 기반으로 집중을 도와주는 소프트웨어. 디지털 환경에서의 생산성을 극대화합니다.',
    capabilities: [
      'Screen time management',
      'Focus mode automation',
      'Usage analytics',
      'Distraction blocking',
    ],
  },
  {
    id: 'belighten',
    name: 'Belighten',
    tagline: 'AI-Powered\nPlanning Tool',
    video: '/belighten.mov',
    description:
      'AI 기반 개발자를 위한 기획 도구. 아이디어에서 실행 가능한 계획까지, 개발 워크플로우를 혁신합니다.',
    capabilities: [
      'AI-assisted planning',
      'Requirements generation',
      'Task decomposition',
      'Developer workflow integration',
    ],
  },
];

export default function Products() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [hasHover, setHasHover] = useState(true);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover)');
    setHasHover(mq.matches);
    const listener = (e: MediaQueryListEvent) => setHasHover(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const activate = (id: string) => {
    if (hovered && hovered !== id) {
      const prev = videoRefs.current[hovered];
      if (prev) { prev.pause(); prev.currentTime = 0; }
    }
    setHovered(id);
    videoRefs.current[id]?.play().catch(() => {});
  };

  const deactivate = (id: string) => {
    setHovered(null);
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  const handleMouseEnter = (id: string) => {
    if (!hasHover) return;
    activate(id);
  };

  const handleMouseLeave = (id: string) => {
    if (!hasHover) return;
    deactivate(id);
  };

  const handleTap = (id: string) => {
    if (hasHover) return;
    if (hovered === id) {
      deactivate(id);
    } else {
      activate(id);
    }
  };

  return (
    <section className={styles.products} id="products">
      <div className={styles.container}>
        <p className={styles.label}>Our Products</p>

        <div className={styles.list}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`${styles.item} ${hovered === product.id ? styles.itemHovered : ''}`}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={() => handleMouseLeave(product.id)}
              onClick={() => handleTap(product.id)}
            >
              <div className={styles.itemLeft}>
                <p className={styles.itemTagline} style={{ whiteSpace: 'pre-line' }}>{product.tagline}</p>
              </div>
              <div className={styles.videoWrap}>
                <video
                  ref={(el) => { videoRefs.current[product.id] = el; }}
                  className={styles.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={product.video} type="video/mp4" />
                </video>
              </div>
              <h2 className={styles.itemName}>{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
