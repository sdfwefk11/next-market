import Link from "next/link";

interface ViewProfile {
  userName: string | undefined;
  userId: number | undefined;
}

export default function ViewProfile({ userName, userId }: ViewProfile) {
  return (
    <div className="flex items-center space-x-3 py-3 border-t border-b px-4">
      <div className="w-12 h-12 rounded-full bg-pink-300 shadow-md" />
      <div>
        <p className="text-sm font-medium text-gray-700">{userName}</p>
        <Link href={`/users/profiles/${userId}`}>
          <p className="text-xs font-medium text-gray-500 cursor-pointer">
            View profile &rarr;
          </p>
        </Link>
      </div>
    </div>
  );
}
