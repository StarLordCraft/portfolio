import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Mail from '@/services/mail';

import Component from 'mails/teste';

export async function POST(request: NextRequest) 
{
    try {
      const res = await request.json();
      const {email, name, message} = res.body;
      
      const contact = new Mail("rafa.dev.moc@gmail.com", "contato", `email de: ${email} mensagem: ${message}`);
      await contact.sendMail();

      const mail = new Mail(email, `Obrigado pelo contato ${name}`);
      
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
  