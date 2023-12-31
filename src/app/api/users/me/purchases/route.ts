import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const purchases = await apiClient.purchase.findMany({
    where: { userId: session.user.id },
    include: {
      product: {
        include: {
          user: { select: { name: true, avatar: true, id: true } },
          _count: { select: { favs: true } },
        },
      },
    },
  });
  return NextResponse.json({ ok: true, purchases });
}
