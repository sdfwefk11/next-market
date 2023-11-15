import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextResponse) {
  const { token } = await req.json();
  console.log(token);
  res.status;
  return NextResponse.json(token);
}
