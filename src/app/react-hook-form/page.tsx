"use client";
import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    resetField,
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  useEffect(() => {
    const fa = (num: number) => {
      let res = 1;
      for (let i = 1; i <= num; i++) {
        res *= i;
      }
      console.log(res);
    };
    fa(88);
  }, []);
  const onVaild = (data: LoginForm) => {
    //setError("username", { message: "Taken username" }); form이 submit될때 서버에 같은 유저네임이 존재할면 seError가 에러 메세지 출력
    resetField("password");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onVaild, onInvalid)}>
      <input
        {...register("username", {
          //register function이 input의 모든기능을 제어한다
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
            //validate로 email의 여러가지 rule을 정할수있다.
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
      {errors.password?.message}
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
