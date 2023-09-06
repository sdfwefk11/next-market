export default function Home() {
  return (
    <div className="bg-slate-400 py-10 px-10 grid gap-5">
      <div className="bg-white p-6 rounded-3xl shadow-xl">
        <span className="font-semibold text-2xl">Select Item</span>
        <div className="flex justify-between my-1">
          <span className="text-gray-500">Grey Chair</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold">$8</span>
        </div>
        <div className="mt-2 pt-2 border-t-2 border-dashed justify-between flex">
          <span>Total</span>
          <span className="font-semibold">$27</span>
        </div>
        <div className="text-center bg-blue-500 mt-5 p-2 rounded-xl w-1/2 m-auto text-white">
          Checkout
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
      <div className="bg-white p-10 rounded-2xl shadow-xl"></div>
    </div>
  );
}
