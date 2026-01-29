import { NextResponse } from 'next/server';
import { getAllProjects, getAllYears } from '@/lib/projects';

export async function GET() {
  const projects = getAllProjects();
  const years = getAllYears();

  return NextResponse.json({ projects, years });
}
