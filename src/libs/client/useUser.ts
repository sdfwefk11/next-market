"use client";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface ProfileResponse {
  ok: boolean;
  profile: User;
}

export default function useUser() {
  const { data, error } = useSWR<ProfileResponse>("/api/users/me");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      alert("회원보기 전용 페이지입니다. 회원가입을 진행해주세요.");
      router.replace("/enter");
    }
  }, [data, router]);
  /* const [user, setUser] = useState();
  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.replace("/enter");
          // redirect
        }
        setUser(data.profile);
      });
  }, [router]);
  return user; */
  return { user: data?.profile, isLoading: !data && !error };
}
