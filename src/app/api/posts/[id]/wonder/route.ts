import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { SessionData, sessionOption } from "@/libs/lib";
import apiClient from "@/libs/server/client";

interface ProductId {
  params: { id: string };
}

export async function POST(req: NextRequest, { params }: ProductId) {
  const { id } = params;
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const pageExists = await apiClient.post.findUnique({
    where: {
      id: +id.toString(),
    },
    select: { id: true },
  });
  if (!pageExists) return;

  const alreadyExists = await apiClient.wondering.findFirst({
    where: { userId: session.user.id, postId: +id.toString() },
    select: {
      id: true,
    },
  });
  if (alreadyExists) {
    await apiClient.wondering.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await apiClient.wondering.create({
      data: {
        user: { connect: { id: session.user.id } },
        post: { connect: { id: +id.toString() } },
      },
    });
  }
  return NextResponse.json({ ok: true });
}
