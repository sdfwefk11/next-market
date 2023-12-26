"use client";
import { cls } from "@/libs/utils";
import { useRouter, usePathname } from "next/navigation";

interface NaviProps {
  title?: string;
}

export default function Navi({ title }: NaviProps) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <nav
      className={cls(
        "text-lg font-medium py-4 z-50 fixed text-gray-700 border-2 top-0 flex items-center w-full max-w-xl mx-auto px-6 backdrop-blur-sm rounded-md border-gray-200",
        title === "홈" ? "py-7" : ""
      )}
    >
      {pathName === "/" ? null : (
        <button
          className="flex justify-start hover:bg-emerald-400 shadow-sm rounded-md transition-colors"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      <div className="fixed items-center justify-center flex mx-auto left-0 right-0 bg-opacity-0 pointer-events-none">
        <h1 className="text-orange-500 font-semibold text-lg -mt-1">{title}</h1>
      </div>
    </nav>
  );
}
