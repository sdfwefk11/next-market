import RootLayout from "@/app/layout";

export default function Detail() {
  return (
    <RootLayout canGoBack>
      <div className="px-4">
        <div className="mb-6">
          <div className="h-96 bg-emerald-400" />
          <div className="flex items-center space-x-3 py-3 border-t border-b">
            <div className="w-12 h-12 rounded-full bg-pink-300 shadow-md" />
            <div className="cursor-pointer">
              <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <p className="text-3xl mt-3 text-gray-900 block">$140</p>
            <p className="text-base my-6 text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600 transition focus:outline-none shadow-md">
                Talk to seller
              </button>
              <button className="p-3 flex items-center justify-center text-red-400 hover:bg-gray-100 hover:text-red-500 transition rounded-md">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t py-5">
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-56 w-56 bg-yellow-500 mb-4" />
                <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
                <p className="text-sm font-medium text-gray-900">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="mb-6">
          <div className="h-96 bg-emerald-400" />
          <div className="flex items-center space-x-3 py-3 border-t border-b">
            <div className="w-12 h-12 rounded-full bg-pink-300 shadow-md" />
            <div className="cursor-pointer">
              <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
              <p className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </p>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <p className="text-3xl mt-3 text-gray-900 block">$140</p>
            <p className="text-base my-6 text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 hover:bg-orange-600 transition focus:outline-none shadow-md">
                Talk to seller
              </button>
              <button className="p-3 flex items-center justify-center text-red-400 hover:bg-gray-100 hover:text-red-500 transition rounded-md">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t py-5">
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-56 w-56 bg-yellow-500 mb-4" />
                <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
                <p className="text-sm font-medium text-gray-900">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
