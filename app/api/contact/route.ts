import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.me.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.ICLOUD_EMAIL,
    pass: process.env.ICLOUD_APP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json({ error: '이름과 메시지는 필수입니다.' }, { status: 400 });
    }

    await transporter.sendMail({
      from: `tntlabs 문의 <${process.env.ICLOUD_EMAIL}>`,
      to: process.env.ICLOUD_EMAIL,
      subject: `[tntlabs 문의] ${name}님의 문의`,
      html: `
        <h2>새로운 문의가 접수되었습니다</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">이름</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">연락처</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone || '미입력'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">메시지</td><td style="padding:8px;white-space:pre-wrap;">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: '메일 전송에 실패했습니다.' }, { status: 500 });
  }
}
