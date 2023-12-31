"use client";
import Item from "@/components/item";
import Loading from "@/components/loading";
import Navi from "@/components/navi";
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
      <Navi title="구매내역" />
      {data?.ok ? (
        data.purchases.map((buy) => (
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
      ) : (
        <div className="fixed top-0 bottom-0 justify-center items-center flex right-0 left-0">
          <Loading />
        </div>
      )}
    </>
  );
}
