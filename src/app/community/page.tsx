"use client";
import CommunityHashTag from "@/components/community-hashtag";
import FloatingButton from "@/components/floating-button";
import Link from "next/link";
import useSWR from "swr";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Post, User } from "@prisma/client";
import useCoords from "@/libs/client/useCoords";
import Navi from "@/components/navi";

interface PostData extends Post {
  user: User;
  _count: { wondering: number; answer: number };
}

interface PostsResponse {
  ok: boolean;
  posts: PostData[];
}

export default function Community() {
  const { latitude, longitude } = useCoords();
  const { data } = useSWR<PostsResponse>(
    `/api/posts?latitude=${latitude}&longitude=${longitude}`
  );
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.push("/404page", { scroll: false });
    }
  }, [data, router]);
  return (
    <>
      <Navi title="동네생활" />
      <div className="space-y-8 px-4 -mt-5 mb-10">
        {data?.posts.map((posts) => (
          <Link scroll={false} key={posts.id} href={`/community/${posts.id}`}>
            <div className="flex flex-col items-start cursor-pointer mt-5 bg-blue-200 rounded-md px-3 hover:bg-blue-300 transition-colors">
              <CommunityHashTag />
              <div className="mt-2 text-gray-700">
                <span className="text-orange-500 font-medium mr-1">Q.</span>
                <span>{posts.question}</span>
              </div>
              <div className="mt-5 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
                <span>{posts.user.name}</span>
                <span>{String(posts.createdAt)}</span>
              </div>
              <div className="flex px-4 space-x-5 mt-3 text-gray-700 py-2.5 border-t border-orange-500 w-full">
                <span className="flex space-x-2 items-center text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>궁금해요 {posts._count.wondering}</span>
                </span>
                <span className="flex space-x-2 items-center text-sm">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>답변 {posts._count.answer}</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <FloatingButton href="/community/write">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </FloatingButton>
    </>
  );
}
