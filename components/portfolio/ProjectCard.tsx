import Link from 'next/link';
import Image from 'next/image';
import styles from './ProjectCard.module.css';
import { Project } from '@/lib/projects';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/portfolio/${project.slug}`} className={styles.card}>
      <div className={styles.imageWrapper} style={{ background: project.gradient }}>
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className={styles.image}
            onError={(e) => {
              // 이미지 로드 실패 시 숨김 (gradient 배경 표시)
              e.currentTarget.style.display = 'none';
            }}
          />
        )}
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
    </Link>
  );
}
