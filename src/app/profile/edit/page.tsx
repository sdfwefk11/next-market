import RootLayout from "@/app/layout";

export default function Edit() {
  return (
    <RootLayout canGoBack>
      <div className="px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-orange-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer border-gray-300 py-2 px-3 border rounded-md bg-emerald-500 shadow-sm text-sm text-white transition-colors hover:bg-emerald-600 hover:text-orange-300"
          >
            Change Photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Adress
          </label>
          <input
            id="email"
            className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:ring-emerald-600"
            type="email"
            required
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 bg-gray-50 border-gray-300 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="phone"
              type="number"
              className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-emerald-600 focus:ring-emerald-600 rounded-l-none"
              required
            />
          </div>
        </div>
        <button className="bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-4 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full">
          Update Profile
        </button>
      </div>
    </RootLayout>
  );
}
