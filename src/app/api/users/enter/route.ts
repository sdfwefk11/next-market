import { apiClient } from "@/libs/server/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, phone } = await req.json();
  const payload = phone ? { phone: +phone } : { email };
  const user = await apiClient.user.upsert({
    // upsert() = db에서 읽기 쓰기 수정을 간편하게 해주는 함수
    where: {
      ...payload,
    }, //where = phone이 존재하면 phone을 return
    create: {
      name: "익명",
      ...payload,
      //create = phone이 존재해지 않으면 새로운 phone 데이터를 생성후 return
    },
    update: {},
    //update는 하지않을 것이기 때문에 빈 obj 형태
  });

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
  // }
  return NextResponse.json(user);
}
