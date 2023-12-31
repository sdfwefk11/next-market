"use client";
import { useEffect, useState } from "react";
import { cls } from "../../libs/utils";
import RootLayout from "../layout";
import { useForm } from "react-hook-form";
import Input from "@/components/input";
import Button from "@/components/button";
import useMutation from "@/libs/client/useMutation";
import { useRouter } from "next/navigation";
import ProfileLoading from "@/components/profile-loading";

interface EnterForm {
  email?: string;
  phone?: string;
}

interface TokenForm {
  token: string;
}

interface TokenDataType {
  ok?: boolean;
  error?: string;
}

export default function Enter() {
  const [enter, { loading, data, error }] = useMutation("/api/users/enter");
  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<TokenDataType>("/api/users/confirm");
  const { register, handleSubmit, reset } = useForm<EnterForm>();
  const { register: tokenReg, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    setMethod("email");
    reset();
  };
  const onPhoneClick = () => {
    setMethod("phone");
    reset();
  };
  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
    //validForm = 객체 형태 {email: "abcd@efg.com"}
    //따라서 enter의 인자로 전달되어 api를 호출할때 validForm에 맞는 조건이나 결과를 return 받을수 있다.
  };
  const onTokenValid = (validForm: TokenForm) => {
    if (tokenLoading) return;
    confirmToken(validForm);
  };
  const router = useRouter();
  console.log(tokenData?.error);
  useEffect(() => {
    if (tokenData?.ok) {
      router.push("/");
    }
  }, [tokenData, router]);
  return (
    <div className="mt-10">
      <h3 className="text-3xl font-bold text-center text-orange-500">
        Enter to Carrot
      </h3>
      <div className="mt-6 p-7">
        {data ? (
          <form
            onSubmit={tokenHandleSubmit(onTokenValid)}
            className="flex flex-col mt-8 space-y-4"
          >
            <Input
              register={tokenReg("token")}
              name="token"
              label="Confirmation Token"
              type="number"
              required
            />
            <button className="bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-5 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full flex justify-center">
              {tokenLoading ? <ProfileLoading /> : "Confirm Token"}
            </button>
          </form>
        ) : (
          <>
            <div className="flex flex-col items-center">
              <h5 className="text-sm text-gray-500 font-medium">
                Enter using:
              </h5>
              <div className="grid grid-cols-2 mt-5 w-full border-b">
                <button
                  className={cls(
                    "font-medium pb-3 border-b-2 transition",
                    method === "email"
                      ? "text-emerald-500 border-b-emerald-600"
                      : "border-transparent text-gray-400"
                  )}
                  onClick={onEmailClick}
                >
                  Email
                </button>
                <button
                  className={cls(
                    "font-medium pb-3 border-b-2 transition",
                    method === "phone"
                      ? "text-emerald-500 border-b-emerald-600"
                      : "border-transparent text-gray-400"
                  )}
                  onClick={onPhoneClick}
                >
                  Phone
                </button>
              </div>
            </div>
            <form
              onSubmit={handleSubmit(onValid)}
              className="flex flex-col mt-8 space-y-4"
            >
              {method === "email" ? (
                <Input
                  register={register("email")}
                  name="email"
                  label="Email address"
                  type="email"
                  kind="text"
                  required
                />
              ) : null}
              {method === "phone" ? (
                <Input
                  register={register("phone")}
                  name="phone"
                  label="Phone number"
                  type="number"
                  kind="phone"
                  required
                />
              ) : null}
              {method === "email" ? (
                <button className="bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-5 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full flex justify-center">
                  {loading ? <ProfileLoading /> : "Get login link"}
                </button>
              ) : null}
              {method === "phone" ? (
                <button className="bg-emerald-500 hover:text-orange-300 hover:bg-emerald-600 mt-5 shadow-md text-white rounded-md border-transparent py-2 px-4 text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:outline-none transition w-full flex justify-center">
                  {loading ? <ProfileLoading /> : "Get login link"}
                </button>
              ) : null}
            </form>
          </>
        )}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute w-full border-t border-gray-300" />
            <div className="relative -top-3 text-center">
              <span className="bg-white text-gray-500 text-sm">
                Or enter with
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-4">
            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm text-gray-500 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </button>
            <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm text-gray-500 hover:bg-gray-50">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
