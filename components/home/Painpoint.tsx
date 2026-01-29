import styles from './Painpoint.module.css';

export default function Painpoint() {
  return (
    <section className={styles.painpoint}>
      <div className="container">
        <h2 className={styles.painpointTitle}>
          정말 잘 만들어질까?
        </h2>
        <p className={styles.painpointAnswer}>
          개발, 디자인 외주. 수많은 업체들 중 선택하기 어려우시죠?
          <br />잘못 맡겼다가 후회만 남을까 불안하시죠?
          <br />tntlabs는 그런 고객님들의 걱정을 잘 알고 있습니다.
          <br />정확한 구현부터 소통, 합리적인 비용까지.
          <br />
          <br /><strong>저희에게 맡기시면 후회가 없을 겁니다.</strong>
        </p>

        <div className={styles.aboutFeatures}>
          <div className={styles.feature}>
            <span className={styles.featureNumber}>01</span>
            <div className={styles.featureText}>
              <h4>빠른 피드백</h4>
              <p>해야 할 일만 정확하게</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureNumber}>02</span>
            <div className={styles.featureText}>
              <h4>정확한 요구사항 파악</h4>
              <p>원하는 것을 명확하게</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureNumber}>03</span>
            <div className={styles.featureText}>
              <h4>장기적 유지보수</h4>
              <p>미래를 고려한 설계</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
