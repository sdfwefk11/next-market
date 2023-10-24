"use client";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
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
      <input
        {...register("email", { required: "emial is required" })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: "password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
