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
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const findPostData = await apiClient.post.findUnique({
    where: { id: +id.toString() },
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
  const isWondering = Boolean(
    await apiClient.wondering.findFirst({
      where: {
        postId: +id.toString(),
        userId: session.user.id,
      },
    })
  );
  return NextResponse.json({ ok: true, findPostData, isWondering });
}
