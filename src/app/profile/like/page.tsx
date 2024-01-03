"use client";
import Item from "@/components/item";
import { Fav, Product, User } from "@prisma/client";
import useSWR from "swr";
import Link from "next/link";

interface FavCount extends Product {
  user: User;
  _count: { favs: number };
}

interface FavDetail extends Fav {
  product: FavCount;
}

interface MyFavs {
  ok: boolean;
  favs: FavDetail[];
}

export default function Like() {
  const { data } = useSWR<MyFavs>("/api/users/me/favs");
  return (
    <>
      {data
        ? data.favs.map((favs) => (
            <div key={favs.id} className="select-none">
              <Link scroll={false} href={`/products/${favs.productId}`}>
                <Item
                  createdAt={String(favs.product.createdAt)}
                  favsId={favs.product.id}
                  name={favs.product.name}
                  price={favs.product.price}
                  image={favs.product.image}
                  hearts={favs.product._count.favs}
                />
              </Link>
            </div>
          ))
        : null}
    </>
  );
}
