import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function POST(req: Request) {
  const { name, price, description } = await req.json();
  console.log(name, price, description);
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const product = await apiClient.product.create({
    data: {
      name,
      price: +price,
      description,
      image: "sdfsf",
      user: {
        connect: {
          id: session.user.id,
        },
      },
    },
  });
  return NextResponse.json({ ok: true, product });
}
export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  if (!session) return;
  const result = await apiClient.product.findMany({
    include: { _count: { select: { favs: true } } },
  });
  const product = result.sort((d) => +d.id).reverse();
  return NextResponse.json({ ok: true, product });
}
