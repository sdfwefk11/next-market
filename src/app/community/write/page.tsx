export default function Write() {
  return (
    <form className="px-4 py-10">
      <textarea
        rows={4}
        placeholder="Ask a question!"
        className="mt-1 shadow-sm w-full rounded-md border border-gray-300 focus:ring-emerald-600 focus:outline-none focus:border-emerald-600"
      />
      <button className="bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-2 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full">
        Submit
      </button>
    </form>
  );
}
