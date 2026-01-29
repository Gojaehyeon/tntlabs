'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects.module.css';
import { Project } from '@/lib/projects';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        // 최대 6개만 표시
        setProjects(data.projects.slice(0, 6));
      });
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">tntlabs가 만들어온 프로젝트들</p>

        <div className={styles.projectCarousel}>
          {projects.map((project) => (
            <Link
              href={`/portfolio/${project.slug}`}
              key={project.slug}
              className={styles.projectCard}
            >
              <div
                className={styles.projectImage}
                style={{ background: project.gradient }}
              >
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {projects.length > 0 && (
          <div className={styles.moreButton}>
            <Link href="/portfolio" className={styles.viewMore}>
              프로젝트 더 보기
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
