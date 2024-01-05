"use client";
import FloatingButton from "@/components/floating-button";
import useUser from "@/libs/client/useUser";
import Link from "next/link";
import Head from "./head";
import useSWR from "swr";
import Item from "@/components/item";
import { Product, Sale } from "@prisma/client";
import Navi from "@/components/navi";
import Loading from "@/components/loading";

interface ProductData {
  ok: boolean;
  product: ProductDetail[];
}
interface ProductDetail extends Product {
  _count: {
    favs: string;
    sales: number;
  };
  sales: Sale;
}

export default function Product({ params }: { params: { id: string } }) {
  const { user, isLoading } = useUser();
  const { data, mutate } = useSWR<ProductData>("/api/products");
  return (
    <div className="mb-4 select-none">
      <Navi title="홈" />
      <Head title="홈" />
      {data ? (
        data.product?.map((result) => (
          <div key={result.id}>
            <Link
              scroll={false}
              href={result._count.sales === 0 ? `/products/${result.id}` : ""}
            >
              <Item
                name={result.name}
                image={result.image}
                price={result.price}
                createdAt={String(result.createdAt)}
                hearts={+result._count.favs}
                favsId={result.id}
                sold={result._count.sales}
                viewCount={result.viewCount}
              />
            </Link>
          </div>
        ))
      ) : (
        <div className="fixed top-0 bottom-0 justify-center items-center flex right-0 left-0">
          <Loading />
        </div>
      )}
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
    </div>
  );
}
