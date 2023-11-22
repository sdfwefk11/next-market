import { SessionOptions } from "iron-session";

export interface SessionData {
  user: { id: number; payload?: string };
  isLoggedIn?: boolean;
}

export const sessionOption: SessionOptions = {
  password: process.env.CARROT_SESSION_PASSWORD!,
  cookieName: "carrotsession",
};
