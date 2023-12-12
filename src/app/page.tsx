"use client";
import FloatingButton from "@/components/floating-button";
import useUser from "@/libs/client/useUser";
import Link from "next/link";
import Head from "./head";
import RootLayout from "./layout";
import useSWR from "swr";
import Item from "@/components/item";
import { Product } from "@prisma/client";

interface ProductData {
  ok: boolean;
  product: ProductDetail[];
}
interface ProductDetail extends Product {
  _count: {
    favs: string;
  };
}

export default function Product() {
  const { user, isLoading } = useUser();
  const { data, mutate } = useSWR<ProductData>("/api/products");
  return (
    <RootLayout hasTabBar title="홈">
      <Head title={"홈"} />
      {data?.product?.map((result) => (
        <div key={result.id}>
          <Link href={`/products/${result.id}`}>
            <Item
              name={result.name}
              image={result.image}
              price={result.price}
              createdAt={String(result.createdAt)}
              hearts={result._count.favs}
            />
          </Link>
        </div>
      ))}
      <FloatingButton href="/products/upload">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </FloatingButton>
    </RootLayout>
  );
}
