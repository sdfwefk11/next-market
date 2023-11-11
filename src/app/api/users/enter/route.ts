import { apiClient } from "@/libs/server/client";
import { NextResponse } from "next/server";
import twilio from "twilio";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

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
    const message = await client.messages.create({
      messagingServiceSid: process.env.MESSAGING_SERVICE_ID,
      to: process.env.MY_PHONE_NUMBER!,
      body: `Your login token is ${payload}`,
    });
    console.log(message);
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
