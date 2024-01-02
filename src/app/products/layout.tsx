"use client";
import Loading from "@/components/loading";
import useUser from "@/libs/client/useUser";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductsLayout({
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
      <div>{children}</div>
    </>
  );
}
