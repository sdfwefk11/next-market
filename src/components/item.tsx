"use client";
import { cls } from "@/libs/utils";
import useSWR from "swr";

interface ProductDetailData {
  createdAt?: string;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
  hearts?: number;
  key?: number;
  favsId?: number;
}

type CreateAt = {
  year: string;
  month: string;
  date: string;
  hours: string;
};

interface myFavType {
  ok: boolean;
  myFav: boolean;
}

export default function Item({
  description,
  image,
  name,
  price,
  createdAt,
  hearts,
  key,
  favsId,
}: ProductDetailData) {
  const { data } = useSWR<myFavType>(
    String(favsId) ? `/api/products/${favsId}/myfav` : null
  );
  const year = String(new Date(createdAt!).getFullYear());
  const month = String(new Date(createdAt!).getMonth());
  const date = String(new Date(createdAt!).getDate());
  const hours = String(new Date(createdAt!).getHours());

  abstract class Constr {
    private year: string;
    private month: string;
    protected time: string;
    constructor({ year, month }: Partial<CreateAt>) {
      this.year = year!;
      this.month = month!;
      this.time = `${this.year}. ${this.month}.`;
    }
  }

  class Time extends Constr {
    readonly date: string;
    readonly hours: string;
    public finalDate: string;
    constructor({ year, month, date, hours }: Partial<CreateAt>) {
      super({ year, month });
      this.date = date!;
      this.hours = hours!;
      this.finalDate = `${this.time} ${this.date}`;
    }
  }
  const times = new Time({ year, month, date, hours });
  const currentDay = String(new Date().getDate()); // 오늘
  const currentHours = String(new Date().getHours()); //현재 시간
  const thisTime = Number(currentHours) - Number(hours); // xx시간 전 구현 변수

  return (
    <div className="flex flex-col border my-1 rounded-lg border-gray-200 shadow bg-white hover:bg-gray-100 transition-colors">
      <div className="flex px-4 py-3 cursor-pointer justify-between">
        <div className="flex space-x-4 justify-center items-center">
          <div className="w-14 h-14 bg-emerald-500 rounded-md shadow" />
          <div className=" flex flex-col">
            <div className="flex items-center space-x-3">
              {currentDay === times.date ? (
                <div className="flex justify-center items-center space-x-1 text-xs font-bold text-gray-500">
                  <svg
                    className="w-3 h-3 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h4>{thisTime === 0 ? "방금 전" : `${thisTime}시간 전`}</h4>
                </div>
              ) : (
                <h3 className="text-xs font-normal text-gray-500">
                  {times.finalDate}
                </h3>
              )}
            </div>
            <span className="text-lg font-semibold text-gray-900 tracking-tight pt-2">
              {name}
            </span>
            <span className="font-normal text-gray-950">{price}원</span>
          </div>
        </div>
        <div className="flex justify-between flex-col">
          <h4 className="flex font-bold text-red-600 animate-pulse shadow rounded-full bg-gray-100 justify-center items-center">
            {currentDay === times.date ? "New" : ""}
          </h4>
          <div className="flex items-end justify-end space-x-2">
            <div
              className={cls(
                "flex space-x-0.5 items-center text-sm",
                hearts === 0 ? "text-gray-600" : " text-red-500"
              )}
            >
              <svg
                className="w-4 h-4"
                fill={data?.myFav ? "red" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
              <span>{hearts}</span>
            </div>
            <div className="flex space-x-0.5 items-center text-sm text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
