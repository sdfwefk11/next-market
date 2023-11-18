import apiClient from "@/libs/server/client";
import { emailModule, phoneModule } from "@/libs/server/email&pass";
import { NextResponse } from "next/server";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface MailOption {
  from: string | undefined;
  to: string | undefined;
  subject: string;
  text: string;
}

export async function POST(req: Request) {
  const { email, phone } = await req.json();
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return NextResponse.json<ResponseType>({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await apiClient.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "익명",
            ...user,
          },
        },
      },
    },
  });
  if (phone) {
    /* const message = await phoneModule.messages.create({
      messagingServiceSid: process.env.MESSAGING_SERVICE_ID,
      to: process.env.MY_PHONE_NUMBER!,
      body: `Your login token is ${payload}`,
    });
    console.log(message); */
  }
  if (email) {
    /* const mailOption: MailOption = {
      from: process.env.MY_EMAIL_ID,
      to: process.env.MY_EMAIL_ID,
      subject: "Email Token",
      text: `Your login token is ${payload}`,
    };
    const result = await emailModule.sendMail(mailOption, (error, info) => {
      error ? console.log(error) : console.log(info);
    });
    console.log(result);
    emailModule.close(); */
  }

  // if (email) {
  //   user = await apiClient.user.findUnique({
  //     where: {
  //       email,
  //     },
  //   });s
  //   if (!user) {
  //     user = await apiClient.user.create({
  //       data: {
  //         name: "익명",
  //         email,
  //       },
  //     });
  //   }
  // }
  // if (phone) {
  //   user = await apiClient.user.findUnique({
  //     where: {
  //       phone: +phone,
  //     },
  //   });
  //   if (user) console.log("found it");
  //   if (!user) {
  //     user = await apiClient.user.create({
  //       data: {
  //         name: "익명",
  //         phone: +phone,
  //       },
  //     });
  //   }
  // };
  return NextResponse.json(token);
}
