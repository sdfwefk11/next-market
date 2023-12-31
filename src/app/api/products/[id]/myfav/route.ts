import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  if (params.id === "undefiend")
    return NextResponse.json({ ok: false, message: "params id is undefiend" });
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const myFav = Boolean(
    await apiClient.fav.findFirst({
      where: {
        productId: +params.id,
        userId: session.user.id,
      },
    })
  );
  return NextResponse.json({ ok: true, myFav });
}
