import styles from './About.module.css';

const teamMembers = [
  {
    name: 'Air',
    nameKr: '양시준',
    role: 'Full-Stack Developer',
    bio: '기계어부터 머신러닝까지, 깊은 차원의 개발을 해온 개발자. 프레임워크와 언어를 가리지 않습니다.',
    github: 'https://github.com/yangsijun',
    linkedin: '#',
  },
  {
    name: 'Go',
    nameKr: '고재현',
    role: 'Developer & Designer',
    bio: '홍대 미대 출신 UX 전문가. 20개 이상의 앱을 직접 개발하고 배포한 경험을 보유하고 있습니다.',
    github: 'https://github.com/Gojaehyeon',
    linkedin: 'https://www.linkedin.com/in/jaehyun-go-91a072356/',
  },
];

export default function About() {
  return (
    <section className={styles.team} id="team">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Team</span>
          <h2 className={styles.title}>Who we are</h2>
          <p className={styles.subtitle}>
            Apple Developer Academy @Postech 출신.<br />
            기술적 깊이와 프로덕트 감각을 겸비한 팀.
          </p>
        </div>

        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.name} className={styles.member}>
              <div className={styles.memberTop}>
                <h3 className={styles.memberName}>
                  {member.name}
                  <span className={styles.memberNameKr}>{member.nameKr}</span>
                </h3>
                <span className={styles.memberRole}>{member.role}</span>
              </div>
              <p className={styles.memberBio}>{member.bio}</p>
              <div className={styles.memberLinks}>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
