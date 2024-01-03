"use client";
import Button from "@/components/button";
import Input from "@/components/input";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { PageContext, UserProfile } from "../layout";

interface EditProfileForm {
  email?: string;
  phone?: string;
}

export default function Edit() {
  const user = React.useContext<UserProfile>(PageContext); //부모인 Layout에서 user정보를 props로 받아옴.
  const { register, handleSubmit, setValue } = useForm<EditProfileForm>();
  useEffect(() => {
    if (user?.email) setValue("email", user?.email); //email | phone 존재하면 해당 input에 값을 설정
    if (user?.phone) setValue("phone", user.phone);
  }, [user, setValue]);
  const onVaild = () => {};
  return (
    <>
      <form className="px-4 space-y-4">
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
          register={register("email")}
          required
          label="Eamil address"
          name="email"
          type="email"
        />
        <Input
          register={register("phone")}
          required
          label="Phone number"
          name="phone"
          type="text"
          kind="phone"
        />
        <Button text="Update profile" />
      </form>
    </>
  );
}
