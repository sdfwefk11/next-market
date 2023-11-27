"use client";
import { SWRConfig } from "swr";

interface Swr {
  children: React.ReactNode;
}

export const SWRProvider = ({ children }: Swr) => {
  return (
    <SWRConfig
      value={{
        //refreshInterval: 2000,
        fetcher: (url: string) =>
          fetch(url).then((response) => response.json()),
      }}
    >
      {children}
    </SWRConfig>
  );
};
