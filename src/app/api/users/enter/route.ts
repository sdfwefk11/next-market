import withHandler from "@/libs/server/withHandler";
import { NextResponse } from "next/server";

async function POST() {
  return NextResponse.json({ ok: true });
}

export default withHandler("POST", POST);
