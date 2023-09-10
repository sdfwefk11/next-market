export default function Home() {
  const item = [
    { product: "Chair", price: 29, id: 1 },
    { product: "Table", price: 44, id: 2 },
    { product: "Keyboard", price: 100, id: 3 },
  ];
  return (
    <div className="bg-slate-400 py-10 px-20 grid gap-5">
      <div className="bg-white p-5 rounded-3xl shadow-xl">
        <span className="font-semibold text-2xl">Select Item</span>
        <ul>
          {item.map((items) => (
            <>
              <div
                key={items.id}
                className="flex justify-between my-1 rounded-sm m-3 p-1 odd:bg-amber-100 even:bg-sky-100"
              >
                <span className="text-gray-500">{items.product}</span>
                <span className="font-semibold">${items.price}</span>
              </div>
            </>
          ))}
        </ul>
        <ul>
          {["a", "b", "c", "d", ""].map((items, key) => (
            <li className="bg-cyan-500 py-2 empty:hidden" key={key}>
              {items}
            </li>
          ))}
        </ul>
        <div className="mt-2 pt-2 border-t-2 border-dashed justify-between flex">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">${}</span>
        </div>
        <button className="text-white bg-blue-500 mt-5 p-2 rounded-lg m-auto w-72 flex justify-center hover:bg-teal-600 active:bg-yellow-500">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-5 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-5 relative -top-5 bg-white">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center -mb-2">
              <span className="text-zinc-400 text-sm">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-lime-400 rounded-full" />
            <div className="flex flex-col items-center -mb-2">
              <span className="text-zinc-400 text-sm">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative -mt-12 -mb-4 flex flex-col items-center ">
            <span className="text-xl font-medium">Tony Molloy</span>
            <span className="text-sm text-zinc-400">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-3xl shadow-xl">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-full">💖</span>
          </div>
        </div>
        <div className="bg-fuchsia-600 h-72 mb-3" />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Swoon Lounge</span>
          <span className="text-zinc-400 -mt-1 mb-2">Chair</span>
          <div className="mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-cyan-500 focus:ring-2 ring-offset-2 ring-cyan-500 transition" />
              <button className="w-5 h-5 rounded-full bg-fuchsia-500 focus:ring-2 ring-offset-2 ring-fuchsia-500 transition" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-100 items-center flex justify-center aspect-square w-8 rounded-lg">
                -
              </button>
              <span className="font-extrabold">1</span>
              <button className="bg-blue-100 items-center flex justify-center aspect-square w-8 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">$450</span>
            <button className="bg-blue-500 text-white font-light text-sm rounded-lg px-11 py-2.5">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-xl"></div>
    </div>
  );
}
