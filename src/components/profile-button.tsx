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
    <Link href={href}>
      <div className="flex flex-col items-center space-y-2">
        <div
          className={cls(
            "flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white shadow-sm cursor-pointer transition-colors hover:bg-blue-600",
            title === "관심목록" ? "hover:text-pink-500" : ""
          )}
        >
          {children}
        </div>
        <span className="text-sm font-medium text-gray-700">{title}</span>
      </div>
    </Link>
  );
}
