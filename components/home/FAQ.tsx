'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: '개발 프로세스는 어떻게 진행되나요?',
    answer: '요구사항 분석 → 기획/설계 → 디자인 → 개발 → 테스트 → 배포 → 유지보수 순서로 진행됩니다. 각 단계마다 클라이언트와 충분한 소통을 통해 진행합니다.',
  },
  {
    question: '비용은 어떻게 산정되나요?',
    answer: '프로젝트의 규모, 복잡도, 기간에 따라 견적이 달라집니다. 상담을 통해 정확한 요구사항을 파악한 후 합리적인 견적을 제안드립니다.',
  },
  {
    question: '개발 기간은 얼마나 걸리나요?',
    answer: '프로젝트 규모에 따라 다르지만, 긴급 MVP는 1~2주일, 일반적인 MVP는 1~3개월, 풀 서비스는 3~5개월 정도 소요됩니다.',
  },
  {
    question: '유지보수 지원이 가능한가요?',
    answer: '네, 프로젝트 완료 후에도 유지보수 계약을 통해 지속적인 기술 지원과 업데이트를 제공합니다.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <p className="section-subtitle">자주 묻는 질문</p>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                <svg
                  className={styles.faqIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
