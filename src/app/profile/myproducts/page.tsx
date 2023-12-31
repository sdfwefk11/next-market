"use client";
import Item from "@/components/item";
import { Product } from "@prisma/client";
import Link from "next/link";
import useSWR from "swr";

interface MyProductAndFavCount extends Product {
  _count: { favs: number };
}

interface MyProductType {
  ok: boolean;
  myProducts: MyProductAndFavCount[];
}

export default function MyProducts() {
  const { data } = useSWR<MyProductType>("/api/users/me/myproducts");
  return (
    <>
      {data
        ? data.myProducts.map((products) => (
            <div key={products.id} className="select-none">
              <Link scroll={false} href={`/products/${products.id}`}>
                <Item
                  createdAt={String(products.createdAt)}
                  favsId={products.id}
                  name={products.name}
                  price={products.price}
                  image={products.image}
                  hearts={products._count.favs}
                  viewCount={products.viewCount}
                />
              </Link>
            </div>
          ))
        : null}
    </>
  );
}
