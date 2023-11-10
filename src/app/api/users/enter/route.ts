import { apiClient } from "@/libs/server/client";
import { NextResponse } from "next/server";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
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
  console.log(token);
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
