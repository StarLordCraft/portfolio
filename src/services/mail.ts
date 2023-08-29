import Config from '@/config/mail';

import { render } from '@react-email/render';
import { ReactElement } from 'react';
import * as nodemailer from "nodemailer";

interface MailAttachment {
    filename: string;
    path?: string;
    content?: string;
    contentType?: string;
}

export default class Mail{
    constructor(
        private to?: string,
        private subject?: string,
        public message?: string,
        private attachments?: MailAttachment[],
    ){}

    renderMail(Component: ReactElement) {
        this.message = render(Component);
    }

    async sendMail(): Promise<string> 
    {
        const transporter = nodemailer.createTransport({
            host: Config.host,
            port: Config.port,
            secure: false,
            auth: {
                user: Config.user,
                pass: Config.password
            },
            tls: { rejectUnauthorized: false }
        });

        const mailOptions = {
            from: process.env.MAIL_USERNAME,
            to: this.to,
            subject: this.subject,
            html: this.message,
            attachments: this.attachments,
        };

        try{
            const info = await transporter.sendMail(mailOptions);
            return "E-mail enviado com sucesso!";
        }catch (error) {
            console.error(error);
            throw new Error("Erro ao enviar o e-mail.");
        }
    }
}