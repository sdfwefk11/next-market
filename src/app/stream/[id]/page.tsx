import RootLayout from "@/app/layout";
import Navi from "@/components/navi";

export default function StreamDetail() {
  return (
    <>
      <Navi />
      <div className="px-4">
        <div className="w-full bg-red-300 aspect-video rounded-md shadow-sm" />
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <p className="text-3xl mt-3 text-gray-900 block">$140</p>
          <p className="text-base my-6 text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
        </div>
        <div className="pb-16 h-[50vh] overflow-y-scroll">
          <div className="mt-6 -mb-3">
            <h3 className="text-2xl font-bold text-gray-900">Live Chat</h3>
          </div>
          <div className="space-y-5 py-10 px-4">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-amber-300">
                <p>Hi how much are you selling them for?</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 space-x-reverse flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-green-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-green-300 flex justify-end">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-amber-300">
                <p>Okay</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 space-x-reverse flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-green-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-green-300 flex justify-end">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-amber-300">
                <p>Okay</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 space-x-reverse flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-green-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-green-300 flex justify-end">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-amber-300">
                <p>Okay</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 space-x-reverse flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-green-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-green-300 flex justify-end">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-amber-300">
                <p>Okay</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 space-x-reverse flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-green-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-green-300 flex justify-end">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-amber-300">
                <p>Okay</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 space-x-reverse flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-green-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-green-300 flex justify-end">
                <p>I want ￦20,000</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 rounded-full bg-amber-300 shadow-sm" />
              <div className="w-auto text-gray-700 rounded-md border p-1 border-amber-300">
                <p>Okay</p>
              </div>
            </div>
          </div>
          <div className="fixed w-full mx-auto max-w-md bottom-3 inset-x-0">
            <div className="flex items-center relative">
              <input
                type="text"
                className="shadow-sm rounded-full w-full border-[1.5px] border-gray-300 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 pr-12"
              />
              <div className="absolute inset-y-0 flex py-1.5 right-0 pr-[5px] cursor-pointer">
                <button className="flex items-center bg-emerald-500  hover:bg-emerald-600 transition-colors justify-center rounded-full text-white p-2.5 pt-[6.4px] shadow-sm select-none focus:ring-2 focus:ring-offset-[1.5px] focus:ring-emerald-600">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
