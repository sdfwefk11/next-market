"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import useMutation from "@/libs/client/useMutation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PageContext, UserProfile } from "../layout";

interface EditProfileForm {
  nickName: string;
  formErrors?: string;
}

export default function Edit() {
  const user = React.useContext<UserProfile>(PageContext); //부모인 Layout에서 user정보를 props로 받아옴.
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<EditProfileForm>();
  const [editProfile, { data, loading }] = useMutation("/api/users/me");
  useEffect(() => {
    if (user?.name) setValue("nickName", user?.nickName); //name 존재하면 해당 input에 값을 설정
  }, [user, setValue]);
  const onVaild = ({ nickName }: EditProfileForm) => {
    if (nickName === "") {
      return setError("formErrors", {
        message: "닉네임을 입력해주세요.",
      });
    }
    editProfile({ nickName });
  };
  console.log(data);
  return (
    <>
      <form className="px-4 space-y-4" onSubmit={handleSubmit(onVaild)}>
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-orange-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer border-gray-300 py-2 px-3 border rounded-md bg-emerald-500 shadow-sm text-sm text-white transition-colors hover:bg-emerald-600 hover:text-orange-300"
          >
            Change Photo
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          register={register("nickName")}
          required={false}
          label="닉네임"
          name="name"
          type="text"
        />
        {errors.formErrors ? (
          <span className="my-2 text-red-500 font-bold flex text-center justify-center">
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button text="Update profile" />
      </form>
    </>
  );
}
