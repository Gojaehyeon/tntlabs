'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Navbar.module.css';

const navItems = [
  { href: '/', label: 'tntlabs' },
  { href: '/portfolio', label: '포트폴리오' },
  { href: '/#contact', label: '문의하기' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atContact, setAtContact] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Get active index based on pathname and scroll position
  const getActiveIndex = useCallback(() => {
    if (pathname.startsWith('/portfolio')) return 1;
    if (pathname === '/' && atContact) return 2;
    if (pathname === '/') return 0;
    return 0;
  }, [pathname, atContact]);

  // Move slider to active nav item
  const moveSlider = useCallback(() => {
    if (!sliderRef.current || !navRef.current || !wrapperRef.current) return;

    const links = navRef.current.querySelectorAll('a');
    const activeIndex = getActiveIndex();
    const activeLink = links[activeIndex];

    if (activeLink) {
      const linkRect = activeLink.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();

      sliderRef.current.style.left = `${linkRect.left - wrapperRect.left}px`;
      sliderRef.current.style.width = `${linkRect.width}px`;
    }
  }, [getActiveIndex]);

  useEffect(() => {
    moveSlider();
    window.addEventListener('resize', moveSlider);
    return () => window.removeEventListener('resize', moveSlider);
  }, [moveSlider]);

  // Handle scroll effect and contact section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // 홈페이지에서만 contact 섹션 감지
      if (pathname === '/') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          const isAtContact = rect.top <= 200;
          setAtContact(isAtContact);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 체크
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="TNT Labs" width={100} height={100} quality={100} />
        </Link>

        <div ref={wrapperRef} className={`${styles.navMenuWrapper} ${mobileOpen ? styles.active : ''}`}>
          <div ref={sliderRef} className={styles.navSlider} />
          <ul ref={navRef} className={styles.navMenu}>
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={getActiveIndex() === index ? styles.navActive : ''}
                  onClick={(e) => {
                    setMobileOpen(false);
                    // 홈페이지에서 #contact 클릭 시 스크롤 처리
                    if (item.href === '/#contact' && pathname === '/') {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`${styles.hamburger} ${mobileOpen ? styles.active : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
