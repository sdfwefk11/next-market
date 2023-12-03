"use client";
import FloatingButton from "@/components/floating-button";
import useUser from "@/libs/client/useUser";
import Link from "next/link";
import Head from "./head";
import RootLayout from "./layout";
import useSWR from "swr";
import Item from "@/components/item";

interface ProductData {
  ok: boolean;
  product: ProductDetail[];
}
interface ProductDetail {
  createdAt: string;
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  updatedAt: string;
  userId: number;
}

export default function Product() {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductData>("/api/products");
  console.log(data);
  return (
    <RootLayout hasTabBar title="홈">
      <Head title={"홈"} />
      <Link href="/products/4">
        {data?.product?.map((result, index) => (
          <Item
            key={index}
            name={result.name}
            image={result.image}
            price={result.price}
            createdAt={result.createdAt}
          />
        ))}
      </Link>
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
