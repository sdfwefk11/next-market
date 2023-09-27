export default function Upload() {
  return (
    <div className="px-4 py-16">
      <div className="w-full flex items-center justify-center border-dashed border-2 border-gray-300 py-6 h-48 rounded-md group hover:border-blue-600 transition">
        <label className="text-blue-600 group-hover:text-blue-200  cursor-pointer transition group-hover:shadow-md rounded-full">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="file" className="hidden" />
        </label>
      </div>
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
        Upload product
      </button>
    </div>
  );
}
