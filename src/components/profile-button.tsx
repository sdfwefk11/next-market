import { cls } from "@/libs/utils";
import Link from "next/link";

interface ProfileButton {
  children: React.ReactNode;
  href: string;
  title: string;
}

export default function ProfileButton({
  children,
  href,
  title,
}: ProfileButton) {
  return (
    <Link scroll={false} href={href}>
      <div className="flex items-center space-x-3 border mb-2 rounded-md  py-2 hover:bg-green-200 transition-colors">
        <div
          className={cls(
            "flex items-center ml-1 justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-sm cursor-pointer transition-colors hover:bg-emerald-600",
            title === "관심목록" ? "hover:text-red-500" : ""
          )}
        >
          {children}
        </div>
        <span className="text-sm font-medium text-gray-700 ">{title}</span>
      </div>
    </Link>
  );
}
