import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');

export interface Project {
  slug: string;
  title: string;
  year: number;
  description: string;
  gradient: string;
  thumbnail: string;
  tags: string[];
  client?: string;
  duration?: string;
  content: string;
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(portfolioDirectory)) {
    return [];
  }

  const folders = fs.readdirSync(portfolioDirectory);

  const projects = folders
    .filter((folder) => {
      // _template 폴더 제외, 디렉토리만 포함
      if (folder.startsWith('_')) return false;
      const folderPath = path.join(portfolioDirectory, folder);
      return fs.statSync(folderPath).isDirectory();
    })
    .map((folder) => {
      const mdxPath = path.join(portfolioDirectory, folder, 'index.mdx');

      if (!fs.existsSync(mdxPath)) return null;

      const fileContents = fs.readFileSync(mdxPath, 'utf8');
      const { data, content } = matter(fileContents);

      // 썸네일: /api/portfolio-image/{folder}/thumbnail.png
      const thumbnail = `/api/portfolio-image/${folder}/thumbnail.png`;

      return {
        slug: folder,
        content,
        title: data.title || folder,
        year: data.year || new Date().getFullYear(),
        description: data.description || '',
        gradient: data.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        thumbnail,
        tags: data.tags || [],
        client: data.client,
        duration: data.duration,
      } as Project;
    })
    .filter((p): p is Project => p !== null);

  return projects.sort((a, b) => b.year - a.year);
}

export function getProjectBySlug(slug: string): Project | null {
  const mdxPath = path.join(portfolioDirectory, slug, 'index.mdx');

  if (!fs.existsSync(mdxPath)) return null;

  const fileContents = fs.readFileSync(mdxPath, 'utf8');
  const { data, content } = matter(fileContents);

  const thumbnail = `/api/portfolio-image/${slug}/thumbnail.png`;

  return {
    slug,
    content,
    title: data.title || slug,
    year: data.year || new Date().getFullYear(),
    description: data.description || '',
    gradient: data.gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    thumbnail,
    tags: data.tags || [],
    client: data.client,
    duration: data.duration,
  };
}

export function getAllYears(): number[] {
  const projects = getAllProjects();
  const years = [...new Set(projects.map((p) => p.year))];
  return years.sort((a, b) => b - a);
}
