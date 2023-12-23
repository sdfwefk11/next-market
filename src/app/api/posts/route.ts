import { type NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import apiClient from "@/libs/server/client";
import { SessionData, sessionOption } from "@/libs/lib";

interface ProductId {
  params: { id: string };
}

export async function POST(req: Request, { params }: ProductId) {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  if (!session.isLoggedIn) return;
  const { question, latitude, longitude } = await req.json();
  const post = await apiClient.post.create({
    data: {
      question,
      latitude,
      longitude,
      user: {
        connect: {
          id: session.user.id,
        },
      },
    },
  });
  return NextResponse.json({ ok: true, post });
}

export async function GET(req: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  if (!session.isLoggedIn) return;
  const searchParams = req.nextUrl.searchParams;
  // or const { searchParams } = new URL(request.url) 백엔드 url 파라미터 가져오기 2가지 방법이 존재
  const latitude = Number(searchParams.get("latitude"));
  const longitude = Number(searchParams.get("longitude"));
  const posts = await apiClient.post.findMany({
    include: {
      user: { select: { name: true, id: true, avatar: true } },
      _count: { select: { wondering: true, answer: true } },
    },
    where: {
      latitude: {
        gte: latitude - 0.01, //특정값 사이의 데이터를 찾을때
        lte: latitude + 0.01,
      },
      longitude: {
        gte: longitude - 0.01,
        lte: longitude + 0.01,
      },
    },
  });
  return NextResponse.json({ ok: true, posts });
}
