"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import useMutation from "@/libs/client/useMutation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PageContext, UserProfile } from "../layout";

interface EditProfileForm {
  nickName: string;
  formErrors?: string;
}

interface EditResponse {
  ok: boolean;
  message?: string;
}

export default function Edit() {
  const user = React.useContext<UserProfile>(PageContext); //부모인 Layout에서 user정보를 props로 받아옴.
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<EditProfileForm>();
  const [editProfile, { data, loading }] =
    useMutation<EditResponse>("/api/users/me");
  const [nameToggle, setNameToggle] = useState(false);
  useEffect(() => {
    if (user?.name) setValue("nickName", user?.nickName); //name 존재하면 해당 input에 값을 설정
  }, [user, setValue]);
  const onVaild = ({ nickName }: EditProfileForm) => {
    if (loading) return;
    if (nickName === "") {
      return setError("formErrors", { message: "닉네임은 최소 2자입니다." });
    }
    editProfile({ nickName });
  };
  useEffect(() => {
    if (data) {
      setError("formErrors", { message: data.message });
    }
  }, [data, setError]);
  const onEditNameClick = () => {
    setNameToggle((prev) => !prev);
  };
  return (
    <form className="px-4 space-y-7" onSubmit={handleSubmit(onVaild)}>
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-orange-500" />
        <div>{user.name}</div>
        <label
          htmlFor="picture"
          className="cursor-pointer border-gray-300 py-2 px-3 border rounded-md bg-emerald-500 shadow-sm text-sm text-white transition-colors hover:bg-emerald-600 hover:text-orange-300"
        >
          Change Photo
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="flex mx-3 space-y-2 flex-col">
        <label
          className="text-sm font-medium text-gray-700 flex space-x-3 justify-center items-center border rounded-md shadow bg-slate-100"
          htmlFor="name"
        >
          <h2 className="text-lg font-bold">닉네임수정</h2>
          <svg
            className="w-6 h-6 text-gray-500 dark:text-white cursor-pointer hover:text-sky-300 transition-colors"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
            onClick={onEditNameClick}
          >
            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
          </svg>
        </label>
        {nameToggle ? (
          <div>
            <Input
              register={register("nickName", { minLength: 2 })}
              required={false}
              name="name"
              type="text"
            />
            {errors.formErrors ? (
              <span className="my-2 text-red-500 font-bold flex text-center justify-center">
                {errors.formErrors.message}
              </span>
            ) : null}
            <Button
              text="닉네임 변경"
              loading={loading}
              onClick={() => clearErrors()}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <h4>{user?.nickName}</h4>
          </div>
        )}
      </div>
    </form>
  );
}
