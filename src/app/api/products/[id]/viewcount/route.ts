import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const viewCount = await apiClient.product.update({
    where: {
      id: +params.id.toString(),
    },
    data: {
      viewCount: { increment: 1 },
    },
  });
  return NextResponse.json({ ok: true, viewCount });
}
