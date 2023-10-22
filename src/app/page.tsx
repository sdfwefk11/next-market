"use client";
import { useState } from "react";

export default function Forms() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setUsername(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };
  return (
    <form>
      <input
        onChange={onUsernameChange}
        value={username}
        type="text"
        placeholder="Username"
      />
      <input
        onChange={onEmailChange}
        value={email}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={onPasswordChange}
        value={password}
        type="password"
        placeholder="Password"
      />
    </form>
  );
}
