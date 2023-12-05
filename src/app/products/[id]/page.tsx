"use client";
import RootLayout from "@/app/layout";
import ViewProfile from "@/components/view-profie";
import { Product, User } from "@prisma/client";
import Link from "next/link";
import useSWR from "swr";

interface ProductId {
  params: { id: string };
}

interface UserIds extends Product {
  user: User;
}

interface ProductDetail {
  ok: true;
  product: UserIds;
  relatedProducts: Product[];
}

export default function Detail({ params }: ProductId) {
  const { data, isLoading } = useSWR<ProductDetail>(
    params.id ? `/api/products/${params.id}` : null
  );
  const userId = data?.product.user.id;
  return (
    <RootLayout canGoBack title>
      <div className="px-4">
        <div className="mb-6">
          <div className="h-96 bg-emerald-400" />
          <ViewProfile
            userName={isLoading ? "Loading..." : data?.product.user.name!}
            userId={userId}
          />
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.product.name}
            </h1>
            <p className="text-3xl mt-3 text-gray-900 block">
              {isLoading ? "Loading..." : `${data?.product.price}원`}
            </p>
            <p className="text-base my-6 text-gray-700">
              {data?.product.description}
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600 transition focus:outline-none shadow-md">
                판매자와 대화하기
              </button>
              <button className="p-3 flex items-center justify-center text-red-400 hover:bg-gray-100 hover:text-red-500 transition rounded-md">
                <svg
                  className="h-6 w-6 "
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t py-5">
          <h2 className="text-2xl font-bold text-gray-900">비슷한 상품</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {data?.relatedProducts.map((product) => (
              <>
                <Link href={`/products/${product.id}`}>
                  <div key={product.id}>
                    <div className="h-56 w-56 bg-yellow-500 mb-4" />
                    <h3 className="text-gray-700 -mb-1">{product.name}</h3>
                    <p className="text-sm font-medium text-gray-900">
                      {product.price}원
                    </p>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
