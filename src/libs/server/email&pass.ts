import nodemailer from "nodemailer";
import twilio from "twilio";

const phoneModule = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const emailModule = nodemailer.createTransport({
  service: "Naver",
  host: "smtp.naver.com",
  port: 587,
  auth: {
    user: process.env.MY_EMAIL_ID,
    pass: process.env.MY_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export { phoneModule, emailModule };
