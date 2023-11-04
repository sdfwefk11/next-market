import { NextResponse } from "next/server";

export async function POST(res: Response) {
  return NextResponse.json({ ok: true });
}
