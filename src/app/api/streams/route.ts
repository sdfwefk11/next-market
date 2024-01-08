import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET() {
  const streams = await apiClient.stream.findMany({ include: { user: true } });
  if (streams) {
    return NextResponse.json({ ok: true, streams });
  }
  return NextResponse.json({ ok: false, message: "404 Not Found" });
}

export async function POST(req: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  if (!session) return;
  const { name, price, description } = await req.json();
  const stream = await apiClient.stream.create({
    data: {
      name,
      price,
      description,
      user: { connect: { id: session.user.id } },
    },
  });
  if (stream) {
    return NextResponse.json({ ok: true, stream });
  }
  return NextResponse.json({ ok: false, message: "404 Not Found" });
}
