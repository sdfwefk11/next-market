"use client";
import Loading from "@/components/loading";
import useUser from "@/libs/client/useUser";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

// Nextjs에서는 현재(13버전 기준) Layout에서 page로 props전달 방법이 따로 없기 때문에 리액트api 컴포넌트를 사용하여 그 안에서 children를 렌더링하고 children 페이지에서는 props를 따로 변수에 담아서 사용할수있다.
export const PageContext = React.createContext(null as any);
export interface UserProfile extends User {}

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!user && !isLoading) {
      alert("회원보기 전용 페이지입니다. 회원가입을 진행해주세요.");
      router.replace("/enter");
    }
  }, [user, router, isLoading]);
  return (
    <>
      {!user ? (
        <div className="fixed w-full h-full max-w-xl flex justify-center backdrop-blur-sm items-center top-0 z-50">
          <Loading />
        </div>
      ) : null}
      <PageContext.Provider value={user}>{children}</PageContext.Provider>
    </>
  );
}
