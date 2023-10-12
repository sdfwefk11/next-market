"use client";
import { cls } from "@/libs/utils";

interface HeaderTabBar {
  canGoBack?: boolean;
  children: React.ReactNode;
}

export default function HeaderTabBar({ canGoBack, children }: HeaderTabBar) {
  return (
    <div
      className={cls(
        "bg-white text-lg font-medium py-4 fixed text-gray-700 border-b border-l border-r top-0 flex items-center w-full max-w-xl mx-auto px-6",
        !canGoBack ? "justify-center" : ""
      )}
    >
      {children}
    </div>
  );
}
