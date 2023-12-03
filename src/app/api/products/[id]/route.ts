import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

interface ProductId {
  params: { id: string };
}

export async function GET(req: NextRequest, { params }: ProductId) {
  const { id } = params;
  const product = await apiClient.product.findUnique({
    where: {
      id: +id,
    },
    include: { user: { select: { name: true, id: true } } },
  });
  if (!product) return NextResponse.error();
  console.log(product);
  return NextResponse.json({ ok: true, product });
}
