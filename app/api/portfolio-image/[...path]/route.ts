import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: pathSegments } = await params;
  const imagePath = path.join(process.cwd(), 'content/portfolio', ...pathSegments);

  if (!fs.existsSync(imagePath)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const ext = path.extname(imagePath).toLowerCase();
  const contentTypeMap: Record<string, string> = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
  };

  const contentType = contentTypeMap[ext] || 'application/octet-stream';
  const imageBuffer = fs.readFileSync(imagePath);

  return new NextResponse(imageBuffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
