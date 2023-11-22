import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import apiClient from "@/libs/server/client";

export async function GET(req: Request, res: Response) {
  console.log(res.headers);
  return NextResponse.json({ ok: true });
}
