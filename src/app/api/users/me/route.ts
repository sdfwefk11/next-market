import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  if (!session.isLoggedIn)
    return NextResponse.json({ ok: false, error: "Please Log In" });
  const profile = await apiClient.user.findUnique({
    where: {
      id: session.user.id,
    },
  });
  return NextResponse.json({ ok: true, profile });
}

export async function POST(req: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  if (!session) return NextResponse.json({ ok: false, error: "Please Log In" });
  const { nickName } = await req.json();
  if (nickName) {
    const alreadyExists = Boolean(
      await apiClient.user.findUnique({
        where: { nickName, id: session.user.id },
        select: { id: true },
      })
    );
    if (alreadyExists) {
      return NextResponse.json({
        ok: false,
        message: "중복된 닉네임입니다.",
      });
    }
    await apiClient.user.update({
      where: { id: session.user.id },
      data: {
        nickName,
      },
    });
  }
  return NextResponse.json({ ok: true, message: "닉네임이 변경되었습니다." });
}
