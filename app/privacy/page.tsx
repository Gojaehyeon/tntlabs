import type { Metadata } from "next";
import styles from "@/components/legal/legal.module.css";

export const metadata: Metadata = {
  title: "LIMBO 개인정보처리방침",
  description: "LIMBO 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <section className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>LIMBO 개인정보처리방침</h1>
        <p className={styles.meta}>시행일: 2026년 6월 13일</p>
        <p className={styles.intro}>
          주식회사 티엔티랩스(이하 &ldquo;회사&rdquo;)는 「개인정보 보호법」 및
          「위치정보의 보호 및 이용 등에 관한 법률」 등 관련 법령을 준수하며,
          이용자의 개인정보를 보호하기 위해 다음과 같이 개인정보처리방침을
          수립·공개합니다. 본 방침은 모바일 애플리케이션 &ldquo;LIMBO&rdquo;(이하
          &ldquo;서비스&rdquo;)에 적용됩니다.
        </p>

        <div className={styles.section}>
          <h2>1. 수집하는 개인정보 항목 및 방법</h2>
          <p>회사는 서비스 제공을 위해 다음의 개인정보를 수집합니다.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>구분</th>
                <th>항목</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>회원가입(소셜 로그인)</td>
                <td>
                  이메일 주소, 닉네임, 프로필 이미지, 소셜 계정 식별자(Apple,
                  카카오, LINE)
                </td>
              </tr>
              <tr>
                <td>프로필</td>
                <td>닉네임, 자기소개, 프로필 사진, 관심 장르·지역</td>
              </tr>
              <tr>
                <td>서비스 이용</td>
                <td>
                  관람 기록(로그), 게시물·평론·댓글·메시지, 저장(북마크) 및 가이드,
                  팔로우 관계
                </td>
              </tr>
              <tr>
                <td>위치정보</td>
                <td>이용자 동의 시 단말기의 위치정보(주변 전시 추천 목적)</td>
              </tr>
              <tr>
                <td>자동 수집</td>
                <td>기기정보(OS·기기 식별자), 접속 로그, 앱 이용 기록</td>
              </tr>
            </tbody>
          </table>
          <p>
            수집 방법: 회원가입 및 서비스 이용 과정에서 이용자가 직접 입력하거나,
            단말기 권한 동의를 통해 자동으로 수집됩니다.
          </p>
        </div>

        <div className={styles.section}>
          <h2>2. 개인정보의 수집·이용 목적</h2>
          <ul>
            <li>회원 식별 및 가입·로그인 등 계정 관리</li>
            <li>전시·행사 정보 제공 및 개인화 추천</li>
            <li>관람 기록·게시물 등 서비스 핵심 기능 제공</li>
            <li>이용자 간 팔로우·메시지 등 소셜 기능 제공</li>
            <li>위치 기반 주변 전시 추천</li>
            <li>부정 이용 방지, 신고 처리 및 고객 문의 대응</li>
            <li>서비스 개선 및 통계 분석</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>3. 개인정보의 보유 및 이용기간</h2>
          <p>
            회사는 원칙적으로 회원 탈퇴 시 지체 없이 개인정보를 파기합니다. 다만
            관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
          </p>
          <ul>
            <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
            <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
            <li>접속 로그 기록: 3개월 (통신비밀보호법)</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>4. 개인정보 처리위탁 및 제3자 제공</h2>
          <p>
            회사는 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있으며,
            이용자의 별도 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
          </p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>수탁업체</th>
                <th>위탁 업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supabase, Inc.</td>
                <td>데이터베이스·인증·스토리지 등 클라우드 인프라 운영</td>
              </tr>
              <tr>
                <td>Apple, 카카오, LINE</td>
                <td>소셜 로그인 인증</td>
              </tr>
              <tr>
                <td>OpenAI, L.L.C.</td>
                <td>대화형 전시 추천(림봇) 기능 처리</td>
              </tr>
              <tr>
                <td>Mapbox, Inc.</td>
                <td>지도 표시 및 위치 기반 서비스</td>
              </tr>
            </tbody>
          </table>
          <p>
            일부 수탁업체는 국외에 소재하므로 개인정보가 국외로 이전될 수 있습니다.
            이용자는 본 방침 동의를 통해 이에 동의한 것으로 봅니다.
          </p>
        </div>

        <div className={styles.section}>
          <h2>5. 위치정보의 처리</h2>
          <p>
            회사는 주변 전시·행사 추천을 위해 이용자의 동의를 받아 위치정보를
            이용하며, 위치정보는 추천 목적 외에는 별도로 저장하지 않습니다. 이용자는
            단말기 설정에서 위치 권한을 언제든지 변경·철회할 수 있습니다.
          </p>
        </div>

        <div className={styles.section}>
          <h2>6. 이용자의 권리와 행사 방법</h2>
          <ol>
            <li>
              이용자는 언제든지 자신의 개인정보를 열람·정정할 수 있으며, 서비스 내
              프로필 편집 기능을 통해 수정할 수 있습니다.
            </li>
            <li>
              이용자는 서비스 내 설정 메뉴의 <strong>&ldquo;회원 탈퇴&rdquo;</strong>{" "}
              기능을 통해 계정 및 개인정보의 삭제를 직접 요청할 수 있습니다. 탈퇴
              시 개인정보는 즉시 파기됩니다.
            </li>
            <li>
              개인정보 관련 문의는 아래 개인정보 보호책임자에게 요청할 수 있습니다.
            </li>
          </ol>
        </div>

        <div className={styles.section}>
          <h2>7. 개인정보의 파기</h2>
          <p>
            개인정보 보유기간이 경과하거나 처리 목적이 달성된 경우 지체 없이 해당
            정보를 파기합니다. 전자적 파일은 복구·재생이 불가능한 방법으로
            삭제하며, 출력물은 분쇄 또는 소각합니다.
          </p>
        </div>

        <div className={styles.section}>
          <h2>8. 만 14세 미만 아동의 개인정보</h2>
          <p>
            회사는 만 14세 미만 아동의 개인정보를 수집하지 않으며, 서비스는 만 14세
            이상만 이용할 수 있습니다.
          </p>
        </div>

        <div className={styles.section}>
          <h2>9. 개인정보의 안전성 확보 조치</h2>
          <p>
            회사는 개인정보 보호를 위해 전송구간 암호화(SSL/TLS), 접근권한 통제,
            접근기록 보관 등 관리적·기술적 보호조치를 시행합니다.
          </p>
        </div>

        <div className={styles.section}>
          <h2>10. 개인정보 보호책임자</h2>
          <p>
            개인정보 처리에 관한 문의, 불만 처리 및 피해 구제는 아래로 연락해
            주시기 바랍니다.
          </p>
        </div>

        <div className={styles.section}>
          <h2>11. 고지의 의무</h2>
          <p>
            본 개인정보처리방침의 내용 추가·삭제 및 수정이 있을 경우 시행 최소 7일
            전부터 서비스 내 공지를 통해 고지합니다.
          </p>
        </div>

        <div className={styles.contact}>
          <strong>개인정보 보호책임자</strong>
          <br />
          주식회사 티엔티랩스 (TNTLABS Co., Ltd.) · 대표: 고재현
          <br />
          경기도 성남시 분당구 판교공원로 1길 66, 101호
          <br />
          문의: contact@tntlabs.kr
        </div>
      </div>
    </section>
  );
}
