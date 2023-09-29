export default function Chats() {
  return (
    <div className="py-10 divide-y-[1px]">
      {[1, 2, 3, 4, 5, 6].map((_, key) => (
        <div key={key} className="px-4 flex items-center space-x-3 py-4">
          <div className="w-10 h-10 rounded-full bg-pink-300 shadow-md" />
          <div className="cursor-pointer">
            <p className="text-gray-700">Steve Jebs</p>
            <p className="text-sm text-gray-500">
              See you tomorrow in the corner at 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
