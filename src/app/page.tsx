"use client";
import FloatingButton from "@/components/floating-button";
import useUser from "@/libs/client/useUser";
import Link from "next/link";
import Head from "./head";
import RootLayout from "./layout";
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
type CreateAt = {
  year: string;
  month: string;
  date: string;
  func: ({ 연, 월, 일 }: CreateTime) => void;
};

interface CreateTime {
  연: string;
  월: string;
  일: string;
}

export default function Product() {
  const { user, isLoading } = useUser();
  const { data, mutate } = useSWR<ProductData>("/api/products");
  console.log(
    data?.product.map((res) => {
      const year = String(new Date(res.createdAt).getFullYear());
      const month = String(new Date(res.createdAt).getMonth());
      const date = String(new Date(res.createdAt).getDate());
      const time: CreateAt = {
        year,
        month,
        date,
        func: function ({ 연, 월, 일 }) {
          const year = this.year;
          const month = this.month;
          const date = this.date;
          return `${year + 연} ${month + 월} ${date + 일}`;
        },
      };
      return time.func({ 연: "년", 월: "월", 일: "일" });
    })
  );
  return (
    <>
      <Navi title="홈" />
      <Head title="홈" />
      <div className="grid-cols-2 grid">
        {data?.product?.map((result) => (
          <div key={result.id}>
            <Link scroll={false} href={`/products/${result.id}`}>
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
