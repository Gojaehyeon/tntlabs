'use client';

import { useState, useEffect } from 'react';
import ProjectCard from '@/components/portfolio/ProjectCard';
import styles from './page.module.css';
import { Project } from '@/lib/projects';

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.projects);
      });
  }, []);

  return (
    <section className={styles.portfolio}>
      <div className="container">
        <h1 className={styles.title}>Our Projects</h1>
        <p className={styles.desc}>
          tntlabs는 단순히 기능을 구현하는 데 그치지 않습니다.<br />
          사용자 경험을 중심으로 클라이언트의 목표와 사용자의 니즈가 자연스럽게 연결되도록 설계합니다.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
