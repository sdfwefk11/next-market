import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";

export async function GET() {
  const session = getIronSession<SessionData>(cookies(), sessionOption);
  if ((await session).isLoggedIn !== true) {
    return NextResponse.json({ ok: false });
  }
  return NextResponse.json((await session).user.payload);
}
