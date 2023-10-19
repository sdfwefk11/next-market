import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ test: "1", id: "1" });
}
