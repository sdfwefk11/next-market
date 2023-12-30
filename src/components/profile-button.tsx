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
      <div className="group flex items-center space-x-3 border mb-2 py-2 transition-colors hover:bg-sky-400 hover:ring-sky-400 ring-slate-900/5 ring-1 stroke-sky-400 rounded-md shadow bg-slate-50 ">
        <div
          className={cls(
            "flex ml-1 justify-center w-14 h-14 cursor-pointer transition-colors group-hover:stroke-white  text-sky-400 items-center",
            title === "찜목록"
              ? "group-hover:text-red-500"
              : "group-hover:text-white"
          )}
        >
          {children}
        </div>
        <span className="text-sm font-medium text-slate-900 group-hover:text-white">
          {title}
        </span>
      </div>
    </Link>
  );
}
