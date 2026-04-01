'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        alert('전송에 실패했습니다. 다시 시도해주세요.');
      }
    } catch {
      alert('전송에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h2 className={styles.title}>Get in touch</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <p className={styles.infoValue}>contact@tntlabs.kr</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <p className={styles.infoValue}>010-9674-1345</p>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Address</span>
              <p className={styles.infoValue}>경기도 성남시 분당구 판교로 700</p>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="이름"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="tel"
              placeholder="연락처"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <textarea
              placeholder="프로젝트에 대해 간단히 설명해주세요"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button type="submit" className={styles.submitBtn} disabled={sending}>
              {sending ? '전송 중...' : '문의하기'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
