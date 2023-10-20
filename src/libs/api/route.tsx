import { apiClient } from "@/libs/client";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    ok: true,
    data: apiClient.user.create({ data: { id: 2, name: "wow" } }),
    data2: apiClient.user.create({ data: { id: 3, name: "wow12" } }),
  });
}
