interface ViewProfile {
  userName: string;
}

export default function ViewProfile({ userName }: ViewProfile) {
  return (
    <div className="flex items-center space-x-3 py-3 border-t border-b px-4">
      <div className="w-12 h-12 rounded-full bg-pink-300 shadow-md" />
      <div className="cursor-pointer">
        <p className="text-sm font-medium text-gray-700">{userName}</p>
        <p className="text-xs font-medium text-gray-500">View profile &rarr;</p>
      </div>
    </div>
  );
}
