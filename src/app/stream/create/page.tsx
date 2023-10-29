import RootLayout from "@/app/layout";

export default function Create() {
  return (
    <RootLayout canGoBack title={true}>
      <div className="space-y-5 py-10 px-4">
        <div className="my-5">
          <label
            htmlFor="price"
            className="text-sm font-medium text-gray-700 mb-1 block"
          >
            Price
          </label>
          <div className="rounded-md shadow-sm relative flex items-center">
            <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              id="price"
              type="text"
              placeholder="0.00"
              className="appearance-none pl-7 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:ring-emerald-600"
            />
            <div className="absolute right-0 pointer-events-none pr-3 flex items-center justify-center">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">
            Description
          </label>
          <div>
            <textarea
              className="mt-1 shadow-sm w-full rounded-md border border-gray-300 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600"
              rows={4}
            />
          </div>
        </div>
        <button className="bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-5 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full">
          Go Live
        </button>
      </div>
    </RootLayout>
  );
}
