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
  const product = await apiClient.product.findUnique({
    where: {
      id: +id,
    },
    include: { user: { select: { name: true, id: true, avatar: true } } },
  });
  if (!product) return NextResponse.error();
  // const productName = "제로 콜라";
  // console.log(
  //   productName.split(" ").map((word) => ({ name: { contains: word } }))
  // ); 문자열을 공백 기준으로 split 해서 각각 name: contains 이라는 객체에 담아 배열에 저장
  const terms = product.name.split(" ").map((word) => ({
    name: {
      contains: word,
    },
  }));
  const relatedProducts = await apiClient.product.findMany({
    where: {
      OR: terms,
      NOT: { id: product.id },
    },
  });
  const isLiked = Boolean(
    await apiClient.fav.findFirst({
      where: {
        productId: product.id,
        userId: session.user.id,
      },
      select: { id: true },
    })
  );
  return NextResponse.json({ ok: true, product, relatedProducts, isLiked });
}
