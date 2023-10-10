import RootLayout from "@/app/layout";
import ViewProfile from "@/components/view-profie";

export default function CommunityDetail() {
  return (
    <RootLayout canGoBack>
      <div>
        <div className="bg-orange-50">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 shadow-sm my-3 ml-4">
            동네질문
          </span>
        </div>
        <ViewProfile userName="Steve Jebs" />
        <div className="px-4">
          <div className="mt-2 text-gray-700">
            <span className="text-orange-500 font-medium">Q.</span> What is the
            best mandu restaurant?
          </div>
          <div className="flex space-x-5 mt-3 text-gray-700 py-2.5 border-t border-b-[1.5px] w-full shadow-sm">
            <span className="flex mt-1 space-x-1 items-center justify-center text-sm hover:text-emerald-500 transition-colors pb-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>궁금해요 1</span>
            </span>
            <span className="flex space-x-1 items-center justify-center text-sm hover:text-emerald-500 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>답변 1</span>
            </span>
          </div>
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
