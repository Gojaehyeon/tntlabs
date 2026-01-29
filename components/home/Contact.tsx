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
      <div className="container">
        <h2 className={`section-title ${styles.leftAlign}`}>Contact Us</h2>
        <p className={`section-subtitle ${styles.leftAlign}`}>프로젝트에 대해 상담해 보세요</p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>Email</h3>
              <p>contact@tntlabs.kr</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Phone</h3>
              <p>010-9674-1345</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Address</h3>
              <p>경기도 성남시 분당구 판교로 700</p>
            </div>
          </div>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
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
            <button type="submit" className="btn-primary" disabled={sending}>
              {sending ? '전송 중...' : '문의하기'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
