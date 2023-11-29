import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function POST(req: Request) {
  const { name, price, description } = await req.json();
  const session = getIronSession<SessionData>(cookies(), sessionOption);

  const product = await apiClient.product.create({
    data: {
      name,
      price,
      description,
      image: "sdfsf",
      user: {
        connect: {
          id: (await session).user.id,
        },
      },
    },
  });
  return NextResponse.json({ ok: true, product });
}
