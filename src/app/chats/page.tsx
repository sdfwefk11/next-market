import Link from "next/link";
import RootLayout from "../layout";

export default function Chats() {
  return (
    <RootLayout title="채팅" hasTabBar>
      <div className="divide-y-[1px] -mt-4">
        {[1, 2, 3, 4, 5, 6].map((_, key) => (
          <Link key={key} href="/chats/1">
            <div className="px-4 flex items-center space-x-3 py-4">
              <div className="w-10 h-10 rounded-full bg-pink-300 shadow-md" />
              <div className="cursor-pointer">
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-sm text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </RootLayout>
  );
}
