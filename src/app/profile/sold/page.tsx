"use client";
import Item from "@/components/item";
import Navi from "@/components/navi";
import { Product, Sale, User } from "@prisma/client";
import useSWR from "swr";

interface FavCount extends Product {
  user: User;
  _count: { favs: number };
}

interface SalesDetail extends Sale {
  product: FavCount;
}

interface MySales {
  ok: boolean;
  sales: SalesDetail[];
}

export default function Sold() {
  const { data } = useSWR<MySales>("/api/users/me/sales");
  return (
    <>
      <Navi title="판매목록" />
      {data?.sales.map((sales) => (
        <div key={sales.id}>
          <Item
            hearts={sales.product._count.favs}
            name={sales.product.name}
            price={sales.product.price}
            createdAt={String(sales.product.createdAt)}
          />
        </div>
      ))}
    </>
  );
}
