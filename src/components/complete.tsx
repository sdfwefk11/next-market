interface SaledProps {
  completeTime: string;
  type: "판매" | "구매";
}

export default function Complete({ completeTime, type }: SaledProps) {
  return (
    <div className="flex absolute justify-center items-center h-[100px] max-w-xl w-full backdrop-blur-[1.5px] flex-col space-y-1 select-none ">
      <div className="flex justify-center items-center space-x-2">
        <svg
          className="w-4 h-4 text-green-500 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1 className="font-semibold">{completeTime}</h1>
      </div>
      <p className="font-medium text-sm">{`${type}완료 상품입니다.`}</p>
    </div>
  );
}
