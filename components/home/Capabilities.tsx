import styles from './Capabilities.module.css';

const capabilities = [
  {
    number: '01',
    title: 'AI Agent Systems',
    description:
      '자율형 AI 에이전트와 멀티 에이전트 시스템을 설계합니다. LLM 오케스트레이션, RAG 파이프라인, 도구 통합까지 엔드투엔드로 구축합니다.',
  },
  {
    number: '02',
    title: 'Full-Stack Product',
    description:
      '프론트엔드부터 백엔드, 인프라까지 프로덕트 전체를 설계하고 구현합니다. Next.js, Node.js, PostgreSQL 기반의 모던 스택을 운용합니다.',
  },
  {
    number: '03',
    title: 'Apple Ecosystem',
    description:
      'iOS, iPadOS, watchOS, visionOS 네이티브 앱을 SwiftUI와 UIKit으로 개발합니다. Apple 플랫폼 생태계에 대한 깊은 이해를 보유하고 있습니다.',
  },
  {
    number: '04',
    title: 'Design & Experience',
    description:
      '사용자 경험 중심의 인터페이스를 설계합니다. 기능과 형태가 하나로 통합된 프로덕트를 지향합니다.',
  },
];

export default function Capabilities() {
  return (
    <section className={styles.capabilities} id="capabilities">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Capabilities</span>
          <h2 className={styles.title}>What we do</h2>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap) => (
            <div key={cap.number} className={styles.card}>
              <span className={styles.number}>{cap.number}</span>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
