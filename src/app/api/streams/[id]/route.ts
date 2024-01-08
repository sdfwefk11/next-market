import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  if (!session) return;
  const getStream = await apiClient.stream.findUnique({
    where: {
      id: +params.id,
    },
    include: { user: true },
  });
  if (getStream) {
    return NextResponse.json({ ok: true, getStream });
  }
  return NextResponse.json({ ok: false, message: "404 Not Found" });
}
