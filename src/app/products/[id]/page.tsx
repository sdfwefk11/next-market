"use client";
import RootLayout from "@/app/layout";
import Loading from "@/components/loading";
import Navi from "@/components/navi";
import ProfileLoading from "@/components/profile-loading";
import useMutation from "@/libs/client/useMutation";
import useUser from "@/libs/client/useUser";
import { cls } from "@/libs/utils";
import { Product } from "@prisma/client";
import Link from "next/link";
import useSWR, { useSWRConfig } from "swr";

interface ProductId {
  params: { id: string };
}

interface UserIds extends Product {
  user: { avatar: string; id: number; name: string };
}

interface ProductDetail {
  ok: true;
  product: UserIds;
  relatedProducts: Product[];
  isLiked: boolean;
}

export default function Detail({ params }: ProductId) {
  const { user, isLoading: useUserLoading } = useUser();
  const { mutate: unboundMutate } = useSWRConfig();
  const {
    data,
    isLoading,
    mutate: boundMutate,
  } = useSWR<ProductDetail>(params.id ? `/api/products/${params.id}` : null);
  console.log(data);
  const [toggleFav, { loading }] = useMutation(
    `/api/products/${params.id}/fav`
  );
  const onFavClick = () => {
    if (!data) return console.log("No data");
    boundMutate((prev) => prev && { ...prev, isLiked: !data.isLiked }, false);
    //unboundMutate("/api/users/me", (prev: any) => ({ ok: !prev.ok }), false); 전체 데이터를 mutate할때, 예를 들어 좋아요 버튼을 누르면 로그인 화면으로 돌아가게 하고싶을때
    if (!loading) {
      toggleFav({});
    }
  };
  return (
    <>
      <Navi title={data?.product.name} />
      <div className="px-4">
        <div className="mb-6">
          <div className="h-96 bg-emerald-400" />
          <div className="flex items-center space-x-3 py-3 border-t border-b px-4">
            <div className="w-12 h-12 rounded-full bg-pink-300 shadow-md" />
            <div>
              {isLoading ? (
                <ProfileLoading />
              ) : (
                <p className="text-sm font-medium text-gray-700">
                  {data?.product.user.name}
                </p>
              )}
              <Link
                scroll={false}
                href={`/users/profiles/${data?.product.user.id}`}
              >
                <p className="text-xs font-medium text-gray-500 cursor-pointer">
                  View profile &rarr;
                </p>
              </Link>
            </div>
          </div>
          <div
            className={cls(
              isLoading ? "my-5 flex flex-col items-center" : "mt-3"
            )}
          >
            {isLoading ? (
              <Loading />
            ) : (
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {data?.product.name}
                </h1>
                <p className="text-3xl mt-3 text-gray-900 block">
                  {`${data?.product.price}원`}
                </p>
                <p className="text-base my-6 text-gray-700">
                  {data?.product.description}
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between space-x-2">
            <button className="flex-1 py-3 rounded-md focus:ring-offset-2 shadow-md text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium transition-colors">
              판매자와 대화하기
            </button>
            <button
              onClick={onFavClick}
              className={cls(
                "p-3 flex items-center justify-center  transition rounded-md",
                data?.isLiked
                  ? "hover:bg-gray-100 text-red-500"
                  : "text-red-400 hover:bg-gray-100 hover:text-red-500"
              )}
            >
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill={data?.isLiked ? "red" : "white"}
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
        <div className="border-t py-5">
          <h2 className="text-2xl font-bold text-gray-900">비슷한 상품</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {data?.relatedProducts.map((product) => (
              <div key={product.id}>
                <Link scroll={false} href={`/products/${product.id}`}>
                  <div className="h-56 w-56 bg-yellow-500 mb-4" />
                  <h3 className="text-gray-700 -mb-1">{product.name}</h3>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}원
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
