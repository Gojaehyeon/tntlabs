'use client';

import { useState, useRef } from 'react';
import styles from './Highlights.module.css';

const tags = [
  'All',
  'AI Agents',
  'Product Launch',
  'Apple Ecosystem',
  'Research',
  'Design',
];

const highlights = [
  {
    id: 1,
    tag: 'AI Agents',
    title: 'Atom Engine: Autonomous AI Agent Framework',
    color: '#1a1a2e',
  },
  {
    id: 2,
    tag: 'Product Launch',
    title: 'kip — Redefining How Teams Archive Knowledge',
    color: '#1a2e1a',
  },
  {
    id: 3,
    tag: 'Apple Ecosystem',
    title: 'Native SwiftUI Apps Built for visionOS',
    color: '#2e1a2e',
  },
  {
    id: 4,
    tag: 'Research',
    title: 'Multi-Agent Orchestration at Production Scale',
    color: '#1a2e2e',
  },
  {
    id: 5,
    tag: 'Design',
    title: 'Interface Design That Functions, Not Decorates',
    color: '#2e2e1a',
  },
];

export default function Highlights() {
  const [activeTag, setActiveTag] = useState('All');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = activeTag === 'All'
    ? highlights
    : highlights.filter((h) => h.tag === activeTag);

  return (
    <section className={styles.highlights}>
      <div className={styles.tags}>
        <div className={styles.tagList}>
          {tags.map((tag) => (
            <button
              key={tag}
              className={`${styles.tag} ${activeTag === tag ? styles.tagActive : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <button className={styles.seeAll}>SEE ALL</button>
      </div>

      <div className={styles.carousel} ref={scrollRef}>
        {filtered.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            style={{ backgroundColor: item.color }}
          >
            <div className={styles.cardContent}>
              <span className={styles.cardTag}>{item.tag}</span>
              <h3 className={styles.cardTitle}>
                {item.title}
                <span className={styles.arrow}> ↗</span>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
