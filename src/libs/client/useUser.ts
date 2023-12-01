"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSwr from "swr";

export default function useUser() {
  const { data, error } = useSwr("/api/users/me");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
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