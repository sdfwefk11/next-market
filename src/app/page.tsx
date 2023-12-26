"use client";
import FloatingButton from "@/components/floating-button";
import useUser from "@/libs/client/useUser";
import Link from "next/link";
import Head from "./head";
import useSWR from "swr";
import Item from "@/components/item";
import { Product } from "@prisma/client";
import Navi from "@/components/navi";

interface ProductData {
  ok: boolean;
  product: ProductDetail[];
}
interface ProductDetail extends Product {
  _count: {
    favs: string;
  };
}

export default function Product({ params }: { params: { id: string } }) {
  const { user, isLoading } = useUser();
  const { data, mutate } = useSWR<ProductData>("/api/products");
  return (
    <>
      <Navi title="홈" />
      <Head title="홈" />
      <div>
        {data?.product?.map((result) => (
          <div key={result.id}>
            <Link scroll={false} href={`/products/${result.id}`}>
              <Item
                name={result.name}
                image={result.image}
                price={result.price}
                createdAt={String(result.createdAt)}
                hearts={+result._count.favs}
                favsId={result.id}
              />
            </Link>
          </div>
        ))}
      </div>
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
    </>
  );
}
