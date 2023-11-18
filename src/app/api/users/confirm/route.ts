import { withIronSessionApiRoute } from "iron-session/next";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request) {
  const { token } = await req.json();
  console.log(token);
  withIronSessionApiRoute(token, {
    cookieName: "carrotsession",
    password: "123123123131231253425",
  });
  return NextResponse.json(token);
}
