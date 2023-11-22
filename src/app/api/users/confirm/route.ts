import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import apiClient from "@/libs/server/client";
import { SessionData, sessionOption } from "@/libs/lib";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  const exists = await apiClient.token.findUnique({
    where: {
      payload: token,
    },
    // include: { user: true } user에 대한 정보 또한 가져올수있다.
  });
  if (!exists) return NextResponse.error();
  const session = getIronSession<SessionData>(cookies(), sessionOption);
  (await session).user = {
    id: exists.userId,
    payload: exists.payload,
  };
  (await session).isLoggedIn = true;
  await (await session).save();
  return NextResponse.json((await session).user.id);
}
