"use client";
import Item from "@/components/item";
import { Product, Purchase, User } from "@prisma/client";
import useSWR from "swr";

interface ProductDetail extends Product {
  user: User;
  _count: { favs: number };
}

interface ProductAndPurchase extends Purchase {
  product: ProductDetail;
}

interface PurchasesDataType {
  ok: boolean;
  purchases: ProductAndPurchase[];
}

export default function Buy() {
  const { data } = useSWR<PurchasesDataType>("/api/users/me/purchases");
  return (
    <>
      {data?.ok
        ? data.purchases.map((buy) => (
            <div key={buy.id}>
              <Item
                createdAt={String(buy.product.createdAt)}
                image={buy.product.image}
                price={buy.product.price}
                name={buy.product.name}
                buyAt={String(buy.createdAt)}
                hearts={buy.product._count.favs}
                favsId={buy.productId}
              />
            </div>
          ))
        : null}
    </>
  );
}
