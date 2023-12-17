import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import apiClient from "@/libs/server/client";
import { SessionData, sessionOption } from "@/libs/lib";

interface ProductId {
  params: { id: string };
}

export async function POST(req: Request, { params }: ProductId) {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const { question } = await req.json();
  const post = await apiClient.post.create({
    data: {
      question,
      user: {
        connect: {
          id: session.user.id,
        },
      },
    },
  });
  return NextResponse.json({ ok: true, post });
}

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  if (!session.isLoggedIn) return;
  const posts = await apiClient.post.findMany({
    include: {
      user: { select: { name: true, id: true, avatar: true } },
      _count: { select: { wondering: true, answer: true } },
    },
  });
  return NextResponse.json({ ok: true, posts });
}
