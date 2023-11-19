import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

export async function POST(req: Request) {
  const { token } = await req.json();
  const session = getIronSession(cookies(), {
    cookieName: "carrotsession",
    password: "1231441123123123123123124425sdfad13asd1231",
  });
  await session;
  return NextResponse.json(token);
}
