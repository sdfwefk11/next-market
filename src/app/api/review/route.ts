import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const reviews = await apiClient.review.findMany({
    where: {
      createForId: session.user.id,
    },
    include: { createBy: { select: { id: true, name: true, avatar: true } } },
  });
  return NextResponse.json({ ok: true, reviews });
}
