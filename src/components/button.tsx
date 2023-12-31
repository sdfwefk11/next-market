import { cls } from "../libs/utils";
import ProfileLoading from "./profile-loading";

interface ButtonProps {
  large?: boolean;
  text?: string;
  loading?: boolean;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  loading,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cls(
        "bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-5 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full",
        large ? "py-3 text-base" : "py-2 text-sm "
      )}
      onClick={onClick}
    >
      {loading ? <ProfileLoading /> : text}
    </button>
  );
}
