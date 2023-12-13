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
  const findPostData = await apiClient.post.findUnique({
    where: { id: +id },
    include: {
      user: { select: { id: true, name: true, avatar: true } },
      _count: {
        select: {
          wondering: true,
          answer: true,
        },
      },
      answer: {
        select: {
          answer: true,
          id: true,
          createdAt: true,
          user: {
            select: {
              avatar: true,
              name: true,
            },
          },
        },
      },
    },
  });
  if (!findPostData)
    return NextResponse.json({
      inValid: "inValid id value please check id params",
    });
  return NextResponse.json({ ok: true, findPostData });
}
