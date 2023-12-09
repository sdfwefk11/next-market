import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET() {
  const session = getIronSession<SessionData>(cookies(), sessionOption);
  if (!(await session).isLoggedIn) {
    return NextResponse.json({ ok: false, error: "Please Log In" });
  }
  const profile = await apiClient.user.findUnique({
    where: {
      id: (await session).user.id,
    },
  });
  return NextResponse.json({ ok: true, profile });
}
