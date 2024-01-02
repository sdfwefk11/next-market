"use client";
import Loading from "@/components/loading";
import useUser from "@/libs/client/useUser";
import React from "react";

const PageContext = React.createContext();

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useUser();
  return (
    <>
      {!user ? (
        <div className="fixed w-full h-full max-w-xl flex justify-center backdrop-blur-sm items-center top-0">
          <Loading />
        </div>
      ) : null}
      <PageContext.Provider value={user}>{children}</PageContext.Provider>
    </>
  );
}
