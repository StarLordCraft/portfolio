import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Mail from '@/services/mail';
import Component from '@/mails/teste';

export async function GET(request: NextRequest) {
  try {
    const mail = new Mail('rafa.viana.moc@gmail.com', 'teste');
    await mail.renderMail(Component({}));
    await mail.sendMail();
    return new NextResponse(
      JSON.stringify({
        status: 200,
        message: 'Email sent successfully',
        email: mail.message,
      })
    );
  } catch (error: any) {
    console.error('Error sending email:', error.message);
    return new NextResponse(
      JSON.stringify({
        status: 500,
        message: 'An error occurred while sending the email',
      })
    );
  }
}
