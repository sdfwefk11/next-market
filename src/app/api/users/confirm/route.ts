import { withIronSessionApiRoute } from "iron-session/next";
import { apiClient } from "@/libs/server/client";
import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { token } = await req.body;
  console.log(token);
  withIronSessionApiRoute(res.json, {
    cookieName: "carrotsession",
    password: "123123123131231253425",
  });
  return NextResponse.json(token);
}
