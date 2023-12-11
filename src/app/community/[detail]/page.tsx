import RootLayout from "@/app/layout";
import CommunityHashTag from "@/components/community-hashtag";
import CommunityLike from "@/components/community-like";

export default function CommunityDetail() {
  return (
    <RootLayout canGoBack title={true}>
      <div className="-mt-5">
        <div className="px-4">
          <CommunityHashTag />
        </div>
        <div className="flex items-center space-x-3 py-3 border-t border-b px-4">
          <div className="w-12 h-12 rounded-full bg-pink-300 shadow-md" />
          <div>
            <p className="text-sm font-medium text-gray-700">Name</p>
            <p className="text-xs font-medium text-gray-500 cursor-pointer">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="mt-2 text-gray-700">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </div>
          <CommunityLike />
        </div>
        <div className="px-4 my-5">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500" />
            <div className="mt-0.5">
              <span className="text-sm block font-medium text-gray-700">
                정수
              </span>
              <span className="text-xs text-gray-500 block">18시간 전</span>
              <p className="text-gray-700 mt-2">
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 px-4">
          <textarea
            rows={4}
            placeholder="Answer this question!"
            className="mt-1 shadow-sm w-full rounded-md border border-gray-300 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600"
          />
          <button className="bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-2 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full">
            Reply
          </button>
        </div>
      </div>
    </RootLayout>
  );
}
