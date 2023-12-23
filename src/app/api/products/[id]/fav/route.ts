import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import apiClient from "@/libs/server/client";
import { SessionData, sessionOption } from "@/libs/lib";

interface ProductId {
  params: { id: string };
}

export async function POST(req: NextRequest, { params }: ProductId) {
  const { id } = params;
  const session = await getIronSession<SessionData>(cookies(), sessionOption);
  const alreadyExists = await apiClient.fav.findFirst({
    // 맨 처음에는 좋아요을 누르지 않았으니 Fav model에 데이터가 없음
    where: {
      productId: +id.toString(), //7
      userId: session.user.id, //81
    },
  });
  if (alreadyExists) {
    //delete
    await apiClient.fav.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    //create
    await apiClient.fav.create({
      data: {
        user: {
          connect: {
            id: session.user.id,
          },
        },
        product: {
          connect: {
            id: +id.toString(),
          },
        },
      },
    });
  }
  return NextResponse.json({ ok: true });
}
