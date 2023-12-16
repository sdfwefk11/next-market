import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

interface ProductId {
  params: { id: string };
}

export async function POST(req: NextRequest, { params }: ProductId) {
  const { id } = params;
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  return NextResponse.json({ ok: true });
}
