import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

interface ProductId {
  params: { id: string };
}

export async function POST(req: NextRequest, { params }: ProductId) {
  const { answer } = await req.json();
  const { id } = params;
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const pageExists = await apiClient.post.findUnique({
    where: {
      id: +id.toString(),
    },
    select: { id: true },
  });
  if (!pageExists) return;
  const createAnswer = await apiClient.answer.create({
    data: {
      user: { connect: { id: session.user.id } },
      post: { connect: { id: +id.toString() } },
      answer,
    },
    include: { user: true },
  });
  return NextResponse.json({ ok: true, answer: createAnswer });
}
