import styles from './Testimonials.module.css';

const testimonials = [
  {
    company: 'COMPANY A',
    quote: '"kip을 도입한 이후 팀 내 지식 공유 속도가 3배 이상 빨라졌습니다. 비정형 데이터를 자동으로 분류해주는 기능이 특히 인상적이었습니다."',
  },
  {
    company: 'COMPANY B',
    quote: '"Atom 에이전트 프레임워크 덕분에 반복 업무 자동화를 빠르게 구현할 수 있었습니다. 멀티 에이전트 오케스트레이션이 실제 프로덕션에서 안정적으로 동작합니다."',
  },
  {
    company: 'COMPANY C',
    quote: '"TNT Labs 팀과 협업하면서 개발 속도와 품질 모두 기대 이상이었습니다. 기술적 깊이와 커뮤니케이션 모두 훌륭했습니다."',
  },
  {
    company: 'COMPANY D',
    quote: '"FocusCard를 사용한 이후 팀원들의 집중 시간이 평균 40% 증가했습니다. 스크린타임 관리가 이렇게 효과적일 줄 몰랐습니다."',
  },
  {
    company: 'COMPANY E',
    quote: '"Belighten으로 기획 단계의 시간을 절반으로 줄였습니다. AI가 요구사항을 구조화해주니 개발 착수가 훨씬 빨라졌습니다."',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>What our partners say about us</h2>
      <div className={styles.track}>
        <div className={styles.slider}>
          {[...testimonials, ...testimonials].map((item, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.company}>{item.company}</h3>
              <p className={styles.quote}>{item.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
