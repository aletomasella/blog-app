import nodemailer from "nodemailer";

export const sendLoginEmail = async ({
  email,
  url,
  token,
}: {
  email: string;
  url: string;
  token: string;
}) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: "Alejandro",
    to: email,
    subject: "Login to your account",
    html: `LOGIN BY CLICKING HERE <a href=${url}/login#token=${token}>LOGIN</a>`,
  });

  console.log(`PREVIEW URL: ${nodemailer.getTestMessageUrl(info)}`);
};
