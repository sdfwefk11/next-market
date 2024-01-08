"use client";
import Navi from "@/components/navi";
import { Stream, User } from "@prisma/client";
import useSWR from "swr";

interface StreamInfo extends Stream {
  user: User;
}

interface StreamResponse {
  ok: boolean;
  getStream: StreamInfo;
}

export default function StreamDetail({ params }: { params: { id: string } }) {
  const { data, isLoading } = useSWR<StreamResponse>(
    params.id ? `/api/streams/${params.id}` : null
  );
  return (
    <>
      <Navi title={data?.getStream.name} />
      <div className="px-4">
        <div className="w-full bg-red-300 aspect-video rounded-md shadow-sm" />
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {data?.getStream.name}
          </h1>
          <p className="text-3xl mt-3 text-gray-900 block">
            {data?.getStream.price}
          </p>
          <p className="text-base my-6 text-gray-700">
            {data?.getStream.description}
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
