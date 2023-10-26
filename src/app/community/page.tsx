import CommunityHashTag from "@/components/community-hashtag";
import CommunityLike from "@/components/community-like";
import FloatingButton from "@/components/floating-button";
import Link from "next/link";
import RootLayout from "../layout";

export default function Community() {
  return (
    <RootLayout hasTabBar title="동네생활">
      <div className="space-y-8 px-4 -mt-5">
        {[1, 2, 3, 4, 5, 6].map((_, key) => (
          <Link key={key} href="/community/1">
            <div className="flex flex-col items-start cursor-pointer mt-5">
              <CommunityHashTag />
              <div className="mt-2 text-gray-700">
                <span className="text-orange-500 font-medium">Q.</span> What is
                the best mandu restaurant?
              </div>
              <div className="mt-5 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
                <span>정수</span>
                <span>18시간 전</span>
              </div>
              <CommunityLike />
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
    </RootLayout>
  );
}
