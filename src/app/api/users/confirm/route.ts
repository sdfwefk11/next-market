import { withIronSessionApiRoute } from "iron-session/next";
import { apiClient } from "@/libs/server/client";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  const { token } = await req.json();
  const exists = await apiClient.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!exists) {
    NextResponse.error();
  }

  console.log(token);
  res.status;
  return NextResponse.json(token);
}
