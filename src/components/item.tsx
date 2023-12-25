interface ProductDetailData {
  createdAt?: string;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
  hearts?: string;
  key?: number;
}

type CreateAt = {
  year: string;
  month: string;
  date: string;
  finalTime: { time: string };
};

export default function Item({
  description,
  image,
  name,
  price,
  createdAt,
  hearts,
  key,
}: ProductDetailData) {
  const year = String(new Date(createdAt!).getFullYear());
  const month = String(new Date(createdAt!).getMonth());
  const date = String(new Date(createdAt!).getDate());

  abstract class Constr {
    private year: string;
    private month: string;
    protected time: string;
    constructor({ year, month }: Partial<CreateAt>) {
      this.year = year!;
      this.month = month!;
      this.time = `${year}. ${month}.`;
    }
  }

  class Time extends Constr {
    public finalDate: string;
    protected date: string;
    constructor({ year, month, date }: Partial<CreateAt>) {
      super({ year, month });
      this.date = date!;
      this.finalDate = `${this.time} ${this.date}`;
    }
  }
  const times = new Time({ year, month, date });
  return (
    <div className="flex flex-col space-y-5" key={key}>
      <div className="flex border-b px-4 py-3 cursor-pointer justify-between">
        <div className="flex space-x-4">
          <div className="w-14 h-14 bg-emerald-500 rounded-md" />
          <div className="pt-2 flex flex-col">
            <h3 className="text-sm font-medium text-gray-900">{name}</h3>
            <span className="text-xs text-gray-500">{times.finalDate}</span>
            <span className="font-md mt-1 text-gray-950">{price}원</span>
          </div>
        </div>
        <div className="flex items-end justify-end space-x-2">
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
  );
}
