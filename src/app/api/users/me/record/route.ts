import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET(req: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const searchParams = req.nextUrl.searchParams.get("kind");
  if (searchParams === "Sale") {
    const sales = await apiClient.record.findMany({
      where: { kind: "Sale", userId: session.user.id },
      include: { product: true },
    });
    return NextResponse.json({ ok: true, sales });
  }
  if (searchParams === "Purchase") {
    const purchases = await apiClient.record.findMany({
      where: { kind: "Purchase", userId: session.user.id },
      include: { product: true },
    });
    return NextResponse.json({ ok: true, purchases });
  }
  if (searchParams === "Fav") {
    const favs = await apiClient.record.findMany({
      where: { kind: "Fav", userId: session.user.id },
      include: { product: true },
    });
    return NextResponse.json({ ok: true, favs });
  }
}
