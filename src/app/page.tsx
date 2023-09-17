export default function Home() {
  const item = [
    { product: "Chair", price: 29, id: 1 },
    { product: "Table", price: 44, id: 2 },
    { product: "Keyboard", price: 100, id: 3 },
  ];
  return (
    <>
      <div className="bg-slate-400 py-10 px-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 place-content-center landscape:bg-yellow-500 portrait:bg-purple-600 dark">
        <div className="bg-white xl:hover:bg-blue-500 p-5 rounded-3xl shadow-xl">
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
          <button className="text-white bg-blue-500 mt-5 p-2 rounded-lg mx-auto w-11/12 block justify-center hover:bg-teal-600 active:bg-yellow-500 transition">
            Checkout
          </button>
        </div>
        <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
          <div className="bg-blue-500 p-5 pb-14 md:pb-32 lg:pb-40">
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
            <div className="relative -mt-12 -mb-4 flex flex-col items-center group">
              <span className="text-xl font-medium group-hover:text-pink-400 transition">
                Tony Molloy
              </span>
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
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden dark:bg-black">
          <form className="flex-col space-y-2 flex items-center justify-center md:mt-36 xl:mt-36 lg:-mt-0 pt-10 pb-10">
            <div className="flex flex-col items-center justify-center">
              <input
                placeholder="아이디"
                required
                type="text"
                className="rounded-md peer border-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <span className="hidden peer-invalid:block peer-invalid:text-red-500">
                This input invalid
              </span>
              <span className="hidden peer-hover:block peer-hover:text-red-500">
                아이디는 최소 5자리
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <input
                placeholder="비밀번호"
                required
                type="password"
                className="rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 peer"
              />
              <span className="peer-invalid:text-red-500 peer-valid:hidden">
                This input invalid
              </span>
              <span className="hidden peer-hover:block text-red-500">
                비밀번호는 최소 10자리
              </span>
            </div>
            <input
              value="로그인"
              type="submit"
              className="rounded-md bg-gray-100 border-2 w-3/12 border-gray-300 cursor-pointer focus:outline-none focus:border-blue-500"
            />
          </form>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-xl xl:col-span-2 2xl:col-span-1">
          <details className="flex open:bg-zinc-200">
            <summary className="select-none cursor-pointer">
              광란의 비약
            </summary>
            <span className="selection:text-green-500">재생의 오일 x 1</span>
            <span>맑은 액체 시약 x 5</span>
            <span>유령 버섯 x 2</span>
            <span>전투의 흔적 x 3</span>
            <span>삼나무 수액 x 5</span>
          </details>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-xl xl:col-span-2 2xl:col-span-5">
          <input
            type="file"
            className="file:bg-pink-500 file:font-semibold file:rounded-xl file:border-0 file:px-5 file:transition file:cursor-pointer file:text-yellow-200 file:mx-2 file:hover:text-pink-500 file:hover:bg-yellow-200 file:hover:border file:hover:border-pink-500"
          />
          <p className="first-letter:text-6xl first-letter:hover:text-purple-400 first-line:text-blue-500">
            sdfsdfefsd sdfsdf sdfsdf sfsd
          </p>
        </div>
      </div>
    </>
  );
}
