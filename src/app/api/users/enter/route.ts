import { apiClient } from "@/libs/server/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, phone } = await req.json();
  let user;
  if (email) {
    user = await apiClient.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      user = await apiClient.user.create({
        data: {
          name: "익명",
          email,
        },
      });
    }
  }
  if (phone) {
    user = await apiClient.user.findUnique({
      where: {
        phone,
      },
    });
    if (!user) {
      user = await apiClient.user.create({
        data: {
          name: "익명",
          phone,
        },
      });
    }
  }
  return NextResponse.json(user);
}
