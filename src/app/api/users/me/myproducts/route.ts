import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const myProducts = await apiClient.product.findMany({
    where: { userId: session.user.id },
    include: { _count: { select: { favs: true } } },
  });
  return NextResponse.json({ ok: true, myProducts });
}
