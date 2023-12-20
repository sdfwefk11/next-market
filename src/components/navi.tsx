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
    <>
      <nav
        className={cls(
          "bg-white text-lg font-medium py-4 fixed text-gray-700 border-b border-l border-r top-0 flex items-center w-full max-w-xl mx-auto px-6",
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
      </nav>
      <div className="fixed top-4 w-full max-w-xl flex justify-center pointer-events-none items-center">
        <h1 className="text-orange-500 font-semibold text-lg -mt-1">{title}</h1>
      </div>
    </>
  );
}
