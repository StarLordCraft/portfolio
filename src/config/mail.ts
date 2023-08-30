interface MailConfig {
  host: string;
  port: number;
  user: string;
  password: string;
}

export default <MailConfig>{
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  user: process.env.MAIL_USERNAME,
  password: process.env.MAIL_PASSWORD,
};
