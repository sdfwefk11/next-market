import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

export async function POST(req: Request) {
  const { token } = await req.json();
  console.log(token);
  const session = getIronSession(cookies(), {
    cookieName: "carrotsession",
    password: "1231441123123123123123124425sdfad13asd1231",
  });
  session.then((res) => console.log(res));
  return NextResponse.json(token);
}
