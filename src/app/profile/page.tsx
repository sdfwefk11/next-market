"use client";
import Navi from "@/components/navi";
import ProfileButton from "@/components/profile-button";
import useUser from "@/libs/client/useUser";
import useSWR from "swr";
import Link from "next/link";
import { Review, User } from "@prisma/client";
import { cls } from "@/libs/utils";
import Loading from "@/components/loading";

interface ReviewBy extends Review {
  createBy: User;
}

interface Reviews {
  ok: boolean;
  reviews: ReviewBy[];
}

export default function Profile() {
  const { user } = useUser();
  const { data } = useSWR<Reviews>("/api/review");
  return (
    <div>
      <Navi title="마이페이지" />
      <div className="flex items-center space-x-3 border-b pb-5 px-4 mt-2">
        <div className="w-16 h-16 rounded-full bg-purple-400" />
        <div className="flex flex-col">
          <span className="font-bold text-gray-900 ml-1 mb-2">
            {user?.name}
          </span>
          <Link scroll={false} href="profile/edit">
            <span className="font-sm text-gray-700 hover:bg-zinc-200 hover:text-emerald-500 transition-colors bg-zinc-100 rounded-md px-2 py-1 select-none">
              Edit profile &rarr;
            </span>
          </Link>
        </div>
      </div>
      <div className="items-start justify-center px-4 mt-3 mb-3 select-none">
        <ProfileButton href="/profile/myproducts" title="내상품">
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="skyBlue"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z"
            />
          </svg>
        </ProfileButton>
        <ProfileButton href="/profile/sold" title="판매내역">
          <svg
            className="w-6 h-6"
            fill="skyBlue"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </ProfileButton>
        <ProfileButton href="/profile/buy" title="구매내역">
          <svg
            className="w-6 h-6"
            fill="skyBlue"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            ></path>
          </svg>
        </ProfileButton>
        <ProfileButton href="/profile/like" title="찜목록">
          <svg
            className="w-6 h-6"
            fill="skyBlue"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </ProfileButton>
      </div>
      {/* 댓글기능 */}
      <div className={cls(data ? "px-10" : "")}>
        {data ? (
          data.reviews.map((reviews) => (
            <div
              key={reviews.id}
              className="flex mb-3 border py-3 pl-3 space-x-1 rounded-md"
            >
              <div className="flex flex-col justify-center items-center space-y-2">
                <div className="w-12 h-12 bg-emerald-400 rounded-full" />
                <p className="text-gray-700 ml-2">{reviews.review}</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-gray-800 pl-1">
                  {reviews.createBy.name}
                </h4>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={cls(
                        "h-5 w-5",
                        reviews.score >= star
                          ? "text-yellow-400"
                          : "text-gray-400"
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="fixed w-full max-w-xl justify-center flex bottom-72 mx-auto"></div>
        )}
      </div>
    </div>
  );
}
