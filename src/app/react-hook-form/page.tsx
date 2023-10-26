"use client";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const fa = (num: number) => {
    let res = 1;
    for (let i = 1; i <= num; i++) {
      res *= i;
    }
    console.log(res);
  };
  fa(88);
  const onVaild = (data: LoginForm) => {
    console.log(data);
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onVaild, onInvalid)}>
      <input
        {...register("username", {
          required: "username is required",
          minLength: {
            message: "the username should be longer than 5 chars",
            value: 5,
          },
          maxLength: 20,
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "emial is required",
          validate: {
            allowEmail: (value) =>
              value.includes("@gmail.com") ||
              value.includes("@naver.com") ||
              value.includes("@github.io") ||
              "Can used only Gmail, Naver, Github",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
