import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import apiClient from "@/libs/server/client";
import { SessionData, sessionOption } from "@/libs/lib";

export async function POST(req: NextRequest) {
  const { token } = await req.json();
  const foundToken = await apiClient.token.findUnique({
    where: {
      payload: token,
    },
    // include: { user: true } user에 대한 정보 또한 가져올수있다.
  });
  if (!foundToken)
    return NextResponse.json({
      error: "Invalid Token: Please check input value",
    });
  const session = getIronSession<SessionData>(cookies(), sessionOption);
  (await session).user = {
    id: foundToken.userId,
  };
  (await session).isLoggedIn = true;
  await (await session).save();
  await apiClient.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });
  return NextResponse.json({ ok: true });
}
