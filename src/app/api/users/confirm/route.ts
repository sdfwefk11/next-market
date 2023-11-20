import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import apiClient from "@/libs/server/client";

export async function POST(req: Request, res: Response) {
  const { token } = await req.json();
  const exists = await apiClient.token.findUnique({
    where: {
      payload: token,
    },
    // include: { user: true } user에 대한 정보 또한 가져올수있다.
  });
  console.log(token);
  const session = getIronSession(cookies(), {
    cookieName: "carrotsession",
    password: process.env.CARROT_SESSION_PASSWORD!,
  });
  console.log(exists);
  if (!exists) res.status;
  session.user = {
    id: exists?.userId,
  };
  await (await session).save();
  return NextResponse.json(token);
}
